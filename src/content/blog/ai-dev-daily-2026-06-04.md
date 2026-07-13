---
title: "AI 开发日报 · 2026年06月04日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-04
tags: ["AI日报"]
---

## 今日要闻

### 1. DeepSeek V4 家族全量上线，推理成本击穿行业地板

DeepSeek V4 家族（V4 全量版、V4 Flash、V4 Pro）已通过 OpenRouter 及国内主要云厂商全面可用。架构为混合专家（MoE）设计，总参数约 1 万亿、单 Token 激活约 370 亿，融合推理与非推理于同一模型，退役了此前 V3/R1 分离范式；支持 1M+ Token 上下文（DeepSeek Sparse Attention）、Engram 条件记忆与流形约束超连接（mHC）稳定万亿参数训练。V4 是首个针对国产芯片优化的前沿模型，可在华为昇腾 950PR 上经 CANN Next 框架推理。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 2. DeepSeek V4 Flash 定价 $0.14/$0.28，推理进入"近乎免费"时代

定价层面 DeepSeek 进一步拉低门槛：V4 Flash 每百万 Token 输入/输出仅 $0.14/$0.28，低于 Claude Haiku 4.5、Gemini 3.1 Flash 与 GPT-5.4 Nano；在腾讯云命中缓存时 V4-Pro 可低至约 $0.0035/百万 Token。对比同期 Anthropic Fable 5 的 $10/百万 Token 输入价，差距悬殊。对企业而言，问题已从"用得起吗"变成"推理近乎免费后做什么"。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 3. DeepSeek 更新推理模型 R1-0528，权重开放挑战闭源推理模型

DeepSeek 同步更新推理模型线 R1-0528，基准成绩亮眼：AIME 2024 pass@1 达 72.6%，MATH-500 达 97.3%，GPQA Diamond 达 81.0%。权重在宽松许可下开放，直接对标美国实验室的闭源推理模型。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

## 涨星最快项目

1. **chopratejas/headroom** — LLM 输入压缩工具，宣称压缩 60-95% Token，提供 Python 库、HTTP 代理与 MCP Server 三种用法，是应对推理成本的新利器。[GitHub](https://github.com/chopratejas/headroom)

2. **rohitg00/agentmemory** — 持久化 AI 编码 Agent 记忆，月增超 1.4 万星，与 DeepSeek 的 Engram 条件记忆思路呼应。[GitHub](https://github.com/rohitg00/agentmemory)

3. **RyanCodrai/turbovec** — Rust 向量索引 + Python 绑定，周增近 4900 星，为低成本 RAG 提供检索加速。[GitHub](https://github.com/RyanCodrai/turbovec)

4. **LMCache** — LLM KV 缓存层，月增超 8700 星，与缓存命中带来的成本优化直接相关。[GitHub](https://github.com/LMCache)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **DeepSeek V4 家族** — 万亿参数 MoE，370 亿激活，1M+ 上下文，首个国产芯片优化前沿模型，V4 Flash 定价击穿地板。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **DeepSeek R1-0528** — 推理模型更新，AIME 72.6%、MATH-500 97.3%、GPQA Diamond 81.0%，权重开放。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

### 国外

- **OpenClaw 生态持续发酵** — Build 2026 后 OpenClaw 作为 Scout 底座获得微软官方背书，ClawHub 支持 GitHub 仓库直接安装，社区贡献加速。（[senx.ai](https://senx.ai/openclaw-news/2026-06-09-openclaw-news)）

## 新工具 & CLI

- **headroom** — `pip install headroom` 即可压缩工具输出/日志/RAG chunk，支持作为 MCP Server 直接集成 Claude Code / Cursor。（[GitHub](https://github.com/chopratejas/headroom)）

- **cc-switch** — Rust 编写的多 Agent 切换器，统一管理 Claude Code、Codex、Cursor 的工作目录与上下文。（[GitHub](https://github.com/farion1231/cc-switch)）

- **OpenRouter（DeepSeek V4 接入）** — V4 家族已上架 OpenRouter，开发者可一站式调用并对比多模型成本。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

## 编程方式

- **"上下文进入模型之前"的压缩比堆模型更划算** — 当 DeepSeek V4 Flash 已近乎免费，真正成本瓶颈转移到长上下文与 RAG 的 Token 体积；headroom 等输入压缩层与向量库召回组合，可把 RAG 场景 Token 成本砍到原来的 1/10 以下。（[CSDN](https://blog.csdn.net/yanceyxin/article/details/162208780)）

- **推理与非推理合一，告别"双模型范式"** — DeepSeek V4 将推理与非推理融合进同一模型，退役 V3/R1 分离架构；开发者不再需要在"快模型"与"思考模型"之间手动切换。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

## 总结

今日 AI 行业的关键词是"成本坍缩"与"国产算力闭环"——DeepSeek V4 家族全量上线并以 $0.14 起的定价把推理推向"近乎免费"，首个国产芯片优化前沿模型则让自主算力跑通生产级工作负载；与此同时，Token 压缩与缓存工具的爆发说明，当模型不再贵，工程效率本身成了新的竞技场。
