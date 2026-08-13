---
title: "AI 开发日报 · 2026年08月13日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-13
tags: ["AI日报"]
---

## 今日要闻

### 1. xAI 发布 Grok 4.6：长时 Agent 与视觉能力大幅增强

xAI 于 8 月 12 日发布 Grok 4.6，专注于长时运行 Agent 和视觉任务。模型在 Artificial Analysis Intelligence Index 上以 61 分与 GPT-5.6 Sol 持平，并在 Harvey LAB 和 CursorBench 基准上超越后者。API 定价为每百万输入 token 2 美元、每百万输出 token 6 美元，支持 50 万 token 上下文窗口，现已上线 Cursor、Grok Build 和 API。

来源：[xAI 官方](https://x.ai/news/grok-4-6)

### 2. xAI 推出 Grok Bot：24/7 常驻 AI Agent

xAI 于 8 月 11 日发布 Grok Bot，一组常驻云端的 AI Agent，可 24/7 在应用、工具、邮箱和网站中自主工作。Bot 能登录没有 API 的平台并完成端到端多步任务，多个 Bot 可并行运行并协调工作。目前面向 SuperGrok Heavy、Cursor Ultra 和 Cursor Teams Premium 订阅用户开放测试。

来源：[xAI 官方](https://x.ai/news/introducing-grok-bot)

### 3. 微软 MAI-Code-1.Flash 上线 GitHub Copilot：成本降 75%，速度提升 25%

微软发布 MAI-Code-1.Flash 编码模型，已在 GitHub Copilot 生产环境中使用。相较 6 月 Build 大会发布的 MAI-Code-1.0，token 效率提升 25%，成本降低 75%，Terminal-Bench 2.1 提升 22%，.NET 任务提升 15%，代码存活率上升 4%。

来源：[Microsoft AI 官方](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/)

### 4. NVIDIA 发布 Nemotron 3.5 Lightning + NeMo Switchyard 模型路由框架

NVIDIA 于 8 月 11 日连发两项重要更新：Nemotron 3.5 Lightning 是 30B MoE 开源模型（仅 3B 活跃参数），专为常驻 AI Agent 高频执行层设计，10,000 任务速度比 Qwen3 35B 快 30%；NeMo Switchyard 是开源模型路由框架，LangChain 基准测试显示在 145 个多轮 Agent 任务中成本降低 74%。

来源：[NVIDIA 开发者博客 - Nemotron](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/) · [NVIDIA 开发者博客 - Switchyard](https://developer.nvidia.com/blog/route-ai-agent-workloads-across-models-with-nvidia-nemo-switchyard)

### 5. OpenAI Daybreak 网络安全模型上线 AWS Bedrock

OpenAI 的 Daybreak 网络安全模型现已通过 Amazon Bedrock 提供。Daybreak Blue 为防御性安全工作提供带安全防护的前沿通用模型，Daybreak Red 提供用于漏洞研究和漏洞验证的专用模型。客户注册 Daybreak Access 后可通过 Bedrock 控制台或 Responses API 的 bedrock-mantle 端点访问。

来源：[OpenAI 官方](https://openai.com/index/daybreak-models-are-now-available-on-aws/)

## 涨星最快项目

### 1. zhaoxuya520/reverse-skill — 逆向工程技能库

总星标 21.1k，上周增长 9,360。提供逆向工程相关的 AI 技能库，将复杂的安全分析流程封装为可复用的工作流。

来源：[GitHub 周榜](https://github.com/OpenGithubs/github-weekly-rank) · [项目地址](https://github.com/zhaoxuya520/reverse-skill)

### 2. TencentCloud/TencentDB-Agent-Memory — 腾讯云数据库 Agent 记忆系统

总星标 18.1k，上周增长 7,960。腾讯云出品的数据库 Agent 记忆系统，为 AI Agent 提供持久化的上下文管理能力。

来源：[GitHub 周榜](https://github.com/OpenGithubs/github-weekly-rank) · [项目地址](https://github.com/TencentCloud/TencentDB-Agent-Memory)

### 3. lyogavin/airllm — 单 GPU 推理超长大模型

总星标 30,393，上周增长约 5,400。支持在单张消费级 GPU 上推理超长上下文的大语言模型，通过分层卸载技术突破显存限制。

来源：[GitHub 趋势](http://m.toutiao.com/group/7672282690757919286/) · [项目地址](https://github.com/lyogavin/airllm)

### 4. esengine/DeepSeek-Reasonix — DeepSeek 推理增强版

总星标 33,503，上周增长约 4,700。基于 DeepSeek 的推理能力增强项目，提供更强的逻辑推理和数学解题能力。

来源：[GitHub 趋势](http://m.toutiao.com/group/7672282690757919286/) · [项目地址](https://github.com/esengine/DeepSeek-Reasonix)

### 5. block/buzz — Block 的 AI 开发工具

总星标 25,700，上周增长约 4,700。Block（前 Square）推出的 AI 开发辅助工具，帮助开发者加速构建和部署应用。

来源：[GitHub 趋势](http://m.toutiao.com/group/7672282690757919286/) · [项目地址](https://github.com/block/buzz)

## 大模型进展

### 国内

**DeepSeek V4 Pro 正式版更新**：DeepSeek V4 Pro 正式版已更新至 API，调用模型名不变。新版本大幅增强 Agent 能力，支持 Responses API 和 Codex 接入。定价为 3 元/百万 Token 输入、6 元/百万 Token 输出，缓存命中输入仅 0.025 元/百万 Token。

来源：[密度新闻微博](https://m.weibo.cn/detail/5331361721223466)

**DeepSeek Harness 团队正式注册**：DeepSeek Harness 团队公众号正式注册，认证主体为北京深度求索人工智能基础技术研究有限公司。该项目于 2026 年 5 月内部立项，独立组建专项核心团队，由崔添翼担任负责人。

来源：[头条](http://m.toutiao.com/group/7673077018749059584/)

**腾讯 HunyuanWorldClaw 发布**：腾讯混元发布 WorldClaw，一个 Agent 式 3D 世界生成系统，可将单个文本提示转化为可探索、可编辑的大规模 3D 场景。三阶段流程包括意图规划、全局地形生成和区域物体放置，已展示 11 个不同世界。

来源：[腾讯混元官方](https://tencent-hunyuan.github.io/Hunyuan3D-WorldClaw/)

**字节跳动 Seedance 2.5 发布**：字节跳动于 8 月 8 日发布 Seedance 2.5 视频生成模型，延续中国实验室在视觉生成领域的快速迭代节奏。

来源：[FeedsMonitor](https://feedsmonitor.com/article/ai-weekly-gpt-5-6-cyber-muse-glimmer-and-the-agent-browser-eb02678a6a)

### 国外

**xAI Grok 4.6**：8 月 12 日发布，在 Artificial Analysis Intelligence Index 上以 61 分与 GPT-5.6 Sol 持平，在 Harvey LAB 和 CursorBench 上超越后者。API 定价 $2/百万输入 token、$6/百万输出 token，支持 50 万 token 上下文窗口。

来源：[xAI 官方](https://x.ai/news/grok-4-6)

**NVIDIA 开发 Nemotron 4 万亿参数模型**：英伟达正在开发 Nemotron 4 系列开源 AI 模型，最大版本预计拥有至少 1 万亿参数，是目前最大模型 Nemotron 3 Ultra 的两倍。该项目由 VP Bryan Catanzaro 领导，旨在将 GPU 需求从少数前沿实验室扩展到更广泛市场。

来源：[The Information](https://www.theinformation.com/articles/nvidia-trying-develop-worlds-best-open-source-ai-models)

**OpenAI ChatGPT Linux 桌面预览版上线**：OpenAI 于 8 月 11 日推出 ChatGPT Linux 桌面应用预览版，支持 Ubuntu 24.04/26.04 LTS、Debian 13、Fedora 43/44，提供 .deb 和 .rpm 安装包，覆盖 x64 和 ARM64 架构。

来源：[OpenAI on X](https://x.com/OpenAI/status/2087231350134980830)

**Anthropic Claude 全模型水印生效**：Anthropic 已签署 EU AI Act Article 50(2) 行为准则，自 8 月 2 日起所有新 Claude 模型在生成的文本中嵌入隐形水印，并在 SVG、PNG、JPG 等文件中附加 C2PA 标准签名元数据。覆盖 Claude Platform、Claude Code、Claude Cowork 等全产品线。

来源：[Anthropic 官方支持文档](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content)

**Google Gemini 新增第三方应用集成**：Google 于 8 月 12 日宣布 Gemini 新一轮第三方应用集成，包括 Ticketmaster、OpenTable、Pandora、iHeartRadio、Otter.ai 等，用户可直接在 Gemini 中预订餐厅、购买演出门票和流媒体音乐。

来源：[Google 官方博客](https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-services-gemini-august-2026/)

## 新工具 & CLI

### 1. GitHub Copilot CLI 公测上线

GitHub 于 8 月 12 日推出 Copilot CLI 公开测试版，将 AI 编程助手能力从代码编辑器扩展到终端环境。支持探索代码仓库、根据 Issue 实现功能、调试复杂问题，通过自然语言操作 Issues 和 Pull Requests。可通过 `npm install -g @github/copilot` 安装，面向 Copilot Pro 及以上订阅用户。

来源：[Summer Origin Tech](https://ai-damn.com/github-copilot-cli-beta-ai-comes-to-the-terminal-1759014146319)

### 2. xAI Grok Bot — 24/7 常驻 AI Agent

Grok Bot 是一组常驻云端的 AI Agent，可全天候在应用、工具、邮箱和网站中自主工作。Bot 能登录没有 API 的平台完成端到端多步任务，多个 Bot 可并行协调。面向 SuperGrok Heavy 和 Cursor Ultra 订阅用户开放测试。

来源：[xAI 官方](https://x.ai/news/introducing-grok-bot)

### 3. Docker Sandboxes — AI 编码 Agent 的 microVM 沙箱

Docker 于 8 月 11 日上线 Sandboxes，为 Claude Code、Codex、Copilot CLI 等 autonomous coding agents 提供一次性 microVM（基于 Hypervisor.framework / WHP / KVM，每会话独立内核），支持完整软件包安装与嵌套容器，但仅挂载活跃项目目录。

来源：[DAMO 开发者矩阵](https://damodev.csdn.net/6a7aea9410ee7a33f2996fac.html)

### 4. Antigravity CLI v1.1.12

Antigravity CLI 于 8 月 11 日发布新版本，新增 heading outline（按 `t` 打开长文档结构）、read-only 斜杠命令的非交互式 JSON 输出、`SKILL.md` 中 `disable-slash-command` 隐藏内部技能、SSH/tmux 下可点击的 terminal hyperlink 等功能。

来源：[DAMO 开发者矩阵](https://damodev.csdn.net/6a7aea9410ee7a33f2996fac.html)

### 5. Salesforce BLIP3-o — 开源多模态模型

Salesforce AI Research 于 8 月 11 日发布 BLIP3-o，xGen-MM（BLIP-3）系列最新开源多模态模型。采用扩散 Transformer 替代传统像素空间解码器，训练速度提升 30%，在文档 OCR 和图表分析中准确率达 95%。模型权重在 Hugging Face 上以 CC BY-NC 4.0 许可发布。

来源：[Summer Origin Tech](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402)

## 编程方式

### AI 编码工具链 48 小时内四连发：工程化深水区到来

8 月 10-11 日，Claude Code v2.1.227、Antigravity CLI v1.1.12、GitHub Copilot CLI v1.0.79、Devin Desktop v3.7.16 几乎同期发版。四款头部 AI 编码 CLI 集中更新，反映出赛道已进入"长文档导航 + 机器可读化 + 技能菜单治理"三项新工程化指标。竞争焦点从模型能力转向 harness 层的可观察性与可控性。

来源：[DAMO 开发者矩阵](https://damodev.csdn.net/6a7aea9410ee7a33f2996fac.html)

### OpenAI Codex 扩展全开发流程：导入 Cursor/Claude Code 设置

OpenAI Codex 添加实验性分页线程历史、子 Agent 支持和记忆功能，并扩展导入功能以迁移 Cursor 和 Claude Code 的设置、MCP 服务器、插件、会话和项目级记忆。同时新增 Amazon Bedrock 登录和音频输入支持，GPT-5.6 Sol 成为默认 Bedrock 模型。导入功能直接降低了开发者切换成本。

来源：[FeedsMonitor](https://feedsmonitor.com/article/ai-weekly-gpt-5-6-cyber-muse-glimmer-and-the-agent-browser-eb02678a6a)

### OpenAI 企业数据：前沿企业 AI 产出是普通企业的 8.3 倍

OpenAI 报告显示，前沿企业（前 10% 的企业 AI 用户）每位活跃用户的输出 token 量是普通企业的 8.3 倍，较 1 月的 2.6 倍大幅增长。Codex 占企业输出 token 的 64%，反映向 Agent 化多步工作的转变。法律领域增长 108 倍，销售增长 41 倍。

来源：[OpenAI 官方](https://openai.com/index/how-enterprises-put-ai-to-work/)

### Spec → Plan → Execute → Verify 四阶段工作流成为新范式

一种新的 AI 编程工作流正在流行：Spec（写规格说明）→ Plan（规划）→ Execute（执行）→ Verify（验证）。强调在写代码前先写一页以内的规格说明，包含问题陈述、约束条件、成功标准和已知陷阱，然后用 AI 逐步执行并验证结果。这种结构化方法正在取代简单的"让 AI 直接写代码"模式。

来源：[Blink](https://blink.new/blog/ai-coding-workflow)

## HuggingFace 热门模型

| 模型 | 发布方 | 简介 |
|------|--------|------|
| BLIP3-o | Salesforce | 开源多模态模型，扩散 Transformer 架构，训练速度提升 30% |
| Muse Glimmer | Meta | 30B Apache 2.0 开源模型，单 24GB GPU 可运行，面向本地 Agent |
| Nemotron 3.5 Lightning | NVIDIA | 30B MoE 模型（3B 活跃），常驻 Agent 高频执行层 |
| DeepSeek-R1 | deepseek-ai | DeepSeek 推理模型，MIT 许可 |
| Qwen3-Coder-30B-A3B | unsloth | 编码专用模型，Apache 2.0，GGUF 量化版 |

来源：[ParaPulse HuggingFace 排行](https://parapulse.io/trending/text-generation) · [Hugging Face](https://huggingface.co/spaces/BLIP3o/blip-3o)

## 总结

今日 AI 产业的核心主线是"Agent 从能聊到能干"——xAI Grok Bot 实现 24/7 常驻自主工作、NVIDIA NeMo Switchyard 用模型路由将 Agent 成本砍掉 74%、微软 MAI-Code-1.Flash 在 Copilot 中降本 75%，AI 编码工具链 48 小时四连发标志着竞争从模型能力转向 harness 层的工程化与可控性。
