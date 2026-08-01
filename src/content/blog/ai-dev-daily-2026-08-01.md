---
title: "AI 开发日报 · 2026年08月01日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-01
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 发布 Claude Opus 5：逼近 Fable 5、成本减半

7 月 24 日，Anthropic 推出 Claude Opus 5，定价维持 $5/$25 每百万 Token（与 Opus 4.8 持平），新增五档努力强度调节（low/medium/high/xhigh/max）与 100 万 Token 上下文窗口。在 CursorBench 3.2 上与 Mythos 级旗舰 Fable 5 峰值仅差 0.5%，但单任务成本只有一半；在 ARC-AGI 3 上得分为次优模型的三倍。Opus 5 现已成为 Claude Max 默认模型，这是 Anthropic 不到两个月内发布的第四款 Claude 5 系列模型。

来源：[Anthropic](https://www.anthropic.com/news/claude-opus-5) · [TechCrunch](https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/) · [ThursdAI](https://thursdai.news/releases/2026-07)

### 2. Kimi K3 开源权重正式上线：2.8 万亿参数登顶 HuggingFace Trending

月之暗面 Kimi K3 于 7 月 16 日发布 API、7 月 27 日放出完整权重，总参数达 2.8 万亿（896 个专家中激活 16 个，约 104B 活跃参数），是全球首个开源的 3T 级模型。它原生支持视觉理解、具备 100 万 Token 上下文，并在 Frontend Code Arena 登顶超越 Claude Fable 5。7 月 28 日上线 Hugging Face 后 30 分钟内获超 4000 点赞，创下平台史上最快增长纪录。

来源：[Kimi 官方博客](https://www.kimi.com/blog/kimi-k3) · [36氪](https://36kr.com/p/3914938171020931) · [Cointime](https://www.cointime.ai/flash-news/kimi-k3-open-39309)

### 3. OpenAI 公布 GPT-5.6 自进化进展：推理成本降 20%、效率提升 15%

7 月 30 日凌晨，OpenAI 集中披露 GPT-5.6 系列用于自我优化的技术细节：GPT-5.6 Sol 通过 Codex 自主重写并优化生产环境 GPU 内核，使端到端推理服务成本降低 20%；迭代推测解码配套模型，让 Token 生成效率提升超 15%。在 ARC-AGI-3 上，启用推理记忆留存与上下文压缩两项 API 配置后，GPT-5.6 Sol 得分提升至原来的 3 倍、输出 Token 缩减为 1/6。同期 OpenAI 用户规模首破 10 亿人，服务 200 万家企业；刚离职的翁荔（Lilian Weng）被曝将回归 OpenAI 开展自进化研究。

来源：[36氪](https://36kr.com/p/3917509136346498) · [OpenAI Research](https://openai.com/research/index/)

### 4. Google 发布 Gemini 3.6 Flash：输出降价 17%、SWE-Bench Pro 达 58.7%

7 月 21 日，Google DeepMind 推出三款 Gemini Flash 刷新：主力 Gemini 3.6 Flash 输出 Token 用量较 3.5 Flash 降低 17%，输出定价从 $9.00 降至 $7.50 每百万 Token（输入维持 $1.50），SWE-Bench Pro 得分 58.7%，支持 100 万 Token 上下文与 64K 最大输出。同时发布面向预算的 Flash-Lite 与仅向政府和可信合作伙伴试点的 Flash Cyber 网络安全模型。Google 同时确认 Gemini 4 已进入预训练阶段。

来源：[9to5Google](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/) · [Google DeepMind](https://deepmind.google/models/gemini/flash/) · [ThursdAI](https://thursdai.news/releases/2026-07)

### 5. Visual Studio 2026 七月更新：新增 GitHub Copilot SDK 驱动的 AI Agent

7 月 29 日，微软发布 Visual Studio 2026 七月更新，引入由 GitHub Copilot SDK 驱动的新一代 AI Agent，并集成新的 .NET 与 Azure 技能，进一步将 AI 编程能力嵌入 IDE 工作流。

来源：[Developpez](https://visualstudio.developpez.com/actu/385715/Microsoft-presente-la-mise-a-jour-de-juillet-de-Visual-Studio-2026-avec-le-nouvel-agent-IA-optimise-par-le-SDK-GitHub-Copilot-ainsi-que-de-nouvelles-competences-NET-et-Azure-integrees/)

## 涨星最快项目

> 数据来源：GitHub Trending 周榜（截至 2026-07-26），本周 22 个热门项目合计新增 111,748 星。

### 1. bojieli/ai-agent-book — 《深入理解 AI Agent》开源书籍

李博杰所著《深入理解 AI Agent：设计原理与工程实践》开源主仓库，围绕"Agent = LLM + 上下文 + 工具"核心公式，含全书正文、编译版 PDF/EPUB 与 92 个按章配套工程实验。本周达 19,914 星、周增 16,579 星。

GitHub：[bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)

### 2. koala73/worldmonitor — 实时全球情报仪表板

开源实时全球情报与态势感知仪表盘，聚合 500+ 新闻源与 65+ 外部数据提供商，AI 自动生成简报，含 3D 地球与 WebGL 平面地图（56 种图层）、国家动荡指数与金融雷达，支持基于 Ollama 的本地 AI 运行。本周达 74,240 星、周增 12,085 星。

GitHub：[koala73/worldmonitor](https://github.com/koala73/worldmonitor)

### 3. mattpocock/skills — Agent Skills 技能包

前 Vercel TypeScript 布道者 Matt Pocock 开源的 21 个 Claude Code 技能，走"小而可组合"路线，含 grill-me（反向拷问需求）、tdd（红绿重构）、code-review（双轴评审）等，`npx skills add` 一键安装。本周达 188,485 星、周增 11,790 星。

GitHub：[mattpocock/skills](https://github.com/mattpocock/skills)

### 4. diegosouzapw/OmniRoute — 免费 AI 统一网关

单一端点整合 290+ 模型提供商（90+ 免费）、500+ 大模型，兼容 Claude Code、Codex、Cursor、Cline、Copilot，支持额度感知自动回退，RTK+Caveman 压缩最高省 95% Token。本周达 30,152 星、周增 11,147 星。

GitHub：[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)

### 5. stablyai/orca — 并行编码 Agent 管理工具

统一 Agent 编排界面，支持 Worktree 隔离、并行任务对比与跨 Agent 结果合并，桌面端 + 移动端 + VPS 三种部署形态，让"AI Agent 集群管理"产品化。本周达 29,117 星、周增 7,327 星。

GitHub：[stablyai/orca](https://github.com/stablyai/orca)

## 大模型进展

### 国内

- **通义千问 Qwen3.8-Max 预览版**：7 月 19 日在 WAIC 放出，2.4 万亿参数多模态 MoE，处理文本、图像、视频与文档，官方定位"仅次于 Claude Fable 5"，预览期按标准定价 10% 开放试用，号称将开放权重但未给日期。[来源](https://www.aitop100.cn/infomation/details/34293.html) · [MarkTechPost](https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/)
- **DeepSeek-V4 正式版**：7 月 15 日上线，标配 100 万 Token 上下文，推理算力仅为 V3.2 的 27%，含 Flash 与标准两版，提供 25% 永久折扣 + 峰谷定价，权重已开源并适配华为昇腾 950；官方预告 V4-Pro 正式版择期推出。[来源](https://juejin.cn/post/7662182153769730074)
- **智谱 GLM-5.2**：6 月 16 日发布、7 月开源，100 万 Token 上下文，MIT 许可证开放权重，重点转向长时间干活——阅读大型代码库、反复调用工具，在 Terminal-Bench 2.1 表现领先。[来源](https://36kr.com/p/3914938171020931)
- **蚂蚁 Ling-3.0-Flash**：7 月 23 日发布，124B MoE 仅激活约 5.1B 参数，原生混合线性注意力 + 分层缓存，宣称长输入首 Token 时延降低 60-80%，权重后续开源。[来源](https://www.businesswire.com/news/home/20260726584441/en/Ant-Group-Unveils-Ling-3.0-Flash-Delivering-Top-Tier-Performance-at-a-Fraction-of-the-Parameter-Scale)
- **Kimi K3**：2.8 万亿参数全球最大开源模型，Frontend Code Arena 登顶，详见今日要闻。[来源](https://www.kimi.com/blog/kimi-k3)

### 国外

- **OpenAI GPT-5.6 家族**：7 月 9 日公开发布 Sol（旗舰 Agent）、Terra（半价日常）、Luna（快速低价）三型号；月末披露自进化进展，推理成本降 20%、效率提升 15%。[来源](https://36kr.com/p/3917509136346498)
- **Anthropic Claude Opus 5**：7 月 24 日发布，逼近 Fable 5 性能、成本减半，详见今日要闻。[来源](https://www.anthropic.com/news/claude-opus-5)
- **Google Gemini 3.6 Flash**：7 月 21 日发布，输出降价 17%，SWE-Bench Pro 达 58.7%，Gemini 4 预训练中。[来源](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/)
- **Meta Muse Spark 1.1**：7 月 9 日发布，100 万 Token 上下文 Agent 模型，对标 GPT-5.5 与 Opus 4.8，并推出 Meta 首个付费开发者 API（公开预览），支持桌面/浏览器/移动端计算机使用与并行子 Agent 委派。[来源](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- **Black Forest Labs FLUX 3**：7 月 23 日发布，单一权重同时生成图像、最长 20 秒带音频视频与机器人动作预测，BFL 自测对 Runway Gen-4.5 偏好胜率 77%。[来源](https://bfl.ai/blog/flux-3)
- **Thinking Machines Inkling**：7 月 15 日发布，Mira Murati 团队首个模型，975B/41B 活跃参数 MoE，45 万亿多模态 Token 预训练，Apache 2.0 开源，被评为当前美国最强开源模型。[来源](https://thinkingmachines.ai/news/introducing-inkling)
- **Microsoft MAI-Image-2.5-Pro & MAI-Voice-2-Flash**：7 月 23 日发布自研图像旗舰与语音模型，MAI-Voice-2-Flash 较 MAI-Voice-2 快 2 倍、便宜 32%。[来源](https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/)
- **Poolside Laguna S 2.1**：7 月 21 日开源，118B/8B 活跃 MoE 面向 Agent 编码，100 万 Token 上下文，Terminal-Bench 2.1 pass@1 达 70.2，OpenMDW 许可证免费可用。[来源](https://venturebeat.com/infrastructure/poolside-drops-laguna-s-2-1-an-open-weight-coding-model-that-beats-rivals-10x-its-size)

## 新工具 & CLI

- **Kimi Code CLI（kimi-cli / kimi-code）**：月之暗面推出的终端 AI 编码 Agent，单文件二进制分发，毫秒级 TUI，支持读写代码、执行 Shell、网页检索，甚至拖入屏幕录像识别分析，可通过 Agent Client Protocol 与 Zed、JetBrains 联动。来源：[GitHub](https://github.com/MoonshotAI/kimi-cli) · [kimi-code](https://github.com/MoonshotAI/kimi-code)
- **阿里云百炼 CLI（开源）**：面向 AI Agent 调度与多模态任务编排的命令行工具，一行命令打通模型调用、知识库检索、联网搜索、长期记忆与视频图像生成，支持嵌入自动化脚本。来源：[阿里云开发者](https://developer.aliyun.com/article/1749158)
- **OpenAI openai-cli**：OpenAI 官方命令行工具，无需编写 SDK 代码即可在终端调用 Responses API 与全套 Agent 工具，提升本地开发与自动化脚本效率。来源：[站长之家](https://m.chinaz.com/ainews/27769.shtml)
- **Microsoft Agent Framework Harness**：7 月 22 日发布，提供可创建并编排 Agent 的运行时框架，支持异步多 Agent 协作。来源：[Microsoft DevBlogs](https://devblogs.microsoft.com/agent-framework/the-microsoft-agent-framework-harness-is-now-released/)
- **code-review-graph**：面向 MCP 和 CLI 的本地优先代码智能图谱，用 Tree-sitter 解析代码库生成 AST 图谱，精确计算变更影响范围，大幅减少送入 AI 的上下文 Token，支持数十种语言。来源：[GitHub](https://github.com/tirth8205/code-review-graph)
- **jcode**：Rust 编写的高性能代码 Agent 运行框架，深度优化内存与首帧速度，内置语义向量 + 记忆图谱的动态记忆系统与多 Agent 蜂群协同。来源：[GitHub](https://github.com/1jehuang/jcode)

## 编程方式

### Agent Skills 生态集体爆发

2026 年 7 月成为"Skills 爆发之年"。7 月 11 日，`obra/superpowers`、`mattpocock/skills`、`addyosmani/agent-skills` 三个 Skills 仓库单日合计涨星近 50 万。Skills 本质是"结构化 Prompt 模板 + 工具调用配置 + 输出格式约束"的组合体，之于 Agent 就像 Dockerfile 之于容器——把工程经验固化为可共享、可组合的配置。superpowers（25.7 万星）定义 Spec→Plan→Implement→Review→Ship 全流程方法论；agent-skills 覆盖安全、性能、无障碍六阶段；caveman 用"穴居人式"输出砍掉最高 65% Token 成本；hallmark 则终结 AI 生成代码的"AI 味"。来源：[CSDN](https://blog.csdn.net/yanceyxin/article/details/163217957)

### 从 Copilot 到 Agent 的范式转移

7 月 29 日的一篇开发者实践总结指出，AI 正从"工具"演变为"伙伴"：从最初 GitHub Copilot 的代码补全，到如今 Agent 能自主规划、执行复杂任务，开发者职责转向架构决策与业务逻辑，AI 负责将意图转化为高质量代码。来源：[CSDN](https://blog.csdn.net/2401_89862966/article/details/163311851)

### 多 Agent 并行成为新工作流

7 月 28 日，Orca ADE 发布，允许开发者并行运行多个 AI 编码 Agent 而不产生冲突；同期 LangGraph 等 Agent 框架也加入执行历史治理能力。当团队同时跑 5 个 Claude Code、3 个 Codex、2 个 Cursor 时，Agent 集群编排正从"脚本拼凑"走向产品化。来源：[AI Agents Directory](https://aiagentsdirectory.com/news/ai-agents-news-brief-governance-security-and-development-tools-take-center-stage)

### Vibe Coding 工作流成熟

7 月中旬，"Vibe Coding 深度实践"指出真正的 Vibe Coding 是人机协作的编程范式——人负责架构决策和业务逻辑，AI 负责把意图转化为高质量代码，掌握它已成为工程师效率竞争力的核心，"先规范、后提示"的流程可让交付速度提升 3 倍。来源：[新浪](https://cj.sina.cn/articles/view/7880068235/1d5b04c8b01902c8vm) · [Blink](https://blink.new/zh-Hans/blog/ai-coding-workflow-2026)

## 总结

今日 AI 行业的核心信号清晰：开源模型用量与参数规模全面冲击闭源神话（Kimi K3 以 2.8 万亿参数登顶 HuggingFace），而真正的竞争已从"谁模型更强"转向"谁把模型用得更好"——Skills 生态、Agent 集群编排与全栈工程化优化，正在定义下一代开发者的工作流。
