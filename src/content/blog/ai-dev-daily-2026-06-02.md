---
title: "AI 开发日报 · 2026年06月02日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-02
tags: ["AI日报"]
---

## 今日要闻

### 1. 微软发布 Microsoft Scout：始终在线的个人工作智能体

6月2日，微软正式推出 Microsoft Scout，定位为"always-on personal agent"（始终在线的个人智能体）。Scout 构建于开源智能体框架 OpenClaw 之上，以本地桌面应用形态跨云端、桌面端和 Web 端运行，打通 Teams、Outlook、OneDrive、SharePoint 等核心办公套件。它能跨时区协调会议、自动挡出准备时间、预先生成材料，甚至点出"卡住的决策"这类风险。Scout 提供 Observing（观察）、Suggesting（建议）、Acting（执行）三种模式，并具备细粒度 IT 治理与完整审计日志。

来源：[Microsoft 365 博客](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) · [InfoQ](https://www.infoq.com/news/2026/06/microsoft-scout-openclaw-build/) · [掘金](https://juejin.cn/post/7646978976926253097)

### 2. Microsoft Build 2026 开幕："Be yourself at work" 与 Agent 优先战略

微软 Build 2026 开发者大会开幕，主题为"Be yourself at work"。大会宣告向"Agent 优先"的宏大转型，旨在自动化知识工作者使用软件的方式。微软一口气发布七款自研模型，并推出 Project Solara（告别 App 的全新交互范式）。Scout 是此次发布的核心智能体产品，构建于 OpenClaw 框架之上，可在 Teams 中像人类同事一样自主行动。

来源：[Microsoft News](https://news.microsoft.com/source/asia/2026/06/03/microsoft-build-2026-be-yourself-at-work/) · [PANews](https://www.panewslab.com/zh-hant/articles/019e8b42-434b-75bc-b75a-e84e401eae43) · [数位时代](https://www.bnext.com.tw/article/91134/microsoft-project-solara-android-chip-to-cloud-ai-agent-platform)

### 3. OpenClaw 成为微软旗舰智能体框架，MXC 沙箱同步开源

微软在 Build 2026 上将 OpenClaw 作为旗舰用例重点展示，并同步开源了 MXC（策略驱动的分层隔离容器）作为权限隔离层。OpenClaw 由 Peter Steinberger 创建（其近期已加入 OpenAI），自称为"The AI that actually does things"，可执行读写本地文件、运行 Shell 脚本、应用代码补丁、启动子代理并行任务、自动化浏览器会话等高权限操作，并支持 MCP 协议。

来源：[InfoQ](https://www.infoq.com/news/2026/06/microsoft-scout-openclaw-build/) · [CSDN](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 涨星最快项目

1. **microsoft/mxc** — 微软在 Build 2026 发布的策略驱动分层隔离容器，为桌面 AI Agent 提供细粒度可审计沙箱。[GitHub](https://github.com/microsoft/mxc)

2. **affaan-m/ECC** — Agent 性能优化系统（技能/本能/记忆/安全），总星超 21 万，Build 大会后加速增长。[GitHub](https://github.com/affaan-m/ECC)

3. **farion1231/cc-switch** — 多 Agent 切换器，一键切换 Claude Code、Codex、Cursor 等活跃 Agent，周增超 6600 星。[GitHub](https://github.com/farion1231/cc-switch)

4. **CopilotKit/CopilotKit** — Agent 前端 UI 栈，本周持续涨星，与微软 Agent 生态形成互补。[GitHub](https://github.com/CopilotKit/CopilotKit)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **百度昆仑芯** — 百度 AI Cloud 宣布昆仑芯完成 ERNIE 5.1 关键版本训练；基于昆仑芯的天池 256 卡超节点将于6月正式发布，吞吐性能较前代提升 25%，已完成 ERNIE、DeepSeek、GLM、MiniMax 主流模型适配。（[阿斯达克](https://wdatacn.aastocks.com/en/usq/quote/stock-news-content.aspx?id=NOW.1524279)）

### 国外

- **微软自研模型矩阵** — Build 2026 上微软 AI 超级智能团队一口气发布七款自研模型，覆盖不同规模与任务，标志微软从"模型搬运工"转向"自研+编排"双线作战。（[Microsoft News](https://news.microsoft.com/source/asia/2026/06/03/microsoft-build-2026-be-yourself-at-work/)）

- **OpenClaw 模型层** — Scout 基于 OpenClaw 与 WorkIQ 构建，WorkIQ 学习用户工作模式以实现个性化 Agent 行为。（[数位时代](https://www.bnext.com.tw/article/91134/microsoft-project-solara-android-chip-to-cloud-ai-agent-platform)）

## 新工具 & CLI

- **Microsoft Scout** — 始终在线的个人智能体，集成 M365 全家桶，三种运行模式+完整审计，面向 Frontier 客户率先开放。（[Microsoft 365 博客](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/)）

- **Microsoft MXC** — 策略驱动的 Agent 沙箱容器，Rust 编写，每个操作经策略引擎审核、可审计可回滚。（[GitHub](https://github.com/microsoft/mxc)）

- **Project Solara** — 微软全新交互范式，旨在告别传统 App，以 Agent 为核心重新组织软件体验。（[数位时代](https://www.bnext.com.tw/article/91134/microsoft-project-solara-android-chip-to-cloud-ai-agent-platform)）

## 编程方式

- **"Agent 优先"取代"App 优先"** — 微软在 Build 2026 明确宣告向 Agent 优先转型，知识工作者与软件的交互方式正从"打开应用、点击操作"转向"告诉 Agent 目标、由其自主完成"，Scout 直接持有企业目录身份并监控邮箱、Teams、桌面。（[beri.net](https://www.beri.net/article/2026-06-03-microsoft-scout-autopilot-always-on-agent-15-dollars-entra-identity)）

- **Agent 安全从"可选"变"必选"** — 公开的"AI Agent 误删用户邮件"事故与 MXC 的发布，把桌面级 Agent 安全推到前台；策略驱动隔离、零信任身份、可审计执行成为企业部署 Agent 的新基线。（[CSDN](https://blog.csdn.net/yanceyxin/article/details/162208780)）

## 总结

今日 AI 行业的关键词是"Agent 落地"与"安全治理"——微软以 Scout + OpenClaw + MXC 打出"始终在线个人智能体"组合拳，宣告企业软件从"App 优先"迈向"Agent 优先"；而 Agent 沙箱与审计体系的同步开源，标志着智能体规模化落地必须先过安全这一关。
