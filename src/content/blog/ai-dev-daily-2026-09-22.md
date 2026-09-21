---
title: "AI 开发日报 · 2026年09月22日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-22
tags: ["AI日报"]
---

## 今日要闻

### 1. xAI 发布 Grok 4.7，主打编码与知识工作，已上线 GitHub Copilot

9 月 21 日 xAI（SpaceXAI）正式发布 Grok 4.7，称其为迄今最强模型，运行于 2.1 万亿参数之上，并补充了 SpaceX 工程数据进行训练；定位编码与知识工作，输入定价每百万 tokens 2 美元、输出 6 美元。Grok 4.7 已开始在上线 GitHub Copilot 中推出，支持编码 Agent 场景。

来源：[GitHub Changelog](https://github.blog/changelog/2026-09-21-grok-4-7-is-now-available-in-github-copilot/)｜[Unite.AI](https://www.unite.ai/spacexai-releases-grok-4-7-for-coding-and-knowledge-work/)｜[Decrypt](https://demo.decrypt.co/378824/xai-launches-grok-4-7)

### 2. GPT-6 Astra 首次破解 FrontierMath「重大进展」级开放数学难题

据智源社区报道，GPT-6 Astra 联合三位人类研究员，攻克了自 2017 年起悬而未决的重大开放数学难题——AI 证明该题目原本要找的「反例」根本不存在，实现存在性否定证明；同时 AI 还原创性提出一套全新的“投票规则”。这是 GPT-6 Astra 继 9 月初发布后在数学推理上的里程碑式表现。

来源：[智源社区](https://hub.baai.ac.cn/?tag_id=1026)

### 3. Anthropic 发起 Project Glasswing，聚焦金融关键基础设施网络安全

Anthropic 官宣 Project Glasswing，与摩根大通（JPMorganChase）等机构共同评估下一代 AI 工具在关键基础设施防御性网络安全中的应用。该项目为早期阶段合作，小摩认为金融系统网络安全与韧性是其核心使命，将与领先科技机构一道以严谨、独立的路径推进。

来源：[Anthropic](https://www.anthropic.com/glasswing)

### 4. 亚马逊官宣 Kimi K3 在 Amazon Bedrock 正式可用

据每日经济新闻，亚马逊官宣 Kimi K3 接入 Amazon Bedrock。AWS 称这是其平台上首个带显式指令缓存的开放权重模型，支持跨区域推理并沿用与专有模型一致的安全控制；该模型中月之暗面于 7 月发布，为 2.8 万亿参数开源模型。同时新紫光集团与阿里云签署 AI 全栈合作协议。

来源：[每日经济新闻](http://m.toutiao.com/group/7688126652316828210/)｜[新华网](https://www.news.cn/tech/20260717/da893d3a5e1b429ea79d928e02847744/c.html)

### 5. Google DeepMind 密集上新：Gemini 3.8 Flash 与 Live 系列齐发

Google DeepMind 9 月连发多款模型：Gemini 3.8 Flash 与 3.8 Flash Cyber、以及 Gemini 3.8 Live 与 3.8 Live Extended Thinking，同时发布 AlphaGenome Atlas（人类基因组每个可能 DNA 变体的预测图谱）与 WeatherNext 3 全球天气模型。Gemini 3.8 Flash 输入定价低至每百万 tokens 0.75 美元，主打性价比。

来源：[Google DeepMind](https://deepmind.google/)

## 涨星最快项目

（GitHub / TrendShift 趋势，数据截至 2026-09-21）

- [anthropics/claude-code](https://github.com/anthropics/claude-code) — 常驻终端的 Agentic 编码工具，懂代码库并通过自然语言处理 git 流程；单日 +419 星。
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) — 提取 Claude Fable 5.1、Opus 5 等新模型系统提示词的项目，近期持续高热。
- [dietrichgebert/ponytail](https://github.com/dietrichgebert/ponytail) — 让 AI Agent 像“最懒的高级开发”一样思考、减少多余动作的技能；本周 +5.1k 星。
- [zai-org/ZCode](https://github.com/zai-org/ZCode) — Z.ai 的编码 Agent harness，强大、智能、可扩展；本周新进趋势榜。
- [google/ax](https://github.com/google/ax) — Google 的开源 Agentic 编排器（orchestrator）；新上榜。

数据来源：[StartupCorners](https://startupcorners.com/digest/devtools-digest-2026-09-21)｜[TopAIRepos](https://topairepos.com/)｜[TrendShift](https://trendshift.io/weekly)

## 大模型进展

### 国内

- 阿里千问：9 月 20 日开源 Qwen-Image-2.1，7B 视觉生成参数，可在 RTX 3090 运行，覆盖文生图、图片编辑、透明图与原生 2K 输出，单次最多支持 10 张参考图。[来源](http://m.toutiao.com/group/7687965052518826515/)
- DeepSeek：9 月推出 DeepSeek-V4.1-Flash（552B MoE），全新 Causal-Encoder-Decoder 非对称结构，原生多模态视觉理解，上线 API 并以 MIT 许可开放权重；9 月 4 日还发布首个多模态实验版 DeepSeek-V4-Flash-Vision-Exp。[来源](https://www.siliconflow.com/es/models/text-generation)[来源](https://36kr.com/p/3991436755057415)
- 月之暗面：Kimi K3（2.8T 参数、原生视觉、100 万 token 上下文）已在 Amazon Bedrock 正式可用，且为节点上首个带显式指令缓存的开放权重模型。[来源](https://www.mundoia.com.ar/expedientes/moonshot-ai-kimi/)
- 趋势：“大模型开始集体变小”——8 月下旬阿里 Qwen3.8-Flash-Next 与智谱 GLM-5.3-Flash 同日亮相，9 月 DeepSeek 又推 V4.1 Flash，这批千亿级（100B–500B）小参数模型正成为推理性价比新战场。[来源](https://36kr.com/p/3991436755057415)

### 国外

- OpenAI：GPT-6 Astra 于 9 月 3 日发布，9 月 5 日新增 gpt-6-astra 与 gpt-6-astra-pro 及 batch 变体；9 月 9 日发布 Agents API（由 Codex 执行框架支持）与 GPT-Live-1 语音能力、ChatGPT 金融服务版。[来源](https://openai.com/zh-Hans-CN/news/product-releases/?display=list)
- Anthropic：9 月 1 日发布 Claude Fable 5.1 与 Mythos 5.1；发起 Project Glasswing 网络安全倡议。[来源](https://esso.dev/blog-posts/three-frontier-models-in-72-hours-what-changed-in-september-2026)
- Google：Gemini 3.8 Flash / Flash Cyber / Live / Live Extended Thinking 密集升级；发布 AlphaGenome Atlas 与 WeatherNext 3。[来源](https://deepmind.google/)
- xAI：9 月 21 日发布 Grok 4.7，通信 / 编码 / 知识工作定价 $2/$6/M tokens。[来源](https://www.unite.ai/spacexai-releases-grok-4-7-for-coding-and-knowledge-work/)
- Meta：9 月 2 日发布 Muse Spark 1.3，与 Claude Fable 5.1、Gemini 3.8 Flash、GPT-6 Astra 在 72 小时内四连发，掀起 9 月价格战。[来源](https://futuretechnologyhq.com/article/ai-model-releases-september-2026/)

## 新工具 & CLI

- [GitHub Copilot CLI（GA）](https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/) — 终端原生 coding agent，支持 MCP、插件与技能，模型可选，已在 CLI 全面可用。
- [OpenAI Codex CLI](https://dev.to/jangwook_kim_e31e7291ad98/openai-codex-cli-terminal-coding-agent-setup-guide-2026-67o) — 从 TypeScript 全量重写为 Rust，GitHub 星标超 6.7 万；号称让 AI 编码 Agent 离开浏览器、常住终端。
- [Cline CLI 2.0](https://cline.bot/tag/announcements) — 开源编码 Agent 的终端版，面向交互式与自主式 agentic coding 重构，支持免费模型起步。
- [zai-org/ZCode](https://github.com/zai-org/ZCode) — Z.ai 的编码 Agent harness，强调强大、智能、可扩展。
- [google/ax](https://github.com/google/ax) — Google 开源 Agentic 编排器，面向 Agent 工作流组织。

## 编程方式

AI 编程正从 **Vibe Coding** 转向 **Agentic Engineering**：开发者承担需求分析与规格定义，Agent 负责规划架构、跨多文件写代码、创建数据库迁移、更新测试并自我验证。[来源](https://cloud.tencent.com/developer/article/2728832) GitHub Copilot coding agent 新增“模型选择器”，可针对不同任务选择更快的模型或更强的重构模型，把模型选择权交给开发者。[来源](https://github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/)

GitHub 推出的 Project HydraFusion 研究预览继续通过多模型编排追求前沿质量——在受控评估中，其选择性编码工作流匹配或超过 Opus 5 基线，同时降低预估工作流成本；已在 GitHub Copilot 中开放。[来源](https://github.blog/ai-and-ml/) 开发者角色正从“写代码的人”转向编排 Agent 与选择模型，工作流从“AI 建议、开发者审阅”演进为“开发者设定边界、Agent 规划与执行”。

## 总结

今日趋势一句话：9 月进入“基模决战+价格战”深水区——xAI Grok 4.7 加入战局、GPT-6 Astra 在数学推理上再度突破、Kimi K3 出海落地 AWS，同时 Agentic Engineering 与终端化 CLI 正在把开发者工作流推向“Agent 编排”范式。