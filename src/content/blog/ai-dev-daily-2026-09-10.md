---
title: "AI 开发日报 · 2026年09月10日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-10
tags: ["AI日报"]
---

## 今日要闻

### 1. DeepSeek 计划今日（9 月 10 日）正式发布 V4.1 Flash

据 DeepSeek 官网消息，DeepSeek 计划于北京时间 2026 年 9 月 10 日前后正式发布 V4.1 Flash 模型。经内部与外部多方测试，V4.1 Flash 在性能、费用、速度、总用时等各项指标上已全面超越 V4 Pro；在 V4.1 Flash 正式上线后、V4.1 Pro 上线前，DeepSeek 会将 V4 Pro 的请求全部路由至 V4.1 Flash。

来源：[界面快讯](http://m.toutiao.com/group/7683447807738429961/) · [元新闻](http://m.toutiao.com/group/7683451273253634566/)

### 2. OpenAI 牵手三星开发下一代 AI 芯片

9 月 9 日在首尔举行的新闻发布会上，OpenAI 韩国总经理 Harrison Kim 表示，双方在下一代芯片的研发与联合生产方面取得最大进展并获得最广泛认可。今年 6 月 OpenAI 已推出首款与博通共同设计的定制化 AI 芯片，本次与三星深化合作意味着 OpenAI 正从模型层向底层算力延伸。

来源：[每日经济新闻·数智早参](http://m.toutiao.com/group/7683674602144399872/)

### 3. 京东发布企业 AI 全家桶 JD JoyWork

9 月 9 日在「2026 京东云大会」上，京东集团副总裁王涛发布企业 AI 全家桶 JD JoyWork，定位企业级 AI 原生工作与办事入口，涵盖超级 AI 助手「万能」等能力，主打企业场景的一站式办公智能化。

来源：[每日经济新闻](http://m.toutiao.com/group/7683674590685577747/)

### 4. Meta 发布个人 AI 助手 Muse

Meta 推出面向个人的 AI 助手 Muse，由 Muse Spark 驱动，可自动化诸如预订旅行、发送邮件等任务；Muse 运行于 Muse Secure VM，通过 Sentinel 代理对操作进行监督以保证数据隐私，并已在 iOS、Android 上线。此前其 Muse Spark 1.3 于 9 月 2 日发布，加入本轮回合。

来源：[AI News Briefs](https://radicaldatascience.wordpress.com/2026/09/08/ai-news-briefs-bulletin-board-for-september-2026/) · [模型对比分析报告](https://yorozuipsc.com/uploads/1/3/2/5/132566344/ebf8bd1fbefa779d78c0.pdf)

### 5. Salesforce 开源多模态模型 BLIP3-o，登 Hugging Face

Salesforce AI Research 发布开源多模态模型 BLIP3-o，这是其 xGen-MM（BLIP-3）系列的最新成员，现已上线 Hugging Face，面向多模态理解与视觉应用场景开放。

来源：[ai-damn](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402)

## 涨星最快项目

本周 GitHub 趋势延续「超级 Agent + Agent Skills」主线，多智能体编排与技能类项目涨势最猛：

- **valisglobal/agency-agents** ⭐ 26,556（+6,223）— 完整 AI 代理团队框架：每个 Agent 是拥有专属人格、流程与可交付成果的领域专家，主打生产级编排。 ([GitHub](https://github.com/valisglobal/agency-agents))
- **bytedance/deer-flow** ⭐ 28,844（+1,413）— 字节开源的超级 Agent（Deep Exploration and Efficient Research Flow），编排子代理、记忆与沙箱以完成从研究到代码的全流程。 ([GitHub](https://github.com/bytedance/deer-flow/))
- **heygen-com/hyperframes**（24h +2,532）— 专为 Agent 设计的视频渲染 HTML 框架，让智能体直接产出可交互的视频。 ([GitHub](https://github.com/heygen-com/hyperframes))
- **tt-a1i/archify**（24h +2,264）— Agent Skill，生成美观且可验证的架构、工作流、时序、数据流与生命周期图，自包含 HTML 带动效。 ([GitHub](https://github.com/tt-a1i/archify))
- **huggingface/agents-course** ⭐ 32,265 — Hugging Face 官方 Agent 课程仓库，覆盖 Agent 从基础到进阶的完整学习路径。 ([GitHub](https://github.com/huggingface/agents-course))

## 大模型进展

### 国内

- **DeepSeek**：V4.1 Flash 计划今日上线，性能、费用、速度全面提升，且将承接全部 V4 Pro 请求，延续「更小激活 + 更高性价比」的效率路线。 ([界面快讯](http://m.toutiao.com/group/7683447807738429961/))
- **通义千问**：阿里开源 Qwen3.8-27B，27B 级开放权重模型，主打编码与专业办公（Cowork）场景；同期 Qwen3.6 MoE 的高效 FP4 量化版 nvidia/Qwen3.6-35B-A3B-NVFP4 在 HuggingFace 热榜领跑，因效率/质量均衡打破下载记录。 ([DeepSeek 技术社区](https://deepseek.csdn.net/6a82434a10ee7a33f29bda11.html) · [HF Trending](https://github.com/duanyytop/agents-radar/issues/1841) · [Slashdot](https://slashdot.org/software/ai-models/for-hugging-face/))
- **智谱**：公开此前以 Ox Alpha 匿名上线的自研大模型即 GLM-5.3-Flash，曾在 OpenRouter / OpenCode 免费试用；GLM-5.3 定位编程能力最强旗舰，较 GLM-5.2 内部评测提升 50%，并集成 DeepSeek 稀疏注意力（DSA）降低长上下文部署成本。 ([观察者网](http://m.toutiao.com/group/7683463340928041523/) · [千问平台](https://platform.qianwenai.com/docs/changelog/models) · [鲸智社区](https://aihub.caict.ac.cn/models/?tag=cc-by-4.0&tag_type=License))
- **京东**：发布企业级 AI 原生入口 JD JoyWork，切入企业办公智能化赛道。 ([每日经济新闻](http://m.toutiao.com/group/7683674590685577747/))

### 国外

- **OpenAI**：GPT-6 Astra 已上线，OpenAI 称之为迄今智能程度最高、最符合人类意图的模型，在计算机操作、编程、网络安全与科学领域具备行业前沿能力，并成为首个达到其 Preparedness Framework「Critical」网络安全能力等级的模型。 ([OpenAI 研究](https://openai.com/zh-Hans-CN/research/index/))
- **OpenAI × 三星**：深化下一代 AI 芯片合作，向底层算力延伸（见今日要闻）。 ([每日经济新闻](http://m.toutiao.com/group/7683674602144399872/))
- **Anthropic**：Claude Fable 5.1 于 9 月 1 日发布，强化智能体能力，更擅长持续数小时的编程、研究与知识工作，并自主验证结果、调整优先级。 ([南方周末](http://m.toutiao.com/group/7683040382200775231/) · [模型对比报告](https://yorozuipsc.com/uploads/1/3/2/5/132566344/ebf8bd1fbefa779d78c0.pdf))
- **Google**：Gemini 3.8 Flash 于 9 月 2 日发布，加入本轮 AI 军备竞赛。 ([模型对比报告](https://yorozuipsc.com/uploads/1/3/2/5/132566344/ebf8bd1fbefa779d78c0.pdf))
- **Meta**：Muse Spark 1.3 于 9 月 2 日发布，并推出个人 AI 助手 Muse（见今日要闻）。 ([radicaldatascience](https://radicaldatascience.wordpress.com/2026/09/08/ai-news-briefs-bulletin-board-for-september-2026/))
- **Salesforce**：开源多模态模型 BLIP3-o（见今日要闻）。 ([ai-damn](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402))

## 新工具 & CLI

- **阿里 Qoder CLI（9 月 4 日）** — 阿里发布的 AI 命令行编码工具，把 AI 编程能力直接带进终端，官方称可显著提升编码效率。 ([报道](https://ai-damn.com/alibaba-unveils-qoder-cli-ai-tool-boosts-coding-efficiency-1760674288206))
- **ai_launcher** — 终端原生的桌面启动器，面向 AI 编码 CLI 设计，一键检测、安装并运行 Claude Code、Antigravity、Codex、Aider、Goose 等，内置 Anthropic、智谱、MiniMax、Moonshot/Kimi、Qwen 等 6+ 家模型供应商，当前支持 Windows、macOS/Linux 规划中。 ([GitHub](https://github.com/HelbertMoura/ai_launcher))

## 编程方式

- **Agentic DevOps 成为新范式**：微软推出「Agentic DevOps」——基于智能体协作重构的下一代 DevOps，GitHub Copilot 的 agentic 工作流帮助团队更快从想法到生产，同时提升代码质量、协作、安全并治理技术债，标志 AI 编程正向「agent 与你协作、也相互协作」的方向演进。 ([Microsoft Azure Blog](https://azure.microsoft.com/en-us/blog/agentic-devops-evolving-software-development-with-github-copilot-and-microsoft-azure/))
- **编码 Agent 收敛到「Planner–Worker–Judge」层级编排**：Claude Code、Cursor、Devin、OpenHands、Aider 等工具不约而同地收敛为「规划者拆解任务、执行者异步并行执行、评审者把关」的分层架构，取代早期的对等 agent + 锁/乐观并发方案，成为多智能体编码的标准模式。 ([Coding Agent Pipeline Convergence](https://codex.danielvaughan.com/2026/04/15/coding-agent-pipeline-convergence/))
- **从 Copilot 到 Agent 的工作流迁移**：开发者交互模式从「开发者驱动、实时补全」转向「目标驱动、异步执行」，任务粒度从代码行/函数升级为功能模块与完整需求，开发者角色愈发转向定义需求、分派任务与评审 Agent 产出。 ([CSDN 工作流对比](https://blog.csdn.net/2401_89862966/article/details/163311851))

## 总结

今日关键词是「垂直整合 + 超级 Agent 编排」：DeepSeek 依计划放出 V4.1 Flash 延续价格与效率战，OpenAI 携手三星敲定下一代芯片、向底层算力延伸，Meta 的 Muse 把个人 Agent 推向消费端；开源侧 Qwen3.8-27B、GLM-5.3-Flash、Salesforce BLIP3-o 密集出炉，而 Agentic DevOps 与 Planner–Worker–Judge 分层编排正在把 AI 编程从「工具」重塑为「agent 团队协作」的工程范式。