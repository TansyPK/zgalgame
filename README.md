# 知乎回答沉浸式阅读 Demo

把一篇知乎风格的长回答转换成可交互的 WebGAL 文本体验。当前默认故事是「白月光吧。」：用户可以在列表页阅读卡片，进入详情页后点击「沉浸式体验」，页面会展示生成过渡，并在内嵌 WebGAL 引擎里运行生成脚本。

## 功能

- 知乎风格列表页和回答详情页。
- 未授权状态下也可体验内置故事。
- 点击「沉浸式体验」后生成 `game/scene/start.txt`。
- 页面内嵌 OpenWebGAL runtime，保留 `PRESS ENTER` 入口并自动进入故事。
- 可选知乎 OAuth 接入；授权后追加知乎开放内容库故事概要，并可查看选择统计。

## 运行

```bash
npm start
```

默认地址：

```text
http://127.0.0.1:5173
```

项目没有前端构建步骤，`server.js` 负责静态资源、OAuth 辅助接口和 WebGAL 脚本写入。

## 可选环境变量

知乎授权和真实故事接口不是运行内置故事的必需项。需要接入时再配置：

```bash
ZHIHU_APP_ID=your_app_id \
ZHIHU_APP_KEY=your_app_key \
ZHIHU_REDIRECT_URI=http://127.0.0.1:5173/oauth/callback \
npm start
```

不要把 `.env`、app key 或任何私有凭据提交到仓库。

## 目录

```text
app.js                         页面渲染、故事数据和 WebGAL 脚本生成
server.js                      本地静态服务、OAuth 代理、脚本写入接口
styles.css                     页面样式
assets/                        页面预览资源
webgal-runtime/                内嵌 OpenWebGAL runtime
webgal-runtime/game/scene/     runtime 读取的脚本文本
webgal-export/demo-answer/     可导出的 WebGAL 项目结构
zgalgame-image/                原始生成图片素材
```

## WebGAL 脚本

内置故事脚本会写入：

```text
webgal-runtime/game/scene/start.txt
```

导出副本位于：

```text
webgal-export/demo-answer/game/scene/start.txt
```

脚本使用了 OpenWebGAL 的常见指令，包括 `intro`、`changeBg`、`changeFigure`、`choose`、`label`、`jumpLabel`、`setVar` 和条件分支。

## 开源前检查

发布前建议执行：

```bash
rg -n "token|secret|app_key|appKey|access_token|authorization|Bearer|password|ZHIHU_APP_KEY|sk-" .
git status --short
```

如果曾经把真实凭据提交进 Git 历史，请先在对应平台作废旧凭据；必要时再重写 Git 历史后推送。
