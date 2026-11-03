---
title: "AI 开发日报 · 2026年11月04日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-11-04
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI 用 GPT-6 Astra 一周从零设计出可对话 Codex 的硬件设备

OpenAI 硬件团队利用 GPT-6 Astra 从零开始设计了一款设备，让用户能够与 Codex 编程智能体直接对话，团队在不到一周内就完成了原型设计。OpenAI 表示这只是公司的一个副业项目，但展示了模型驱动的硬件研发新范式。

来源：[凤凰网科技](https://original.ifeng.com/c/8xlm7omEhgE)

### 2. DeepSeek 发布 Super-Agent 原型：主动式编程智能体，不再等待被调用

DeepSeek 推出开源编程工具 Super-Agent 原型，它监听开发者的群聊，识别编码问题并主动给出解决方案，无需等待用户召唤。该设计直指 Claude Code 与 Codex 的「被动等待」模式，把 AI 编程从「被提示」推向「主动介入」。

来源：[Digital Trends](https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/)

### 3. Anthropic 上线 Claude Opus 5.5 与 Haiku 5.5

Anthropic 新闻室更新显示，Claude Opus 5.5 在 agentic 编码与知识工作中领先，典型负载运行成本较 Opus 5 降低 40%；Claude Haiku 5.5 则是其最快、能力最强的小模型，面向摘要、子代理与浏览器自动化等高频场景。

来源：[Anthropic 新闻室](https://www.anthropic.com/news)

### 4. Mistral Large 4 开放权重：1T MoE 模型代码能力追平开源领先者

Mistral 发布改进版 Large 4 权重（10 月 29 日上线 Hugging Face），约 1T 总参数 / 49B 激活、128 路由专家、1M 上下文，支持文本与图像输入。经过三周续训，Terminal-Bench 4.0 从 28% 提升到 41%，Artificial Analysis 编码 Agent 指数达 48%，与开源领先者 GLM-5.3 持平，而单任务 token 消耗少 47%。

来源：[Evermx](https://evermx.com/case/mistral-large-4-open-weights) · [vibecoding](https://vibecoding.ru/news/2026/11/01/mistral-large-4-open-weights)

### 5. 乌镇峰会：开源站上 C 位，DeepSeek / 阿里 / MiniMax 共话 AI 普惠

世界互联网大会乌镇峰会聚焦开源议题：DeepSeek 陆续开源新模型、Agent Harness 与 DeepInfer 推理框架；阿里过去三年开源 460 多款模型，全球总下载量超 40 亿次；MiniMax 也持续开放模型与工程经验，开源成为 AI 竞赛的关键变量。

来源：[新浪财经](http://finance.sina.cn/2026-11-04/detail-inixpmfh1745338.d.html)

## 涨星最快项目

### 1. vercel-labs/agent-desktop —— AI agent 的「电脑操作」CLI（单日 +2,275 星）

Vercel 开源的 computer use CLI，让 AI agent 直接从命令行操控桌面/浏览器完成电脑操作类任务，是今日 GitHub Trending 涨幅最高的项目。

链接：[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · [GitHub Trending 榜单](https://startupcorners.com/digest/devtools-digest-2026-11-03)

### 2. NousResearch/hermes-agent —— 有记忆的自主 AI 智能体（累计 9 万+ 星）

Nous Research 开发的开源自主智能体，MIT 协议，常驻服务器、具备持久记忆与自学习能力，可运行技能与定时任务。此前曾被多个媒体称为 GitHub 上增长最快的 AI 项目。

链接：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · [ai-damn 报道](https://ai-damn.com/github-s-new-darling-how-hermes-agent-stormed-the-ai-scene-1776381720337)

### 3. vercel-labs/skills —— 开源 agent skills 工具（单日 +244 星）

Vercel Labs 的开放 agent skills 工具，`npx skills` 即可运行，为 coding agent 提供可复用技能分发机制，单日涨星 244。

链接：[vercel-labs/skills](https://github.com/vercel-labs/skills)

### 4. 1jehuang/jcode —— Rust 高性能编码 agent harness（单日 +26 星）

面向重型多 agent 工作流的高性能编码 agent 框架，用 Rust 实现，主打并行度与稳定性，适合大规模协作编码场景。

链接：[1jehuang/jcode](https://github.com/1jehuang/jcode)

## 大模型进展

### 国内

- **通义千问 Qwen3 Plus 系列更新**：11 月 3 日更新，Qwen3 系列 Plus 模型实现思考模式与非思考模式的有效融合，可在对话中切换，推理能力显著超过 QwQ、通用能力显著超过 Qwen2.5-Plus。[GpuGeek 模型页](https://ai.gpugeek.com/model)
- **Kimi K3.1 Pro (max) 登顶 OpenCompass 纯文本评测**：10 月 29 日上榜，全量评测综合得分 75.46 排名第二，仅文本评测综合得分 78.47 排名第一，巩固月之暗面在中文文本能力上的优势。[OpenCompass 司南榜单](https://rank.opencompass.org.cn/)
- **商汤开源 SenseNova-Vision-7B-MoT**：商汤开源其多任务视觉模型，7B 参数统一架构覆盖广泛视觉任务，向视觉 Agent 方向迈进。[ai-damn](https://ai-damn.com/sensetime-open-sources-sensenova-vision-7b-mot-a-multi-task-vision-model-1784001826576)
- **DeepSeek 开源矩阵亮相乌镇峰会**：除 Super-Agent 原型外，DeepSeek 持续开源新模型、Agent Harness 与 DeepInfer 推理框架，推动技术成果向产业生态扩散。[新浪财经](http://finance.sina.cn/2026-11-04/detail-inixpmfh1745338.d.html)

### 国外

- **OpenAI**：GPT-6 Astra 展示从零设计硬件的惊人能力；另据 AI Radar 周报，OpenAI 被传在 Codex 后台灰测新一代 GPT-6.2 Astra，且可能将更多模型上线 OpenAI API。[凤凰网科技](https://original.ifeng.com/c/8xlm7omEhgE) · [AI Radar](https://maxassistant.app/en/news/releases/ai-radar-2026-11-02/)
- **Anthropic**：Claude Opus 5.5 领跑 agentic 编码与知识工作，成本较 Opus 5 降 40%；Claude Haiku 5.5 面向高频摘要与子代理场景。[Anthropic 新闻室](https://www.anthropic.com/news)
- **Google DeepMind**：发布 Genie 4 世界模型，可实时生成可交互、可探索的照片级真实环境，场景可随文本指令演化，推动「可玩的生成式世界」走向实时化。[AI Hírfolyam](https://aihirfolyam.hu/)
- **Mistral**：Large 4 开放权重，1T MoE 架构，编码与 Agent 能力追平开源领先者 GLM-5.3，token 效率大幅领先。[Evermx](https://evermx.com/case/mistral-large-4-open-weights)
- **Hugging Face**：发布 SmolLM3，30 亿参数轻量模型，声称能力可比肩 40 亿参数的 Gemma3 等更大模型，主打边缘与本地部署。[ai-damn](https://ai-damn.com/hugging-face-releases-smollm3-a-compact-ai-model-rivaling-larger-counterparts-1752102544585)

## 新工具 & CLI

- **Cloudflare cf CLI**：面向 AI agent 的统一 CLI 进入开放测试，用 TypeScript 编写，提供结构化输出与命令发现，将逐步取代 Wrangler，让 AI agent 与开发者共用同一套 Cloudflare 操作接口。[InfoQ](https://www.infoq.com/news/2026/10/cloudflare-cf-cli/)
- **Amazon Bedrock AgentCore CLI 1.0 GA**：AWS 宣布 @aws/agentcore 1.0.0 正式可用，启动更快、命令结构统一，支持从终端创建、开发、部署并运维 AI agent。[AWS 官方公告](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)
- **GitHub 开源 Replica**：GitHub Design 团队开源的 AI 原型设计工具，MIT 协议，帮助产品团队用自有设计系统把想法变成可交互原型。[GitHub Changelog](https://github.blog/changelog/2026-10-28-introducing-replica-an-open-source-ai-prototyping-tool/)
- **Microsoft Agent Framework 1.0**：Semantic Kernel 的继任者 MAF 正式发布 1.0，生产就绪、API 稳定并承诺长期支持，从单助手扩展到编排智能体舰队。[PyPI](https://pypi.org/project/semantic-kernel/)
- **阿里 AgentScope 1.0**：阿里云 AgentScope 框架发布 1.0，统一多智能体开发流程，降低 agent 应用构建门槛。[ai-damn](https://ai-damn.com/alibaba-s-agentscope-1-0-revolutionizes-ai-agent-development-1756959958879)
- **Claude Code v2.1.316**：Opus 4.8 的 fast mode 将于 11 月 30 日移除；Apps gateway 新增池化群组预算与分层策略，子代理 effort 级别可配置。[AI/TLDR](https://ai-tldr.dev/tools/claude-code/)

## 编程方式

- **从「被动等待」到「主动介入」**：DeepSeek Super-Agent 监听群聊主动提方案，OpenAI 用 Astra 驱动硬件设计，AI 编程与研发的边界正从「编辑器内」扩展到「团队协作与全流程研发」。[Digital Trends](https://www.digitaltrends.com/computing/deepseek-wants-to-steal-claude-code-and-codexs-lunch-with-an-ai-agent-that-does-not-wait-around/)
- **T3 Code v0.16 上线手机版**：10 月 31 日更新后星数暴涨，Web / 桌面 / 移动端多平台接入本机 AI 编程工具，可在手机上发起任务、浏览文件、做版本控制，「躺着远程编程」成为可能。[36氪](https://36kr.com/p/4053953102911367)
- **Letterpress-1：面向增长工程的编码 agent**：The Letter Company 发布面向增长工程场景的编码 agent，把增长实验、埋点与数据洞察接入 agent 工作流。[MarkTechPost](https://www.marktechpost.com/2026/11/02/letter-letterpress-1-growth-engineering-coding-agent/)
- **skills 生态继续扩容**：vercel-labs/skills、agent-desktop 等把「技能包」与「电脑操作」标准化为可复用 CLI 能力，coding agent 的边界从写代码扩展到「替开发者操作电脑」。[GitHub Trending 榜单](https://startupcorners.com/digest/devtools-digest-2026-11-03)

## 总结

今日趋势：AI 开发的重心进一步从「模型竞赛」转向「agent 能力外溢」——主动式编程（DeepSeek Super-Agent）、电脑操作（agent-desktop）、skills 生态与开源权重（Mistral Large 4、SmolLM3）多点开花，开源与 agent 工具链成为今日最热关键词。
