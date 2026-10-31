---
title: "AI 开发日报 · 2026年11月01日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-11-01
tags: ["AI日报"]
---

## 今日要闻

### Google 关闭 Jules，全面并入 Antigravity

Google 10 月 29 日宣布，异步编程 Agent Jules 将于年底关停：11 月 11 日起转为只读、停止接受新任务，12 月 31 日服务完全下线。官方表示 Jules 的经验将整合进 Agent 优先开发平台 Antigravity（随 Gemini 3 于 2025 年 11 月推出、今年 I/O 升级至 2.0），同一天 Antigravity 还上线了 Plugin Marketplace，首批合作方包括 Atlassian、Figma、Stripe、Datadog 等。

来源：[AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e)

### Anthropic 重构订阅层级：Max 20x 更名 Ultra，取消 5 小时会话限制

Anthropic 将 $200 档 Max 20x 更名为 Ultra，$100 档 Max 5x 更名为 Max，形成 Free / Pro / Max / Ultra 四级体系；已验证的 Ultra 账户不再受 5 小时滚动会话窗口限制，长编码会话可连续跑完每周配额。此前一天 OpenAI 刚把 Codex 与 ChatGPT Work 的 Pro 档用量翻倍，订阅配额之争成为焦点。

来源：[Anthropic Pricing](https://www.anthropic.com/pricing) · [Claude 产品公告](https://claude.com/resources/product-announcements)

### Anthropic 披露运行近半年的隐藏自我审查机制

Anthropic 公开了名为 self-evaluation 的安全机制：自 6 月 Claude Fable 5 发布起，每个新版 Claude 在回答后都会收到一条用户不可见的额外指令，用缓存上下文输出约 10 token 的安全判定 JSON。该机制开销不足总推理算力的 2%；在 1% 误报率下可捕获较重分类器标记违规的 78%，高危滥用检测率达 94%。同时文本水印将于 11 月 3 日扩展到 Mythos 5、Opus 4.7 等模型，早于欧盟 AI 法案 12 月 2 日合规期限。

来源：[AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e) · [Anthropic 新闻室](https://www.anthropic.com/news)

### DeepSeek V4.1-Flash-1017 单周调用量登顶全球，环比暴增 801%

OpenRouter 最新一周（10 月 19 日至 25 日）全球模型调用榜上，DeepSeek 10 月 17 日更新的 V4.1-Flash-1017 以 33.6 万亿 Token 登顶，环比增幅 801%；自研搜索引擎的 Search & Fetch API 也已向所有用户开放，10 月 31 日 16:00 UTC 起按量计费。

来源：[36氪](https://36kr.com/p/4042510353257347) · [DeepSeek API Docs](https://api-docs.deepseek.com/news/news261017/)

### NVIDIA 开源 Nemotron 3.5 Transcribe 语音模型与 Granary v2 数据管线

NVIDIA 10 月 28 日以开放权重发布 Nemotron 3.5 Transcribe：单模型覆盖 40 语言转录、31 语言与英语互译、13 语言八说话人分离及音频问答，30B 参数（约 4.3B 激活），在 HF Open ASR 榜单英文词错率 5.33% 领先全部开源权重模型；同期开源的 Granary v2 含 46.3 万小时、48 语言音频数据。

来源：[AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e) · [Hugging Face](https://hf.co)

## 涨星最快项目

（数据来源：[Trendshift](https://trendshift.io/) · [NGJOO 热度榜](https://www.ngjoo.com/trending/) · [GHTrending](https://www.ghtrending.com/ai-tools)）

### Orkas-AI/Orkas

开源的本地优先 AI 团队桌面应用（MIT）：一个 Commander 把你的目标拆成待办，并协调 16 个内置专家 Agent，以及 Claude Code、Codex、OpenCode、OpenClaw、Hermes 等外部 Agent，支持项目、定时自动化与连接器，免费提供 macOS 与 Windows 版。

[GitHub](https://github.com/Orkas-AI/Orkas)

### DietrichGebert/ponytail（⭐ 181,193，+638）

"让 AI Agent 像组里最懒的资深开发一样思考"——通过放缓 Agent 节奏来减少无效计算与幻觉，JavaScript 实现，本周热度榜第三。

[GitHub](https://github.com/DietrichGebert/ponytail)

### affaan-m/ECC（⭐ 293,634，+657）

Agent 框架性能优化系统（Agent Harness Performance Optimization），内置技能、直觉与记忆机制，本周热度榜第四。

[GitHub](https://github.com/affaan-m/ECC)

### morluto/rea

用 Agent 对任何东西做逆向工程（App 行为到原生二进制）的 TypeScript 项目，连续多周霸榜开源热度前列。

[GitHub](https://github.com/morluto/rea)

### anthropics/claude-plugins-official

Anthropic 官方 Claude 插件仓库，出现在近期 GitHub AI 周榜，反映"插件化 Agent 能力"正成为平台标配。

[GitHub](https://github.com/anthropics/claude-plugins-official)

## 大模型进展

### 国内

**DeepSeek**：V4.1-Flash-1017（10 月 17 日）单周调用量 33.6 万亿 Token 登顶 OpenRouter（10/19-25 周榜，环比 +801%）；Search & Fetch API 面向所有用户开放（10 月 31 日起计费）；10 月 31 日 Harness 团队公开 Super-agent 智能体架构（持续在线、并行多任务、主动响应环境变化），原型已开源并已在内部研发中运行。[36氪](https://36kr.com/p/4042510353257347) · [DeepSeek API Docs](https://api-docs.deepseek.com/news/news261017/) · [搜狐科技](https://m.sohu.com/a/1095579021_121627717/)

**智谱 / 小米**：OpenRouter 2026 年 10 月首周全球调用榜前五被国产厂商包揽——DeepSeek V4.1 Flash 41 万亿 Token、智谱 GLM5.3 Flash 12.2 万亿、小米 MiMo 11.5 万亿，开源性价比路线持续主导推理调用市场。[今日头条](http://m.toutiao.com/group/7702970380012765715/)

**腾讯混元**：Hy-MT2-1.8B 与 Hy-MT2-30B-A3B 双语翻译模型近日登上 Hugging Face 首页更新榜，轻量多语言方向持续迭代。[Hugging Face](https://hf.co)

**月之暗面 Kimi**：K3.1 Pro 与 K3.1 Pro Highspeed（三万亿参数、1M 上下文）此前全量上线 Kimi Code，长程 Agent 与代码能力为国产第一梯队。[Kimi Code 文档](https://www.kimi.com/code/docs/kimi-code/whats-new.html)

### 国外

**OpenAI**：10 月 26 日推出 GPT-6.1 Terra，主打"人人可用的快速计算机操作"（computer use），已在 ChatGPT Work、Codex 与 API（`gpt-6.1-terra`）逐步上线；此前因内部安全隐患评估，原定 10 月发布的 GPT-6.1 Astra 被取消。[OpenAI 发布说明](https://openai.com/zh-Hans-CN/products/release-notes/) · [OpenAI 新闻中心](https://openai.com/zh-Hans-CN/news/company-announcements/?display=list)

**Anthropic**：发布 Claude Opus 5.5，官方称其在 agentic coding 与知识工作中领先，典型负载下运行成本较 Opus 5 低 40%；Claude Duet 研究预览（10 月 8 日，美国 Pro/Max 订阅者 waitlist）；Claude Dashboards 与 Motion 进入 beta，Docs、Slides、Design 转正并对 Free 用户开放（10 月 28 日）。[Anthropic 新闻室](https://www.anthropic.com/news) · [Claude 文章](https://claude.com/resources/articles?query=youtube)

**Google DeepMind**：Gemini 4 Argon 系列（10 月）持续推进，并发布专用于机器人的 Gemini 4 Argon for Robotics；同一周期内宣布将 Jules 并入 Antigravity 并上线 Plugin Marketplace。[Google DeepMind](https://deepmind.google) · [AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e)

**NVIDIA**：开源 Nemotron 3.5 Transcribe 语音大模型与 Granary v2 数据集（10 月 28 日），单 GPU 即可覆盖转录/翻译/说话人分离/音频问答全链路。[Hugging Face](https://hf.co)

## 新工具 & CLI

- **Antigravity Plugin Marketplace**：随 Jules 关停同日上线，插件将最多 5 类原语（技能、MCP 服务器、规则、hooks、自定义 Agent）打包为一键安装，首批合作方含 Atlassian、Figma、Stripe、Datadog、Databricks、Canva、CrowdStrike 等。[AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e)
- **DeepSeek Search & Fetch API**：DeepSeek 自研 AI 原生搜索引擎的检索与抓取接口向所有用户开放（10/31 起计费），在 DeepSeek Harness、Claude Code、Codex 中作为服务端工具调用。[DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/updates/)
- **Herdr**：面向 AI 编码 Agent 的开源终端多路复用器，编排并行会话、维护持久后台运行时，提供 MCP 与 socket API 供 Agent 间协调。[aicoolies](https://aicoolies.com/categories/ai-cli-agents)
- **Orca**：管理多 Agent 的桌面环境，基于隔离 Git worktree 组织任务，内置 Agent 终端、代码编辑、浏览器与 diff/评审/提交工具，兼容 Claude Code、Codex、Cursor CLI、OpenCode 等命令行 Agent。[Slashdot](https://slashdot.org/software/p/GPTConsole/alternatives)
- **Claude Code**：作为终端编码 Agent 行业基准，支持 Opus 5.5、Sonnet 5.5、Fable 5.1 等模型，其按需加载的 Skills 生态是核心优势；与 Codex CLI、Gemini CLI 并称 2026 三大终端 Agent。[DEV：Top 5 CLI Coding Agents](https://dev.to/devandrew/mastering-the-terminal-top-5-cli-coding-agents-for-october-2026-5dn0)

## 编程方式

- **终端即 IDE 成为主流**：Claude Code、Codex CLI、Gemini CLI 三足鼎立，写代码、跑测试、管 Git、做评审全部在命令行完成，AI 编码 Agent 从编辑器插件升级为完整开发环境。[DEV：Terminal Agents 2026](https://dev.to/guang_diyuzhi_74b0fec2c09/claude-code-vs-codex-cli-vs-gemini-cli-terminal-agents-2026-1fe3)
- **多 Agent 协作成为显学**：Anthropic 2026 Agentic Coding Trends Report 指出单 Agent 工作流触顶，推荐"编排者 + 专业子 Agent"模式（写码、评审、测试、安全扫描各司其职），Agent 从工具变为团队成员。[Anthropic Agentic Coding Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf) · [趋势解读](https://www.danilchenko.dev/posts/agentic-coding-trends/)
- **Agent 基础设施平台化**：Google 把 Jules 并入 Antigravity、LangChain Managed Deep Agents v0.10 加入浏览器操作与异步子 Agent，AI 开发栈正从"单模型问答"整合为"一个平台跑完整 Agent 流水线"。[LangChain Blog](https://www.langchain.com/blog/managed-deep-agents-browser-use-and-asynchronous-subagents)
- **Agent 安全首次进入攻防一线**：Chainalysis 10 月 30 日披露遭外部攻击者使用"offensive agentic techniques"入侵，是首批把 Agentic AI 写入入侵方式栏的官方安全披露——开发者在构建 Agent 时需同步把护栏与监控纳入工作流。[AI Daily Digest（DEV）](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-1-2026-google-folds-jules-into-antigravity-claude-ultra-drops-the-3e5e)

## 总结

今日关键词是"整合与护栏"：Google 把 Jules 收编进 Antigravity、Anthropic 一边重构订阅一边公开隐藏的安全审查机制，DeepSeek 则凭效率与成本在调用榜上一骑绝尘——AI 开发正从"追新模型"转向"平台化整合 + 安全可控的多 Agent 工作流"。
