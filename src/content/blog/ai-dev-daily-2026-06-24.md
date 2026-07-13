---
title: "AI 开发日报 · 2026年06月24日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-24
tags: ["AI日报"]
---

## 今日要闻

### Anthropic Mythos 模型数小时内攻破美国机密系统

AP News 报道，Anthropic 的 Mythos AI 模型在 Project Glasswing 框架下与美国情报机构联合测试中，在数小时（而非数周）内识别出高度敏感的美国政府计算机系统中的漏洞。参议员 Mark Warner 在 6 月 11 日参议院银行委员会听证会上引用 NSA 局长 Joshua Rudd 的话说："这个工具在数小时内攻破了几乎所有机密系统。"同期 NSA 因合同纠纷失去了 Anthropic 工具的访问权限。

来源：[AP News](https://apnews.com/article/anthropic-mythos-ai-classified-systems-vulnerabilities-testing-3e8762c0527c4d8ed657cbe48c84a718)

### OpenAI 在戛纳宣布进军广告业务

OpenAI 在戛纳 Lions 广告节首次亮相，CRO Denise Dresser 宣布"我们显然已经进入广告业务"。OpenAI 告诉投资者预计四年内达到 1000 亿美元收入——作为对比，Meta 用了 17 年才达到 1000 亿美元广告收入。ChatGPT 已有超过 2000 个品牌通过 Criteo 集成投放广告。

来源：[AdExchanger](https://www.adexchanger.com/ai/at-its-first-ever-cannes-openai-says-we-are-clearly-in-the-advertising-business-now/)

### 欧盟议会投票延期 EU AI Act 关键合规截止日期

欧洲议会以 423 票对 57 票通过 EU AI Act 首次修正案。高风险 AI 系统（招聘、教育、执法）的主要合规截止日期从 2026 年 8 月 2 日推迟至 2027 年 12 月 2 日。内置于医疗器械等受监管产品的 AI 合规期限延至 2028 年 8 月。但 2026 年 12 月的深度伪造色情内容禁令仍将按时生效。

来源：[SEN-X](https://senx.ai/news/2026-06-24-daily-ai-news.html)

### Google 投资 7500 万美元与 A24 合作开发 AI 电影制作工具

Google 与独立电影工作室 A24 达成研究合作，Google 投资约 7500 万美元，DeepMind 研究人员将嵌入 A24 的制作和后期制作团队。合作目标是为电影制作者开发 AI 驱动的工作流和工具。交易不涉及 A24 内容库或数据访问权。

来源：[Variety](https://www.variety.com)

## 涨星最快项目

### calesthio/OpenMontage

全球首个开源智能体视频制作系统，包含 12 条流水线、52 个工具和 500+ Agent 技能，把 AI 编程助手改造成视频导演。

星标数：日新增 3,719 | [GitHub](https://github.com/calesthio/OpenMontage)

### garrytan/gstack

Claude Code 配置工具，包含 23 个覆盖 CEO、设计师、工程经理、发布经理、文档工程师和 QA 角色的工具集。

星标数：日新增 922 | [GitHub](https://github.com/garrytan/gstack)

### mukul975/Anthropic-Cybersecurity-Skills

817 个结构化网络安全技能，映射到 MITRE ATT&CK 等六大安全框架。

星标数：日新增 1,031 | [GitHub](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

## 大模型进展

### 国内

**智谱 GLM-5.2 开源生态爆发**：基于 6 月 17 日 MIT 全开源基座，社区批量产出政务、法律、金融三类标准化微调权重，全部免费开源。原生 Agent 框架升级，支持政务审批流程、合同自动比对、报表生成自动化，政企落地适配成本降低 60%。

**字节豆包政企办公模型合规升级**：新增涉密公文校验模块，包括公文格式自动标准化（适配党政机关全套规范）和敏感词汇自动筛查标红。政企结构化输出准确率提升 35%。

### 国外

**Anthropic 推出 Claude Tag**：团队可直接在 Slack 中与 Claude 协作——授予 Claude 频道访问权、连接工具和数据，团队成员可 @提及 Claude 委派任务。Anthropic 表示其产品团队 65% 的代码由内部版 Claude Tag 生成。

**OpenAI 发布 GPT-5.5-Cyber 改进版**：称为"迄今为止发现和修补软件漏洞的最强模型"。同步推出"Patch the Planet"计划，与 Trail of Bits 合作保护开源项目，首批包括 cURL、Python、Sigstore、Go 等。

## 新工具 & CLI

- **Claude Tag**：Anthropic 推出的 Slack AI 队友，支持频道上下文感知、多步骤任务规划和团队协作委派。[Anthropic](https://www.anthropic.com/news)
- **GPT-5.5-Cyber**：OpenAI 安全漏洞发现和修补模型，可深度分析大型代码库、验证漏洞并生成针对性补丁。[OpenAI](https://openai.com/news/)
- **Patch the Planet**：OpenAI 与 Trail of Bits 合作的开源安全加固计划，使用 GPT-5.5-Cyber 为关键开源基础设施生成补丁。
- **heygen-com/hyperframes**：写 HTML、渲染视频，专为 Agent 设计。[GitHub](https://github.com/heygen-com/hyperframes)

## 编程方式

Anthropic 的 Mythos 在数小时内攻破机密系统，与 OpenAI 的 GPT-5.5-Cyber "Patch the Planet"计划形成了 AI 安全攻防的两面。前沿 AI 实验室正在同时运营进攻性和防御性 AI 安全工具。对于企业安全团队，这意味着威胁模型已经改变——自动化漏洞发现的速度和规模意味着你的补丁节奏不再是瓶颈，检测才是。运行遗留基础设施的组织需要将 AI 辅助红队测试视为当前威胁而非未来威胁。

## 总结

AI 安全从理论讨论进入实战验证阶段，攻防两侧的能力竞赛直接决定全球网络安全格局的走向。
