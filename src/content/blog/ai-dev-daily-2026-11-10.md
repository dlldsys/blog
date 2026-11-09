---
title: "AI 开发日报 · 2026年11月10日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-11-10
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 发布 Claude Fable 5.2 与 Mythos 5.2，冲刺 IPO 前的旗舰对决

Anthropic 于 11 月 10 日（周一）发布两款新旗舰模型：Claude Fable 5.2 面向编程、推理与 AI 智能体任务，Claude Mythos 5.2 面向网络安全与生命科学研究应用。官方称在几乎所有能力评测上均优于 Opus 5.5，输出速度最高提升 30%，API 价格降至每百万输入 Token 8 美元、输出 40 美元。测试中，一名工程师让 Fable 5.2 从空文件夹出发，协调 1000+ 子智能体连续 8 天开发出一套可在笔记本上启动运行的操作系统；还曾在 30 小时内完成费马大定理的形式化证明。

来源：[凤凰网科技](https://original.ifeng.com/c/8xviqDaxyxj) · [凤凰网 - Fable 5.2 登顶世界第一](https://tech.ifeng.com/c/8xugZ5rMQG2)

### 2. OpenAI 推出 Image 2.6：GIF 创作与全新 API 控制

OpenAI 于 11 月 4 日发布图像模型 Image 2.6，登陆 ChatGPT、Codex 和 API，带来更快的图像生成速度、GIF 创作功能、更精准的编辑效果和全新的 API 控制选项。

来源：[OpenAI 新闻中心](https://openai.com/zh-Hans-CN/news/research/)

### 3. 百度开源 ERNIE 5.5 Flash Base 权重

11 月 5 日，百度在 Hugging Face 发布 ERNIE 5.5 Flash Base 开放权重：280B 总参 / 14B 激活的 MoE 基础检查点，完成 33.5T token 预训练，支持 1M 上下文，采用 ERNIE 5.5 Flash Base License；post-trained 版本将随后放出。

来源：[LLM Release Radar](https://www.llm-releases.com/reports/release-radar)

### 4. 月之暗面兑现承诺：Kimi K3.1 Pro 开放权重

11 月 4 日，Moonshot AI 按承诺在 Hugging Face 发布 Kimi K3.1 Pro 完整权重（2.8T 总参 / 104B 激活 MoE，MXFP4 QAT），采用 Kimi K3.1-Pro License。

来源：[LLM Release Radar](https://www.llm-releases.com/reports/release-radar)

### 5. GPT-6.2 Astra 即将推出，再度冲击具身智能行业

据智源社区报道，GPT-6 Astra 发布仅两个月，GPT-6.2 Astra 即将推出，已令一线预训练工程师陷入焦虑，多家具身智能公司开始裁撤算法岗位，大模型快速迭代正挤压依赖数据与算力的行业。

来源：[智源社区](https://hub.baai.ac.cn)

## 涨星最快项目

> 数据来源：GitHub Trending 日榜（2026-11-09）及 Trendshift 周榜。[Global Tech Pulse 日榜分析](https://darkpulse.kr/2026/11/09/github-trending-2026-11-09-top-3-repositories/)

1. **sherlock-project/sherlock** — 按用户名跨 400+ 社交网络搜索账号的 OSINT 工具，Python、MIT 协议。日增 +2,373 星（累计 104,366）。[GitHub](https://github.com/sherlock-project/sherlock)

2. **milind-soni/OpenMausBot** — 可替代 Grok Bot 的本地优先 AI Agent 团队：每个 Agent 在本地运行 Claude/Codex，自带人格、模型与连接的应用，支持审批式任务工作流。日增 +1,439 星（累计 18,591）。[GitHub](https://github.com/milind-soni/OpenMausBot)

3. **meta/astryx** — Meta 开源的人机共用设计系统（beta）：基于 React 19+ 与 StyleX，提供 150+ 无障碍组件、品牌级主题、暗色模式与 CLI，`swizzle` 可把组件源码直接提取进项目。日增 +875 星（累计 17,328）。[GitHub](https://github.com/meta/astryx)

4. **Graphify-Labs/graphify** — 把代码库（文档、SQL schema、配置、PDF）变成可查询知识图谱的 Agent Skill，适配 Claude Code、Cursor、Codex 与 Gemini CLI：本地确定性 AST 解析，无需向量库。入选 Trendshift Python 周榜。[Trendshift](https://trendshift.io/weekly?language=Python)

5. **morluto/rea** — 用 Agent 逆向工程一切：从应用行为到原生二进制，入选 Trendshift TypeScript 周榜。[Trendshift](https://trendshift.io/weekly?language=TypeScript)

## 大模型进展

### 国内

- **DeepSeek** — V4.1-Flash-1017（10 月 17 日）持续霸榜，MIT 权重已在 Hugging Face；V4 完整版技术规格被曝泄露（1.6 万亿参数、1M 上下文），另有为 Agent 设计的首个多模态模型 V4-Flash-Vision-Exp（MIT 许可）。（[DeepSeek API Docs](https://api-docs.deepseek.com/news/news261017/) · [中华网](https://soft.china.com/article/2571581.html)）

- **月之暗面 Kimi** — K3.1 Pro 开放权重如期于 11 月 4 日发布（2.8T/104B 激活 MoE，MXFP4 QAT）。（[Hugging Face](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)）

- **百度文心** — ERNIE 5.5 Flash Base 开放权重（280B/14B 激活，1M 上下文）。（[LLM Release Radar](https://www.llm-releases.com/reports/release-radar)）

- **腾讯混元** — Hunyuan Hy4 正式版 11 月 4 日发布：在 8 月预览版基础上加入视觉理解与 agentic 升级，API 已可用，开放权重将在数日内发布。（[Tencent 官方](https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/)）

- **商汤** — SenseNova 6.8 Flash 正式发布（11 月 2 日），多模态 Agent 模型，覆盖办公与设计输出（网页、动态 PPT、SVG、Blender 3D）。（[商汤官网](https://www.sensetime.com/cn/news/sensenova-6-8-flash-release-20261103-1421)）

### 国外

- **Anthropic** — Claude Fable 5.2 / Mythos 5.2 发布：编程、推理、视觉全面超越 Opus 5.5，价格更低，Anthropic 核心代码库超 90% 的合并变更由 Claude 编写；Mythos 5.2 在 CVE Rediscovery 评测中发现漏洞数比 Opus 5.5 多 10.2%。（[凤凰网科技](https://original.ifeng.com/c/8xviqDaxyxj)）

- **OpenAI** — Image 2.6 发布（11 月 4 日）；GPT-6.1 Terra（10 月 26 日）主打低成本快速 computer use，官方称以约 1/10 的 Token 价格匹配 GPT-6 Astra 能力；GPT-6.2 Astra 已在路上。（[OpenAI 新闻中心](https://openai.com/zh-Hans-CN/news/research/) · [LLM Release Radar](https://www.llm-releases.com/reports/release-radar)）

- **Google DeepMind** — Gemini 4 Carbon（10 月 28 日预览）：基于 Gemini 4 Argon 构建的新前沿模型，率先通过 Fairwind Program 向网络防御者开放，AA Intelligence Index 59（第一）。（[BetaNews](https://betanews.com/article/gemini-4-carbon-cyber-defenders/)）

- **NVIDIA** — 发布 Alpamayo 开源 AI 模型与工具系列，加速基于安全推理的自动驾驶开发（11 月 5 日）；Nemotron 3.5 系列持续扩充本地 Agent 模型。（[NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-announces-alpamayo-family-of-open-source-ai-models-and-tools-to-accelerate-safe-reasoning-based-autonomous-vehicle-development?page=12)）

- **Microsoft** — Mage-VL-Cowork（10 月 30 日）：4B 参量 Apache-2.0 computer-use VLM，单个策略中在 GUI 操作与 bash 命令间自由切换，实验室报 OSWorld-Verified 66.0%。（[Hugging Face](https://huggingface.co/microsoft/Mage-VL-Cowork)）

## 新工具 & CLI

- **Amazon Bedrock AgentCore CLI v1.0** — 从终端创建、开发、部署和运维 AI Agent 及其支撑资源，统一命令结构与更多 Agent Core 资源支持。（[AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)）

- **OpenMausBot** — 本地运行的个人 AI Agent 团队，可作 Grok Bot 的开源替代，macOS/Windows/Linux 均有安装包。（[GitHub](https://github.com/milind-soni/OpenMausBot)）

- **Graphify** — 代码库知识图谱 Skill，`/graphify` 一条命令把任意代码库变成可查询的知识图谱，适配 Claude Code、Cursor、Codex、Gemini CLI。（[Trendshift](https://trendshift.io/weekly?language=Python)）

- **rea** — Agent 驱动的逆向工程工具，从应用行为一路逆到原生二进制。（[Trendshift](https://trendshift.io/weekly?language=TypeScript)）

- **NVIDIA TensorRT-LLM** — Python API 持续更新，支持在 NVIDIA GPU 上定义并优化 LLM 推理，本周进入 GitHub Trending。（[startupcorners 摘要](https://startupcorners.com/digest/devtools-digest-2026-11-07)）

## 编程方式

- **单一 Agent 主导完整系统开发成为现实** — Anthropic 工程师让 Fable 5.2 从空文件夹开始，协调 1000+ 子智能体连续 8 天编写、测试、审查代码，最终交付一套可启动运行的操作系统（含内核、驱动、文件系统、窗口与安装程序）。"指挥 Agent 做整个项目"从口号变成可复现的工作方式。（[凤凰网科技](https://original.ifeng.com/c/8xviqDaxyxj)）

- **Anthropic 内部：90%+ 代码变更由 Claude 编写** — 合并到核心代码库的变更中超过 90% 由 Claude（在人类指导下）完成；一组 Agent 将关键生产服务从 Python 迁移到 Rust，启动速度快约 26 倍。审查与工程判断仍是人类核心职责。（[凤凰网科技](https://original.ifeng.com/c/8xviqDaxyxj)）

- **"人和 AI 共用"的设计系统兴起** — Meta 开源 astryx，宣称支持"人与 Agent 并肩开发"模式，180 多个组件、品牌级主题与 CLI，`swizzle` 让 Agent 或人可把组件源码取回项目直接占有——设计资产开始面向 Agent 重构。（[GitHub](https://github.com/meta/astryx)）

## 总结

今日关键词是"旗舰对决与开源延续"——Anthropic 在 IPO 前率先亮出 Fable 5.2/Mythos 5.2，全面超越 Opus 5.5，并演示了单 Agent 协调千个子智能体开发完整操作系统的能力；国内开源潮持续涌动，Kimi K3.1 Pro、ERNIE 5.5 Flash 权重陆续放出，腾讯 Hy4 开源在即；GitHub 涨星榜则从 Agent 工具转向安全、本地 Agent 团队与人机共用设计系统，AI 编程正在从"写代码"走向"托管整个系统生命周期"。
