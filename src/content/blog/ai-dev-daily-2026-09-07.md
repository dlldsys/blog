---
title: "AI 开发日报 · 2026年09月07日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-07
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI GPT-6 Astra 全量开放，总裁称"AGI 时代来了"

GPT-6 Astra 于 9 月 3 日发布，9 月 5 日面向所有付费用户全量推送，API 定价为上一代约 2.5 倍。官方数据显示其在高端数学基准 FrontierMath Tier 4 上得分 97.6%，ARC-AGI-3 得分从 7.8% 大幅跃升，能力重点覆盖 Computer Use 与长程任务执行。

来源：[新华网客户端](https://app.xinhuanet.com/news/article.html?articleId=202609047f11b43604434f26964cc8d40099ef44) · [澎湃·明亮公司](https://m.thepaper.cn/newsDetail_forward_34013011)

### 2. OpenAI、Anthropic、Google、Meta 四天内各发新旗舰模型

从 8 月 31 日到 9 月 3 日，四家前沿实验室在四天内相继发布新一代旗舰模型，OpenAI 为 GPT-6 Astra、Anthropic 为 Claude Fable/Mythos、Google 与 Meta 各有新旗舰。如此密集的同期发布本身并不寻常，业界分析认为，更值得关注的不是基准成绩，而是各家的发布节奏与竞争策略。

来源：[WowTale 综述](https://en.wowtale.net/2026/09/05/235011/) · [LLM Gateway 时间线](https://llmgateway.io/timeline)

### 3. Anthropic 公开电商 Agent 生产部署架构：Skill 取代 Subagent

Anthropic 总结过去一年在电商、出行、票务等行业落地 Commerce Agent 的实践经验，核心架构为标准 Agent Loop（Claude）+ Skills + Tools，外加完整 Eval 体系，主张"一个模型 + Agent 循环"，用 Skills 管理长尾能力，而不使用意图路由器或领域专用子 Agent。

来源：[微博·黄建同学（Anthropic 架构解读）](https://m.weibo.cn/detail/5340411569635439)

### 4. 工信部发布《人工智能中小企业创业支持计划（2026—2028年）》

据人民日报，工信部近日发布该支持计划，提出用 3 年时间，在行业应用、数据服务、智能算力等重点领域培育一大批创新活力强、成长潜力大的人工智能创业企业。

来源：[人民日报电子版](http://paper.people.com.cn/rmrb/pad/content/202609/07/content_30179394.html)

### 5. 国产大模型进入"周抛时代"：Qwen、GLM、混元集中上新

上周阿里千问 Qwen3.8-Flash（总参 125B、每个 token 仅激活 6B）、智谱 GLM-5.3-Flash（总参 320B、激活 18B）与腾讯混元 Hy4 preview 轻量版集中上线；再往前两周，DeepSeek V4 Pro、谷歌 Gemini 3.7 Flash、智谱 GLM-5.3 在 48 小时内相继亮相。

来源：[Tech星球（今日头条）](http://m.toutiao.com/group/7681680336442671616/) · [Tech星球](http://m.toutiao.com/group/7680544937716367915/)

## 涨星最快项目

本周 AI 生态中开源基础设施与 Computer Use / 安全智能体项目持续走强：

- **NVIDIA/NemoClaw** ⭐ 约 22,324 — 在 NVIDIA OpenShell 中以受管理的推理更安全地运行 Hermes、LangChain Deep Agents、OpenClaw 等 Agent。 ([GitHub](https://github.com/morpheusadam/awesome-ai-200))
- **vxcontrol/pentagi** ⭐ 约 22,193 — 用 Go 实现的自主 AI Agent 系统，可执行复杂的渗透测试任务。 ([GitHub](https://github.com/morpheusadam/awesome-ai-200))
- **trycua/cua** ⭐ 约 22,060 — 面向 Computer-Use Agent 的开源基础设施，提供沙箱、SDK 与基准来训练和评估能控制完整桌面的 AI Agent。 ([GitHub](https://github.com/morpheusadam/awesome-ai-200))
- **firecrawl** ⭐ 约 174,513 — 面向 Agent 的"上下文 API"，已成为 web-to-LLM 数据摄入的事实标准，持续位于 AI 基础设施热门榜前列。 ([AI Open Source Trends](https://github.com/xiehd77-del/agents-radar/issues/806))
- **ollama** ⭐ 约 179,804 — 本地运行前沿模型最简单的方式，作为推理基础设施持续保持高热度。 ([AI Open Source Trends](https://github.com/xiehd77-del/agents-radar/issues/806))

## 大模型进展

### 国内

- **阿里通义千问**：Qwen3.8-Max 旗舰（2.4 万亿参数、激活 95B）9 月 2 日更新快照版本 qwen3.8-max-0902，编码深度再突破，可驾驭更复杂的工程级项目与长程自主开发，协作智能体能力显著增强。 ([千问平台](https://platform.qianwenai.com/docs/changelog/models) · [Qwen 站点](https://qwen3lm.com/))
- **智谱 GLM**：GLM-5.3-Flash（320B 总参、激活 18B）上线；同时上线了 6 元/月的 Deep Research 套餐，掀开大模型低价套餐抢用户。 ([Tech星球](http://m.toutiao.com/group/7680544937716367915/) · [微博·杜子建](https://m.weibo.cn/detail/5340413931028728))
- **腾讯混元**：9 月 1 日发布最新一代旗舰模型 Hy4 preview 的轻量版模型。 ([Tech星球](http://m.toutiao.com/group/7680544937716367915/))
- **DeepSeek**：已进入 V4 系列时代（V4 Pro、V4 Flash 等不同定位），官方透明度页面显示 DeepSeek-V4 于 2026 年 4 月发布。 ([CSDN 综述](https://blog.csdn.net/qq_40374604/article/details/164109733))
- **月之暗面 Kimi**：旗舰模型 Kimi K3（2.8 万亿参数，基于 KDA 混合线性注意力与 Attention Residuals）原生支持视觉理解，8 月在模型服务上架。 ([阿里云 Model Studio](https://help.aliyun.com/en/model-studio/newly-released-models))

### 国外

- **OpenAI**：GPT-6 Astra 发布并全量开放，主打量产 Computer Use 与长程任务执行能力；为留出安全评估期，最先进的网络安全能力暂限于部分测试人员。 ([新华网](https://app.xinhuanet.com/news/article.html?articleId=202609047f11b43604434f26964cc8d40099ef44))
- **Anthropic**：此前已发布 Claude Fable 5.1 / Mythos 5.1 主打编程与知识工作，本周更公开电商 Agent 生产架构，其 Claude Agent SDK 生态高速增长。 ([微博·黄建同学](https://m.weibo.cn/detail/5340411569635439) · [Agent 框架选型](https://gitcode.csdn.net/6a1a376910ee7a33f2766288.html))
- **开放生态**：9 月至今已有 6 个新模型来自 5 个提供方登上 LLM Gateway；HuggingFace 发布紧凑开源模型 SmolLM3，被视作在效率上的新基准。 ([LLM Gateway](https://llmgateway.io/timeline) · [SmolLM3](https://ai-damn.com/hugging-face-releases-smollm3-a-compact-ai-model-rivaling-larger-counterparts-1752102544585))

## 新工具 & CLI

- **OpenAI Codex CLI** — 全面开源的终端编码 Agent，将 AI 模型与本地代码、计算任务打通，采用 Apache 2.0 协议。 ([TechCrunch 报道](https://texxr.com/884725/openai-debuts-codex-cli-for-terminals))
- **阿里 Qoder CLI** — 阿里巴巴推出的 AI 命令行编码工具，官方称可显著提升编码效率。 ([报道](https://ai-damn.com/alibaba-unveils-qoder-cli-ai-tool-boosts-coding-efficiency-1760674288206))
- **GitHub Copilot CLI v1.0.83（9月4日）** — 新增 Windows 11 任务栏运行会话展示与悬浮状态卡、MCP OAuth 登录的 CIMD 支持，自定义 Agent 可并列监听多个模型并按序尝试。 ([Release 说明](https://www.havoptic.com/r/github-copilot-v1.0.83))
- **Cline CLI** — 在终端中以交互或 headless 方式运行开源编码 Agent，支持 `npm i -g cline`，并可管理 MCP 服务器、动态创建自定义工具。 ([Cline](https://github.com/cline/cline))
- **OpenCode** — 开源 AI 编码 Agent，提供终端、桌面应用与 IDE 扩展多种形态。 ([OpenCode 文档](https://opencode.ai/docs/))

## 编程方式

- **异步云端编码成为新范式**：开发者只需描述任务、审批计划，Copilot 在网络异步环境中创建 draft PR、自行运行代码审查再@你回看，编码从"同步对话"转向"指派 + 异步交付"。 ([O'Reilly CodeCon 讲义](https://talks.addy.ie/oreilly-codecon-march-2026/slides.pdf))
- **"Agent Mode"让补全工具进化为自主执行器**：Copilot Agent Mode 会本地读取文件、运行代码、检查输出并迭代修复错误，从"建议引擎"变为"自主执行者"。 ([Agent Patterns](https://github.com/agentpatterns-ai/website/blob/main/tools/copilot/agent-mode.md))
- **Skill 取代 Subagent 成为生产部署新思路**：Anthropic 在电商 Agent 中采用"单模型 + Skill"而非领域子 Agent，配合完整 Eval 体系落地。 ([微博·黄建同学](https://m.weibo.cn/detail/5340411569635439))

## 总结

今日 AI 开发圈的核心节奏是"旗舰集中发布 + Agent 生产落地"：OpenAI / Anthropic / Google / Meta 四天连发新旗舰、GPT-6 Astra 全线开放把长任务与 Computer Use 推向主线，而国内大模型进入"周抛"模式并靠低定价抢量；工程侧，Skill 取代 Subagent、异步云端编码与 Agent Mode 正在重塑 AI 编程的工作方式。