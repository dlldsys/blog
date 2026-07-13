---
title: "AI 开发日报 · 2026年06月21日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-21
tags: ["AI日报"]
---

## 今日要闻

### OpenAI 泄露财务数据：2025 年亏损 390 亿美元

据 Financial Times 等多家媒体披露，OpenAI 2025 财年净亏损约 385-390 亿美元，是 2024 年 50 亿亏损的近八倍。收入达 130.7 亿美元，同比增长 253%，但运营支出约 340 亿美元。Q1 2026 收入 57 亿美元，但净亏损超 210 亿美元。Sam Altman 在 X 上确认对英伟达的依赖："我们喜欢与英伟达合作，他们制造世界上最好的 AI 芯片。"

来源：[The Motley Fool](https://www.fool.com/investing/2026/06/21/openais-massive-losses-strengthen-the-bull-case-fo/)

### 特朗普改口：Anthropic"不再是国家安全威胁"

在接受 Axios 采访时，特朗普透露他一周前差点正式将 Anthropic 列为国家安全威胁，但在 Anthropic 快速、负责任地响应出口管制指令后收回了这一认定。特朗普同时表示不排除动用《国防生产法》，但"不确定是否必须这样做"。与特朗普 Jr. 关联的风险投资公司 1789 Capital 因此放弃了对 Anthropic 的数亿美元投资计划。

来源：[Reuters](https://www.reuters.com/world/us/trump-tells-axios-he-no-longer-views-anthropic-national-security-threat-2026-06-19/)

### 挪威成为首个近乎全面禁止小学使用 AI 的国家

挪威首相 Jonas Gahr Støre 宣布将从 2026 年秋季新学年起对小学 1-7 年级（6-13 岁）实施近乎全面的生成式 AI 禁令。初中生（14-16 岁）可在教师监督下谨慎使用 AI。挪威此前已禁止 16 岁以下儿童使用社交媒体，并计划恢复课堂纸质教材。

来源：[Reuters](https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/)

### 研究论文警告：2027 年 AI 自主性可能引发十年内生存风险

一篇引起广泛关注的同行评审研究论文指出，如果 AI 系统在 2027 年实现有意义的自主性，人类可能在十年内面临生存风险。论文分析了递归自我改进动态和前沿 AI 能力轨迹，认为有效治理干预的时间窗口可能比决策者目前假设的更短。Metaculus 用户目前估计 2100 年前人类灭绝概率为 2%。

来源：[BBC Technology](https://www.bbc.com/technology/artificial-intelligence)

## 涨星最快项目

### colbymchenry/codegraph

本地预索引代码知识图谱，零数据泄露，适合大型私有仓库的代码理解和导航。

星标数：月新增 47,635 | [GitHub](https://github.com/colbymchenry/codegraph)

### mattpocock/skills

TypeScript 教育者的个人 .claude 目录，包含多种实用 Claude Code 技能。

星标数：月新增 48,195 | [GitHub](https://github.com/mattpocock/skills)

### Egonex-AI/Understand-Anything

让 AI 深度理解任意主题的工具，支持从零到一的全栈知识覆盖。

星标数：月新增 44,690 | [GitHub](https://github.com/Egonex-AI/Understand-Anything)

## 大模型进展

### 国内

**《人工智能拟人化互动服务管理暂行办法》将于 7 月 15 日施行**：五部门联合发布，确立六条红线：禁止 AI 模拟特定自然人身份互动、禁止诱导用户产生情感依赖、禁止收集与互动无关的敏感信息、禁止生成违反公序良俗的内容、禁止无人工干预时做出重大决策、禁止使用未备案的底层大模型。

**腾讯混元强化学习新方法发布**：核心思路是让 AI 学习时"先想后行"，避免越学越偏。腾讯 Robotics X、福田实验室与混元团队联合发布面向真实世界机器人操作任务的端到端具身智能模型 HyVLA-0.5。

### 国外

**加州"No Robo Bosses Act of 2026"推进**：SB 947 法案将禁止雇主仅依赖自动化决策系统解雇或处分员工，要求高风险雇佣决策必须有人工审核，并披露 AI 系统使用情况。特朗普此前发布行政命令警告各州不要监管 AI，但多州仍在推进各自的 AI 法律。

**OpenAI 企业支出控制更新**：ChatGPT Enterprise 推出新的额度使用分析和支出控制功能，Global Admin 可查看 ChatGPT、API 和第三方集成的消耗情况，反映企业对 AI 成本可审计性的迫切需求。

## 新工具 & CLI

- **OpenAI 企业用量分析**：ChatGPT Enterprise 新增 Global Admin 可见的消费分析面板，覆盖 ChatGPT、API 和第三方集成。
- **Google Workspace CLI**：单一命令行工具管理 Drive、Gmail、Calendar、Sheets、Docs 等，内置 AI Agent 技能。[GitHub](https://github.com/googleworkspace/cli)
- **firecrawl/firecrawl**：大规模网页搜索、抓取和交互 API，为 AI Agent 提供网络数据获取能力。[GitHub](https://github.com/firecrawl/firecrawl)

## 编程方式

联邦与各州在 AI 监管上的博弈正在重塑企业 AI 部署的合规格局。加州"No Robo Bosses Act"如获通过将成为全国性 HR AI 合规的基准——任何在加州有员工的公司都需在 AI 驱动的 HR 或绩效管理系统中内置人工审核。企业不能再等待联邦层面的明确法规，而需要应对 50 个州的碎片化合规要求。"我们先等联邦明确"的策略在加州已不再可行。

## 总结

OpenAI 天文数字亏损与各国 AI 教育禁令同时出现，AI 产业在资本狂欢与社会焦虑之间面临前所未有的张力。
