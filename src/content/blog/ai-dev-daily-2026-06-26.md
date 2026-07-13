---
title: "AI 开发日报 · 2026年06月26日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-26
tags: ["AI日报"]
---

## 今日要闻

### Google AlphaFold 团队几乎全部加入 Anthropic，市值蒸发 2700 亿美元

一周内，Google DeepMind 失去四位最重要的研究员：John Jumper（2024 诺贝尔化学奖得主）、Jonas Adler（AI 编码）、Alexander Pritzel（预训练）和 Arthur Conmy（Gemini 2.5 和 AI 安全），全部加入 Anthropic。加上此前 Noam Shazeer 加入 OpenAI，Google 在一周内失去五位顶级研究员。Alphabet 两个交易日市值蒸发超 2700 亿美元，创下科技史上市值最大的人才驱动型损失。

来源：[AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-june-26-2026)

### 白宫限制 GPT-5.6 仅向政府批准的合作伙伴开放

据 Politico、CNN 和 Axios 报道，特朗普政府要求 OpenAI 将下一代旗舰模型 GPT-5.6 的初始发布限制在一小群政府批准的合作伙伴中，而非广泛可用。该要求来自白宫科技政策办公室和国家网络主任办公室。OpenAI 最初并未计划限制发布，是在白宫要求下改变了策略。

来源：[Politico](https://www.politico.com/news/2026/06/25/openai-gpt-model-goverment-approval-00977551)

### 中国 Z.ai 发布 GLM-5.2：前沿性能十分之一价格

中国智谱 AI 的国际品牌 Z.ai 发布旗舰 GLM-5.2 模型，在编码、智能体任务完成和复杂推理等标准评估上接近 Claude Sonnet 和 GPT-5.5 的性能，但每 token 价格仅约十分之一。六个中国 AI 模型已进入独立基准排行榜顶级梯队。西方实验室高 API 价格的前提——其模型明显更优——正受到直接压力。

来源：[Reuters](https://www.reuters.com)

### SpaceX 与 Reflection AI 签署 63 亿美元算力协议

SpaceX 与开源 AI 初创公司 Reflection AI 签署价值高达 63 亿美元的算力协议，Reflection 将获得马斯克 Colossus 2 数据中心的英伟达 GB300 芯片访问权。Reflection 从 2026 年 7 月 1 日起每月支付 1.5 亿美元——这是 AI 历史上最大的单笔算力合同之一。SpaceX 还在推进"AI Sat Mini"轨道数据中心原型。

来源：[CNBC](https://www.cnbc.com)

## 涨星最快项目

### ZhuLinsen/daily_stock_analysis

LLM 驱动的多市场股票分析系统，支持实时新闻和自动通知。

星标数：日新增 1,468 | [GitHub](https://github.com/ZhuLinsen/daily_stock_analysis)

### JCodesMore/ai-website-cloner-template

使用 AI 编程 Agent 一键克隆任意网站。

星标数：日新增 692 | [GitHub](https://github.com/JCodesMore/ai-website-cloner-template)

### anthropics/claude-plugins-official

Anthropic 官方精选的高质量 Claude Code 插件目录。

星标数：日新增 306 | [GitHub](https://github.com/anthropics/claude-plugins-official)

## 大模型进展

### 国内

**智谱 GLM-5.2 国际版 Z.ai 引起轰动**：GLM-5.2 在编码和智能体基准上达到前沿水平，价格为西方模型的十分之一。Z.ai CEO 表示："这是第一次有开源模型在编程和 Agent 性能上真正与 Anthropic 和 OpenAI 等领先专有 AI 公司相媲美。"六个中国 AI 模型已进入独立基准排行榜顶级梯队。

**OpenAI 倾向推迟 IPO 至 2027 年**：据纽约时报报道，三位参与 OpenAI 决策的人士透露，公司倾向于将备受期待的 IPO 推迟到 2027 年。SpaceX 上市后股价表现不佳和市场竞争格局每周变化是主要因素。

### 国外

**GPT-4.5 明日退役**：GPT-4.5 将于 6 月 27 日从 ChatGPT 退役。o3 将于 8 月 26 日退役。OpenAI 正在向 GPT-5 系列整合。GPT-5.6 预计以 Sol、Terra 和 Luna 三层模型家族发布，但受政府准入限制影响，初始仅向约 20 个审查通过的合作伙伴开放。

**DeepMind 工程师流向 Anthropic 的概率是反向的 11 倍**：LinkedIn 数据分析显示，DeepMind 工程师现在离开加入 Anthropic 的概率是反向流动的 11 倍。Google 确认 Gemini 3.5 Pro 推迟至 7 月进行"最终调整"。

## 新工具 & CLI

- **GPT-5.6 模型家族**：Sol（旗舰）、Terra（均衡日常）、Luna（快速低成本），受政府准入限制影响初始仅向批准伙伴开放。[OpenAI Blog](https://openai.com/index/previewing-gpt-5-6-sol/)
- **wshobson/agents**：多框架智能体插件市场，支持 Claude Code、Codex CLI、Cursor 等工具。[GitHub](https://github.com/wshobson/agents)
- **BerriAI/litellm**：Python SDK 和代理服务器，以 OpenAI 格式调用 100+ LLM API，支持成本追踪、护栏和负载均衡。[GitHub](https://github.com/BerriAI/litellm)
- **langgenius/dify**：生产级智能体工作流开发平台。[GitHub](https://github.com/langgenius/dify)

## 编程方式

CNBC 报道企业 AI 支出正在从"tokenmaxxing"——不计 ROI 的最大用量——转向要求明确投资回报的更务实姿态。这对 OpenAI 和 Anthropic 尤为重要，两家公司都在 6 月初秘密提交了 IPO 文件，估值接近 1 万亿美元。企业领导者不再愿意在没有明确投资回报图景的情况下向 Anthropic 或 OpenAI 投钱。对 AI 供应商而言，这意味着靠可能性和炒作销售的时代正在让位于按结果销售的环境。对企业买家而言，这是杠杆——市场正在向有利于你的方向转变。

## 总结

Google 人才大出血与白宫 AI 准入管控同步发生，前沿 AI 的竞争已从纯粹的技术比拼演变为人才、政策和算力的三维博弈。
