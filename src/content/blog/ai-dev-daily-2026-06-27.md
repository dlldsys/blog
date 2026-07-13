---
title: "AI 开发日报 · 2026年06月27日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-27
tags: ["AI日报"]
---

## 今日要闻

### Mythos 5 获准重新上线，约 100 个审查合作伙伴恢复访问

在经历两周多的禁令后，Anthropic 的 Mythos 5 模型获准重新上线。据 CNBC 报道，约 100 个经过政府安全审查的合作伙伴已恢复访问权限，但普通商业用户仍被排除在外。白宫国家安全委员会表示，此次解禁是基于 Mythos 5 安全评估的初步结论，但模型仍需在受控环境中运行。

来源：[CNBC](https://www.cnbc.com)

### 特朗普政府对 GPT-5.6 实施准入管控，仅限批准合作伙伴

据 Politico 和华盛顿邮报报道，特朗普政府正式要求 OpenAI 将即将发布的 GPT-5.6 模型限制在一小群政府批准的合作伙伴中。该要求来自白宫科技政策办公室，OpenAI 原计划广泛发布 GPT-5.6，但在白宫干预下改变了策略。GPT-5.6 预计以 Sol、Terra 和 Luna 三层模型家族发布。

来源：[Politico](https://www.politico.com/news/2026/06/25/openai-gpt-model-goverment-approval-00977551)

### OpenAI 自研 Jalapeño 芯片曝光，推理成本降低 50%

据 VentureBeat 报道，OpenAI 与博通合作开发的 Jalapeño AI 推理芯片已进入流片阶段。该芯片专为 GPT-5.6 推理优化，预计将推理成本降低 50% 以上。OpenAI 计划在 2027 年初将 Jalapeño 部署到自建数据中心，减少对英伟达 GPU 的依赖。

来源：[VentureBeat](https://venturebeat.com)

### Anthropic 指控阿里窃取训练数据，涉及 2880 万次 API 交换

据 CNBC 报道，Anthropic 公开指控阿里巴巴通过其 Qwen 系列模型大规模调用 Claude API 并提取训练数据。Anthropic 声称监测到超过 2880 万次可疑 API 交换，阿里方面否认指控并表示数据使用符合服务条款。这一事件引发行业对 AI 模型蒸馏和数据保护规则的广泛讨论。

来源：[CNBC](https://www.cnbc.com)

### Google 人才大出血继续，第五位顶级研究员离职

据 Bloomberg 和 AIToolsRecap 报道，Google DeepMind 人才流失仍在持续。继 John Jumper、Jonas Adler、Alexander Pritzel、Arthur Conmy 之后，第五位高级研究员宣布离职。Alphabet 市值在两周内蒸发超 2700 亿美元，创下科技史上市值最大的人才驱动型损失纪录。

来源：[Bloomberg](https://www.bloomberg.com)

## 涨星最快项目

### ZhuLinsen/daily_stock_analysis

LLM 驱动的多市场股票分析系统，支持实时新闻抓取和自动通知推送。

星标数：日新增 1,468 | [GitHub](https://github.com/ZhuLinsen/daily_stock_analysis)

### JCodesMore/ai-website-cloner-template

使用 AI 编程 Agent 一键克隆任意网站的前端代码。

星标数：日新增 692 | [GitHub](https://github.com/JCodesMore/ai-website-cloner-template)

### anthropics/claude-plugins-official

Anthropic 官方精选的高质量 Claude Code 插件目录，覆盖代码审查、测试生成等场景。

星标数：日新增 306 | [GitHub](https://github.com/anthropics/claude-plugins-official)

## 大模型进展

### 国内

**阿里 Qwen3.7-Max API 大幅降价**：阿里云宣布通义千问 Qwen3.7-Max 系列 API 价格下调 40%，继续对西方模型施加价格压力。此举正值 Anthropic 指控阿里通过 API 提取训练数据之际。

**智谱 GLM-5.2 国际版持续发酵**：Z.ai 发布的 GLM-5.2 在编码和 Agent 基准上达到前沿水平，价格为西方模型的十分之一。六个中国 AI 模型已进入独立基准排行榜顶级梯队。

### 国外

**GPT-4.5 今日正式退役**：GPT-4.5 从 ChatGPT 正式下线。o3 将于 8 月 26 日退役。OpenAI 正在向 GPT-5 系列整合。GPT-5.6 预计以 Sol（旗舰）、Terra（均衡日常）、Luna（快速低成本）三层模型家族发布，但受政府准入限制影响，初始仅向约 20 个审查通过的合作伙伴开放。

**OpenAI 倾向推迟 IPO 至 2027 年**：据纽约时报报道，OpenAI 倾向将 IPO 推迟到 2027 年。SpaceX 上市后股价表现不佳和市场竞争格局每周变化是主要因素。

## 新工具 & CLI

- **wshobson/agents**：多框架智能体插件市场，支持 Claude Code、Codex CLI、Cursor 等主流工具。[GitHub](https://github.com/wshobson/agents)
- **BerriAI/litellm**：Python SDK 和代理服务器，以 OpenAI 格式调用 100+ LLM API，支持成本追踪和负载均衡。[GitHub](https://github.com/BerriAI/litellm)
- **langgenius/dify**：生产级智能体工作流开发平台，支持可视化编排。[GitHub](https://github.com/langgenius/dify)

## 编程方式

随着政府准入管控成为常态，AI 开发者社区正在适应新的现实：前沿模型不再即时可用，而是通过审批渠道逐步释放。这催生了一种"预发布适配"工作流——开发者基于模型规格文档和安全白皮书提前准备集成代码，待模型获批后快速部署。同时，企业 AI 支出正从"tokenmaxxing"转向要求明确 ROI 的务实姿态，对供应商而言靠炒作销售的时代正在结束。

## 总结

Mythos 5 解禁与 GPT-5.6 准入管控同步发生，前沿 AI 的发布模式正从开放走向审查制，政府管控成为 AI 产业新常态。
