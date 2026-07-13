---
title: "AI 开发日报 · 2026年06月22日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-22
tags: ["AI日报"]
---

## 今日要闻

### FERC 采取"干预主义"转向：90 天内完成 AI 数据中心电网接入

美国联邦能源监管委员会（FERC）批准一揽子命令，要求六大区域电网运营商在 90 天内处理超大规模用户接入请求。FERC 主席称此举为"刻意的干预主义"——现状不够快，国家 AI 领导力取决于能否在合理时间内将这些设施接入电网。六大超大规模企业已宣布未来五年超 5000 亿美元的美国数据中心投资。

来源：[Insurance Journal](https://www.insurancejournal.com/news/national/2026/06/22/874598.htm)

### Fable 5 禁令进入第十天，解决方案仍无时间表

截至 6 月 22 日，Claude Fable 5 和 Mythos 5 仍对全球所有用户暂停。美国商务部 6 月 12 日下午 5:21 发出的出口管制指令范围如此之广，以至于 Anthropic 选择全球下线而非实施国籍筛选。CNN 报道称政府行动源于 Anthropic 拒绝修改其 AI 系统用于军事用途的护栏，导致国防部将 Anthropic 列为"供应链风险"。

来源：[CNN Business](https://www.cnn.com/2026/06/21/tech/anthropic-ai-regulation)

### OpenAI IPO 人才争夺战深化

继 Shazeer 和 Dean Ball 之后，OpenAI 的 IPO 前人才收割仍在继续。Google 诺贝尔奖得主 Jumper 加入 Anthropic 的消息进一步确认了人才分布的重组。在 OpenAI 和 Anthropic 同时准备 IPO 的背景下，两家公司能提供与公开市场估值挂钩的股权激励——这对研究者而言是 Google 难以在风险调整后匹配的。

来源：[TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)

### Gemini 3.5 Pro 倒计时：Google 自设 6 月底 deadline 仅剩 8 天

Google 在 5 月 Google I/O 上承诺 Gemini 3.5 Pro 在 6 月底前发布，但截至 6 月 22 日尚未上线。确认规格包括 200 万 token 上下文窗口和 Deep Think 深度推理模式，定价约 15 美元/百万输入 token 和 60 美元/百万输出 token。同期 Google 发布了 6 月 Pixel Drop，包含 Gemini Omni 多模态生成器。

来源：[GrowwingAssistant](https://growwingassistant.com/ai-news/gemini-3-5-pro-release-date-june-2026-every-confirmed-spec-pricing-when-it-drops/)

## 涨星最快项目

### CloakHQ/CloakBrowser

浏览器自动化工具，为 AI Agent 提供安全的网页交互能力。

星标数：月新增 15,875 | [GitHub](https://github.com/CloakHQ/CloakBrowser)

### apple/container

在 Apple Silicon 上运行 Linux 容器的工具，常驻内存更低、启动更快，适合 Mac 上运行本地推理和 Agent 沙箱。

星标数：月新增 10,383 | [GitHub](https://github.com/apple/container)

### Open-LLM-VTuber

本地 Live2D 语音 VTuber，支持本地语音识别和实时对话。

星标数：约 10,434 | [GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)

## 大模型进展

### 国内

**企业 AI Agent 落地数据公布**：生产环境部署 AI Agent 的企业比例达 54%（2024 年仅 18%）。金融行业部署率 67%，制造业 45%，零售业 52%。头部企业 Agent 部署数量中位数 23 个，多步骤 Agent 工作流 ROI 中位数 127%。MCP（模型上下文协议）打通企业数据孤岛，200+ 企业接入。

**快手可灵 AI 年收入破亿美元**：上线一周年已实现年化收入运行率破 1 亿美元，4 月和 5 月月度付费均超 1 亿元人民币，P 端付费订阅会员贡献近 70% 营收。

### 国外

**G7 讨论 AI"可信伙伴"框架**：G7 领导人讨论给予加拿大、英国、法国、德国、日本和可能的澳大利亚优先访问美国前沿 AI 模型的权限，建立类似 NATO 的 AI 模型准入体系。该框架在 Évian 未正式确立，但其在 G7 工作午餐上的提出标志着前沿 AI 准入已被视为战略资产。

**Google Pixel Drop 发布 Gemini Omni**：Pixel 设备用户可使用 Gemini Omni 直接从文本提示创建和编辑视频、图像和多媒体，无需离开设备。Google 还发布了新的个性化 AI 图像生成功能。

## 新工具 & CLI

- **Gemini Omni**：Pixel Drop 中的多模态生成器，支持设备端视频、图像和多媒体创作。[Google Blog](https://blog.google/products-and-platforms/devices/pixel/june-2026-pixel-drop/)
- **googleworkspace/cli**：Google Workspace 命令行工具，管理 Drive、Gmail、Calendar、Sheets、Docs，内置 AI Agent 技能。[GitHub](https://github.com/googleworkspace/cli)
- **tashfeenahmed/freellmapi**：OpenAI 兼容代理，将 16 个免费 LLM 提供商堆叠在单一 /v1 端点后，支持智能路由和自动故障转移。[GitHub](https://github.com/tashfeenahmed/freellmapi)

## 编程方式

FERC 的 90 天电网接入命令是自 CHIPS 法案以来对 AI 基础设施最具影响力的政策行动。数据中心运营商可将其作为推动迟缓电网运营商的"锤子"。对于评估 AI 计算负载选址的企业，PJM 和 CAISO 互联区域内的州将受益最快。这预示着 AI 基础设施规划已从纯粹的云服务采购扩展到能源策略和选址决策——企业 CTO 的 AI 战略文档中需要新增"电网接入时间线"这一维度。

## 总结

从电网到模型，AI 基础设施全面进入"瓶颈突破期"，能源政策与前沿模型可用性共同决定企业 AI 部署的节奏。
