---
title: "AI 开发日报 · 2026年06月15日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-15
tags: ["AI日报"]
---

## 今日要闻

### Anthropic 被迫关闭 Fable 5 和 Mythos 5 模型

美国商务部以国家安全为由发布出口管制指令，要求 Anthropic 暂停所有外国公民对 Fable 5 和 Mythos 5 模型的访问权限。Anthropic 选择全球范围内下线这两款模型以确保合规。这是首次有商业部署的 AI 模型被政府强制下线，引发企业对前沿模型可用性的严重担忧。

来源：[Anthropic 官方公告](https://www.anthropic.com/news/fable-mythos-access)

### OpenAI 遭多州总检察长联合调查

OpenAI 收到纽约州总检察长等多州联合发出的传票，调查范围涵盖广告行为、用户参与机制、模型谄媚性、健康数据处理以及对未成年人和老年人的保护措施。此次调查正值 OpenAI 推进 IPO 之际。

来源：[TechCrunch](https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/)

### OpenAI 收购 Ona 强化 Codex 智能体能力

OpenAI 宣布收购云计算初创公司 Ona，以增强 Codex 编程智能体的持久化云执行能力。OpenAI 表示每周已有超过 500 万人使用 Codex，AI 工作正从分钟级扩展到小时甚至天级的长周期任务。

来源：[OpenAI](https://openai.com/index/openai-to-acquire-ona/)

### 微软发布企业级 Agent 后端基础设施

微软在 Build 2026 后推出 Rayfin SDK/CLI 和 HorizonDB 数据库，将应用描述自动转化为 Fabric 支持的生产级服务。微软强调企业 AI 的瓶颈不再是模型质量，而是共享上下文、数据访问治理和生产级后端。

来源：[Microsoft Azure Blog](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/)

## 涨星最快项目

### chopratejas/headroom

LLM 输入压缩工具，对工具输出、日志文件、RAG 检索块等文本压缩 60-95%，压缩后回答质量几乎不受影响。支持 Python 库、HTTP 代理和 MCP Server 三种模式。

星标数：14,272 | 周新增：约 3,600 | [GitHub](https://github.com/chopratejas/headroom)

### farion1231/cc-switch

多 Agent 切换器，用 Rust 编写，支持在 Claude Code、Codex、Cursor 等多个 AI Agent 间一键切换，统一管理工作目录和上下文。

星标数：6,621 | 周新增：6,621 | [GitHub](https://github.com/farion1231/cc-switch)

### microsoft/markitdown

微软出品的文档转 Markdown 工具，支持多种格式快速转换为 Markdown，方便 AI 处理。

星标数：13,359 | 周新增：约 7,000 | [GitHub](https://github.com/microsoft/markitdown)

## 大模型进展

### 国内

**字节跳动豆包推出「任务模式」**：豆包从单一文本交互工具进化为能处理复杂工作流的 AI Agent，核心能力包括多轮搜索、深度推理、浏览器自动化和 PPT 自动生成。同期字节将「豆包股」价格上调 13.5%，反映 AI 业务估值增速远超公司整体。

### 国外

**Anthropic Fable 5 遭遇出口管制危机**：Fable 5 刚发布不久就因美国政府指令被迫全球下线。该模型此前在 SWE-bench Pro 上得分 80.3%，远超 GPT-5.5 的 58.6%，Artificial Analysis 综合智能指数 64.9 分位列所有模型第一。

**Google Gemini 推出商业功能**：Gemini 将直接连接 Google Business Profile，新增 Business notebooks 功能，将聊天、数据源、商业上下文和主动推荐整合在一起，让 AI 助手真正了解用户业务。

## 新工具 & CLI

- **Rayfin**：微软发布的 SDK 和 CLI 工具，可将应用描述自动转化为 Fabric 支持的生产级服务。[Microsoft Azure](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/)
- **Google AI Mode 信息智能体**：Google 搜索 AI 模式新增主动监控功能，可追踪竞争对手、监管动态和价格变化并推送告警。[Lifehacker](https://lifehacker.com/tech/google-ai-mode-information-agents)
- **OpenAI Academy**：OpenAI 推出三门结构化课程——AI Foundations、Applied AI Foundations 和 Agents and Workflows，帮助企业团队从提示词过渡到智能体工作流。[OpenAI News](https://openai.com/news/)

## 编程方式

AI 编程正从"快速回答"转向"持久化执行"。OpenAI 收购 Ona 表明，下一波 AI Agent 竞争的核心不再是模型智能，而是运行时的安全性、持久性和可治理性。企业需要的 Agent 能在用户关闭笔记本后继续工作，并在可控的执行环境中运行测试、修复问题。微软同期推出 Rayfin 和 HorizonDB，也印证了"上下文管道和治理"正成为 AI 采用的核心系统架构问题。

## 总结

Anthropic 模型被政府强制下线标志着前沿 AI 正式进入地缘政治管控时代，企业需重新审视 AI 供应链的韧性与多供应商策略。
