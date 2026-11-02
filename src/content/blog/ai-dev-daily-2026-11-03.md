---
title: "AI 开发日报 · 2026年11月03日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-11-03
tags: ["AI日报"]
---

## 今日要闻

### 1. DeepSeek Harness 推出「创造模式」（Creator Mode）：一句话定制 AI 插件

11 月 2 日，DeepSeek Harness 团队宣布推出全新的「创造模式」（Creator Mode），用户只需用自然语言描述需求，智能体即可现场编写、安装并运行一个可用的自定义插件，将想法转化为可扩展 Harness 工具、技能和交互界面的真实能力。团队将其概括为「你的 Harness，由你定义」。

来源：[华尔街见闻（今日头条转载）](http://m.toutiao.com/group/7703713785537692169/) · [凤凰网科技](https://original.ifeng.com/c/8xk4PQk0VoF)

### 2. Anthropic 第三季度营收暴涨 1127%，Claude 营收达 170 亿美元

Anthropic 第三季度营收约 169.6 亿美元，去年同期仅为 13.8 亿美元，同比增长约 1200%；2026 年前三季度累计营收达 332.4 亿美元。Claude 商业化增速显著，但按通用会计口径当期仍有营业亏损。

来源：[凤凰网科技](https://tech.ifeng.com/c/8xjfUQXyPxm)

### 3. OpenAI 与 Anthropic 新旗舰同日曝光，OpenAI 正式发布 GPT-6 Sol / Luna

谷歌 Gemini 4 Carbon 刚夺回全球第一，OpenAI 和 Anthropic 便在周末同时亮出下一代底牌：OpenAI 在 Codex 后台灰测 GPT-6.2 Astra，Anthropic 官方源码中被扒出 Claude Mythos 5.5 系列。与此同时，OpenAI 正式发布 GPT-6 Sol 与 Luna 两款新模型，进一步摊薄 GPT-6 代际的推理成本；Anthropic 也推出新家族首款模型 Claude Opus 5.5，性能对标 Claude Fable 5.1，运行成本较 Opus 5 降低 40%。

来源：[36氪出海](https://eu.36kr.com/zh/p/4051806214214530) · [AIBase](https://news.aibase.com/news/32000) · [OpenAI 官方博客](https://openai.com/index/introducing-gpt-6-sol-and-luna/) · [Anthropic 官网](https://www.anthropic.com/claude-opus-5-5)

### 4. AI 投资疑虑升温：标普下调 Meta 展望，OpenAI 削减融资目标

据路透社 10 月 31 日报道，国际评级机构标普将 Meta 的评级展望从「稳定」修订为「负面」；另据英国《金融时报》，OpenAI 在新一轮融资中削减了 100 亿美元融资目标，原因是部分投资者削减出资额度，市场对 AI 巨额资本开支的可持续性开始产生疑虑。

来源：[腾讯新闻](http://news.qq.com/rain/a/20261103A02R2500)

## 涨星最快项目

### 1. stablyai/orca —— 并行 Agent 工作台（+9.5k 星，总星 10.8 万+）

为「agent 舰队」打造的桌面/移动工作台：在隔离的 Git worktree 中并行运行多个 agent，支持本地或 SSH 远程监控与干预，跨 macOS / Windows / Linux。本周以 9.5k 星增长、10% 增速领跑 GitHub 涨星榜。

链接：[stablyai/orca](https://github.com/stablyai/orca) · [OSRepos 周榜分析](https://osrepos.com/blog/rising-this-week-orca-and-skills-lead-the-coding-agent-wave)

### 2. pbakaus/impeccable —— AI agent 设计语言（+12,017 星，总星约 7 万）

面向 AI 编码 agent 的前端设计语言 skill，内置 41 个「确定性反 slop 检测器」，不依赖 LLM 即可识别 AI 生成界面的设计反模式。周涨星 1.2 万，居本周榜首。

链接：[pbakaus/impeccable](https://github.com/pbakaus/impeccable) · [GitHub Weekly 榜单](https://dev.to/4sapi/github-weekly-agent-skills-sweep-top-3-de-ai-design-leads-4n91)

### 3. nutlope/hallmark —— 反 AI 味设计 skill（+11,566 星，总星约 3.6 万）

面向 Claude Code、Cursor、Codex 的「anti-AI-slop」设计 skill，通过自然语言指令内核 + 渐进式参考加载，让 AI 生成的网页「看起来是被设计的，而不是被生成的」。

链接：[Nutlope/hallmark](https://github.com/Nutlope/hallmark)

### 4. cloudflare/security-audit-skill —— 安全审计 skill（+10,069 星）

Cloudflare 开源的安全审计 Agent Skill，把安全审查能力打包进 coding agent 工作流，本周涨星超 1 万。

链接：[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)

### 5. pingdotgg/t3code —— 多端 AI 编程 GUI（+6,926 星，总星约 3.5 万）

T3 Code 是一款 Web / 桌面 / 移动端多平台接入的 AI 编程 GUI，解决跨设备远程控制本机 AI 编程工具的痛点，重度 AI 辅助编程开发者好评度高。

链接：[pingdotgg/t3code](https://github.com/pingdotgg/t3code)

## 大模型进展

### 国内

- **阿里通义千问 Qwen3 系列**：阿里云公开开放 Qwen3 全系模型免费使用（11 月 2 日动态），覆盖多种参数规模，混合思考模式（Thinking / Non-Thinking）可切换，在中文与代码能力上表现强劲，并支持工具调用。此前 Qwen3.8 系列已于 8 月全线开源，从 2.4 万亿参数旗舰到 27B 轻量版均开放下载与本地部署。[阿里云开发者社区](https://developer.aliyun.com/article/1777451) · [AIKit 模型动态](https://aikitapp.com/zh/weekly/models/)
- **月之暗面 Kimi K3.1**：10 月 24 日程序员节发布，第三方评测 Artificial Analysis 综合智能指数升至全球第四；Kimi K3 系列以 2.8 万亿参数 MoE（激活约 1040 亿）成为全球首个开源的三万亿级参数模型，权重、技术报告及 MoonEP / FlashKDA / AgentEnv 等 Infra 技术已同步开放。[Kimi 官方公告](https://www.kimi.com/news/kimi-k3-open-source) · [硬核看板评测](http://m.toutiao.com/group/7703524688001073674/)
- **DeepSeek**：除 Harness「创造模式」外，DeepSeek-V4-Pro 等旗舰模型保持 MIT 协议完全开源，SWE-bench Verified 80.6%，Codeforces 3206 分，性能比肩顶级闭源模型。[LLM 模型图鉴](https://www.airedirector.com/)
- **腾讯混元 / Kimi K2.6 智能体能力**：央视实测报道，Kimi K2.6 一次最多调动 300 个子智能体，并行完成 4000 个协作步骤，持续代码开发长达 5 天；腾讯混元在海外开发者平台排名第一，输入一句话即可生成微信小程序。[央视网](https://news.cctv.com/2026/05/17/ARTIUUekaDVugGawlh5fLIjH260517.shtml)

### 国外

- **OpenAI**：正式发布 GPT-6 Sol 与 Luna，沿用 GPT-6 Astra 的训练方法，重点推进成本效率；同时被曝在 Codex 后台灰测新一代 GPT-6.2 Astra。另据 The Information，OpenAI 正计划以约 1.4 万亿美元估值融资 300 亿美元。[OpenAI 官方博客](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- **Anthropic**：推出 Claude 5.5 新家族首款模型 Claude Opus 5.5，发布前经 Frontier Design、METR 等外部评估机构测试；官方源码中泄露的 Claude Mythos 5.5 包含面向顶尖网络安全与科研机构的「安全特供版」，据称是无护栏的专业级模型。[Anthropic 官网](https://www.anthropic.com/claude-opus-5-5) · [AIBase](https://news.aibase.com/news/32000)
- **Google**：Gemini 4 Carbon 近期在多榜单夺回全球第一，直接引发 OpenAI 与 Anthropic 的新旗舰竞争。Anthropic 营收暴涨也侧面印证前沿模型商业化空间仍在扩大。[36氪出海](https://eu.36kr.com/zh/p/4051806214214530)

## 新工具 & CLI

- **Amazon Bedrock AgentCore CLI 1.0 正式可用**：AWS 宣布 @aws/agentcore 1.0.0 GA，重构后启动更快、命令结构更统一，开发者可从终端创建、开发、部署并运维 AI agent 及配套资源。[AWS 官方公告](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)
- **Cursor Agent SDK**：将 agent 定义为「一个代码文件夹」，支持用 evals 测试后部署到 Cursor 或自有基础设施，内置安全审查、PR 自动修复、Linear 等模板。[Cursor Agent SDK](https://www.havoptic.com/r/cursor-agent-sdk)
- **Anthropic 客户端 SDK 与 `ant` CLI 批量更新**：发布 Python SDK 2.0.0、TypeScript SDK 1.0.0、C# SDK 13.0.0 等，默认发送 API 版本 2026-10-21。[Claude Platform 发布说明](https://platform.claude.com/docs/en/release-notes/overview)
- **LangGraph v1.2.0**：新增节点级超时、错误恢复与优雅关闭控制；新增 DeltaChannel（beta）只存增量，降低长线程 checkpoint 开销；推出 v3 内容块流式 API。[LangChain Changelog](https://docs.langchain.com/oss/python/releases/changelog)
- **Genkit Go 1.0 + 独立 CLI**：Google 开源 AI 框架 Genkit 发布 Go 1.0，配套独立安装的 CLI 支持 JavaScript / Go / Python 应用，提供快速测试与迭代命令。[Genkit 博客](https://genkit.dev/blog/announcing-genkit-go-1-0/)

## 编程方式

- **GitHub Agentic Workflows 正式可用（GA）**：10 月 28 日起全面开放。用自然语言 Markdown 定义自动化（issue 分诊、CI 失败分析、文档更新、写测试等），编译为标准 Actions YAML，由 GitHub Copilot 或自带 coding agent 驱动，复用现有 runner 与策略约束。[GitHub Changelog](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/)
- **OpenAI GPT-5.3-Codex：任务中交互式编程**：多步开发任务提速 25%，支持任务进行中实时调整方向而不丢失上下文，400K token 记忆窗口可处理大型代码库。[GPT-5.3-Codex 评测](https://ai-damn.com/openai-s-gpt-5-3-codex-arrives-a-coding-partner-that-thinks-like-you)
- **Replit Cloud Agents：需求直达带证据的 PR**：feature request 到来时即为「测试变更 + 视频证据」——agent 在隔离云沙箱中打开运行中的应用模拟客户点击验证，失败则修复再测，最后把截图与录屏附到 PR 上。[Replit 官方博客](https://replit.com/blog/anyone-can-bring-ideas-to-company-codebase)
- **codeArbiter 3.8.1：AI 编码与 GitHub Issue/Project 安全同步**：引入 opt-in 的 tracker 协调，AI agent 完成任务后需显式同步与验证，避免项目管理系统记录被自动改动。[UNDERCODE NEWS](https://undercodenews.com/codearbiter-381-just-updated-ai-coding-workflows-gain-safer-github-issue-and-project-synchronization/)

## 总结

今日趋势：AI 开发的重心正从「发布更强的模型」转向「把 agent 变成可用工具」——DeepSeek 的创造模式、GitHub Agentic Workflows、并行 agent 工作台 Orca、以及反 AI 味的「skill 生态」（impeccable / hallmark）成为本周涨星与讨论的核心；同时国内外新旗舰（GPT-6 Sol/Luna、Claude Opus 5.5、Kimi K3.1）继续刷新能力上限，开源阵营与商业化之争同步加速。
