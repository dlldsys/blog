---
title: "AI 开发日报 · 2026年06月18日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-18
tags: ["AI日报"]
---

## 今日要闻

### G7 峰会历史性同台：AI 三巨头与各国领导人共议治理

在法国 Évian-les-Bains 举行的 G7 峰会上，Anthropic CEO Dario Amodei、OpenAI CEO Sam Altman 和 Google DeepMind CEO Demis Hassabis 首次与 G7 领导人同台午餐。Amodei 和 Hassabis 呼吁建立美国主导的国际 AI 联盟，法国总统马克龙批评美国的出口管制是"严格民族主义的"反应。

来源：[AP News](https://apnews.com/article/g7-france-ai-sovereignty-7d783c6de4356962e338b8b8563d48ea)

### Transformer 论文作者 Noam Shazeer 从 Google 跳槽至 OpenAI

Noam Shazeer——2017 年"Attention Is All You Need"论文的共同作者、Google Gemini 联合负责人——宣布加入 OpenAI。Google 在 2024 年以 27 亿美元收购 Character.AI 才将 Shazeer带回，如今他再次离开。这是 AI 人才争夺战中最具象征性的人才流动之一。

来源：[Reuters](https://www.reuters.com/technology/googles-gemini-co-lead-noam-shazeer-join-openai-2026-06-18/)

### Anthropic 与白宫的出口管制对峙持续升级

Anthropic 在 6 月 12 日收到商务部指令后 90 分钟内被迫将 Fable 5 和 Mythos 5 完全下线。Anthropic 表示此前已获得政府的明确部署批准，突如其来的反转令员工震惊。G7 峰会上此事件成为各国领导人关注的焦点。

来源：[TIME](https://time.com/article/2026/06/13/anthropic-fable-mythos-ban-US-security/)

### 40% 企业应用将在 2026 年底嵌入 AI Agent

MarketsandMarkets 数据显示，企业应用中包含任务型 AI Agent 的比例预计从一年前的不到 5% 跃升至 2026 年底的 40%。智能体 AI 市场规模将从 2025 年的 70.6 亿美元增长至 2032 年的 932 亿美元。

来源：[SEN-X](https://senx.ai/news/2026-06-18-daily-ai-news.html)

## 涨星最快项目

### can1357/oh-my-pi

终端 Agent，创新性地采用 Hash-anchored edits 技术——AI 修改代码前通过精确哈希定位代码行，避免"改错行"问题。

星标数：11,164 | [GitHub](https://github.com/can1357/oh-my-pi)

### ogulcancelik/herdr

终端 Agent 多路复用器，像 tmux 管理多个终端窗口一样管理多个 Agent，支持分屏、切换和同步操作。

星标数：3,411 | [GitHub](https://github.com/ogulcancelik/herdr)

### refactoringhq/tolaria

TypeScript 编写的 Markdown 知识库桌面应用，为 AI Agent 提供本地知识管理。

星标数：3,592 | 周新增：3,592 | [GitHub](https://github.com/refactoringhq/tolaria)

## 大模型进展

### 国内

**MiniMax 发布 M3 旗舰模型**：宣称是首个"Frontier Coding & Agentic · 百万上下文 · 原生多模态"三项能力兼备的国产旗舰。基于自研 MSA 架构，API 支持 1M tokens 上下文，BrowseComp 智能体评测 83.5 分超越 Claude Opus 4.7（79.3）。

**智谱 AI 开源 GLM-5.2**：1M 无损上下文，Code Arena 盲测全球可用模型第二、开源模型第一。基于 MIT 开源协议，首日完成华为昇腾、平头哥等国产算力适配。FrontierSWE 等长程任务性能介于 Claude Opus 4.7 与 4.8 之间。

**腾讯混元发布 HyVLA-0.5**：面向真实世界机器人操作任务的端到端具身智能模型，基于自研亚毫米级高精度指套式 UMI 数据采集系统。

### 国外

**Google AI Mode 推出"信息智能体"**：AI 搜索不再被动等待用户查询，而是主动监控用户标记的话题、新闻、价格信号，在有意义变化时推送告警。

**Peter Diamandis 宣称"AGI 已到来"**：XPRIZE 创始人发表广为流传的分析文章，认为 AGI 的门槛已在功能性层面被跨越，AI 系统在大多数专业认知任务上已超越人类。

## 新工具 & CLI

- **Google AI Mode 信息智能体**：主动监控话题和价格变化的 AI 搜索代理。[Lifehacker](https://lifehacker.com/tech/google-ai-mode-information-agents)
- **小米 MiMo Code V0.1.0**：小米开源的终端原生 AI 编程助手，在 200 步以上长周期任务中表现优于 Claude Code，同步提供限时免费 MiMo-V2.5 模型访问。[istoe.tech](https://istoe.tech/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks/)
- **OpenAI Codex MCP 支持增强**：Codex 更新了远程执行安全、跨平台工作目录保留和更丰富的 MCP（Model Context Protocol）支持。

## 编程方式

G7 峰会上 AI 公司 CEO 首次与国家元首平起平坐，标志着 AI 已从技术议题升级为地缘政治核心议题。Shazeer 从 Google 跳槽至 OpenAI 发生在 OpenAI IPO 路演前夕，表明人才争夺已进入"超一流研究员在巨头间直接流动"的新阶段。对于企业来说，选择 AI 平台不仅要看模型能力，还要评估实验室在未来 18-24 个月的人才储备可持续性。

## 总结

G7 峰会成为 AI 治理的分水岭，前沿模型从商业产品升格为战略资产，人才争夺与地缘博弈交织叠加。
