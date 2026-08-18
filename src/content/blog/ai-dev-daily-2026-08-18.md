---
title: "AI 开发日报 · 2026年08月18日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-18
tags: ["AI日报"]
---

## 今日要闻

### 1. DeepSeek-V4-Pro 正式版上线，Agent 能力大幅跃升但 API 价格暴涨

8 月 12 日深夜，DeepSeek 官网 API 文档更新，模型版本从 V4-Pro 预览版切换为 "DeepSeek-V4-Pro-0813" 正式版。新版本重点强化 Agent 能力，在 Terminal Bench 2.1 上拿下 87.9 分（距全球第一的 Anthropic Fable 5 仅差 0.1 分），DeepSWE 软件工程能力从预览版 12.8 分飙升至 62.7 分。模型支持 100 万 Token 上下文长度。然而自 8 月 17 日起，DeepSeek 实施峰谷分时定价，缓存命中输入 Token 峰时价格暴涨 12 倍至 RMB 0.30/百万 Token。

来源：[新浪财经·AI应用周度观察](https://finance.sina.com.cn/jjxw/2026-08-16/doc-ininnuvs9844130.shtml) | [The Neural Feed](https://theneuralfeed.com/article/deepseek-implements-significant-api-price-hikes-for-v4-pro-and-flash-models-effe/SJoiu73w)

### 2. 阿里 Qwen3.8-27B 登顶 HuggingFace 热榜，48 小时超百万下载

阿里巴巴 Qwen3.8-27B 成为 HuggingFace 全球趋势榜首，发布 48 小时内下载量突破 100 万。Qwen 开源家族已扩展至 460+ 模型、30 万衍生微调版本，累计下载量超 30 亿次，超越 Meta Llama 和 Google Gemma 的开源采用量。同期，阿里正式开源 Qwen3.8-Max 旗舰模型权重（Qwen3.8-2.4T-A95B），总参数 2.4 万亿，采用稀疏 MoE 架构，单次激活约 950 亿参数。

来源：[The Neural Feed](https://theneuralfeed.com/article/alibaba-s-qwen-3-8-27b-reaches-top-of-hugging-face-global-model-trend-with-over-/ES74zJcq) | [新浪财经](https://finance.sina.com.cn/jjxw/2026-08-16/doc-ininnuvs9844130.shtml)

### 3. 智谱 GLM-5.3 发布，强化 Coding 与 Agent 能力

8 月 14 日，智谱发布新一代开源旗舰模型 GLM-5.3，继续重点强化 Coding、长程任务执行及 Agent 能力。中信建投研报指出，DeepSeek、智谱等国产模型在推理、Coding、Agent 等能力上正加速追赶海外领先水平。

来源：[36氪](https://36kr.com/newsflashes/3942900707229063)

### 4. Google Gemini 3.7 Flash 正式发布

8 月 13-14 日，Google 正式发布 Gemini 3.7 Flash，定价 $0.75/百万输入 Token，支持 100 万 Token 上下文窗口。该模型定位为高性价比前沿模型，适合大规模部署场景。

来源：[ExplainX](https://www.explainx.ai/blog/gemini-3-7-flash-pricing-leak-rumor-august-2026)

### 5. 字节跳动拒绝蒸馏，计划训练 5 万亿参数模型

字节跳动创始人张一鸣在 7 月全员会上宣布不使用蒸馏（即用 Claude/GPT 输出训练模型）作为捷径，CEO 梁汝波在 8 月 5 日进一步强调自主研发。字节已成立千人规模的"AI 数据与安全"一级部门，并讨论训练超 5 万亿参数模型，将是中国已知最大参数规模模型。豆包商业化加速，推出 68/200/500 元三档月订阅，并合并飞书团队聚焦桌面 Agent 产品。

来源：[The Neural Feed](https://theneuralfeed.com/article/bytedance-establishes-new-ai-data-and-security-department-considers-5-trillion-p/t5Nmc0Rf)

## 涨星最快项目

统计周期：2026 年 8 月 10 日 — 8 月 16 日（数据来源：[GitHub 周榜](http://m.toutiao.com/group/7674897068187468351/)）

### 1. cathrynlavery/diagram-design — 智能体图表生成技能

将图表制作变成智能体技能，内置 27 类架构、流程、时序等图形，输出可编辑 HTML 与 SVG。上周新增约 15,600 Stars，当前 19,677 Stars。

GitHub: https://github.com/cathrynlavery/diagram-design

### 2. PrimeIntellect-ai/prime-agent — 长任务持续执行智能体框架

基于递归语言模型思路，将上下文当作可编程变量，提供守护进程、断线重连、目标心跳和有预算的自主模式，使任务跨会话持续推进。上周新增约 6,400 Stars，当前 16,615 Stars。

GitHub: https://github.com/PrimeIntellect-ai/prime-agent

### 3. semantica-agi/semantica — AI 决策可审计上下文图

将输入上下文、事实来源、规则、决策和因果关系组织为可查询图结构，提供知识抽取、冲突检测、确定性推理和 W3C 来源追踪，适合金融、医疗等需问责场景。上周新增约 5,300 Stars，当前 8,233 Stars。

GitHub: https://github.com/semantica-agi/semantica

### 4. TencentCloud/TencentDB-Agent-Memory — 智能体分层记忆系统

解决智能体长时间运行的上下文膨胀与经验丢失问题，短期层外置工具日志，长期层将对话提炼为原子事实并保留证据路径，还可从执行轨迹生成技能。上周新增约 3,600 Stars，当前 22,285 Stars。

GitHub: https://github.com/TencentCloud/TencentDB-Agent-Memory

### 5. addyosmani/agent-skills — 24 个软件工程可执行技能

将软件工程做法整理成 24 个可执行技能，覆盖定义问题、制定计划、实现、验证、评审与发布全流程，可安装到 70 多种代理宿主。上周新增约 2,900 Stars，当前 87,794 Stars。

GitHub: https://github.com/addyosmani/agent-skills

## 大模型进展

### 国内

- **DeepSeek V4-Pro 正式版**（8 月 12 日）：Agent 能力大幅跃升，Terminal Bench 2.1 达 87.9 分，DeepSWE 从 12.8 飙升至 62.7 分，支持 100 万 Token 上下文。但 8 月 17 日起 API 实施峰谷定价，缓存命中输入峰时涨价 12 倍，标志国产模型从"价格战"转向"结果战"。
- **阿里 Qwen3.8-Max 开源**（8 月 10 日当周）：总参数 2.4 万亿、激活 950 亿的稀疏 MoE 旗舰模型首次对外开源，Artificial Analysis 智能指数 58 分，编程指数 71.8 分。Qwen3.8-27B 登顶 HuggingFace 热榜。
- **智谱 GLM-5.3**（8 月 14 日）：新一代开源旗舰模型，强化 Coding、长程任务执行及 Agent 能力。
- **字节跳动战略调整**：拒绝蒸馏路线，成立千人 AI 数据安全部门，讨论训练 5 万亿参数模型；豆包推出三档付费订阅并合并飞书团队聚焦桌面 Agent。
- **国产模型价格对比**：截至 8 月 16 日，DeepSeek、通义千问、豆包、智谱 GLM、文心、混元、Kimi、MiniMax 等主流模型 API 价格整理显示，国产模型依然便宜，但竞争重心已从单纯低价转向能力与结果。

来源：[新浪财经](https://finance.sina.com.cn/jjxw/2026-08-16/doc-ininnuvs9844130.shtml) | [36氪](https://36kr.com/newsflashes/3942900707229063) | [The Neural Feed](https://theneuralfeed.com/article/bytedance-establishes-new-ai-data-and-security-department-considers-5-trillion-p/t5Nmc0Rf)

### 国外

- **Google Gemini 3.7 Flash**（8 月 13-14 日）：正式发布，$0.75/百万输入 Token，100 万 Token 上下文，定位高性价比前沿模型。
- **Meta Muse Glimmer 30B**（8 月 10 日）：约 300 亿参数 Dense 模型，支持文本与图像多模态输入，128k 上下文，定位单显卡本地 Agent 模型。扎克伯格同步发表《The Future is for Everyone》呼吁降低开源 AI 壁垒。
- **OpenAI GPT-5.6-Cyber**：网络安全专用模型，已帮助发现 Chrome JavaScript 引擎前所未见的漏洞。ChatGPT Work with GPT-5.6 Agents 上线，支持 40 万 Token 上下文。
- **Anthropic Claude Opus 5**（7 月发布）：在部分编程和知识工作评估上达到新 SOTA，可通过 Claude.ai、Claude Code、API、Bedrock、Vertex AI、Azure AI Foundry 访问。
- **Anthropic Claude macOS 多会话协作**（8 月 8 日）：Claude 桌面应用新增实时多会话协作功能，多个对话线程可直接交互引用，早期用户报告部分任务开发时间减少近 40%。

来源：[ExplainX](https://www.explainx.ai/blog/gemini-3-7-flash-pricing-leak-rumor-august-2026) | [jls42 Blog](https://blog.jls42.org/en/news/ia-actualites-10-aug-2026) | [Anthropic](https://www.anthropic.com/transparency?categoryid=2826717) | [awnews](https://www.awnews.org/claude-ai-adds-real-time-multi-session-collaboration-on-macos/)

## 新工具 & CLI

- **Claude Code v2.1.172**：新稳定版发布，Agent 能力持续增强，支持终端命令执行、文件访问和截图分析。
- **Gemini CLI v0.46.0 / v0.47.0-preview**：Google 开源终端 AI 智能体工具，默认搭载 Gemini 3.5 Flash，100 万 Token 上下文窗口，免费额度慷慨。
- **OpenAI Codex Rust Runtime Alpha**：3 个 Rust 运行时 alpha 预发布版本，探索性能优化方向。
- **Hazmat**：新开源工具，为 AI 编程智能体提供沙箱隔离安全保护，防止代码执行风险。
- **Microsoft Agent Framework Harness GA**：微软 Agent Framework 从 SDK 推进至生产运行时，Harness 和 Foundry Hosted Agents 正式可用，支持多代理编排模式和 Claude Agent SDK 连接器。

来源：[GitHub agents-radar](https://github.com/kakapez/agents-radar/issues/289) | [The Neural Feed](https://theneuralfeed.com/article/hazmat-new-open-source-tool-launches-to-secure-ai-coding-agents/AesxsEKK) | [InfoQ](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/)

## 编程方式

### Claude 多会话协作：从孤立对话到协同团队

Anthropic 为 macOS 版 Claude 新增实时多会话协作功能，多个对话线程可直接引用彼此的代码片段、解释和调试信息。开发者可以为一个项目维护前端、后端、测试、文档等独立会话，让它们像专业团队成员一样按需协作。系统包含智能缓存机制避免不必要的 Token 消耗，所有链接在本地完成，隐私可控。

来源：[awnews](https://www.awnews.org/claude-ai-adds-real-time-multi-session-collaboration-on-macos/)

### ChatGPT Plus + Pro + Codex 分层工作流

2026 年 8 月，AI 编程正在从"代码生成"走向"软件工程自动化"。高效开发者采用三层工作流：ChatGPT Plus 负责信息整理（项目结构、核心业务、技术栈），ChatGPT Pro 负责复杂推理（架构设计、方案比较、迁移路径），Codex 负责工程执行（创建文件、修改代码、补充测试、修复错误）。竞争焦点正从模型能力转向工作流能力，项目 Context 管理比 Prompt 工程更重要。

来源：[CSDN·亚马逊云科技](https://devpress.csdn.net/awstech/6a72db3610ee7a33f2964176.html)

### AI 编程工具格局变化

Windsurf 被 Google 以 24 亿美元收购核心团队，Cognition 以 2.5 亿美元接收其余部分；Replit Agent 完成 4 亿美元 D 轮融资估值 90 亿美元；Gemini CLI 免费且由 Gemini 3.5 驱动成为终端优先选择。AI 编程工具正从"代码补全"演化为"自主工程执行"。

来源：[Codersera](https://codersera.com/blog/ai-coding-agents-complete-guide-2026/)

## HuggingFace 热门模型

| 模型 | 亮点 |
|---|---|
| **Qwen3.8-27B** | 登顶 HuggingFace 全球趋势榜首，48 小时超 100 万下载，多语言性能强劲 |
| **DeepSeek R1** | 推理优先范式持续流行，编程任务效率突出 |
| **Llama 4** | 社区微调生态丰富，适合专业化应用场景 |
| **GLM-5.3** | 智谱新旗舰，Coding 和长程任务执行能力强化 |
| **Qwen3.8-Max** | 2.4T 参数 MoE 开源旗舰，编程指数 71.8 |

来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/) | [The Neural Feed](https://theneuralfeed.com/article/alibaba-s-qwen-3-8-27b-reaches-top-of-hugging-face-global-model-trend-with-over-/ES74zJcq) | [TechAIMag](https://www.techaimag.com/top-10-hugging-face-models/trending-hugging-face-models-for-august-2026)

## 总结

本周 AI 开发生态的主线是"Agent 能力全面跃升"：DeepSeek V4-Pro 和智谱 GLM-5.3 在 Agent 基准上大幅突破，阿里 Qwen 登顶 HuggingFace 热榜，字节跳动押注 5 万亿参数自研路线，而 Claude 多会话协作和 Codex 工程化工作流标志着 AI 编程正式进入"软件工程自动化"阶段。
