---
title: "AI 开发日报 · 2026年07月11日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-11
tags: ["AI日报"]
---

## 今日要闻

### 1. Meta 发布 Muse Spark 1.1，首次开放付费 API

7 月 9 日，Meta 超级智能实验室（Meta Superintelligence Labs，由 Alexandr Wang 领导）发布多模态推理模型 Muse Spark 1.1，这是 Meta 首个通过付费 API（Meta Model API）向开发者开放的模型。Muse Spark 1.1 面向智能体任务优化，可主动管理 100 万 token 上下文窗口，在工具调用基准 MCP Atlas 上得分 88.1、JobBench 54.7，均超越 Claude Opus 4.8 与 GPT-5.5；但纯编码能力（Terminal-Bench 2.0 为 59.0）仍落后 GPT-5.5（82.7）。API 定价 $1.25/$4.25 每百万输入/输出 token，注册即赠 $20 免费额度。

来源：[DataNorth](https://datanorth.ai/news/meta-releases-muse-spark-1-1-agentic-ai-model) · [36氪](https://36kr.com/p/3889553810504194) · [Fortune（v3finmedia 转载）](https://v3finmedia.online/2026/07/11/meta-releases-latest-update-of-ai-model-muse-spark-as-tech-giant-accelerates-ai-push-under-alexandr-wang-fortune/)

### 2. AI 拟人化新规 7 月 15 日施行，豆包、千问下线自建智能体

《人工智能拟人化互动服务管理暂行办法》将于 7 月 15 日正式施行，这是全球首个专门针对 AI 情感陪伴、虚拟伴侣等场景的国家级监管规则，聚焦"模拟自然人人格特征、思维模式和沟通风格的持续性情感互动服务"。配合新规落地，豆包、通义千问、腾讯元宝、网易等平台纷纷宣布于 7 月 15 日下线用户自建智能体功能，用户可在过渡期查看历史数据，10 月 15 日后未备份数据统一清理。

来源：[新华网](http://www.xinhuanet.com/tech/20260708/03036e8acdf34710a9d35e4cd52141d5/c.html) · [21世纪经济报道（头条转载）](http://m.toutiao.com/group/7660535328758907427/) · [Latham & Watkins 法律解读](https://www.lw.com/admin/upload/SiteAttachments/China-Introduces-Rules-for-AI-Companion-and-Emotional-Interaction-Services.pdf)

### 3. DeepSeek-V4 Preview 上线，7 月 24 日弃用旧 API 标识

7 月 1 日，DeepSeek 发布 DeepSeek-V4 Preview，强化 Agent 能力与推理，并在 API 中引入两个变体：`deepseek-v4-flash`（非思考模式，替代 `deepseek-chat`）与 `deepseek-v4-pro`（可配置 `reasoning_effort` 的思考模式，替代 `deepseek-reasoner`）。旧标识将于 7 月 24 日 15:59 UTC 弃用。新 API 同时兼容 OpenAI 与 Anthropic 两种格式，Claude Code、GitHub Copilot、OpenCode 可零代码改动接入。V4 正式版此前已定档 7 月 15 日全量上线。

来源：[JLS42（DeepSeek 公告整理）](https://jls42.org/en/news/ia-actualites-1-jul-2026) · [DeepSeek 官网](https://deepseek.com/en/)

### 4. GitHub Copilot 五连更新，首个开源权重模型进入选择器

7 月 1 日，GitHub 同步发布五项 Copilot 更新：Copilot Vision（多模态图像/PDF 识别）正式可用；VS Code 浏览器工具（Agent 可控制真实浏览器）正式可用；月之暗面 Kimi K2.7 Code 成为 Copilot 模型选择器中首个可选的开源权重模型；Copilot CLI 与 SDK 支持会话级 AI credit 限额（`--max-ai-credits`）；Copilot CLI 新增 Auto 模式按任务自动路由最优模型并享 -10% credit 折扣。

来源：[JLS42（GitHub Changelog 整理）](https://jls42.org/en/news/ia-actualites-1-jul-2026) · [4sysops（HyDRA 智能路由）](https://4sysops.com/archives/github-copilot-cli-introduces-intelligent-task-routing-with-hydra/)

### 5. Together AI 完成 8 亿美元 C 轮融资，押注开源模型生产化

7 月 1 日，Together AI 宣布完成 8 亿美元 C 轮融资，并附带超 500 MW 独立投资的算力承诺，投资方包括 NVIDIA、Aramco Ventures、General Catalyst、Salesforce Ventures 等。其核心论点是闭源专有 LLM 在大规模生产中成本不可持续，而 DeepSeek、Kimi、GLM 等开权重模型正以 6-20 倍的成本优势缩小质量差距（案例：Decagon 迁移后推理成本降低 6 倍）。

来源：[Together AI 公告](https://www.together.ai/blog/announcing-our-series-c) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

## 涨星最快项目

以下数据来自 2026 年 6 月 GitHub Trending 飙星榜（月增 Star 排序），聚焦智能体技能与视频自动化赛道：

1. **calesthio/OpenMontage** — 世界首个开源 AI 视频制作系统，12 条流水线 + 52 种工具，覆盖从剧本研究到最终合成。月增 +22,408 ★，总 27k ★。[GitHub](https://github.com/calesthio/OpenMontage)

2. **DeusData/codebase-memory-mcp** — 将代码库索引为持久知识图谱的高性能 MCP 服务器，为 AI 编程助手提供长期记忆。月增 +16,051 ★，总 19.7k ★。[GitHub](https://github.com/DeusData/codebase-memory-mcp)

3. **mukul975/Anthropic-Cybersecurity-Skills** — 817 个结构化网络安全技能，映射 MITRE ATT&CK 等 6 大框架的可插拔 Agent 模块。月增 +11,207 ★，总 22.7k ★。[GitHub](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

4. **mvanhorn/last30days-skill** — 跨 Reddit/X/HN/Polymarket 等平台一键研究任意话题的 AI 技能包。月增 +20,899 ★，总 47.4k ★。[GitHub](https://github.com/mvanhorn/last30days-skill)

5. **OpenClaw** — 自托管个人 AI 助手，4 个月登顶 GitHub 历史 Star 榜第一（约 36.2 万 ★），超越 Linux 和 React，主打多渠道打通与本地可控。[GitHub](https://github.com/OpenClaw/OpenClaw)

> 数据来源：[51CTO GitHub 热点项目盘点](https://www.51cto.com/aigc/11880.html) · [东方深明（头条转载）](http://m.toutiao.com/group/7658846644049379846/)

## 大模型进展

### 国内

- **DeepSeek V4** — 7 月 1 日发布 Preview，推出 V4 Flash / V4 Pro 双 API 变体，兼容 OpenAI 与 Anthropic 格式，旧标识 7 月 24 日弃用；正式版 7 月 15 日全量上线，强化百万级长文档解析与工业代码生成。（[JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)）

- **通义千问 Qwen 3.7** — 5 月阿里云峰会发布的旗舰模型，万亿参数 Max + 密集 Plus 双版本，首创全域思考模式（All-field Thinking），Agentic Coding 达国产第一、全球前三（SWE-bench Verified 70%+），衍生模型超 11,300 个。（[CSDN](https://blog.csdn.net/xyghehehehe/article/details/161263637)）

- **文心一言 App** — 7 月 1 日上线"深度阅读"与"图表生成"能力，可对百页以上行业报告/PDF 数秒提取核心论点并生成结构化图表，提升 C 端办公学习生产力。（[新浪](https://k.sina.cn/article_5182171545_134e1a99902002gff8.html)）

- **腾讯混元 Hy3** — 7 月 6 日发布，295B 参数 MoE 模型，激活参数仅 21B，附带 3.8B MTP 层用于投机解码，上下文 256K，Agent 能力显著跃升，以 Apache 2.0 开源。（[微博](https://m.weibo.cn/detail/5318802653839393)）

- **Kimi K2.7 Code** — 月之暗面旗下编码模型，成为 GitHub Copilot 模型选择器中首个可选的开源权重模型，由 GitHub 托管于 Microsoft Azure。（[JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)）

### 国外

- **Meta Muse Spark 1.1** — 7 月 9 日发布，100 万 token 上下文，工具调用与智能体编排基准领先 Claude Opus 4.8 与 GPT-5.5，但纯编码落后；定价 $1.25/$4.25，为 Meta 首个付费 API 模型。（[DataNorth](https://datanorth.ai/news/meta-releases-muse-spark-1-1-agentic-ai-model)）

- **Anthropic Claude Sonnet 5** — 7 月 1 日发布，号称"最 Agent 化的 Sonnet"，可自主规划、使用浏览器和终端，性能接近 Opus 4.8 但定价更低（$2/$10 每百万 token），并入驻 Slack。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/) · [掘金](https://aicoding.juejin.cn/post/7658290915859087370)）

- **Anthropic Claude Fable 5** — 经历美国政府出口管制对峙后于 7 月 1 日全球恢复，Anthropic 训练新安全分类器拦截率达 99%，并联合 Amazon、Microsoft、Google 发布行业级越狱评估框架。（[JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)）

- **Google Gemini Spark** — 可自主完成多步骤任务的 AI Agent，本周扩展至 macOS 应用并可访问本地文件，能跨 Gmail、Drive、Tasks、Keep 链式完成文件发现、数据提取与邮件撰写。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

- **xAI Grok Voice Agent Builder** — 7 月 1 日开启 Beta，基于 Grok Voice Think Fast 1.0 语音到语音模型，2 分钟内无代码构建生产级语音 Agent，内置 80+ 语音、25+ 语言，定价 $0.05/分钟。（[xAI 公告](https://x.ai/news/grok-voice-agent-builder)）

## 新工具 & CLI

- **Codex CLI v0.144.0** — 7 月 9 日随 ChatGPT/Codex 合并发布，新增 `writes` 审批模式（只读自动执行、写操作需确认）、MCP 交互式 OAuth 认证、应用服务器宿主认证，`config.toml` 与 hooks 不受影响。（[codex.danielvaughan.com](https://codex.danielvaughan.com/2026/07/10/chatgpt-work-codex-unification-cli-developer-guide-scheduled-tasks-unified-runtime/)）

- **OpenAI openai-cli** — OpenAI 推出的命令行工具，将 AI 能力直接带入终端，减少在 Python 脚本与终端窗口间切换。（[ai-damn.com](https://ai-damn.com/openai-s-new-cli-tool-brings-ai-power-to-your-terminal-1778213693127)）

- **Devin Security Swarm** — Cognition 7 月 1 日发布的多智能体应用安全系统，基于 Agentic MapReduce 架构，在 50 个真实 CVE 上召回率 72%（$90/scan），比 Claude Security 便宜 30% 并自动开 PR 修复。（[Cognition 公告](https://cognition.com/blog/introducing-devin-security-swarm)）

- **Hugging Face Kernels 重构** — 7 月 6 日发布，支持无云成本运行模型，计算成本降低 40% 并通过 ZeroGPU 提供免费 GPU，利好初创团队。（[formation-en-ia.fr](https://formation-en-ia.fr/kernels-ia-hugging-face-revolutionne-lacces-aux-modeles-2026/)）

- **Cloudflare AI 爬虫管控** — 7 月 1 日宣布自 9 月 15 日起默认阻断同时抓取广告网站用于搜索索引与 AI 训练的爬虫，按行为而非身份管控，重塑 AI 训练数据获取方式。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

## 编程方式

- **Amazon CTO 谈 AI 编程浪潮** — 7 月 11 日，亚马逊 CTO 发表观点文章，探讨开发者如何驾驭 AI 驱动的编程浪潮，强调在 Agent 化开发中保持工程纪律与成本意识。（[Fortune（v3finmedia 转载）](https://v3finmedia.online/2026/07/11/amazons-cto-on-how-developers-can-ride-out-the-ai-powered-coding-wave-fortune/)）

- **企业 AI 成本管控成新常态** — 据 404 Media 获取的内部文件，Citi、Atlassian、Adobe、Amazon、GitHub、Accenture 等企业纷纷限制高端模型。Atlassian 月度 AI 支出从 2025 年 8 月的 500 万美元飙升至 2026 年 5 月的 1500 万美元（9 个月涨 200%），年化超 1.2 亿美元，"AI for everything"转向"AI for the right things"。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

- **多 Agent 编码小队兴起** — 开发者开始组合 Claude Code + Cursor + GitHub Copilot 形成多 Agent 协作：Cursor 负责多文件规划执行、Claude Code 负责研究与审查、Copilot 负责快速补全与测试，架构可按偏好灵活混搭。（[ivern.ai](https://ivern.ai/blog/multi-agent-coding-workflow-claude-code-cursor-copilot)）

- **Microsoft "Aion" 系统曝光** — 泄露视频显示微软正探索围绕 AI Agent 重构的轻量操作系统 Aion，以 Edge 与 Web 应用为核心，对标 Chrome OS，呼应 Build 2026 公布的 Project Solara（基于 Android 的 Agent 驱动设备参考设计）。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

## 总结

今日 AI 行业的主线是"智能体全面落地"与"成本/合规双重约束"——Meta Muse Spark 1.1 以工具编排能力入局、GitHub Copilot 引入首个开源权重模型、Devin 与 Grok Voice 让 Agent 渗透安全与语音场景；与此同时，国内 AI 拟人化新规倒逼平台收缩，海外企业开始认真算清 AI 账单，AI 正从"能用"走向"用得起且用得对"。
