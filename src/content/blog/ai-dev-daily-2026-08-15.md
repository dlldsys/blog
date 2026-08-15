---
title: "AI 开发日报 · 2026年08月15日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-15
tags: ["AI日报"]
---

## 今日要闻

### 1. 阿里 Qwen 开源 Qwen3.8-27B：27B 稠密模型超越 Qwen3.7-Plus

8 月 15 日，阿里千问正式开源 Qwen3.8 系列模型，首推 Qwen3.8-27B。该模型为原生多模态稠密（Dense）模型，仅用 270 亿参数即在整体性能上超越 Qwen3.7-Plus，在真实编程与办公场景中表现突出。模型支持 262K 原生上下文并可扩展至 1M，采用宽松的 Apache 2.0 协议开源，有望成为本地部署的主力模型。

来源：[科创板日报](https://www.cls.cn/detail/2455055) · [InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 2. Qwen3.8-27B 上线 Ollama，支持 Claude Code 与 OpenCode 集成

阿里 Qwen 团队同步宣布 Qwen3.8-27B 已在 Ollama 平台可用，官方定位为同尺寸下最佳开源模型之一，专为 Agentic 任务与专业工作设计。开发者可直接通过 `ollama launch claude --model qwen3.8` 接入 Claude Code，或通过 Ollama 启动 OpenCode，打通开源模型与主流编码 Agent 工具链。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 3. Google Gemini 3.7 Flash 向 Pro/Ultra 用户全面开放，覆盖 AI Mode 与 Workspace

Google 宣布 Gemini 3.7 Flash 现已向 Gemini 聊天应用中的 Pro 和 Ultra 用户全面开放，覆盖 Gemini Spark、Google 搜索 AI Mode（英语）以及 Google Workspace（首批落地 Google Sheets 画布，支持一句话将电子表格转为迷你应用）。本次更新重点提升多步骤任务的推理与准确性，如串联数十个文件和邮件并整合为单一主文档。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs) · [FelloAI](https://felloai.com/best-ai-models/)

### 4. Perplexity 发布 Search SDK：面向 Agent 的"Search as Code"

Perplexity 于 8 月 15 日发布 Search SDK，这是一款面向 Agent 的 Python 工具包，将"搜索即代码"理念引入开发者应用。该 SDK 允许 Agent 在代码中扇出多个搜索请求，并对结果进行过滤、去重和排序，可嵌入任意 Agent 框架使用，使 Perplexity Computer 成为深度研究场景的有力工具。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 5. xAI 发布 Grok 4.6：后训练刷新，Intelligence Index 跃升至 61

8 月 12 日，xAI 发布 Grok 4.6，并非全新基础模型，而是在 Grok 4.5 基础上通过更长的补充训练、重新生成的微调轨迹和 Agent 环境强化学习带来的提升。Artificial Analysis 智能指数从 56 跃升至 61，与 GPT-5.6 Sol 并列第三，在长程 Agent 任务中所需回合数约为 Opus 5 的一半，定价保持 $2 / $6 不变。

来源：[FelloAI](https://felloai.com/best-ai-models/) · [FutureTools](https://futuretools.io/news?referrer=airehberi.com.tr)

## 涨星最快项目

### 1. PrimeIntellect-ai/prime-agent — 可编程持久 Agent 运行时

近 5 天新增约 +6.1K 星标。一个可编程、持久的 RLM Agent 运行时，支持本地执行复杂工作流并保留会话状态，适用于研究与长时程自动化场景，TypeScript 实现。

来源：[Trending Reader](https://refft.com/en/index.html) · [项目地址](https://github.com/PrimeIntellect-ai/prime-agent)

### 2. cline/cline — 开源编码 Agent

8 月 13 日发布 SDK v0.0.74。一个运行在编辑器中的开源编码 Agent，提供 Node.js 编程式 Agent API（SDK）、终端 UI 与 headless 模式（CLI），支持自定义 Agent、交互式会话管理和安全后台 Agent 执行。

来源：[项目地址](https://github.com/cline/cline)

### 3. n8n-mcp — 面向 Claude 的 n8n 工作流 MCP

总星标约 22,682。一个为 Claude Desktop / Claude Code / Windsurf / Cursor 提供 MCP，让 Agent 自动构建 n8n 工作流，把自动化编排能力注入主流编码 Agent，TypeScript 实现。

来源：[GitHub Ranking AI](https://github.com/yuxiaopeng/Github-Ranking-AI/blob/main/Top100/Claude.md)

### 4. VoltAgent/awesome-ai-agent-papers — 2026 AI Agent 论文精选

收录 2026 年发表于 arXiv 的 AI Agent 生态研究论文，涵盖多 Agent 协作、记忆与 RAG、工具调用、评估与可观测性、安全等方向，是构建 Agent 系统的优质研究索引。

来源：[项目地址](https://github.com/VoltAgent/awesome-ai-agent-papers)

## 大模型进展

### 国内

**阿里 Qwen3.8 系列全面开源**：8 月 15 日开源 Qwen3.8-27B 稠密模型（27B 参数超越 Qwen3.7-Plus，Apache 2.0）；8 月 13 日开放旗舰 Qwen3.8-2.4T-A95B 模型权重，这是 Qwen-Max 级别模型首次开源权重，采用 2.4 万亿参数 MoE 架构、950 亿激活参数、100 万 token 上下文。

来源：[科创板日报](https://www.cls.cn/detail/2455055) · [微博](https://m.weibo.cn/detail/5332076645320021)

**智谱 GLM-5.3 发布**：Z.ai 发布 GLM-5.3 大模型，编码能力提升 50%，并在代码中发现 2400 多个安全漏洞，延续国产大模型在代码智能与安全方向的深耕。

来源：[网易](https://tech.163.com/keywords/5/2/59276a21578b/1.html)

**DeepSeek V4-Flash 0731**：7 月 31 日发布，沿用 284B 总参 / 13B 激活的 MoE 架构与 1M 上下文，MIT 许可与 $0.14 / $0.28 定价不变，但智能指数从 40 跃升至 50，Terminal-Bench v2.1 达 78.7%，成为 Artificial Analysis 全榜最便宜模型（$0.03/任务）。同期"DeepSeek Harness"引发行业关注。

来源：[FelloAI](https://felloai.com/best-ai-models/) · [网易](https://tech.163.com/keywords/5/2/59276a21578b/1.html)

**月之暗面 Kimi K3**：7 月 27 日发布完整开源权重，2.8 万亿参数 MoE、104 亿激活参数、105 万 token 上下文，智能指数 60 为开源模型最高，Arena Agent 榜第三、WebDev 榜第二。

来源：[FelloAI](https://felloai.com/best-ai-models/)

### 国外

**xAI Grok 4.6**：后训练刷新而非新架构，智能指数 56→61 与 GPT-5.6 Sol 并列第三，长程 Agent 任务效率约为 Opus 5 的两倍，$2 / $6 定价不变（超 20 万 token 按 $4 / $12 重新计费）。

来源：[FelloAI](https://felloai.com/best-ai-models/)

**OpenAI GPT-5.6 Sol Ultrafast**：8 月 13 日推出 Ultrafast 服务层级，由 Cerebras 驱动，速度最高提升至标准版 14 倍，每秒最多 750 token，向少量企业客户有限预览。7 月 30 日 Luna 降价 80%、Terra 降价 20%。

来源：[OpenAI 发布说明](https://openai.com/zh-Hant/products/release-notes/) · [FelloAI](https://felloai.com/best-ai-models/)

**Anthropic Claude Opus 5 与安全合规**：7 月 24 日发布 Claude Opus 5，智能指数 63 与 Agent 指数 55.3 双双登顶 Artificial Analysis。8 月 15 日发布水印技术 FAQ 回应欧盟 AI 法案合规，并依据 RSP 发布 8 月风险报告，评估认为前沿模型在自主性、生化武器等威胁模型下风险可控。

来源：[FelloAI](https://felloai.com/best-ai-models/) · [InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**Meta Muse Spark 1.2 + Muse Code**：8 月 5 日发布，智能指数 51→54（主要增益在 Agent 能力，GDPval-AA Elo 从 1371 跃至 1631），并推出首个终端编码 Agent Muse Code（macOS/Linux，无需桌面应用与订阅），新增 Contributor 层级定价低至 $0.10 / $0.20。

来源：[FelloAI](https://felloai.com/best-ai-models/)

## 新工具 & CLI

### 1. Perplexity Search SDK — 面向 Agent 的搜索即代码工具包

Python 工具包，允许 Agent 在代码中扇出多个搜索请求并过滤、去重、排序结果，可嵌入任意 Agent 框架，让深度研究场景获得结构化搜索能力。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 2. Claude Agent SDK v0.3.232 — 编程式构建 Claude Code Agent

Anthropic 持续更新 Claude Agent SDK，支持以编程方式构建具备理解代码库、编辑文件、运行命令和执行复杂工作流能力的自主 Agent，`npm install @anthropic-ai/claude-agent-sdk` 即可使用。

来源：[npm](https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk)

### 3. Cline SDK v0.0.74 — 开源编码 Agent 编程 API

8 月 13 日发布，提供 Node.js 编程式 Agent API 与扩展导出，配合 Cline CLI 的终端 UI、headless 模式与 shell 命令能力，让开发者可在自有工具中嵌入编码 Agent。

来源：[GitHub](https://github.com/cline/cline)

### 4. OpenAI Codex CLI v0.147.0 — 无人 CI/CD Agent 执行

新增 `--approve-for-me` 标志，将审批决策委托给独立 LLM 审查者，使无人工值守环境下的真正无人 CI/CD Agent 执行成为可能；MCP 2026 协议同步确定。

来源：[Codex Weekly](https://www.bighatgroup.com/ko/blog/codex-weekly-2026-08-07/)

### 5. GitHub Copilot CLI 与 Copilot SDK 正式 GA

GitHub Copilot CLI 正式 GA，支持终端原生多步骤工作流、智能模型选择与深度撤销，Plan 模式制定策略后可切 Autopilot 自主执行；Copilot SDK 同步 GA，覆盖 Node.js、Python、Go、.NET、Rust 和 Java，平台团队可将 AI Agent 能力嵌入内部工具。

来源：[搜狐](https://m.sohu.com/a/1061732059_120959233/)

### 6. LangChain 更新：支持 OpenAI 3.0 SDK 与 gemini-3.7-flash

8 月 15 日发布更新，支持 OpenAI 3.0 SDK（基于 httpx2）并新增 gemini-3.7-flash 模型支持，同时包含工具调用与结构化输出领域的核心可靠性修复。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

## 编程方式

### AI Coding 进入"可执行的软件工程 Agent"阶段

截至 2026 年 8 月，AI Coding 已从早期代码补全与聊天问答，进入可执行的软件工程 Agent 阶段。主流产品普遍具备读取代码库、修改多文件、调用终端、运行测试等端到端能力，开发者角色正从"写代码"转向"调度与审查 Agent"。

来源：[CSDN](https://blog.csdn.net/qq_65052774/article/details/163646044)

### Claude Code 多会话实时协作与工具懒加载

Anthropic 为 macOS 版 Claude 引入多会话实时协作，让开发者跨独立编码线程共享上下文；Claude Code 还采用"懒加载"策略管理工具描述，上下文占用超 10% 时自动切换搜索模式，早期用户报告 token 消耗显著下降。

来源：[AWNews](https://www.awnews.org/claude-ai-adds-real-time-multi-session-collaboration-on-macos/) · [AI Damn](https://ai-damn.com/claude-code-s-latest-updates-streamline-ai-development-workflows-1768778744349)

### Replit Agent3：自主性提升 10 倍

Replit 发布 Agent3，号称自主性较前代提升 10 倍，在代码生成、智能调试和项目管理方面全面升级，进一步降低从想法到可运行应用的人工介入。

来源：[AI Damn](https://ai-damn.com/replit-unveils-agent3-a-10x-more-autonomous-ai-coding-assistant-1757632590290)

## 总结

今日 AI 开发的核心主线是"开源小模型崛起与 Agent 工具链成熟并行"——阿里以 27B 稠密模型超越自家 Plus 并打通 Ollama 接入 Claude Code，Perplexity 用 Search SDK 把搜索能力变成 Agent 可调用的代码原语，而 Claude Agent SDK、Cline、Codex CLI 和 Copilot SDK 的密集更新，标志着编程式编码 Agent 正从实验走向生产标配。
