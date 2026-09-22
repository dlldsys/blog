---
title: "AI 开发日报 · 2026年09月23日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-23
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI 再推 GPT-6 Sol 与 Luna，API 价格较 GPT-5.6 促销价再降 50%

美东时间 9 月 22 日 OpenAI 发布 GPT-6 Sol 与 GPT-6 Luna 两款新模型，进一步补齐 GPT-6 产品线，并将部分 GPT-6 Astra 的能力带入更快、更便宜的档位。核心看点是价格：Sol 与 Luna 的 API 定价较 GPT-5.6 促销价低 50%，OpenAI 称因缓存与推理效率提升，将节省的成本直接让利给用户；即日起面向 Plus、Pro、Business、Enterprise 及 Edu 用户，在 ChatGPT Work 和 Codex 中提供。

来源：[华尔街见闻](http://m.toutiao.com/group/7688454539766170173/)｜[OpenAI API 平台](https://openai.com/zh-Hans-CN/api/)

### 2. Anthropic 发布 Claude Opus 5.5，单 token 更省、运行成本较 Opus 5 降约 40%

Anthropic 周二（9 月 22/23 日）发布 Claude Opus 5.5，定位为更省 token 的版本，编码、电脑操作与知识工作基准领先，运行成本较 Opus 5 低约 40%。API 定价为每百万输入 token 4 美元、输出 20 美元（上一代 Opus 5 分别为 5/25 美元）。这是 CEO 阿莫代伊呼吁放缓 AI 发展后推出的首款大模型，据其平台文档，Opus 5.5 可与 Claude Fable、Claude Mythos 系列在推理过程中切换。

来源：[Anthropic 官方](https://www.anthropic.com/claude-opus-5-5)｜[凤凰网](http://feng.ifeng.com/c/8wdyNpBvPRP)｜[新浪财经](http://m.toutiao.com/group/7688403881432236572/)

### 3. 小米开源新一代原生全模态模型 MiMo-V2.6 系列

智东西 9 月 22 日报道，小米大模型团队发布并开源 MiMo-V2.6 系列，包含两款原生全模态模型 MiMo-V2.6-Pro 与 MiMo-V2.6-Flash，并将逐步开放 MiMo-V2.6-Pro-UltraSpeed——同等智力水平下输出速度较 MiMo-V2.6-Pro 提高 20 倍。系列强调全模态原生能力，主打端侧与成本可控。

来源：[智东西](http://m.toutiao.com/group/7688307520355566108/)

### 4. 阿里千问 Qwen3.8-27B 登顶 Hugging Face 历史最受欢迎开源模型

9 月 16 日，Hugging Face 更新"Most likes"开源大模型榜单，阿里通义实验室 Qwen3.8-27B 超越 FLUX.1、DeepSeek-R1、Kimi-K3、Meta-Llama-3 等，成为平台历史上最受欢迎的开源模型。该排名反映开发者偏好，凸显开源模型"实用性优先"的竞争转向。

来源：[AIBase](https://www.aibase.com/news/31101)｜[搜狐](https://news.sohu.com/a/1076862016_122672843)

## 涨星最快项目

（GitHub / ToPAIRepos + TrendShift 趋势，数据截至 2026-09-23）

- [cloudflare/security-audit-skill](https://trendshift.io/repositories/64056) — 面向 coding-agent 的多阶段安全审计 skill，产出可独立验证的机器可读结论；本周 +15k 星（累计 20k）。
- [affaan-m/ECC](https://trendshift.io/repositories/21488) — agent harness 性能优化系统，提供 skills / instincts / memory / 安全能力，支持 Claude Code、Codex、Opencode、Cursor 等；本周 +6.3k 星（累计 265k）。
- [stablyai/orca](https://trendshift.io/repositories/26256) — 面向"多 Agent 舰队"并行运行的 Agent 开发环境（ADE），可用自有订阅跑任意 coding agent；本周 +6.0k 星（累计 75k）。
- [zai-org/ZCode](https://trendshift.io/repositories/250935) — Z.ai 的编码 Agent harness，强调强大、智能、可扩展；本周 +4.2k 星。
- [google/ax](https://trendshift.io/repositories/34611) — Google 开源的 Agentic 编排器（orchestrator）；本周 +1.8k 星。

数据来源：[ToPAIRepos](https://topairepos.com/)｜[TrendShift](https://trendshift.io/weekly)

## 大模型进展

### 国内

- 小米：9 月 22 日开源 MiMo-V2.6-Pro / Flash 原生全模态模型，并预告 UltraSpeed 版本输出速度提升 20 倍。[来源](http://m.toutiao.com/group/7688307520355566108/)
- 阿里千问：Qwen3.8-27B 成为 Hugging Face 历史上最受欢迎的开源模型，9 月 20 日还开源了 Qwen-Image-2.1 视觉生成模型（7B 参数，可在 RTX 3090 运行）。[来源](https://www.aibase.com/news/31101)
- 腾讯混元：Hy4-preview 为新一代生产力旗舰模型，约 770B 参数，采用 Gated DSA + iHC 残差设计，原生支持 1M 上下文。[来源](https://www.siliconflow.cn/models)
- DeepSeek：DeepSeek-V4.1-Flash（552B MoE，1M 上下文）持续在 API 侧落地，9 月 10 日发布，主打推理性价比。[来源](https://renovateqr.com/blog/ai-model-releases-2026)
- 月之暗面：Kimi-K2-thinking 深度思考模型已在讯飞星辰 MaaS 平台上线，具备通用 Agentic 能力、支持多步工具调用。[来源](https://maas.xfyun.cn/modelSquare?ch=maas_lm_p9U)

### 国外

- OpenAI：9 月 22 日发布更便宜的 GPT-6 Sol / Luna（较 GPT-5.6 促销价低 50%），面向 ChatGPT Work 与 Codex；9 月 10 日还推出 Agents API 公测版。[来源](http://m.toutiao.com/group/7688454539766170173/)[来源](https://36kr.com/newsflashes/3978211289053957)
- Anthropic：发布 Claude Opus 5.5，编码 / 电脑操作 / 知识工作基准领先，运行成本较 Opus 5 降约 40%；此前 9 月 1 日已发布 Claude Fable 5.1 与 Mythos 5.1。[来源](https://www.anthropic.com/claude-opus-5-5)
- xAI：Grok 4.7（约 2.1T 参数）已开始在上线 GitHub Copilot 提供编码 Agent 能力，主打编码与知识工作。[来源](https://github.blog/changelog/2026-09-21-grok-4-7-is-now-available-in-github-copilot/)
- Google：Gemini 3.8 Flash / Live 等系列密集上新，Flash 输入低至每百万 token 0.75 美元；Gemini API 文档同步更新图像（Nano Banana 2 Lite）与视频（Veo 3.1）端点。[来源](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
- 政策背景：特朗普在联合国大会宣布美国将把"人工智能（AI）"改称"超级智能（Super Intelligence）"，并反对建立全球性 AI 限制机制。[来源](https://tech.ifeng.com/c/8wdfq4mmKU0)

## 新工具 & CLI

- [OpenAI Agents API（公测）](https://36kr.com/newsflashes/3978211289053957) — 通过 API 构建并运行云端智能体，沿用支持 Codex 的 Agent 执行框架与基础设施，公测期不额外收费、按用量计费。
- [stablyai/orca](https://github.com/stablyai/orca) — 并行 Agent 舰队 ADE，桌面 / 移动 / 远程运行，支持自带订阅跑任意 coding agent。
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) — 把安全审计固化为 coding-agent skill 的开源项目，产出机器可读、可独立核查的结论。
- [vercel-labs/json-render](https://github.com/vercel-labs/json-render) — Vercel 的 Generative UI 框架，用结构化 JSON 驱动动态 UI 渲染。
- [BuilderIO/agent-native](https://github.com/BuilderIO/agent-native) — 专门用于构建 agentic app 的框架（The agentic app framework）。
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — DeepSeek 的开源 Agent harness，本周登上趋势榜。

## 编程方式

AI 编程正从"单 Agent"走向"多 Agent 舰队"编排：以 [stablyai/orca](https://trendshift.io/repositories/26256) 为代表的 ADE 让开发者并行调度多个 coding agent，而 [affaan-m/ECC](https://trendshift.io/repositories/21488) 等 harness 优化系统则把 skills / instincts / memory / 安全整合进 Claude Code、Codex、Opencode、Cursor 等主流工具，形成可复用的"Agent 开发范式"。安全性也由传统"代码审查"升级为 agent 化的"多阶段安全审计 skill"（cloudflare/security-audit-skill）。

另一值得关注的范式是"决策小模型"：从 [NandhaKishorM/laya](https://trendshift.io/repositories/244591)、[mizorewww/laya-mlx](https://trendshift.io/repositories/248935)（其 MLX 端侧运行时 7–14ms 内完成短决策）到 [jaredpalmer/kev](https://trendshift.io/repositories/246657)（基于 Qwen2.5-0.5B 的 tiny 决策模型），Agent 内部开始用更小、更快的决策模型替代冗长的文本生成步骤，被称为"fast thinking"分层。

## 总结

今日趋势一句话：9 月下旬进入全景式"降价+下沉"——OpenAI 用低价 Sol/Luna 加速 Astra 能力下放、Anthropic 以 Opus 5.5 压缩 40% 运行成本，同时多 Agent 舰队编排、harness 优化与决策小模型正在重构开发者工作流，开源侧则有阿里 Qwen3.8-27B 登顶 Hugging Face 与小开通 MiMo-V2.6 共同领跑。