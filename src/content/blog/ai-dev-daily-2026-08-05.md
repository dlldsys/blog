---
title: "AI 开发日报 · 2026年08月05日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-05
tags: ["AI日报"]
---

## 今日要闻

### 1. 通义千问 Qwen3.8-Max 正式发布，16 天自主编程开源 oh-my-cli

8 月 3 日，阿里通义千问 Qwen3.8-Max 压轴登场：总参数 2.4 万亿、激活 95B 的稀疏 MoE 架构，支持 1M token 上下文。最值得关注的是其长程自治能力——从一个空文件夹出发，无人干预独立运行约 16 天，自主写代码、跑测试、看日志、吸收反馈，最终产出开源 Agent 框架 oh-my-cli（265 次代码提交、完整操作历史公开）。官方宣布 Qwen3.8-Max 与 Qwen3.8-27B 将于下周开源权重，这是 Max 级别模型首次面向社会开源。

来源：[新浪基金](https://finance.sina.cn/fund/etf/2026-08-04/detail-inimctrp5324279.d.html) · [阿里云开发者社区](https://developer.aliyun.com/article/1753092) · [腾讯新闻](http://news.qq.com/rain/a/20260804A0CLHT00)

### 2. Anthropic Claude Opus 5 成 Claude Code 默认模型，Mythos 攻破 AES 理论攻击

Anthropic 发布的 Claude Opus 5 在编码、知识工作和生命科学评测中显著领先，价格仅为竞品一半，并已成为 Claude Code 的默认模型，支持嵌套子智能体到深度 3。其研究模型 Claude Mythos 在一周内找到了一个 AES 的理论攻击，但官方坦言"两个研究员花了近一个月才说服自己这是对的"——发现不再是瓶颈，验证才是。

来源：[网易](https://www.163.com/dy/article/L3E75EC005561FZU.html) · [中财网](https://www.cfi.net.cn/p20260802000120.html) · [Brief IA](https://www.briefia.fr/article/anthropic-google-et-meta-les-nouvelles-avancees-ia-de-la-semaine)

### 3. MiniMax H3 全模态视频模型开源，16 家芯片厂商首日适配

8 月 3 日，MiniMax H3 正式开源。该模型参数 138B，支持文本/图片/音频/视频统一输入，直出 2K 分辨率、最长 15 秒、带原生 32kHz 立体声音频的视频，在 Artificial Analysis 有声视频编辑榜单以 1130 Elo 排名第一。华为昇腾、摩尔线程、沐曦、海光、AMD、Intel 等国内外 16 家芯片厂商及 Hugging Face 等社区同日完成适配，视频生成定价 0.8 元/秒（2K）。

来源：[财联社](https://www.cls.cn/detail/2443972) · [阿里云开发者社区](https://developer.aliyun.com/article/1753092)

### 4. Google 推出 Gemini 3.6 与 Gemini Robotics ER 2

Google 本周扩展 Gemini 产品线：发布 Gemini 3.6 Flash（在 BenchLM 榜单 Align 得分 75.3），并推出 Gemini Robotics ER 2，强化物理世界理解与多步骤规划能力。DeepMind 还发布了分别面向通用、网络安全、智能体应用的三款双子座系列模型，但整体性能提升被指未达市场预期。

来源：[Brief IA](https://www.briefia.fr/article/anthropic-google-et-meta-les-nouvelles-avancees-ia-de-la-semaine) · [中财网](https://www.cfi.net.cn/p20260802000120.html) · [BenchLM](https://www.benchlm.ai/)

### 5. OpenAI 发布 GPT-Live 全双工语音，推理引擎 Go 重写

8 月 3 日，OpenAI 发布 GPT-Live 全双工语音的工程深挖，把语音系统从"轮流说话"改为"边听边说"。推理引擎用 Go 重写、基于 WebRTC，将媒体会话启动从 6 次网络往返压缩到 1 次，把"实时交互"做成新的竞争维度。同期 OpenAI 还正式推出 GPT-5.6 系列模型（旗舰 Sol、均衡型 Terra、低成本 Luna）。

来源：[阿里云开发者社区](https://developer.aliyun.com/article/1753092) · [科技日报](http://www.stdaily.com/web/gdxw/2026-08/02/content_557952.html)

## 涨星最快项目

> 数据来源：GitHub Trending 周榜，采集时间 2026-08-04。

### 1. block/buzz — Rust 蜂群思维通信平台

定位为"hive mind communication platform"的团队沟通与群体协作平台，使用 Rust 构建，契合多人、多 Agent 协同方向。本周新增 +10,558 Star，断层第一。

GitHub：[block/buzz](https://github.com/block/buzz)

### 2. permissionlesstech/bitchat — 蓝牙 Mesh 离线聊天

Swift 项目，基于蓝牙 Mesh 网络实现无互联网依赖的离线通信，带点 IRC 复古味，断网也能聊，在隐私敏感群体中引发共鸣。本周新增 +6,761 Star。

GitHub：[permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat)

### 3. citrolabs/ego-lite — 给 AI Agent 用的浏览器

JavaScript 项目，面向 AI Agent 的轻量浏览器自动化工具，强调零成本零配置共享用户已有登录态，复用登录态降低配置成本。本周新增 +4,741 Star。

GitHub：[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)

### 4. 1jehuang/jcode — 最省内存的编程运行框架

Rust 项目，主打最省内存的编程 harness（运行框架），体现 Rust 在底层 CLI 与 DevOps 工具层的持续渗透。本周新增 +3,351 Star。

GitHub：[1jehuang/jcode](https://github.com/1jehuang/jcode)

### 5. moeru-ai/airi — 开源 AI 数字人

TypeScript 项目，开源 AI 数字人，能语音聊天、打 Minecraft，"有形象、能陪玩"的 AI 伴侣方向持续升温。本周新增 +3,125 Star。

GitHub：[moeru-ai/airi](https://github.com/moeru-ai/airi)

> 本周榜单几乎被 AI Agent 工具链包揽。同期企业级项目也密集上榜：[microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit)（Agent 行为治理）、[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)（Agent 长期记忆数据库方案）、[bytedance/deer-flow](https://github.com/bytedance/deer-flow)（字节多智能体工作流）。详见[第 31 周趋势周报](https://blog.csdn.net/lpfasd123/article/details/163434672)。

## 大模型进展

### 国内

- **通义千问 Qwen3.8-Max（阿里）**：2.4T 稀疏 MoE、激活 95B、1M 上下文，混合注意力优化 KV Cache；国内定价每百万 token 输入 12 元、输出 36 元、缓存命中仅 1.5 元，国际价格分别只有 Opus 5 的 40% 和 24%；下周开源权重。[来源](https://developer.aliyun.com/article/1753092)
- **DeepSeek V4-Flash（深度求索）**：7 月 31 日开放正式版 API，284B 总参 / 13B 激活 MoE，靠后训练优化把 Agent 能力拉高约 6 倍，完美适配华为昇腾 950 国产算力。[来源](http://m.toutiao.com/group/7669994733481116179/)
- **MiniMax H3（开源）**：138B 全模态，2K/15 秒带声视频，高压缩 Tokenizer + V2V 动作迁移，Artificial Analysis 有声视频编辑榜第一，16 家芯片首日适配。[来源](https://www.cls.cn/detail/2443972)
- **Kimi K3（月之暗面）**：7 月 27 日开源，总参数 2.8T 的 MoE，全球首个开源 3 万亿级模型，同步开放 MoonEP、FlashKDA、AgentEnv 三项训练基础设施技术。[来源](https://news.ifeng.com/c/8v7hQZNaDnl)
- **小米 Mi-Mo-V2.5 登顶**：截至 7 月 31 日，OpenRouter 7 月大语言模型调用量榜前六全部被国产开源模型包揽，依次为小米 Mi-Mo-V2.5、DeepSeek V4 Flash、腾讯 HY3、MiniMax 等。[来源](http://kw.beijing.gov.cn/xwdt/kcyx/xwdtcyfz/202608/t20260804_4807596.html)

### 国外

- **OpenAI Astra**：正式公布下一代内部大模型 Astra 的阶段性成果，在无人类提示介入下自主推导并给出 10 项长期未解数学难题的完整证明，论文共 249 页，目前处于内部安全评估阶段。[来源](https://m.bbwc.cn/article/2026/08/03/100149138_1.html)
- **OpenAI GPT-5.6 / GPT-Live**：推出 GPT-5.6 系列（Sol/Terra/Luna），能更好处理工作流复杂上下文；8 月 3 日发布 GPT-Live 全双工语音，Go 重写推理引擎、基于 WebRTC。[来源](http://www.stdaily.com/web/gdxw/2026-08/02/content_557952.html)
- **Anthropic Claude Opus 5**：编码、知识工作、生命科学评测显著领先，价格约竞品一半，已成 Claude Code 默认模型，支持嵌套子智能体深度 3；Claude Mythos 一周找到 AES 理论攻击。[来源](https://www.cfi.net.cn/p20260802000120.html)
- **Google Gemini 3.6 / Robotics ER 2**：Gemini 3.6 Flash 上线，Gemini Robotics ER 2 强化物理世界理解与多步骤规划。[来源](https://www.briefia.fr/article/anthropic-google-et-meta-les-nouvelles-avancees-ia-de-la-semaine)
- **Meta**：为 AI 聊天机器人增添更多助理式功能向实用化迈进，旗下 Muse Spark 1.1 在 BenchLM 榜单 Align 得分 76.15。[来源](https://www.benchlm.ai/)

## 新工具 & CLI

- **阿里云百炼 CLI（开源）**：2026 年 5 月开源，一行命令打通 AI Agent 全栈能力编排，将主流模型、应用工作流、知识库检索、长期记忆管理、联网搜索统一为终端命令。[来源](https://www.52ai.com/33927.html) · [阿里云开发者社区](https://developer.aliyun.com/article/1749158)
- **OpenAI openai-cli（官方）**：开发者无需编写 SDK 代码，即可在终端中直接调用 Responses API 与全套 Agent 工具，大幅提升本地开发与自动化脚本效率。[来源](https://m.chinaz.com/ainews/27769.shtml)
- **github/copilot-sdk**：GitHub 提供将 AI 能力无缝集成到自有工作流的官方标准 SDK，AI 正从代码补全深入全栈开发环节。[来源](https://blog.csdn.net/lpfasd123/article/details/163434672)
- **microsoft/markitdown**：解决多模态文档向 LLM 上下文转换的痛点，把 Office、PDF 等文档转为模型可消化的结构化输入。[来源](https://blog.csdn.net/lpfasd123/article/details/163434672)
- **microsoft/agent-governance-toolkit**：填补企业级 Agent 行为治理空白，提供 Agent 行为的审计与治理能力。[来源](https://blog.csdn.net/lpfasd123/article/details/163434672)
- **TencentCloud/TencentDB-Agent-Memory**：将数据库技术与 Agent 深度结合，直击 Agent 长期记忆痛点。[来源](https://blog.csdn.net/lpfasd123/article/details/163434672)
- **Microsoft Agent Framework Harness**：微软官方主推的智能体编排 SDK 正式发布 Harness，融合 AutoGen 多智能体与语义内核企业级特性，新增图式工作流；core 包已更新至 1.13.0。[来源](https://devblogs.microsoft.com/agent-framework/the-microsoft-agent-framework-harness-is-now-released/) · [PyPI](https://pypi.org/project/agent-framework-core/)
- **pydantic-ai 2.23.0**：Python Agent 框架新版本于 8 月 4 日发布，帮助开发者快速、自信地构建智能体。[来源](https://pypi.org/project/pydantic-ai/)

## 编程方式

### 16 天自主编程：Agent 从"助手"跨到"同事"

Qwen3.8-Max 的演示验证了"人不在环（human-out-of-the-loop）"的长程自主编程：早上布置任务，Agent 后台自己写代码、跑测试、看日志、回滚，16 天后交付完整项目。其技术闭环是长上下文 + 稳定工具调用 + 自我验证 + 规划与回滚四件套叠加。但落地前提是 CI/CD 成熟、权限收口、可观测性先行——Claude Code 已把 `git reset --hard`、`terraform destroy` 等破坏性命令在自动模式下默认拦截。

来源：[阿里云开发者社区](https://developer.aliyun.com/article/1753092)

### Codex 自动管理完整项目开发流程

OpenAI Codex 已能自动管理完整流程：案例显示其完成了个人网站从设计、排版、代码编写到成功部署上线的全过程，并支撑内容运营 SOP（选题、分析、脚本生成、自查、数据复盘）与工程团队并行开发。

来源：[新浪](https://cj.sina.cn/articles/view/7879849464/1d5acf5f8068019f7s)

### Spec → Plan → Execute → Verify 工作流

2026 年顶级开发者已从"打开工具直接对话"转向"先规范、后提示"：先写 Spec（需求规范）→ Plan（让 AI 规划方案）→ Execute（执行编码）→ Verify（验证产出），可让交付速度提升 3 倍。缺少规范约束直接生成代码，是大多数开发者返工率高的主因。

来源：[Blink](https://blink.new/blog/ai-coding-workflow)

### "Superpowers 失宠"：轻到只有 5 行代码的新工作流

曾经作为 AI 工程化标准答案的 Superpowers 工作流，在 2026 年被越来越多开发者认为过重——一句"做个用户订阅模块"换来两千字方案、一半选型不对。新一代轻量化工作流强调把输出协议、信息密度和认知负担视为可工程化的生产力问题，从原理、流程到安装被重新拆解。

来源：[今日头条](http://m.toutiao.com/group/7669686340820222491/)

## 总结

8 月初国产大模型完成史上最密集的旗舰发布窗口，能力正从"辅助工具"外扩到"端到端自主交付"——自主编程验证长周期交付，全模态视频开源拉进生产级，开源权重重构成本结构；而 Anthropic"发现不再是瓶颈，验证才是"的判断，让工程化护栏成为 2026 年真正的护城河。
