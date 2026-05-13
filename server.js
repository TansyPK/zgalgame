const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { URL } = require("node:url");

const root = __dirname;
const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "127.0.0.1";
const openapiBase = "https://openapi.zhihu.com";
const appId = process.env.ZHIHU_APP_ID || "";
const appKey = process.env.ZHIHU_APP_KEY || "";
const redirectUri = process.env.ZHIHU_REDIRECT_URI || `http://localhost:${port}/oauth/callback`;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type, authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    ...headers
  });
  res.end(body);
}

function sendJson(res, status, body) {
  send(res, status, JSON.stringify(body, null, 2), {
    "content-type": "application/json; charset=utf-8"
  });
}

function serveStatic(req, res, pathname) {
  const entryPath = pathname === "/" || pathname === "/oauth/callback" ? "/index.html" : pathname;
  const safePath = path.normalize(entryPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);
  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) {
      send(res, 404, "Not found");
      return;
    }
    send(res, 200, content, {
      "content-type": mime[path.extname(filePath)] || "application/octet-stream"
    });
  });
}

function uuidLike() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getBearerToken(req) {
  const auth = req.headers.authorization || "";
  if (auth.startsWith("Bearer ")) return auth.slice("Bearer ".length);
  return "";
}

function buildZhihuSign({ method, pathname, search, timestamp, logId, extraInfo }) {
  if (process.env.ZHIHU_SIGN) return process.env.ZHIHU_SIGN;
  if (!process.env.ZHIHU_SIGN_SECRET && !appKey) return "";

  // The pasted docs list required signature headers but omit the canonical
  // string. Keep the algorithm isolated here so it can be adjusted once the
  // official quickstart's signature rule is available.
  const secret = process.env.ZHIHU_SIGN_SECRET || appKey;
  const canonical = [method.toUpperCase(), pathname, search || "", timestamp, logId, extraInfo || ""].join("\n");
  return crypto.createHmac("sha256", secret).update(canonical).digest("hex");
}

function zhihuStoryHeaders(req, targetUrl) {
  const token = getBearerToken(req) || process.env.ZHIHU_ACCESS_TOKEN;
  const timestamp = String(Math.floor(Date.now() / 1000));
  const logId = uuidLike();
  const extraInfo = "";
  const headers = {
    accept: "application/json",
    "user-agent":
      req.headers["user-agent"] ||
      "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    "x-app-key": appKey,
    "x-timestamp": timestamp,
    "x-log-id": logId,
    "x-extra-info": extraInfo,
    "x-sign": buildZhihuSign({
      method: "GET",
      pathname: targetUrl.pathname,
      search: targetUrl.search,
      timestamp,
      logId,
      extraInfo
    })
  };
  if (token) headers.authorization = `Bearer ${token}`;
  return headers;
}

function openapiHeaders(req) {
  const token = getBearerToken(req) || process.env.ZHIHU_ACCESS_TOKEN;
  const headers = {
    accept: "application/json, text/plain, */*",
    "user-agent":
      req.headers["user-agent"] ||
      "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    referer: "https://openapi.zhihu.com/",
    origin: "https://openapi.zhihu.com"
  };
  if (token) headers.authorization = `Bearer ${token}`;
  return headers;
}

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

function requestJson(target, options, body) {
  return new Promise((resolve, reject) => {
    const request = https.request(target, options, (upstream) => {
      const chunks = [];
      upstream.on("data", (chunk) => chunks.push(chunk));
      upstream.on("end", () => {
        const raw = Buffer.concat(chunks).toString("utf8");
        let data = raw;
        try {
          data = JSON.parse(raw);
        } catch {
          // Keep raw text.
        }
        resolve({
          statusCode: upstream.statusCode || 200,
          headers: upstream.headers,
          data,
          raw
        });
      });
    });
    request.on("error", reject);
    if (body?.length) request.write(body);
    request.end();
  });
}

async function proxyOAuthToken(req, res) {
  if (!appId || !appKey) {
    sendJson(res, 428, {
      ok: false,
      missingConfig: true,
      message: "缺少 ZHIHU_APP_ID 或 ZHIHU_APP_KEY，无法换取 access_token。"
    });
    return;
  }
  const incoming = JSON.parse((await readBody(req)).toString("utf8") || "{}");
  const body = Buffer.from(
    JSON.stringify({
      grant_type: "authorization_code",
      code: incoming.code,
      redirect_uri: redirectUri,
      app_id: appId,
      app_key: appKey
    })
  );
  const target = new URL(`${openapiBase}/oauth/access_token`);
  const result = await requestJson(
    target,
    {
      method: "POST",
      headers: {
        ...openapiHeaders(req),
        "content-type": "application/json",
        "content-length": body.length
      }
    },
    body
  );
  sendJson(res, result.statusCode, { ok: result.statusCode < 400, data: result.data });
}

async function proxyStory(req, res, kind) {
  if (!appKey) {
    sendJson(res, 428, {
      ok: false,
      missingConfig: true,
      message: "缺少 ZHIHU_APP_KEY，无法调用黑客松故事接口。"
    });
    return;
  }
  const incoming = new URL(req.url, `http://${req.headers.host}`);
  const endpoint =
    kind === "detail" ? "/openapi/hackathon_story/detail" : "/openapi/hackathon_story/list";
  const target = new URL(`${openapiBase}${endpoint}`);
  if (kind === "detail") {
    const workId = incoming.searchParams.get("work_id") || incoming.searchParams.get("id");
    if (workId) target.searchParams.set("work_id", workId);
  }
  try {
    const result = await requestJson(target, {
      method: "GET",
      headers: zhihuStoryHeaders(req, target)
    });
    sendJson(res, result.statusCode, { ok: result.statusCode < 400, data: result.data });
  } catch (error) {
    sendJson(res, 502, { ok: false, message: `请求知乎开放接口失败：${error.message}` });
  }
}

async function proxyZhihu(req, res, endpoint) {
  const incoming = new URL(req.url, `http://${req.headers.host}`);
  const target = new URL(`${openapiBase}${endpoint}`);
  incoming.searchParams.forEach((value, key) => {
    if (key !== "endpoint") target.searchParams.append(key, value);
  });

  const body = req.method === "POST" ? await readBody(req) : null;
  const options = {
    method: req.method,
    headers: openapiHeaders(req)
  };
  if (body?.length) {
    options.headers["content-type"] = req.headers["content-type"] || "application/json";
    options.headers["content-length"] = body.length;
  }

  const request = https.request(target, options, (upstream) => {
    const chunks = [];
    upstream.on("data", (chunk) => chunks.push(chunk));
    upstream.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      const contentType = upstream.headers["content-type"] || "";
      const redirectedToSignin =
        upstream.statusCode === 302 ||
        upstream.headers.location?.includes("/signin") ||
        raw.includes("SignInHomepage");

      if (redirectedToSignin || contentType.includes("text/html")) {
        sendJson(res, 401, {
          ok: false,
          loginRequired: true,
          status: upstream.statusCode,
          endpoint,
          message:
            "知乎接口需要登录态或 OAuth access token。请在页面的数据源设置里填入 Bearer token 或 Cookie，或用环境变量 ZHIHU_ACCESS_TOKEN / ZHIHU_COOKIE 启动服务。"
        });
        return;
      }

      try {
        const json = JSON.parse(raw);
        sendJson(res, upstream.statusCode || 200, { ok: true, endpoint, data: json });
      } catch {
        send(res, upstream.statusCode || 200, raw, {
          "content-type": contentType || "text/plain; charset=utf-8"
        });
      }
    });
  });

  request.on("error", (error) => {
    sendJson(res, 502, {
      ok: false,
      message: `请求知乎接口失败：${error.message}`
    });
  });
  if (body?.length) request.write(body);
  request.end();
}

const apiRoutes = {
  "/api/zhihu/oauth_quickstart": "/oauth/oauth_quickstart"
};

async function writeWebgalScript(req, res) {
  try {
    const body = await readBody(req);
    const payload = JSON.parse(body.toString("utf8") || "{}");
    if (!payload.script || typeof payload.script !== "string") {
      sendJson(res, 400, { ok: false, message: "Missing script" });
      return;
    }
    const sceneDir = path.join(root, "webgal-runtime", "game", "scene");
    fs.mkdirSync(sceneDir, { recursive: true });
    fs.writeFileSync(path.join(sceneDir, "start.txt"), payload.script);
    sendJson(res, 200, { ok: true, path: "webgal-runtime/game/scene/start.txt" });
  } catch (error) {
    sendJson(res, 500, { ok: false, message: error.message });
  }
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    send(res, 204, "");
    return;
  }
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/oauth/config") {
    const authorize = new URL(`${openapiBase}/authorize`);
    authorize.searchParams.set("redirect_uri", redirectUri);
    authorize.searchParams.set("app_id", appId || "ZHIHU_APP_ID");
    authorize.searchParams.set("response_type", "code");
    sendJson(res, 200, {
      ok: Boolean(appId),
      appIdConfigured: Boolean(appId),
      appKeyConfigured: Boolean(appKey),
      redirectUri,
      authorizeUrl: authorize.toString(),
      message: appId ? "OAuth 配置已就绪。" : "缺少 ZHIHU_APP_ID，授权地址暂不可用。"
    });
    return;
  }
  if (url.pathname === "/api/oauth/access_token" && req.method === "POST") {
    proxyOAuthToken(req, res);
    return;
  }
  if (url.pathname === "/api/zhihu/story_list") {
    proxyStory(req, res, "list");
    return;
  }
  if (url.pathname === "/api/zhihu/story_detail") {
    proxyStory(req, res, "detail");
    return;
  }
  if (url.pathname === "/api/webgal/start" && req.method === "POST") {
    writeWebgalScript(req, res);
    return;
  }
  const endpoint = apiRoutes[url.pathname];
  if (endpoint) {
    proxyZhihu(req, res, endpoint);
    return;
  }
  serveStatic(req, res, url.pathname);
});

server.listen(port, host, () => {
  console.log(`Demo server running at http://${host}:${port}`);
});
