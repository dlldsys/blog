---
title: "AI 开发日报 · 2026年06月03日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-03
tags: ["AI日报"]
---

## 今日要闻

### 1. 阿里通义千问全面开放第三方 Agent 与 Skills，变身"超级 Agent"平台

6月3日，阿里通义千问宣布全面向第三方 Agent 与 Skills 开放，允许任何企业在通义生态内运营自有品牌 Agent。这是一次根本性的平台转向——通义千问不再只是 LLM API，而是定位为"超级 Agent"个人助理，以自然语言界面取代应用切换范式。首批试点企业包括瑞幸咖啡（智能排队提醒）、肯德基（点餐）、Mikkasa 以及中国东方航空（旅行规划与综合出行服务），均为高频消费触点。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 2. Microsoft Build 2026 深度：Copilot Studio 原生支持 MCP，Agent 编排走向标准化

Build 2026 大会持续深入。微软宣布全面拥抱 MCP（Model Context Protocol）协议，Copilot Studio 原生支持 MCP 工具注册；Microsoft Agent Framework（MAF）将 AutoGen 整合为统一框架，核心 1.0 已于4月发布。LangGraph 主导生产编排、CrewAI 占据原型开发，多 Agent 协作的价值被实证研究重新校准。Scout 也成为首批获得 AI Agent 认证的产品之一。

来源：[CSDN](https://blog.csdn.net/guwentian/article/details/162757496) · [senx.ai](https://senx.ai/openclaw-news/2026-06-09-openclaw-news)

### 3. 百度昆仑芯完成 ERNIE 5.1 关键版本训练，天池超节点6月发布

百度 AI Cloud 透露，昆仑芯已完成 ERNIE 5.1 关键版本训练。基于昆仑芯的天池 256 卡超节点将于6月正式发布，吞吐性能较前代提升 25%，已完成 ERNIE、DeepSeek、GLM、MiniMax 等主流模型适配，进一步推进国产算力闭环。

来源：[阿斯达克财经](https://wdatacn.aastocks.com/en/usq/quote/stock-news-content.aspx?id=NOW.1524279)

## 涨星最快项目

1. **microsoft/markitdown** — 文档转 Markdown 工具，本周持续涨星，是 LLM 预处理层的事实标配。[GitHub](https://github.com/microsoft/markitdown)

2. **safishamsi/graphify** — 把任意目录转为可查询知识图谱的 Skill，兼容 Claude Code、Codex、Cursor、Gemini CLI，周增超 5400 星。[GitHub](https://github.com/safishamsi/graphify)

3. **Leonxlnx/taste-skill** — 让 AI 输出"有品味"内容的技能，拦截模板化八股内容，月增超 2.6 万星。[GitHub](https://github.com/Leonxlnx/taste-skill)

4. **aaif-goose/goose** — 开源 AI 编码 Agent，Rust 编写，与 OpenClaw 生态呼应。[GitHub](https://github.com/aaif-goose/goose)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **通义千问 Agent 平台** — 全面开放第三方 Agent 与 Skills，定位"超级 Agent"个人助理，首批接入瑞幸、肯德基、东航等高频消费场景。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **阿里 Qwen-VLA** — 通义团队推出首个视觉-语言-动作模型，正式进军具身 AI，与华为、腾讯及众多机器人创业公司同场竞技。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **百度昆仑芯 + ERNIE 5.1** — 国产芯片完成关键模型训练，天池超节点6月发布，算力自主闭环再进一步。（[阿斯达克](https://wdatacn.aastocks.com/en/usq/quote/stock-news-content.aspx?id=NOW.1524279)）

### 国外

- **微软七款自研模型** — Build 2026 上微软 AI 超级智能团队发布七款自研模型，覆盖多规模多任务，标志自研能力补齐。（[Microsoft News](https://news.microsoft.com/source/asia/2026/06/03/microsoft-build-2026-be-yourself-at-work/)）

- **OpenClaw 生态扩张** — 作为 Scout 底座的开源框架，OpenClaw 在 Build 后获得微软官方背书，ClawHub 支持 GitHub 仓库直接安装。（[senx.ai](https://senx.ai/openclaw-news/2026-06-09-openclaw-news)）

## 新工具 & CLI

- **Microsoft Agent Framework (MAF)** — 微软将 AutoGen 整合为统一 Agent 框架，Copilot Studio 原生支持 MCP 工具注册，生产编排交由 LangGraph。（[CSDN](https://blog.csdn.net/guwentian/article/details/162757496)）

- **通义千问 Agent 平台** — 企业可入驻运营自有品牌 Agent，打造类比微信小程序的"新 AI 运营渠道"。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **百度天池 256 卡超节点** — 基于昆仑芯，吞吐提升 25%，适配主流国产模型，6月正式发布。（[阿斯达克](https://wdatacn.aastocks.com/en/usq/quote/stock-news-content.aspx?id=NOW.1524279)）

## 编程方式

- **MCP 协议成为 Agent 互操作标准** — 微软在 Build 2026 宣布全面拥抱 MCP，Copilot Studio 原生支持 MCP 工具注册，多 Agent 协作从"各自为战"走向"标准互通"，与 Claude Code、Cursor、OpenClaw 等主流编程助手形成统一工具生态。（[CSDN](https://blog.csdn.net/guwentian/article/details/162757496) · [阿里云天池](https://tianchi.aliyun.com/forum/post/1061920)）

- **"超级 Agent"重塑应用分发** — 通义千问的第三方 Agent 开放，预示品牌不再依赖 App 商店，而通过 Agent 设计捕获先发优势，类比早期微信公众号红利。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

## 总结

今日 AI 行业的关键词是"平台化"与"协议统一"——通义千问变身"超级 Agent"平台开放第三方入驻，微软以 MCP 协议统一 Agent 工具生态，百度昆仑芯补齐国产算力闭环；Agent 正从"单点工具"演变为"新应用分发渠道"，而国产芯片与国产模型的协同让自主可控更进一步。
