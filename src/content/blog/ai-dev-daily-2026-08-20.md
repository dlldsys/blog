---
title: "AI 开发日报 · 2026年08月20日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-20
tags: ["AI日报"]
---

## 今日要闻

### 1. Google Gemini 4 泄露：剑指前沿模型王座

8 月 19 日，关于 Google 新一代 Gemini 4 的泄露信息在圈内流传。报道称内部评估显示 Gemini 4 有望超越当前领先的 GPT-5.6 Sol 与 Fable 5，并在代码性能、长时间运行工作流和更大上下文处理上有所突破。Google 尚未确认相关基准结果或规格，但这一动向出现在其 Gemini 3.5 Pro 屡次延期、OpenAI/Meta/Anthropic/xAI 持续施压的关键节点。

来源：[Times of AI](https://www.timesofai.com/news/gemini-4-leaks-show-google-chasing-frontier-ai-lead/)

### 2. OpenAI 为 GPT-5.6 Sol 在 Codex 中开放 100 万 token 上下文

8 月 17 日，OpenAI 工程师 Tibo Sottiaux 宣布，将 GPT-5.6 Sol 的 100 万 token 上下文窗口访问范围从 API 扩展到 ChatGPT 账户用户。API 文档显示该模型上下文窗口为 105 万 token，此次更新让用户可在 Codex 中处理更多代码、工具输出与文档，而默认会话的用量仍受单独限制与配置约束。

来源：[Times of AI](https://www.timesofai.com/news/openai-opens-1m-token-context-for-gpt-5-6-sol-in-codex/)

### 3. Google Gemini 3.7 Flash 正式发布：编程与 Agent 最强工作马

8 月 13 日 Google 推出 Gemini 3.7 Flash，距上一代 3.6 Flash 仅三周。官方称其为"迄今编码与 Agent 最强工作模型"，是 3.6 的算法改进版而非新架构，保留约 105 万 token 上下文窗口与 64K 输出上限。促销价 $0.75/百万输入 token、$3.75/百万输出 token，持续至 2026 年 12 月 31 日后翻倍。在 DeepSWE v1.1 与 AutomationBench 基准上分别得分 65.3% 与 30.4%，均高于前代。

来源：[Times of AI](https://www.timesofai.com/news/google-launches-gemini-3-7-flash-vs-gpt-5-6-terra-vs-claude-sonnet-5/) | [Dutch Startup AI](https://www.dutchstartup.ai/en/news/ai-geheugen-agentarchitecturen-augustus-2026)

### 4. DeepSeek V4 Pro 正式版 + Harness 开源 + 峰谷定价三连发

8 月 13 日晚，DeepSeek 发布 V4 Pro 正式版（1.6 万亿总参数、490 亿激活参数、百万 token 上下文），强化 Agent 能力并原生支持 OpenAI Responses API；同步开源对标 Claude Code 与 Codex 的模块化 Agent 框架 Harness（MIT 协议，GitHub 上线当天约 2.75 万星）。自 8 月 16 日起放弃统一 API 定价，改用峰谷分时计价，高峰涨幅显著。这是国产龙头模型首次系统性价格上调。

来源：[小宇宙 AI 早知道](https://www.xiaoyuzhoufm.com/podcast/69b7b6112a25fa3f94c45aa5) | [AIBase](https://www.aibase.com/news/30334)

### 5. Salesforce 开源 BLIP3-o 多模态模型

8 月 16 日，Salesforce AI Research 发布开源多模态模型 BLIP3-o，作为 xGen-MM（BLIP-3）家族最新成员上线 HuggingFace，面向计算机视觉与多模态任务，进一步丰富开源视觉-语言模型生态。

来源：[AI Damn](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402)

## 涨星最快项目

统计周期截至 2026 年 8 月 18 日。本周 GitHub AI 开源热度榜上新项目增速迅猛，Agent 框架与开发者工具持续霸榜。

### 1. DeepSeek Harness（DSH）

DeepSeek 开源的 Agent 运行框架，MIT 协议，"一切皆插件"——模型、工具、技能、会话、沙箱、存储、循环、UI 均可自由替换。上线 3 天即收获 119.8k Stars，是本周增速最快的新项目。

GitHub：[deepseek-ai/DeepSeek-Harness](https://github.com/deepseek-ai/DeepSeek-Harness) | 来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### 2. ECC

由 affaan-m 维护的 JavaScript AI 项目，当前以 240.8K Stars 位列 GitHub AI 开源热度榜第一。

GitHub：[affaan-m/ECC](https://github.com/affaan-m/ECC)

### 3. hermes-agent

NousResearch 推出的 Python Agent 项目，当前 232.3K Stars，居热度榜第二。

GitHub：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

### 4. graphify

Graphify-Labs 的 Python AI 项目，当前 107.7K Stars，居热度榜第十二。

GitHub：[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

### 5. ponytail

DietrichGebert 的 JavaScript AI 项目，当前 105.1K Stars，居热度榜第二十。

GitHub：[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

## 大模型进展

### 国内

**DeepSeek：涨价、开源框架与旗舰模型并行。** 除 V4 Pro 与 Harness 外，DeepSeek-V4-Flash（8 月初 MIT 开源，1M 上下文）运行成本被评全球最低，同等复杂负载约 $0.03 vs Claude Fable 5 的 $3.15，划出"DeepSeek 斩杀线"。Terminal-Bench 2.1 从 72.1 跃升至 87.9，DeepSWE 从 12.8 跃升至 62.7。来源：[CSDN](https://blog.csdn.net/zhangfeng1133/article/details/163647686) | [招商证券研报](https://pdf.dfcfw.com/pdf/H3_AP202608111827847307_1.pdf)

**通义千问 Qwen3.8-Max 与 Qwen3.8-27B 接连发布。** 8 月 3 日发布旗舰 Qwen3.8-Max（2.4 万亿参数、950 亿激活参数、100 万上下文，首个计划开放权重的 Max 级模型）；8 月 13 日发布 Qwen3.8-27B 并同步开放旗舰权重，主打"家用显卡也能跑"，登顶 HuggingFace 开源模型热榜第一，同时发布 FP8 量化版。来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/) | [招商证券研报](https://pdf.dfcfw.com/pdf/H3_AP202608111827847307_1.pdf)

**智谱发布 GLM-5.3。** 聚焦编程、复杂推理、工具使用与 Agent 工作流，仅靠后训练便将编程能力提升约 50%。来源：[Gen AI Live](https://www.goml.io/gen-ai-live)

**月之暗面推出 Kimi Code。** 8 月 12 日发布的终端优先 AI 编码 Agent，分析整个仓库、规划多步任务、执行命令并自主迭代，由 Kimi K3 长上下文模型驱动，覆盖终端与 IDE。来源：[Kimi Code 介绍](https://www.kimi.com/resources/kimi-code-introduction)

**国产模型价格战转向"结果战"。** 截至 8 月 16 日对 DeepSeek、阿里通义、字节豆包、智谱 GLM、百度文心、腾讯混元、Kimi、MiniMax 的 API 价格梳理显示：国产模型依然便宜，但"只会越来越便宜"的预期已被打破。来源：[若水无界](http://m.toutiao.com/group/7675016053776237096/)

### 国外

**Google：Gemini 4 泄露叠加 3.7 Flash 发布。** 8 月 19 日 Gemini 4 泄露显示其瞄准超越 GPT-5.6 Sol 与 Fable 5；8 月 13 日 Gemini 3.7 Flash 正式 GA，编程与 Agent 工作马定位，1M 上下文、64K 输出。来源：[Times of AI](https://www.timesofai.com/news/gemini-4-leaks-show-google-chasing-frontier-ai-lead/)

**OpenAI：1M 上下文、Cyber 模型与免费无限聊天。** 8 月 17 日为 GPT-5.6 Sol 在 Codex 开放 100 万 token 上下文；8 月 11 日推出 GPT-5.6-Cyber，面向网络安全（漏洞研究、渗透测试、红队），仅向 Daybreak 计划审核通过的防御者开放；8 月 7 日 ChatGPT 更新，付费用户获 GPT-5.6 Sol、免费用户获 GPT-5.6 Luna 并支持无限文本聊天与推理强度滑块。来源：[Times of AI](https://www.timesofai.com/news/openai-gates-gpt-5-6-cyber-behind-new-daybreak-red-tier/) | [Times of AI](https://www.timesofai.com/news/chatgpt-update-gpt-5-6-free-unlimited-chats-for-all-users/)

**SpaceXAI（原 xAI）：Grok Bot 与 Grok Imagine Image 2.0。** 8 月 11 日发布 Grok Bot——拥有云端"自己的电脑"的 AI 队友，可登录用户依赖的工具并端到端完成任务；8 月 7 日发布图像模型 Grok Imagine Image 2.0，支持文生图、图生图与区域编辑，在 Arena 文生图榜以 1320 分位列全球第二，API 单图 $0.04。来源：[Times of AI](https://www.timesofai.com/news/spacexais-new-grok-bot-explained/) | [Dutch Startup AI](https://www.dutchstartup.ai/en/news/ai-geheugen-agentarchitecturen-augustus-2026)

**Meta：Muse Glimmer 30B 开源多模态模型。** Apache 2.0 协议、约 300 亿参数，可在消费级 GPU 上实现本地 Agent 长期运行，内存占用低、速度快，支持 100 余种语言，面向自主 Agent 与复杂任务执行，HF 下载量 33.4 万。来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/)

**NVIDIA：Nemotron 3.5 Lightning 30B 开源 MoE。** 3B 活跃参数、1M 上下文，输出中位数 301 token/s，定位于 Agent 高频执行层，HF 下载量 23.1 万。来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/)

## 新工具 & CLI

### DeepSeek Harness（DSH）

DeepSeek 开源的 Agent 运行框架，MIT 协议，所有 Agent 能力（模型适配器、工具注册表、会话日志、Agent 循环、调度、UI）均由可替换插件组合而成。作为 CLI 编码 Agent 在 3 天内收获 119.8k Stars。

来源：[AIBase](https://www.aibase.com/news/30334) | [Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### Kimi Code

月之暗面的终端优先 AI 编码 Agent，由 Kimi K3 长上下文推理驱动，可分析整个仓库、规划多步任务、执行命令并跨终端与 IDE 自主迭代，8 月 12 日上线。

来源：[Kimi Code 介绍](https://www.kimi.com/resources/kimi-code-introduction)

### Augment Auggie CLI

Augment 8 月 12 日发布的新命令行工具，重新定义开发者与 AI 编码助手的交互方式，面向企业级工作流自动化。

来源：[AI Damn](https://ai-damn.com/augment-s-auggie-cli-aims-to-transform-developer-workflows-1754263237246)

### GitHub Copilot CLI & Replit MCP 周更

8 月 13 日 Copilot CLI 周更版新增 /tasks、队列提示与 shell 命令、headless --plan 加 --mode autopilot 及 /rewind 回退，使终端成为多智能体控制面板；8 月 14 日 Replit MCP 更新，可从兼容客户端创建、检查、更新并发布应用，新增工作区区域、可共享技能与企业 Admin API。

来源：[neodrop.ai](https://neodrop.ai/ja/post/BabpZ37GegD)

### Agent 框架动态

- **Google Agent Development Kit（ADK）2.0**：开源、代码优先的 Python 框架，模型无关、部署无关，为构建、评估与部署复杂 AI Agent 而设计，对 Gemini 优化。GitHub：[google/adk-python](https://github.com/google/adk-python)
- **Microsoft Orchard**：8 月 3 日开源，使训练自主 AI Agent 成本降低约 10 倍，同时公开训练数据、评估方法与三个预训练模型，面向学术实验室与小团队。来源：[BitsMinds](https://www.bitsminds.com/news/microsoft-orchard-open-agent-training-framework-2026)
- **DeepMCPAgent**：8 月 13 日发布，将 MCP 与 LangChain 结合的开源 Agent 框架，提升开发生产力。来源：[AI Damn](https://ai-damn.com/deepmcpagent-open-source-ai-agent-framework-boosts-productivity-1757977719274)

## 编程方式

### AI 编码 CLI 集体同日发版

8 月 10 日至 11 日，主流 AI 编码 CLI 几乎同日发版：Claude Code v2.1.227（修复订阅层级识别 bug）、Antigravity CLI、Copilot CLI、Devin Desktop。终端优先的 AI 编码 Agent 正成为 8 月开发者的首选形态。

来源：[CSDN](https://blog.csdn.net/qq_35583325/article/details/163672551)

### 终端优先与多入口渗透

Kimi Code 的发布进一步印证：AI 不再只停留在网页聊天框，而是进入终端、IDE、浏览器与云平台。开发者开始组合使用——一个终端 Agent + 一个 IDE + 一个廉价模型或审查工具，以平衡质量与成本。

来源：[Kimi Code 介绍](https://www.kimi.com/resources/kimi-code-introduction)

### HuggingFace 热门开源模型（截至 8 月 18 日）

Qwen3.8-27B 以 415K 下载、10.8K 点赞登顶热榜；Kimi-K3 达 220 万下载；DeepSeek-V4-Flash-0731 达 200 万下载；MiniMax-H3 达 240 万下载；Meta Muse-Glimmer-30B 达 33.4 万下载。开源模型生态正被国产与高效推理模型主导。

来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/) | [Trending HF Models](https://www.techaimag.com/top-10-hugging-face-models/trending-hugging-face-models-for-august-2026)

## 总结

今日 AI 开发的核心主线是"模型竞赛与 Agent 工程同步加速"：Google 借 Gemini 4 泄露与 3.7 Flash 守住前沿叙事，OpenAI 以 1M 上下文与 Cyber 模型拓宽能力边界，而 DeepSeek 用 V4 Pro 加 Harness 开源宣告框架层成为新战场，开源生态由国产与高效推理模型主导。
