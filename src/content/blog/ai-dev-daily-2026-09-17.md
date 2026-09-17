---
title: "AI 开发日报 · 2026年09月17日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-17
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 宣布 Claude Cowork 与 Chat 合并为「统一的 Claude」

9 月 17 日，Anthropic 宣布 Claude Cowork 与 Claude Chat 全面合并为一个统一的 Claude：无论简单提问还是长时任务都在同一入口完成，即使关闭电脑任务也会继续执行，Cowork 与 Design 的能力从任意对话中可用，未来几周将逐步向 Pro/Max 用户开放。这被解读为 Anthropic 以「超级办公全家桶」直接对标微软。

来源：[Claude Blog](https://claude.com/blog/cowork-is-now-claude) · [36氪](https://m.36kr.com/p/3986702306294536)

### 2. OpenAI 据悉考虑新一轮融资，估值或超 1.2 万亿美元

9 月 16 日报道，OpenAI 正与投资者就新一轮融资进行初步磋商，潜在估值超过 1.2 万亿美元，融资由投资方主动发起，最终是否推进取决于 IPO 时间安排；若落地，IPO 可能再推迟一两个季度。竞争对手 Anthropic 今年 5 月融资后估值约 9650 亿美元，正筹备 IPO。

来源：[界面新闻](https://www.jiemian.com/article/15104300.html)

### 3. 谷歌推出 Gemini 3.8 Live 及扩展思考版，强化实时语音交互

当地时间 9 月 15 日，谷歌发布 Gemini 3.8 Live 和 Gemini 3.8 Live Extended Thinking 两款实时对话模型：前者支持近实时视觉输入、对话中自动切换 97 种语言、后台执行工具与 API 调用；后者支持边思考边语音交流，面向多步骤复杂任务。两款模型已通过 Gemini API 和 Google AI Studio 向开发者提供。

来源：[界面新闻](https://www.jiemian.com/article/15104300.html)

### 4. 阿里千问 Qwen3.8-27B 登顶 Hugging Face 最受欢迎开源模型

9 月 16 日消息，Hugging Face 更新最受欢迎开源大模型榜单，Qwen3.8-27B 超越 FLUX.1、DeepSeek-R1、Kimi-K3、Meta-Llama-3 等模型，成为 Hugging Face 历史上最受欢迎的开源模型。

来源：[IT之家](https://www.ithome.com/1/003/181.htm)

### 5. 英伟达、谷歌与 Emerald AI 成立 AI 能源管理联盟（AEMA）

9 月 16 日，Emerald AI、谷歌和英伟达宣布成立 AI 能源管理联盟（AEMA），推动数据中心根据电网实时状况动态调整用电量，将 AI 基础设施从被动用电方转变为可调度的电网资源。

来源：[界面新闻](https://www.jiemian.com/article/15104300.html) · [华尔街见闻](http://m.toutiao.com/group/7686125969493344819/)

## 涨星最快项目

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — DeepSeek 开源的插件化 Agent 线束（"Everything is a Plugin"），9 月 16 日 GitHub AI 日榜增速第 2，约 22.5 万星。[来源](https://www.xmorg.cn/)
- [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — 谷歌开源终端 AI Agent，把 Gemini 能力直接带进命令行，约 10.7 万星，进入日榜前 20。[来源](https://www.xmorg.cn/)
- [earendil-works/pi](https://github.com/earendil-works/pi) — 一站式 AI Agent 工具包：统一 LLM API + Agent 循环 + TUI + 编码 Agent CLI，约 10.6 万星。[来源](https://www.xmorg.cn/)
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — 为各 Agent 提供跨会话持久上下文：捕获会话内容、AI 压缩后注入未来会话，兼容 Claude Code、Codex、Gemini 等，约 9.4 万星。[来源](https://www.xmorg.cn/)
- [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) — 让 AI Agent 像最懒的资深工程师一样思考（"最好的代码是没写出来的代码"），近一周涨星约 +1.1 万。[来源](https://gaojihao.github.io/github-hot/trending-weekly.html)

## 大模型进展

### 国内

- 智谱：9 月 16 日电话会披露全业务口径 ARR 已达 18 亿美元，年末指引由 24 亿美元上调至 30 亿美元；GLM 系列开源模型将以托管 API 形式在海外云平台提供服务，相关收入从 10 月起确认。[来源](https://www.jiemian.com/article/15104300.html)
- 阿里千问：Qwen3.8-27B 登顶 HF 最受欢迎开源模型榜，成为社区历史最受欢迎模型；此前的 Qwen3.8-Flash 采用自研 Next 架构、主打性价比。[来源](https://www.ithome.com/1/003/181.htm) · [InfoQ](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8)
- DeepSeek：V4.1 Flash 于 9 月 10 日上线，厂商口径 Terminal-Bench 达 90.6；官方在版本切换中保留 V4 Pro API 并下调 V4.1 Flash 定价。[来源](https://renovateqr.com/blog/ai-model-releases-2026) · [北京商报](http://m.toutiao.com/group/7685381372080292386/)
- 数据侧：9 月 15 日，中文互联网基础语料 4.0、网络安全数据集 1.0、AIGC 检测数据集三类高质量数据集在济南国家网络安全宣传周上正式发布。[来源](http://m.toutiao.com/group/7686262888482243110/)

### 国外

- OpenAI：GPT-6 Astra（9 月 3 日）已完成分阶段上线并全面可用，API 文档已将其作为开发者默认起点；新一轮融资传闻将估值推至 1.2 万亿美元以上。[来源](https://mungomash.com/ai/models/) · [界面新闻](https://www.jiemian.com/article/15104300.html)
- Anthropic：除 Claude 入口合并外，9 月 15 日上线 Claude for Small Business 新工作流、集成与培训项目；Claude Code 2.1.273 于 9 月 15 日发布，改进网关、MCP 与远程会话稳定性。[来源](https://claude.com/blog) · [MaxAssistant](https://maxassistant.app/en/news/releases/claude-code-2-1-273-improves-gateways-mcp-remote-sessions/)
- Google：Gemini 3.8 Live / Extended Thinking 上线（详见今日要闻）；Gemini 3.8 Flash 作为「日常主力模型」于 9 月 2 日发布，软件工程、Agent 工作流与多步推理更强。[来源](https://models.evertune.ai/)
- Meta：据报将推出无摄像头 AI 眼镜「Luna」，内置 6 个麦克风，可与 Meta AI 及新 AI 智能体 Muse 交互，或在下周 Connect 大会发布、10 月开始出货。[来源](https://www.jiemian.com/article/15104300.html)

## 新工具 & CLI

- [Claude Code 2.1.273](https://maxassistant.app/en/news/releases/claude-code-2-1-273-improves-gateways-mcp-remote-sessions/)（9 月 15 日）— 重点修复网关、MCP 服务器、远程会话、权限、后台 Agent 与定时任务的稳定性，从「加功能」转向「运维可靠性」。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) — 官方 Chrome DevTools MCP 服务器，让编码 Agent 直接驱动浏览器调试，近一周涨星约 +804。
- [microsoft/markitdown](https://github.com/microsoft/markitdown) — 微软开源的文件转 Markdown 工具（Office/PDF/图像等），约 18.3 万星，近一周 +4,650。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — 开源本地 Agent（"The agent that grows with you"），约 24.5 万星，近一周 +3,481。

## 编程方式

9 月 10 日，Cursor Projects 与 OpenAI Agents API 同日发布，「代码智能体编队（fleets of coding agents）」从演示走向产品：Cursor Projects 提供你与之对话、可指挥数千个子 Agent 的协调器；OpenAI Agents API 提供自建协调器的托管 Codex harness（沙箱、上下文压缩、并行子 Agent、MCP、可恢复会话）；Claude Code 则保持最强单 Agent 地位并引入服务端会话。[来源](https://andrew.ooo/answers/cursor-projects-vs-claude-code-vs-openai-agents-api-coordinator-agents-september-2026/)

框架侧，AutoGen 已进入维护模式，继任者 Microsoft Agent Framework 1.0（2026 年 4 月 GA）以 YAML Agent 定义、图式工作流与原生 MCP/A2A 支持接管；LangGraph 推出 Deep Agents 高层抽象，月下载约 3900 万领跑生产场景。[来源](https://www.n-ix.com/langgraph-vs-crewai-vs-autogen/) · [博客园](https://www.cnblogs.com/itarui/p/21844217) VS Code 则将 agentic coding 收敛为三个核心概念：Agent 循环、会话（Session）与执行环境（Harness），成为 IDE 层的新默认范式。[来源](https://code.visualstudio.com/docs/agents/overview)

## 总结

今日趋势一句话：从「选入口」到「一个入口」——Claude 完成 Chat/Cowork 合并、OpenAI 以超 1.2 万亿美元估值酝酿新一轮融资，Gemini 3.8 Live、Qwen3.8-27B 登顶与 AEMA 能源联盟共同指向「实时交互、开源登顶、算力基建」三条主线，AI 编程则全面进入「智能体编队 + 统一 Harness」的新范式。
