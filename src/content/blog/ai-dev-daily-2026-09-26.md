---
title: "AI 开发日报 · 2026年09月26日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-26
tags: ["AI日报"]
---
## 今日要闻

### 1. 微软正式发布新版 Copilot"超级应用"：Home / Code / Autopilot 三合一

9 月 25 日晚间，微软正式推出重构后的 Copilot，将聊天、编程与智能体三类能力整合进同一界面，定位"为工作而生的 AI"。新版分为 Home（整合 Chat 与 Cowork）、Code（基于 GitHub Copilot 同源技术、沙盒内运行的简易编程）与 Autopilot（持续运行的自主智能体，前身 Scout）三个标签页，被视为微软对抗 Anthropic、抢占企业级 AI 入口的关键一步。

来源：[Microsoft News](https://news.microsoft.com/source/latam/company-news/nuevo-copilot-home-code-autopilot/)｜[IT之家](http://m.toutiao.com/group/7689456172202279462/)｜[中华网快科技](https://soft.china.com/article/2987033.html)

### 2. 中国信通院详解《"人工智能+软件"专项行动实施方案》

9 月 25 日，中国信息通信研究院副院长王志勤向媒体介绍工业和信息化部新出台的《"人工智能+软件"专项行动实施方案》，指出其标志着我国人工智能与软件融合发展进入"战略牵引、科学布局"的新阶段，是《国务院关于深入实施"人工智能+"行动的意见》在软件领域的关键落实举措。

来源：[中国新闻网](http://m.toutiao.com/group/7689473043789333018/)

### 3. NVIDIA 推出 Personal AI Router（PAIR）公测版，本地多机调度 AI 任务

NVIDIA Personal AI Router 进入公测，可将本地网络中多台计算机的推理算力合并，并自动把 AI 请求分发到可用设备上，主要用于本地多智能体（multi-agent）场景——此前多个独立模型调用常会打满单块 GPU。

来源：[InfoQ News](https://www.infoq.com/llms/news/)

### 4. Anthropic 发起 Project Glasswing，推动金融系统防御性网络安全

Anthropic 推出 Project Glasswing，联合摩根大通（JPMorganChase）等领先机构，在开放、独立评估的基础上测试面向关键基础设施的下一代防御性 AI 安全工具，聚焦金融系统的网络安全与韧性。

来源：[Anthropic - Project Glasswing](https://www.anthropic.com/glasswing)

### 5. 开源个人 AI 智能体 OpenClaw 发布 2.0

开源个人 AI 智能体 OpenClaw 发布 2.0 大版本，重点重构了安装流程与本地部署体验，进一步降低普通开发者上手门槛，推动"个人化 + 本地化"智能体落地。

来源：[InfoQ News](https://www.infoq.com/llms/news/)

## 涨星最快项目

（数据来自 GitHub Trending / 社区热度榜，截至 2026-09-25）

- [stablyai/orca](https://github.com/stablyai/orca) — 多智能体（multi-agent）协同调度项目，本周登顶 GitHub AI 仓库热度涨幅榜，累计 75.6K 星、周增约 6.2K。
- [Tencent/WeKnora](https://github.com/Tencent/WeKnora) — 腾讯开源的通用知识平台，用于构建知识型智能体（Knowledge Agent），累计 28.9K 星、周增约 5.3K。
- [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) — 将浏览器能力"借给"智能体的工具集，服务 Agent 网页操作场景，累计 6.6K 星、周增约 4.5K。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — 为 Claude Code、Codex、Gemini、Copilot、OpenCode 等智能体保存会话记忆并在跨会话中复用上下文，累计约 94.6K 星。
- [hypit-ai/hypit](https://trendshift.io/weekly?language=TypeScript) — 新上榜单，以 AI 智能体复刻病毒式视频工作流（换脸、解说、发布等），聚焦 AI agent / AI workflow。

数据来源：[DEV Community 周榜](https://dev.to/sarantoon/github-ai-repos-pracchamsapdaah-yaksaihyethkhekhaasuuchanskil-23-ky-2026-346f)｜[小虾米 GitHub 趋势榜](https://xmorg.cn/)｜[Trendshift Weekly](https://trendshift.io/weekly?language=TypeScript)

## 大模型进展

### 国内

- DeepSeek：9 月 10 日发布 DeepSeek V4.1 Flash，采用全新非对称模型结构，原生支持多模态视觉理解，定位"更强、更快、更普惠"，是新结构系列中的最小尺寸模型。[来源](https://www.deepseek.com/news/deepseek-v4-1-flash/)
- 千问（通义）：Qwen/Qwen3.8-27B 持续占据 Hugging Face 本周热门模型榜单首位（约 27 天前更新），延续千问登顶历史最受欢迎开源模型的势头。[来源](https://huggingface.com)
- Kimi（月之暗面）：Kimi K3 已于 7 月开源，2.8T 参数、原生多模态、1M Token 上下文，主攻长时编码、知识工作与深度推理，持续迭代推进。[来源](https://www.moonshot.ai/)
- Hugging Face 本周热门还包括 openbmb/MiniCPM5-2B、XHToken/Spark-X2.5-4B、tencent/Hy-MT2 及 bytedance-research/Lance 等国内团队模型。[来源](https://huggingface.com)

### 国外

- OpenAI：9 月 3 日发布旗舰模型 GPT-6 Astra（约 1.05M Token 上下文），9 月 22 日补齐 GPT-6 Sol / Luna；GPT-6 Astra 首次达到 Preparedness Framework 下网络安全"Critical"级别，并具备计算机操作、编程、网络安全与科学领域前沿能力。[来源](https://openai.com/zh-Hans-CN/research/index/)
- Anthropic：9 月 1 日发布 Claude Fable 5.1 / Mythos 5.1（面向编码与知识工作），9 月 23 日发布 Claude Opus 5.5——性能看齐 Fable 5.1、运行成本降 40%。[来源](https://www.anthropic.com/news)
- Google（DeepMind）：9 月陆续推出 Gemini 3.8 Flash 与 3.8 Flash Cyber（网络安全版）、Gemini 3.8 Live with Live Avatar，并推进经安全内存的私有 AI 计算与 TTS 能力。[来源](https://deepmind.google/)
- Meta：Meta Superintelligence Labs 于 9 月 2 日发布 Muse Spark 1.3，加入"九月首周四大实验室集中上新"行列。[来源](https://kryptonforge.in/blog/gpt-6-astra-claude-fable-5-1-gemini-3-8-comparison-2026)

## 新工具 & CLI

- [Codex CLI 0.156 / 0.156.1](https://aicoder.com/news/news-20260923-codex-cli-0-156) — OpenAI 于 9 月 22/23 日发布：`/tui` 全屏模式、语音默认开启、`/usage` 用量看板，0.156.1 新增对 GPT-6 Sol / Luna 的支持。
- [Codex CLI 0.155.0](https://tproger.ru/news/codex-cli-0-155-0-poluchil-golosovye-dialogi-i-podtverzhdenie-mcp) — 9 月 17 日发布，引入实验性语音对话，并支持通过 Touch ID 确认 MCP 请求。
- [Codex CLI 0.154.0](https://ai-tldr.dev/releases/tool/) — 9 月 9 日发布，Codex 会话可运行在独立 git worktree 中，让并行智能体不再互相抢占同一工作区；模型选择器新增 GPT-6 Astra。
- [NVIDIA Personal AI Router (PAIR)](https://www.infoq.com/llms/news/) — 公测版，在本地网络内合并多机推理能力并自动分发 AI 请求，服务本地多智能体负载。
- [OpenAI Agents API（公测）](https://36kr.com/newsflashes/3978211289053957) — 开发者通过 API 构建并运行云端智能体，支持 OpenAI 托管沙箱、自有基础设施或合作伙伴沙箱。

## 编程方式

AI 编程正从"单个模型补全"走向"智能体协作 + 多模型编排"：微软新版 Copilot 的 Code 标签页基于 GitHub Copilot 同源技术，让非技术人员也能在沙盒内拖拽构建应用，Autopilot 则以持续运行的自主智能体接管长期任务；GitHub Copilot coding agent 已内置模型选择、自我审查、安全扫描与自定义 agent，并支持与 CLI 交接。叠加 NVIDIA PAIR 将多机算力弹性调度的能力，开发者工作流呈现出 `需求/自然语言 → agent 规划 → 并行实现 → 安全扫描与测试 → 人工审查` 的新范式，人机协作边界从"写代码"上移到"定义需求与审校产出"。

来源：[Microsoft News](https://news.microsoft.com/source/latam/company-news/nuevo-copilot-home-code-autopilot/)｜[GitHub Blog](https://github.blog/ai-and-ml/github-copilot/)｜[InfoQ News](https://www.infoq.com/llms/news/)

## 总结

今日趋势一句话：大厂重心转向"智能体化 + 生态入口"——微软以 Copilot"超级应用"三合一抢占企业级 AI 入口，与国家同步推进"人工智能+软件"专项行动；NVIDIA PAIR、OpenClaw 2.0 等让智能体向本地化、多机协作演进，而 OpenAI、Anthropic、Google 在旗舰模型（GPT-6 Astra、Claude Opus 5.5、Gemini 3.8）上继续打性能与价格牌，AI 开发正全面进入"agent 编排 + 自然语言交付"阶段。