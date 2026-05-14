const fallbackAnswers = [
  {
    id: "white-moonlight",
    title: "白月光吧。",
    author: "匿名用户",
    avatar: "匿",
    bio: "一段青梅竹马的旧事",
    votes: "42,819",
    comments: "3,106",
    reads: "128.4 万",
    cover: "bg-courtyard",
    tags: ["情感故事", "青梅竹马", "白月光"],
    excerpt:
      "她跟我从小一起长大，我们住得很近，近到从我家小院旁边开的后门出去，到她们家前门，就是两步。",
    paragraphs: [
      "她跟我从小一起长大，我们住得很近，近到从我家小院旁边开的后门出去，到她们家前门，就是两步。",
      "我妈说我们两人在襁褓的时候就天天见面了。她爸妈，特别是她妈妈，对我好得不得了。买好吃的常常是双份的，一份给她，一份给我。",
      "会走路说话以后，她总是笑嘻嘻地跟在我身后喊哥哥。虽然我就比她大了一个月零七天。",
      "寒暑假作业肯定是每天一起做。相比一群小伙伴一起玩，我们互相都更乐意只有双方两个人在一块，很神奇。",
      "她爷爷很严肃，对其他小朋友很凶。其他小朋友在她家玩，她爷爷一回来都得从后门溜走，只有我没关系，还能大摇大摆留在她家里。",
      "她妈妈从小就开玩笑喊我女婿，街道里的邻居们也总打趣我们：你老婆呢，你老公呢。",
      "她十岁生日时，旁边的位置一边是堂姐，另一边是我。有个同学想坐她旁边，她自己说，不好意思，这个位置肯定是我的。",
      "后来房子拆迁，我们分开了，但长期煲电话粥，周末经常两个人跑出去见面。出去见面的时候，从来都是手牵手。",
      "到初二下半学期，我的身高终于超过她。后来我净身高一米七七，她一米六七。她说刚好，以后穿高跟鞋，你也扛得住。",
      "高中时一开始流行写信，每礼拜收到对方的信，都是一礼拜的期盼。后来我们有了手机，就偷偷在学校发短信。",
      "高二的时候，还是我捅破了窗户纸。我说周末我们班同学约了去唱歌，班里的意思是顺带家属。她说，难道我不是你家属？从小被叫成你老婆，你长大了还想不认账啊？",
      "我们也是父母认可的早恋。班主任给我爸打电话，我爸说，我知道啊，这个小姑娘我们看着长大的，他们两的事情双方家长都知道。",
      "高考结束，她妈妈出资，我们两个人去了沈阳和北京毕业旅行。但分数出来，两个人差得有点多，没考到一起。",
      "大一时我们异地，平时省钱，就是为了周末坐车去对方的城市。那时候包月短信，我们每个月基本都是三到四千条。",
      "从高三到大二下学期，过年我们都会互相去对方亲戚家。双方父母也在一起吃饭，仿佛就等我们大学毕业结婚一样。",
      "大二下半学期，有一段时间她经常没空理我。后来我才知道，距离产生了，美没了。她哭着说对不起，异地太苦了。我只能拍拍她的肩膀，祝你幸福。",
      "大学毕业之后第二年，她很久没亮的 QQ 头像忽然主动联系我。我们见面、聊天、唱歌，她还拍了合照传到 QQ 空间，自己评论了三个字：我的他。",
      "傍晚她妈妈打电话问回不回家吃饭，她打趣道，跟你女婿在一块呢。她妈妈说，是我从小养大的女婿吗？晚饭回家吃啊。",
      "那天我们手拉着手跑着去追公交车，脸上的笑容仿佛没有分开过，仿佛时光倒流，我们还是最亲密的两个人。",
      "那顿饭四个人默契地跳过了分开的那一段。她妈妈还是像小时候一样，把好吃的往我碗里放，说从小我们家不就跟你家一样嘛。",
      "吃完饭我说我来洗碗。她妈妈说这种事让女人来干，也让她多练练。她在厨房洗碗，我帮她系好围裙，看着她的样子想，要是这一辈子能这么下去，多好啊。",
      "后来我们相处了大半年，却发现时间已经不经意改变了很多。见面时仍然腻歪，仍然说不完话，但很多事情上已经没有默契。",
      "她变得追求高消费，频繁娱乐，一礼拜四五天晚上都有酒吧、麻将室和朋友局。而我追求的一直是两个人的小幸福。",
      "有一次我陪她去，发现她非常享受那样的热闹，玩得很高，酒也喝得很高，还拿我的烟抽。那一刻我心里知道，我们回不去了。",
      "我们很默契地在某个点开始，没有再联系。没有吵架，没有红过脸，就算最后不再联系，也像体面地互相说了再见。",
      "有些时候我总是在想，假如时光倒流，我们考到了同一所大学，没有异地恋，现在会怎么样。",
      "同时也庆幸，在记忆里面，我和她除了异地分手那一段，几乎都是甜蜜的。只是我有时候总想，如果我们能都不变，那该多好，是不是？",
      "已经时过境迁。这只是内心深藏的遗憾。后来我二十八岁谈恋爱，三十岁结婚，虽然最近一年老婆在闹离婚，但原因不是我作为丈夫做得不到位，也不是因为这个白月光。问心无愧。"
    ]
  }
];

let answers = [...fallbackAnswers];

const webgalChoiceMap = {
  "牵着她去写作业": {
    questionId: "childhood",
    prompt: "童年的亲密感出现时",
    order: 1
  },
  "故意逗她慢慢追": {
    questionId: "childhood",
    prompt: "童年的亲密感出现时",
    order: 1
  },
  "当众装作没听懂": {
    questionId: "birthday",
    prompt: "十岁生日那个被保留的位置",
    order: 2
  },
  "把椅子拉近一点": {
    questionId: "birthday",
    prompt: "十岁生日那个被保留的位置",
    order: 2
  },
  "认真牵住她的手": {
    questionId: "confession",
    prompt: "高二捅破窗户纸的时候",
    order: 3
  },
  "用玩笑把脸红藏过去": {
    questionId: "confession",
    prompt: "高二捅破窗户纸的时候",
    order: 3
  },
  "每周坐车去见她": {
    questionId: "distance",
    prompt: "异地恋刚开始时",
    order: 4
  },
  "劝她先适应各自生活": {
    questionId: "distance",
    prompt: "异地恋刚开始时",
    order: 4
  },
  "追问能不能再试一次": {
    questionId: "breakup",
    prompt: "她说异地太苦以后",
    order: 5
  },
  "把体面留给彼此": {
    questionId: "breakup",
    prompt: "她说异地太苦以后",
    order: 5
  },
  "相信这就是重新开始": {
    questionId: "reunion",
    prompt: "多年后重逢那顿晚饭前",
    order: 6
  },
  "提醒自己别太快沉进去": {
    questionId: "reunion",
    prompt: "多年后重逢那顿晚饭前",
    order: 6
  },
  "直接说我不喜欢这样的生活": {
    questionId: "values",
    prompt: "发现生活方式已经不同后",
    order: 7
  },
  "说只要你开心就好": {
    questionId: "values",
    prompt: "发现生活方式已经不同后",
    order: 7
  },
  "回到童年那扇后门": {
    questionId: "ending",
    prompt: "故事最后，你想停在哪里",
    order: 8,
    loops: true
  },
  "停在这里": {
    questionId: "ending",
    prompt: "故事最后，你想停在哪里",
    order: 8,
    ends: true
  }
};

let state = {
  route: location.hash || "#/",
  vn: null,
  webgal: null,
  generation: null,
  choiceStats: null,
  choiceModal: null,
  currentStoryId: null,
  currentSessionId: sessionStorage.getItem("webgalSessionId") || "",
  recordedChoices: [],
  showScript: true,
  dataSource: {
    status: "loading",
    message: "正在初始化知乎 OAuth...",
    raw: null
  },
  auth: {
    token: sessionStorage.getItem("zhihuAccessToken") || "",
    code: "",
    authorizeUrl: "",
    appReady: false,
    appKeyReady: false,
    user: null
  }
};

if (!state.currentSessionId) {
  state.currentSessionId =
    globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  sessionStorage.setItem("webgalSessionId", state.currentSessionId);
}

window.addEventListener("hashchange", () => {
  state.route = location.hash || "#/";
  state.vn = null;
  state.webgal = null;
  state.generation = null;
  state.choiceStats = null;
  state.choiceModal = null;
  render();
});

window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) return;
  if (event.data?.source !== "zgalgame-webgal") return;
  if (event.data.type === "choice") {
    recordWebgalChoice(String(event.data.label || "").trim());
  }
});

function h(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getAnswer(id) {
  return answers.find((item) => item.id === id) || answers[0];
}

function apiHeaders() {
  const headers = {};
  if (state.auth.token) headers.authorization = `Bearer ${state.auth.token}`;
  return headers;
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...apiHeaders(),
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  try {
    return { response, body: JSON.parse(text) };
  } catch {
    return { response, body: { ok: false, message: text } };
  }
}

function zhihuLoginUrl() {
  if (!state.auth.authorizeUrl) return "";
  sessionStorage.setItem("pendingAuthRoute", state.route || "#/");
  return state.auth.authorizeUrl;
}

function startZhihuAuth() {
  const url = zhihuLoginUrl();
  if (!url) return;
  if (state.choiceModal?.continueStats) sessionStorage.setItem("showStatsAfterAuth", "true");
  location.href = url;
}

function choiceOrderForQuestion(question) {
  const labels = question?.options?.map((option) => option.label) || [];
  const orders = labels
    .map((label) => webgalChoiceMap[label]?.order)
    .filter((order) => Number.isFinite(order));
  return orders.length ? Math.min(...orders) : 99;
}

async function loadOAuthUser() {
  if (!state.auth.token) {
    state.auth.user = null;
    return null;
  }
  try {
    const { response, body } = await fetchJson("/api/oauth/user");
    if (!response.ok || !body.ok) {
      state.auth.user = null;
      return null;
    }
    state.auth.user = body.user;
    return body.user;
  } catch {
    state.auth.user = null;
    return null;
  }
}

function accessTokenFromPayload(payload) {
  const data = payload?.data?.data || payload?.data || payload;
  return (
    data?.access_token ||
    data?.accessToken ||
    data?.token ||
    data?.data?.access_token ||
    ""
  );
}

function plainText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pick(obj, keys) {
  for (const key of keys) {
    if (obj && obj[key] !== undefined && obj[key] !== null && obj[key] !== "") return obj[key];
  }
  return "";
}

function findStoryArray(payload) {
  const queue = [payload];
  while (queue.length) {
    const current = queue.shift();
    if (Array.isArray(current)) {
      const objectItems = current.filter((item) => item && typeof item === "object");
      if (
        objectItems.length &&
        objectItems.some((item) => pick(item, ["title", "name", "story_title", "content", "summary", "description"]))
      ) {
        return objectItems;
      }
    } else if (current && typeof current === "object") {
      queue.push(...Object.values(current));
    }
  }
  return [];
}

function normalizeStory(item, index) {
  const author = pick(item, ["author", "creator", "user", "member"]) || {};
  const title =
    plainText(pick(item, ["title", "story_title", "name", "question_title", "subject"])) ||
    `知乎故事 ${index + 1}`;
  const content = plainText(pick(item, ["content", "summary", "description", "excerpt", "intro", "text"]));
  const cover =
    pick(item, ["artwork", "tab_artwork", "cover", "cover_url", "image", "image_url", "thumbnail", "thumbnail_url"]) ||
    pick(author, ["avatar_url", "avatar"]);
  const id =
    String(pick(item, ["work_id", "id", "story_id", "item_id", "content_id", "answer_id", "token"]) || `real-${index}`);
  const paragraphs = splitParagraphs(content || title);
  return {
    id,
    source: "zhihu",
    immersiveEnabled: false,
    raw: item,
    title,
    author:
      plainText(pick(author, ["name", "headline", "url_token"])) ||
      plainText(pick(item, ["author_name", "creator_name", "user_name"])) ||
      "知乎创作者",
    avatar: (plainText(pick(author, ["name"])) || "知").slice(0, 1),
    bio: plainText(pick(author, ["headline", "bio"])) || "来自知乎开放接口的真实内容",
    votes: String(pick(item, ["voteup_count", "vote_count", "like_count", "likes"]) || "-"),
    comments: String(pick(item, ["comment_count", "comments"]) || "-"),
    reads: String(pick(item, ["read_count", "view_count", "pv"]) || "-"),
    cover,
    coverClass: ["one", "two", "three"][index % 3],
    tags: Array.isArray(item.labels) && item.labels.length ? item.labels : ["知乎故事", "情感叙事"],
    excerpt: paragraphs[0] || content || title,
    paragraphs
  };
}

function splitParagraphs(text) {
  const chunks = String(text || "")
    .split(/\n+|(?<=[。！？!?])\s+/)
    .map((item) => plainText(item))
    .filter(Boolean);
  if (chunks.length) return chunks.slice(0, 28);
  return ["这条内容来自知乎接口，等待详情接口返回完整正文后生成沉浸式脚本。"];
}

function coverClass(answer) {
  return answer.coverClass || answer.cover || "one";
}

function coverStyle(answer) {
  return /^https?:\/\//.test(answer.cover || "") ? ` style="background-image: url('${h(answer.cover)}')"` : "";
}

function normalizeDetail(answer, payload) {
  const source = payload?.data || payload;
  const candidates = [source, source?.story, source?.data, source?.detail, source?.item].filter(Boolean);
  const detail = candidates.find((item) => item && typeof item === "object") || {};
  const content =
    plainText(pick(detail, ["content", "body", "text", "summary", "description", "introduction", "excerpt"])) ||
    answer.paragraphs.join("\n");
  const paragraphs = splitParagraphs(content);
  return {
    ...answer,
    rawDetail: payload,
    title: plainText(pick(detail, ["title", "story_title", "name", "chapter_name", "question_title"])) || answer.title,
    author: plainText(pick(detail, ["author_name"])) || answer.author,
    avatar: (plainText(pick(detail, ["author_name"])) || answer.avatar).slice(0, 1),
    bio: plainText(pick(detail, ["introduction"])) || answer.bio,
    tags: Array.isArray(detail.labels) && detail.labels.length ? detail.labels : answer.tags,
    excerpt: paragraphs[0] || answer.excerpt,
    paragraphs
  };
}

function extractApiData(body) {
  const data = body?.data;
  if (data && typeof data === "object" && "status" in data && "data" in data) return data;
  return body;
}

async function loadZhihuStories() {
  if (!state.auth.token) {
    answers = [...fallbackAnswers];
    state.dataSource = {
      status: "optional",
      message: "当前可直接体验内置故事。知乎 OAuth 是可选项，授权后才会展示后续真实故事列表。",
      raw: null
    };
    render();
    return;
  }
  state.dataSource = {
    status: "loading",
    message: "正在加载知乎开放内容库故事列表...",
    raw: null
  };
  render();
  try {
    const { response, body } = await fetchJson("/api/zhihu/story_list");
    const apiPayload = extractApiData(body);
    if (!response.ok || body.loginRequired || apiPayload?.code === 401 || apiPayload?.code === 403) {
      state.dataSource = {
        status: "auth",
        message: body.message || apiPayload?.data || "授权不可用，已保留内置故事演示。",
        raw: body
      };
      answers = [...fallbackAnswers];
      render();
      return;
    }
    if (apiPayload?.status !== undefined && apiPayload.status !== 0) {
      state.dataSource = {
        status: "error",
        message: `${apiPayload.msg || "故事列表接口返回失败。"} 已保留内置故事演示。`,
        raw: body
      };
      answers = [...fallbackAnswers];
      render();
      return;
    }
    const items = findStoryArray(apiPayload?.data || apiPayload);
    if (!items.length) {
      state.dataSource = {
        status: "empty",
        message: "接口已返回，但没有识别到故事列表结构。当前只展示内置故事。",
        raw: body
      };
      answers = [...fallbackAnswers];
      render();
      return;
    }
    answers = [...fallbackAnswers, ...items.slice(0, 12).map(normalizeStory)];
    state.dataSource = {
      status: "live",
      message: `已追加知乎开放内容库故事 ${answers.length - fallbackAnswers.length} 条。`,
      raw: body
    };
    render();
  } catch (error) {
    state.dataSource = {
      status: "error",
      message: `连接知乎接口失败：${error.message}。当前只展示内置故事。`,
      raw: null
    };
    answers = [...fallbackAnswers];
    render();
  }
}

async function hydrateDetail(answer) {
  if (answer.source !== "zhihu" || answer.rawDetail || answer.detailLoading) return;
  if (!state.auth.token) return;
  answer.detailLoading = true;
  render();
  try {
    const query = new URLSearchParams({ work_id: answer.id }).toString();
    const { response, body } = await fetchJson(`/api/zhihu/story_detail?${query}`);
    const apiPayload = extractApiData(body);
    if (response.ok && !body.loginRequired && apiPayload?.status === 0) {
      const next = normalizeDetail(answer, apiPayload);
      answers = answers.map((item) => (item.id === answer.id ? next : item));
      state.dataSource = {
        ...state.dataSource,
        message: "已读取故事详情，并用真实正文生成脚本。"
      };
    } else {
      answer.detailError = apiPayload?.msg || body.message || "详情接口需要授权或签名配置。";
    }
  } catch (error) {
    answer.detailError = error.message;
  } finally {
    answer.detailLoading = false;
    render();
  }
}

async function initOAuth() {
  const params = new URLSearchParams(location.search);
  const code = params.get("code") || params.get("authorization_code");
  try {
    const { body } = await fetchJson("/api/oauth/config");
    state.auth.authorizeUrl = body.authorizeUrl || "";
    state.auth.appReady = Boolean(body.appIdConfigured);
    state.auth.appKeyReady = Boolean(body.appKeyConfigured);
    if (code) {
      state.auth.code = code;
      state.dataSource = {
        status: "loading",
        message: "已收到知乎 auth_code，正在换取 access_token...",
        raw: null
      };
      render();
      await exchangeAuthCode(code);
      const pendingRoute = sessionStorage.getItem("pendingAuthRoute") || "#/";
      sessionStorage.removeItem("pendingAuthRoute");
      state.route = pendingRoute;
      history.replaceState({}, "", location.pathname + pendingRoute);
      render();
      if (sessionStorage.getItem("showStatsAfterAuth") === "true") {
        sessionStorage.removeItem("showStatsAfterAuth");
        await showChoiceStats();
      }
      return;
    }
    if (state.auth.token) {
      await loadOAuthUser();
      await loadZhihuStories();
      return;
    }
    state.dataSource = {
      status: "optional",
      message: body.message || "当前可直接体验内置故事。授权后会追加展示真实故事列表。",
      raw: body
    };
    render();
  } catch (error) {
    state.dataSource = {
      status: "error",
      message: `初始化 OAuth 失败：${error.message}`,
      raw: null
    };
    render();
  }
}

async function exchangeAuthCode(code) {
  try {
    const { response, body } = await fetchJson("/api/oauth/access_token", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code })
    });
    const token = accessTokenFromPayload(body);
    if (!response.ok || !token) {
      state.dataSource = {
        status: "auth",
        message: body.message || "auth_code 换取 access_token 失败，请检查 OAuth 参数。",
        raw: body
      };
      render();
      return;
    }
    state.auth.token = token;
    sessionStorage.setItem("zhihuAccessToken", token);
    await loadOAuthUser();
    await loadZhihuStories();
  } catch (error) {
    state.dataSource = {
      status: "error",
      message: `换取 access_token 失败：${error.message}`,
      raw: null
    };
    render();
  }
}

function appChrome(content) {
  const user = state.auth.user;
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">知乎</div>
        <nav class="nav"><span>首页</span><span>会员</span><span>发现</span><span>等你来答</span></nav>
        <div class="search">搜索你感兴趣的问题</div>
        ${
          user
            ? `<button class="user-pill" type="button" data-show-stats><span class="avatar">${h(user.fullname).slice(0, 1)}</span><b>${h(user.fullname)}</b></button>`
            : `<button class="primary-btn" type="button" data-oauth-login ${state.auth.authorizeUrl ? "" : "disabled"}>知乎授权</button>`
        }
      </div>
    </header>
    ${content}
  `;
}

function renderDataSourcePanel() {
  if (state.dataSource.status !== "error") return "";
  return `
    <section class="data-source ${state.dataSource.status}">
      <div>
        <b>内容同步</b>
        <span>${h(state.dataSource.message)}</span>
      </div>
      <button class="ghost-btn" type="button" data-oauth-login ${state.auth.authorizeUrl ? "" : "disabled"}>重新授权</button>
    </section>
  `;
}

function renderStoryLibraryGate() {
  const loadedCount = answers.filter((answer) => answer.source === "zhihu").length;
  if (state.auth.token) {
    return `
      <section class="story-library-gate loaded">
        <div>
          <b>已连接知乎开放内容库</b>
          <span>${loadedCount ? `已加载 ${loadedCount} 个故事概要。` : "授权已完成，暂未获取到更多故事。"}</span>
        </div>
        <button class="ghost-btn" type="button" data-show-stats>查看选择统计</button>
      </section>
    `;
  }
  return `
    <section class="story-library-gate">
      <div>
        <b>授权后加载更多知乎故事</b>
        <span>不授权也可以完整体验「白月光吧。」；授权后会追加开放内容库的故事概要，并可查看参与者选择统计。</span>
      </div>
      <button class="primary-btn" type="button" data-oauth-login ${state.auth.authorizeUrl ? "" : "disabled"}>知乎授权</button>
    </section>
  `;
}

function renderFeed() {
  const cards = answers
    .map(
      (answer) => {
        const canImmerse = answer.id === "white-moonlight";
        return `
        <article class="answer-card">
          <button type="button" data-open="${answer.id}">
            <div class="answer-card-content">
              <div>
                <div class="card-kicker">
                  <span>${canImmerse ? "可沉浸体验" : "知乎开放内容库"}</span>
                  <span>${canImmerse ? `预计 ${answer.paragraphs.length + 3} 幕` : "授权后加载"}</span>
                </div>
                <h2 class="answer-title">${h(answer.title)}</h2>
                <div class="author-line"><span class="avatar">${h(answer.avatar)}</span><b>${h(answer.author)}</b><span>${h(answer.bio)}</span></div>
                <p class="excerpt">${h(answer.excerpt)} ${h(answer.paragraphs[1])}</p>
                ${
                  canImmerse
                    ? `<div class="card-immerse-entry"><b>这篇故事可以像短篇互动小说一样进入。</b><span>打开详情页，点击「沉浸式体验」。</span></div>`
                    : `<div class="card-immerse-entry muted"><b>已接入故事概要。</b><span>当前仅展示列表与详情文本，沉浸式转换先保留给主示例。</span></div>`
                }
                <div class="action-line"><span class="vote">赞同 ${h(answer.votes)}</span><span>${h(answer.comments)} 条评论</span><span>收藏</span><span>喜欢</span></div>
              </div>
              <div class="thumb ${coverClass(answer)}" role="img" aria-label="${h(answer.title)}"${coverStyle(answer)}></div>
            </div>
          </button>
        </article>
      `;
      }
    )
    .join("");

  return appChrome(`
    <main class="page">
      ${renderDataSourcePanel()}
      <div class="feed-layout">
        <section>
          <div class="feed-tabs"><span>推荐</span><span>关注</span><span>热榜</span><span>盐选</span></div>
          <div class="answer-list">${cards}</div>
          ${renderStoryLibraryGate()}
        </section>
        <aside class="side-panel">
          <h3 class="side-title">热门收藏</h3>
          <ul class="creator-list">
            <li><b>青梅竹马后来都怎样了？</b><small>12,846 人关注</small></li>
            <li><b>有没有让你多年后仍然遗憾的人？</b><small>8,392 人关注</small></li>
            <li><b>异地恋最难熬的瞬间是什么？</b><small>6,017 人关注</small></li>
          </ul>
        </aside>
      </div>
    </main>
    ${renderChoiceModal()}
  `);
}

function renderDetail(answer) {
  const body = answer.paragraphs.map((p) => `<p>${highlight(p)}</p>`).join("");
  const canImmerse = answer.id === "white-moonlight";
  return appChrome(`
    <main class="page">
      ${renderDataSourcePanel()}
      <div class="detail-layout">
        <article class="detail-main">
          <div class="back-row"><button class="text-btn" type="button" data-home>返回推荐</button></div>
          <h1 class="detail-title">${h(answer.title)}</h1>
          <div class="detail-author">
            <div class="author-block">
              <span class="avatar">${h(answer.avatar)}</span>
              <div><div class="author-name">${h(answer.author)}</div><div class="author-bio">${h(answer.bio)}</div></div>
            </div>
            ${
              canImmerse
                ? `<button class="immerse-btn" type="button" data-immerse="${answer.id}">
                    <svg class="spark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2zm7 11l.9 2.7L23 17l-3.1 1.3L19 21l-.9-2.7L15 17l3.1-1.3L19 13zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z"/></svg>
                    沉浸式体验
                  </button>`
                : `<span class="library-badge">故事概要</span>`
            }
          </div>
          ${
            answer.detailLoading || answer.detailError
              ? `<div class="detail-status">${answer.detailLoading ? "正在读取 story_detail 真实正文..." : h(answer.detailError)}</div>`
              : ""
          }
          ${renderGenerationPanel()}
          ${renderWebgalRuntime()}
          <div class="article-cover thumb ${coverClass(answer)}"${coverStyle(answer)}></div>
          <div class="article-body">${body}</div>
          <div class="detail-actions">
            <button class="vote" type="button">赞同 ${h(answer.votes)}</button>
            <button class="ghost-btn" type="button">${h(answer.comments)} 条评论</button>
            <button class="ghost-btn" type="button">收藏</button>
            <button class="ghost-btn" type="button">分享</button>
          </div>
        </article>
        <aside class="side-panel">
          ${
            canImmerse
              ? `<button class="side-immerse" type="button" data-immerse="${answer.id}">
                  <span class="side-immerse-scene"></span>
                  <b>进入这个故事</b>
                  <small>从“如果当年”开始，走一次不同的选择。</small>
                </button>`
              : `<div class="side-immerse static">
                  <span class="side-immerse-scene"></span>
                  <b>开放内容库故事</b>
                  <small>当前仅展示故事概要，沉浸式体验以「白月光吧。」作为主示例。</small>
                </div>`
          }
          <h3 class="side-title">相关问题</h3>
          <ul class="creator-list">
            <li><b>你心里的白月光后来怎么样了？</b><small>4,218 个回答</small></li>
            <li><b>青梅竹马真的容易走到最后吗？</b><small>2,936 个回答</small></li>
            <li><b>异地恋分开后还有可能复合吗？</b><small>1,704 个回答</small></li>
          </ul>
          <div class="tag-row">${answer.tags.map((tag) => `<span class="tag">${h(tag)}</span>`).join("")}</div>
        </aside>
      </div>
    </main>
    ${renderChoiceModal()}
  `);
}

function highlight(text) {
  const safe = h(text);
  return safe
    .replaceAll("白月光", "<strong>白月光</strong>")
    .replaceAll("青梅竹马", "<strong>青梅竹马</strong>")
    .replaceAll("异地", "<strong>异地</strong>")
    .replaceAll("我们回不去了", "<strong>我们回不去了</strong>")
    .replaceAll("如果我们能都不变", "<strong>如果我们能都不变</strong>");
}

function buildImmersive(answer) {
  return buildWhiteMoonlightImmersive(answer);
}

function buildWhiteMoonlightImmersive(answer) {
  const script = [
    "; Interactive WebGAL script adapted from the built-in Zhihu-style story.",
    "; Uses official WebGAL script concepts: intro, changeBg, changeFigure, choose, label, jumpLabel, setVar and conditional branches.",
    `; Source story: ${sanitize(answer.title)}`,
    "setVar:closeness=0;",
    "setVar:regret=0;",
    "setVar:acceptChange=0;",
    "intro:白月光吧。|有些故事，最难忘的不是结局。|而是你明知道回不去了，却总忍不住想，如果当年换一个选择呢？;",
    "changeBg:bg-courtyard-960.jpg -next;",
    "changeFigure:fig-boy-him-480.png -left -enter=enter-from-left -next;",
    "label:start;",
    "旁白:她跟我从小一起长大。近到我家小院后门出去，到她家前门，就是两步。;",
    "旁白:大人们说，我们两人在襁褓的时候就天天见面。;",
    "changeFigure:fig-girl-her-480.png -right -enter=enter-from-right -next;",
    "她:哥哥，等等我。;",
    "我:我就比你大一个月零七天，别喊得我像大人一样。;",
    "她:那你也是哥哥。;",
    "旁白:寒暑假作业一起写，饭也常在彼此家吃。她妈妈买好吃的，总会买双份。;",
    "旁白:街坊邻居见了我们，总笑着问：你老婆呢？你老公呢？;",
    "choose:牵着她去写作业:child_close|故意逗她慢慢追:child_tease -defaultChoose=1;",
    "label:child_close;",
    "setVar:closeness=closeness+1;",
    "changeBg:bg-homework-room-960.jpg -next;",
    "我:走吧，今天先写语文，写完再出去玩。;",
    "她:那你不许自己先写完。;",
    "旁白:那时候我还不懂，很多年以后，最想回去的地方，居然只是两张并排的小桌子。;",
    "jumpLabel:tenth_birthday;",
    "label:child_tease;",
    "setVar:regret=regret+1;",
    "changeBg:bg-courtyard-960.jpg -next;",
    "我:追上我就等你。;",
    "她:你赖皮！;",
    "旁白:她笑着追上来，伸手拽住我的袖子。那一刻太轻，轻到当时没人会记得珍惜。;",
    "label:tenth_birthday;",
    "changeBg:bg-birthday-table-960.jpg -next;",
    "旁白:她十岁生日，家里摆了两桌。她旁边的位置，一边是堂姐，另一边是我。;",
    "同学:我可以坐你旁边吗？;",
    "她:不好意思，这个位置肯定是他的。;",
    "我:为什么？;",
    "她:因为从小就是啊。;",
    "choose:当众装作没听懂:birthday_hide|把椅子拉近一点:birthday_accept -defaultChoose=2;",
    "label:birthday_hide;",
    "setVar:regret=regret+1;",
    "我:小孩子懂什么位置不位置的。;",
    "旁白:她看了我一眼，没有生气，只是把筷子递给我。后来想想，她那时已经比我勇敢。;",
    "jumpLabel:demolition;",
    "label:birthday_accept;",
    "setVar:closeness=closeness+1;",
    "我:那我坐稳点，免得别人抢。;",
    "她:这还差不多。;",
    "旁白:满桌人都在笑，我却只记得她耳朵红了一下。;",
    "label:demolition;",
    "changeBg:bg-bus-stop-960.jpg -next;",
    "changeFigure:fig-girl-her-480.png -right -next;",
    "旁白:后来房子拆迁，我们分开了。可电话线和周末，把距离勉强缝了起来。;",
    "旁白:见面时我们还是手牵手。她比我早发育，初一时高我大半个头，也照牵不误。;",
    "她:以后我穿高跟鞋，你也扛得住吧？;",
    "我:等我长高再说。;",
    "她:那你快点长。我们一起出去，回头率不得惊人啊。;",
    "changeBg:bg-classroom-letter-960.jpg -next;",
    "旁白:高中流行写信。每周收到她的信，都是一整个礼拜的期盼。;",
    "旁白:高二那年，我终于捅破了窗户纸。;",
    "我:周末我们班约了唱歌，你去不去？;",
    "她:去啊。;",
    "我:我们班的意思是，顺带家属。还去吗？;",
    "她:难道我不是你家属？从小被叫成你老婆，你长大了还想不认账啊？;",
    "choose:认真牵住她的手:confess_hold|用玩笑把脸红藏过去:confess_joke -defaultChoose=1;",
    "label:confess_hold;",
    "setVar:closeness=closeness+1;",
    "我:那就认账。;",
    "她:这句话我记住了。;",
    "jumpLabel:college;",
    "label:confess_joke;",
    "setVar:regret=regret+1;",
    "我:那你先别告诉老师。;",
    "她:胆小鬼。;",
    "旁白:她嘴上嫌弃，手却没有松开。;",
    "label:college;",
    "changeBg:bg-train-station-960.jpg -next;",
    "changeFigure:fig-adult-him-480.png -left -next;",
    "changeFigure:fig-adult-her-480.png -right -next;",
    "旁白:高考之后，她妈妈出钱，让我们去了沈阳和北京毕业旅行。;",
    "旁白:可是分数出来，我们没能去同一座城市。大一那年，我们把生活费省下来，换成车票和短信。;",
    "系统:那时每个月三四千条短信，几乎把所有没能见面的时间都填满。;",
    "choose:每周坐车去见她:distance_visit|劝她先适应各自生活:distance_adapt -defaultChoose=1;",
    "label:distance_visit;",
    "setVar:closeness=closeness+1;",
    "我:我这周过去。;",
    "她:别太累。;",
    "我:见你就不累。;",
    "旁白:年轻时总以为，只要足够用力，距离就会让步。;",
    "jumpLabel:distance_break;",
    "label:distance_adapt;",
    "setVar:acceptChange=acceptChange+1;",
    "setVar:regret=regret+1;",
    "我:我们都先把自己的生活稳住。;",
    "她:你是不是没以前那么想见我了？;",
    "旁白:有些体贴，说出口就像退后。;",
    "label:distance_break;",
    "changeBg:bg-train-station-960.jpg -next;",
    "changeFigure:fig-adult-her-480.png -right -next;",
    "旁白:大二下半学期，她开始经常没空。;",
    "她:对不起，异地太苦了。;",
    "我:祝你幸福。;",
    "旁白:我只能拍拍她的肩膀。那一拍很轻，却像把整个青春都按回了原处。;",
    "choose:追问能不能再试一次:break_ask|把体面留给彼此:break_silent -defaultChoose=2;",
    "label:break_ask;",
    "setVar:regret=regret+1;",
    "我:如果我再多来几次，如果我们再熬一熬呢？;",
    "她:我不知道。我真的不知道。;",
    "旁白:她哭得比我更像犯错的人，可感情不是认错就能修好的东西。;",
    "jumpLabel:reunion;",
    "label:break_silent;",
    "setVar:acceptChange=acceptChange+1;",
    "我:好。;",
    "旁白:没有争吵，没有责怪。只是从那天开始，我再也没把未来说得那么笃定。;",
    "label:reunion;",
    "changeBg:bg-classroom-letter-960.jpg -next;",
    "旁白:大学毕业第二年，她很久没亮的 QQ 头像忽然亮了。;",
    "她:出来见一面吗？;",
    "旁白:我们聊天、唱歌，拍了合照。她发到空间，评论只有三个字：我的他。;",
    "changeBg:bg-bus-stop-960.jpg -next;",
    "她:妈，我跟你女婿在一块呢。;",
    "母亲:是我从小养大的女婿吗？晚饭回家吃啊。;",
    "旁白:我们手拉着手去追公交车，脸上的笑容像什么都没有发生过。;",
    "choose:相信这就是重新开始:reunion_believe|提醒自己别太快沉进去:reunion_guard -defaultChoose=1;",
    "label:reunion_believe;",
    "setVar:closeness=closeness+1;",
    "我:我们是不是又回来了？;",
    "她:你说呢？;",
    "旁白:那天的饭吃了很久。她妈妈还是把好吃的往我碗里放，说从小我们家不就跟你家一样嘛。;",
    "jumpLabel:washing_bowl;",
    "label:reunion_guard;",
    "setVar:acceptChange=acceptChange+1;",
    "我:先吃饭吧，别让阿姨等。;",
    "她:你现在说话怎么这么小心？;",
    "旁白:我不是小心，只是不敢再把失而复得当成理所当然。;",
    "label:washing_bowl;",
    "changeBg:bg-kitchen-960.jpg -next;",
    "旁白:饭后，她在厨房洗碗。我帮她系好围裙。;",
    "我:要是这一辈子能这么下去，多好啊。;",
    "旁白:这句话我没有说出口，只在心里说了一遍。;",
    "changeBg:bg-night-bar-960.jpg -next;",
    "旁白:后来相处了大半年，我们发现时间已经改变了太多东西。;",
    "旁白:她喜欢高消费、酒吧、麻将室和朋友局。我追求的，还是两个人的小幸福。;",
    "她:你是不是觉得我这样不好？;",
    "choose:直接说我不喜欢这样的生活:values_direct|说只要你开心就好:values_yield -defaultChoose=1;",
    "label:values_direct;",
    "setVar:acceptChange=acceptChange+1;",
    "我:我不是觉得你不好，是我跟不上这样的生活。;",
    "她:所以我们还是不一样了。;",
    "jumpLabel:final_check;",
    "label:values_yield;",
    "setVar:regret=regret+1;",
    "我:只要你开心就好。;",
    "旁白:我说完就知道自己在撒谎。忍耐不是理解，沉默也不是祝福。;",
    "label:final_check;",
    "changeBg:bg-night-bar-960.jpg -next;",
    "changeFigure:fig-adult-her-480.png -right -next;",
    "旁白:有一次我陪她去酒局。她玩得很高，酒也喝得很高，还拿我的烟抽。;",
    "旁白:那一刻我心里知道，我们回不去了。;",
    "jumpLabel:ending_return -when=closeness>4;",
    "jumpLabel:ending_release -when=acceptChange>2;",
    "jumpLabel:ending_regret;",
    "label:ending_return;",
    "changeBg:bg-courtyard-960.jpg -next;",
    "我:如果当年没有异地，我们会不会不一样？;",
    "旁白:你一路选择靠近，所以这个问题更像一扇没关紧的门。可门后不是旧日子，只是记忆替你留着光。;",
    "jumpLabel:ending_common;",
    "label:ending_release;",
    "changeBg:bg-bus-stop-960.jpg -next;",
    "我:原来有些人不是错过了才变远，而是变了以后才知道已经错过。;",
    "旁白:你一路承认变化，所以结尾没有那么疼。遗憾还在，但它不再要求谁负责。;",
    "jumpLabel:ending_common;",
    "label:ending_regret;",
    "changeBg:bg-night-bar-960.jpg -next;",
    "我:如果我们能都不变，那该多好，是不是？;",
    "旁白:你一路把话藏回心里，所以这句话最后还是只说给自己听。;",
    "label:ending_common;",
    "旁白:我们没有吵架，没有红过脸，也没有正式说再见。只是很默契地，从某个点开始，不再联系。;",
    "旁白:后来我二十八岁谈恋爱，三十岁结婚。如今再回头看，那只是内心深处的一段遗憾。;",
    "旁白:白月光不是还想拥有的人，而是想起时，仍会照见当年的自己。;",
    "choose:回到童年那扇后门:start|停在这里:end;",
    "label:end;",
    "end;"
  ].join("\n");

  return { stages: [], script };
}

function sanitize(text) {
  return String(text)
    .replaceAll(";", "；")
    .replaceAll("\n", " ")
    .trim();
}

async function openImmersive(id) {
  const answer = getAnswer(id);
  if (answer.source === "zhihu" && answer.immersiveEnabled === false) return;
  state.currentStoryId = answer.id;
  state.recordedChoices = [];
  await startGenerationFlow({ answer, immersive: buildImmersive(answer) });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function preloadWebgalRuntime() {
  const resources = [
    ["/webgal-runtime/index.html", "document", "prefetch"],
    ["/webgal-runtime/assets/index-D8QblN30.js", "script", "prefetch"],
    ["/webgal-runtime/assets/index-n6Bd-mPa.css", "style", "prefetch"],
    ["/webgal-runtime/game/config.txt", "fetch", "prefetch"],
    ["/webgal-runtime/game/scene/start.txt", "fetch", "prefetch"],
    ["/webgal-runtime/game/background/bg-courtyard-960.jpg", "image", "preload"],
    ["/webgal-runtime/game/figure/fig-boy-him-480.png", "image", "preload"],
    ["/webgal-runtime/game/figure/fig-girl-her-480.png", "image", "preload"],
    ["/webgal-runtime/game/figure/fig-adult-him-480.png", "image", "preload"],
    ["/webgal-runtime/game/figure/fig-adult-her-480.png", "image", "preload"]
  ];
  resources.forEach(([href, as, rel]) => {
    if (document.head.querySelector(`link[data-webgal-preload][href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    link.as = as;
    if (as === "fetch") link.crossOrigin = "anonymous";
    link.dataset.webgalPreload = "true";
    document.head.appendChild(link);
  });
  resources
    .filter(([, as]) => as === "image")
    .forEach(([href]) => {
      if (state.preloadedImages?.has(href)) return;
      state.preloadedImages ??= new Set();
      state.preloadedImages.add(href);
      const image = new Image();
      image.decoding = "async";
      image.src = href;
      image.decode?.().catch(() => {});
    });
}

async function startGenerationFlow(source) {
  if (!source) return;
  preloadWebgalRuntime();
  const steps = [
    "AI 生成脚本中",
    "AI 绘画匹配中",
    "角色立绘整理中",
    "沉浸场景编排中"
  ];
  state.webgal = null;
  state.generation = {
    title: source.answer.title,
    steps
  };
  render();
  requestAnimationFrame(() => {
    document.querySelector("[data-generation-panel]")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
  await wait(6200);
  if (!state.generation || state.generation.title !== source.answer.title) return;
  await startWebgalRuntime(source);
}

async function startWebgalRuntime(source = state.vn) {
  if (!source) return;
  preloadWebgalRuntime();
  const answer = source.answer;
  const immersive = source.immersive || { script: source.script };
  await fetch("/api/webgal/start", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ script: immersive.script })
  });
  state.webgal = {
    storyId: answer.id,
    title: answer.title,
    src: `/webgal-runtime/index.html?t=${Date.now()}`
  };
  state.currentStoryId = answer.id;
  state.recordedChoices = [];
  state.choiceStats = null;
  state.generation = null;
  state.vn = null;
  render();
  requestAnimationFrame(() => {
    document.querySelector("[data-inline-engine]")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

async function recordWebgalChoice(label) {
  if (!state.webgal) return;
  const meta = webgalChoiceMap[label] || {
    questionId: label,
    prompt: "这一步她会怎么选？",
    order: 99
  };
  if (meta.loops) {
    state.recordedChoices = [];
    state.choiceStats = null;
  }
  const choice = {
    questionId: meta.questionId,
    prompt: meta.prompt,
    order: meta.order,
    label
  };
  state.recordedChoices = [
    ...state.recordedChoices.filter((item) => item.questionId !== choice.questionId),
    choice
  ].sort((a, b) => (a.order || 99) - (b.order || 99));
  if (state.auth.token) {
    try {
      const { body } = await fetchJson("/api/webgal/choice", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          storyId: state.webgal.storyId,
          sessionId: state.currentSessionId,
          choice
        })
      });
      if (body.ok) {
        state.choiceStats = body.stats;
      }
    } catch {
      // Choice tracking must not interrupt the story.
    }
  }
  if (meta.ends) {
    await showChoiceStats();
  }
}

async function showChoiceStats() {
  const storyId = state.currentStoryId || "white-moonlight";
  try {
    const query = new URLSearchParams({
      storyId,
      sessionId: state.currentSessionId
    });
    const { body } = await fetchJson(`/api/webgal/stats?${query}`);
    state.choiceStats = body.stats || state.choiceStats;
    state.recordedChoices = body.session?.choices || state.recordedChoices;
  } catch {
    // Fall back to locally recorded choices.
  }
  state.choiceModal = {
    type: state.auth.token ? "stats" : "stats-auth",
    title: state.auth.token ? (state.currentStoryId ? "你的选择路径" : "参与者选择统计") : "你完成了一次选择路径",
    message: state.auth.token
      ? "这些节点展示了你和所有参与者的选择差异。"
      : "不授权也可以完整体验。授权后，你的路径会计入统计，并可查看所有参与者的选择分布。",
    continueStats: true
  };
  render();
}

function renderWebgalRuntime() {
  if (!state.webgal) return "";
  return `
    <section class="inline-engine" data-inline-engine>
      <div class="webgal-topbar">
        <div class="vn-title"><b>${h(state.webgal.title)}</b><span>沉浸阅读</span></div>
        <button class="icon-btn" type="button" data-close-webgal aria-label="关闭">×</button>
      </div>
      <div class="webgal-boot" aria-hidden="true">
        <div class="webgal-boot-mark"></div>
        <b>正在进入沉浸阅读</b>
        <span>加载 WebGAL 引擎与场景资源</span>
      </div>
      <iframe class="webgal-frame" src="${h(state.webgal.src)}" title="OpenWebGAL Runtime"></iframe>
    </section>
  `;
}

function renderChoiceModal() {
  if (!state.choiceModal) return "";
  if (state.choiceModal.type === "auth" || state.choiceModal.type === "stats-auth") {
    return `
      <div class="choice-modal-backdrop" role="dialog" aria-modal="true">
        <section class="choice-modal auth-modal">
          <button class="modal-close" type="button" data-close-choice-modal aria-label="关闭">×</button>
          <h2>${h(state.choiceModal.title)}</h2>
          <p>${h(state.choiceModal.message)}</p>
          ${
            state.recordedChoices.length
              ? `<div class="local-choice-path">
                  ${state.recordedChoices
                    .map((choice) => `<span>${h(choice.label)}</span>`)
                    .join("")}
                </div>`
              : ""
          }
          <div class="modal-actions">
            <button class="primary-btn" type="button" data-oauth-login ${state.auth.authorizeUrl ? "" : "disabled"}>知乎授权</button>
            <button class="ghost-btn" type="button" data-close-choice-modal>暂不进入</button>
          </div>
        </section>
      </div>
    `;
  }
  const stats = state.choiceStats || { participants: 0, questions: [] };
  const myChoices = new Map((state.recordedChoices || []).map((choice) => [choice.questionId, choice]));
  const questions = [...(stats.questions || [])].sort((a, b) => {
    return choiceOrderForQuestion(a) - choiceOrderForQuestion(b);
  });
  const rows = questions
    .map((question) => {
      const mine = myChoices.get(question.questionId);
      const options = question.options
        .map((option) => {
          const percent = Math.round((option.ratio || 0) * 100);
          const selected = mine?.label === option.label;
          return `
            <div class="stat-option ${selected ? "mine" : ""}">
              <div class="stat-option-head">
                <span>${h(option.label)}</span>
                <b>${percent}%</b>
              </div>
              <div class="stat-bar" style="--value: ${percent}%"><span></span></div>
            </div>
          `;
        })
        .join("");
      return `
        <article class="stat-question">
          <div class="stat-question-head">
            <b>${h(question.prompt)}</b>
            ${mine ? `<span>你选了：${h(mine.label)}</span>` : `<span>你未经过这个节点</span>`}
          </div>
          ${options}
        </article>
      `;
    })
    .join("");
  return `
    <div class="choice-modal-backdrop" role="dialog" aria-modal="true">
      <section class="choice-modal stats-modal">
        <button class="modal-close" type="button" data-close-choice-modal aria-label="关闭">×</button>
        <div class="stats-head">
          <div>
            <h2>${h(state.choiceModal.title)}</h2>
            <p>${h(state.choiceModal.message)}</p>
          </div>
          <div class="participant-count"><b>${h(stats.participants || 0)}</b><span>位参与者</span></div>
        </div>
        <div class="stats-list">
          ${rows || `<div class="empty-stats">目前还没有足够的选择记录。</div>`}
        </div>
      </section>
    </div>
  `;
}

function renderGenerationPanel() {
  if (!state.generation) return "";
  const { steps } = state.generation;
  const rows = steps
    .map(
      (label, index) => `
        <li style="--delay: ${index * 1.45}s">
          <span></span>
          <b>${h(label)}</b>
        </li>
      `
    )
    .join("");
  return `
    <section class="generation-panel" data-generation-panel>
      <div class="generation-visual" aria-hidden="true">
        <div class="generation-orbit"><span></span><span></span><span></span></div>
        <div class="generation-film">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="generation-copy">
        <div class="generation-head">
          <b>正在生成沉浸体验</b>
          <span>即将进入</span>
        </div>
        <div class="generation-bar"><span></span></div>
        <ul>${rows}</ul>
      </div>
    </section>
  `;
}

function renderVn() {
  if (!state.vn) return "";
  const { answer, stages, index, script } = state.vn;
  const stage = stages[index];
  const progress = `${((index + 1) / stages.length) * 100}%`;
  const choices =
    stage.choices
      ?.map((choice) => `<button class="choice-btn" type="button" data-choice="${h(choice.label)}">${h(choice.label)}</button>`)
      .join("") || "";

  return `
    <section class="vn-overlay ${state.showScript ? "" : "hidden-script"}">
      <div class="vn-topbar">
        <div class="vn-title"><b>${h(answer.title)}</b><span>沉浸阅读</span></div>
        <div class="vn-controls">
          <span class="runtime-badge">内置预览器</span>
          <button class="ghost-btn" type="button" data-start-webgal>真实引擎运行</button>
          <button class="ghost-btn" type="button" data-toggle-script>${state.showScript ? "隐藏脚本" : "显示脚本"}</button>
          <button class="icon-btn" type="button" data-close-vn aria-label="关闭">×</button>
        </div>
      </div>
      <div class="vn-shell">
        <div class="vn-stage" style="--scene-bg: url('/assets/${h(stage.bg)}')">
          <img class="figure" src="/assets/${h(stage.figure)}" alt="" />
          <div class="vn-dialogue">
            <div class="speaker">${h(stage.speaker)}</div>
            ${stage.mood ? `<div class="mood-chip">${h(stage.mood)} · 自动资源匹配</div>` : ""}
            <p class="vn-text">${h(stage.text)}</p>
            <div class="choice-row">${choices}</div>
            <div class="progress-row">
              <button class="choice-btn" type="button" data-prev>上一幕</button>
              <div class="progress" aria-hidden="true" style="--progress: ${progress}"><span></span></div>
              <button class="choice-btn" type="button" data-next>${index === stages.length - 1 ? "完成" : "下一幕"}</button>
            </div>
          </div>
        </div>
        <aside class="vn-script">
          <div class="script-head"><b>game/scene/start.txt</b><button class="ghost-btn" type="button" data-copy>复制</button></div>
          <div class="script-note">当前故事的互动文本。</div>
          <pre class="script-code">${h(script)}</pre>
        </aside>
      </div>
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-oauth-login]").forEach((button) => {
    button.addEventListener("click", () => {
      startZhihuAuth();
    });
  });

  document.querySelector("[data-clear-auth]")?.addEventListener("click", () => {
    state.auth.token = "";
    state.auth.user = null;
    sessionStorage.removeItem("zhihuAccessToken");
    loadZhihuStories();
  });

  document.querySelectorAll("[data-close-choice-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.choiceModal = null;
      render();
    });
  });

  document.querySelector("[data-show-stats]")?.addEventListener("click", () => {
    showChoiceStats();
  });

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      location.hash = `#/answer/${button.dataset.open}`;
    });
  });

  document.querySelector("[data-home]")?.addEventListener("click", () => {
      location.hash = "#/";
  });

  document.querySelectorAll("[data-immerse]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      await openImmersive(event.currentTarget.dataset.immerse);
    });
  });

  document.querySelectorAll("[data-start-webgal]").forEach((button) => {
    button.addEventListener("click", () => {
      startWebgalRuntime();
    });
  });

  document.querySelector("[data-close-webgal]")?.addEventListener("click", () => {
    state.webgal = null;
    render();
  });

  document.querySelector("[data-close-vn]")?.addEventListener("click", () => {
    state.vn = null;
    render();
  });

  document.querySelector("[data-toggle-script]")?.addEventListener("click", () => {
    state.showScript = !state.showScript;
    render();
  });

  document.querySelector("[data-prev]")?.addEventListener("click", () => {
    if (!state.vn) return;
    state.vn.index = Math.max(0, state.vn.index - 1);
    render();
  });

  document.querySelector("[data-next]")?.addEventListener("click", () => {
    if (!state.vn) return;
    if (state.vn.index === state.vn.stages.length - 1) {
      state.vn = null;
    } else {
      state.vn.index += 1;
    }
    render();
  });

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.vn) return;
      if (button.dataset.choice === "回到开头") state.vn.index = 1;
      if (button.dataset.choice === "看 WebGAL 脚本") state.showScript = true;
      render();
    });
  });

  document.querySelector("[data-copy]")?.addEventListener("click", async () => {
    if (!state.vn) return;
    try {
      await navigator.clipboard.writeText(state.vn.script);
      document.querySelector("[data-copy]").textContent = "已复制";
    } catch {
      document.querySelector("[data-copy]").textContent = "复制失败";
    }
  });
}

function render() {
  const match = state.route.match(/^#\/answer\/(.+)$/);
  const answer = match ? getAnswer(match[1]) : null;
  document.querySelector("#app").innerHTML = `${answer ? renderDetail(answer) : renderFeed()}${renderVn()}`;
  bindEvents();
  if (answer) hydrateDetail(answer);
}

render();
initOAuth();
