---
title: "AI 开发日报 · 2026年06月20日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-20
tags: ["AI日报"]
---

## 今日要闻

### 诺贝尔奖得主 John Jumper 从 Google DeepMind 跳槽至 Anthropic

2024 年诺贝尔化学奖共同得主、AlphaFold 核心开发者 John Jumper 宣布离开 Google DeepMind 加入 Anthropic。AlphaFold 预测了超过 2 亿个蛋白质结构，将药物发现时间缩短了数年。Jumper 的离职距 Gemini 联合负责人 Noam Shazeer 跳槽至 OpenAI 不到一周，构成对 Google 人才管线的双重打击。

来源：[The Next Web](https://thenextweb.com/news/john-jumper-nobel-deepmind-leaves-anthropic-alphafold)

### Fable 5 出口禁令引发 G7 外交危机

Anthropic 的出口禁令在 G7 峰会上持续发酵。法国总统马克龙称此禁令是"坏事情"和"严格民族主义的"。G7 各国紧急评估其 AI 基础设施对美国的依赖程度——15 个国家的 200 家机构此前正在测试受限模型。特朗普在与 Amodei 午餐后表示 Anthropic"不再是国家安全隐患"，但出口禁令仍在执行中。

来源：[9to5Mac](https://9to5mac.com/2026/06/12/anthropic-pulls-claude-mythos-5-and-claude-fable-5-following-us-government-directive/)

### OpenAI 推出 GPT-Rosalind 生命科学推理模型

GPT-Rosalind 专为药物发现、基因组学分析和科学研究工作流设计，继承了 GPT-5.5 的智能体编程和工具使用能力。已确认合作伙伴包括 Amgen、Moderna 和 Novo Nordisk。在药物实验室测试中，模型运行了 10,080 次 Chan-Lam 偶联反应优化药物发现流程，将数月的湿实验室工作缩短到数周。

来源：[TechTimes](https://www.techtimes.com/articles/318356/20260614/openais-rosalind-biodefense-opens-gpt-rosalind-vetted-partnersdual-use-fears-mount.htm)

### 10 万人研究证实 AI 创造力超越人类平均水平

一项发表于同行评审期刊、涵盖超过 10 万名参与者的里程碑研究发现，当前生成式 AI 系统在标准化发散思维测试中已超越人类平均水平。研究测试了与创意思维相关的原创性、创意流畅性和创意生成能力。

来源：[ScienceDaily](https://www.sciencedaily.com/news/computers_math/artificial_intelligence/)

## 涨星最快项目

### affaan-m/ECC

Agent 性能优化系统，覆盖技能（Skills）、本能（Instincts）、记忆（Memory）、安全（Security）四大模块，为 AI 编程 Agent 提供完整的"操作系统"。

星标数：210,176 | [GitHub](https://github.com/affaan-m/ECC)

### mukul975/Anthropic-Cybersecurity-Skills

754 个结构化网络安全技能，映射到 MITRE ATT&CK、NIST CSF 2.0 等五大安全框架，覆盖 26 个安全领域。

星标数：12,938 | [GitHub](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

### aaif-goose/goose

开源 AI 编码 Agent，Rust 编写，支持多模型后端和可扩展技能系统。

星标数：2,165 | 周新增：2,165 | [GitHub](https://github.com/aaif-goose/goose)

## 大模型进展

### 国内

**微软发布 MAI 系列七款自研模型**：从 170 亿参数端侧轻量 MAI-Mini 到 1.8 万亿参数超级旗舰 MAI-Orion，覆盖端侧、中端、高端、企业旗舰到智能体专用全产品线。MAI-Orion 在 MMLU、HumanEval 等 15 项基准测试中 12 项超越 GPT-5 预览版，推理成本仅为 GPT-5 的 38%。

**AMD 宣布下一代线程撕裂者代号 Mustang Peak**：台积电 2nm + Zen 6 架构，TR6 平台，支持 PCIe 6.0。

### 国外

**OpenAI 聘请 Dean Ball 领导 Strategic Futures**：Ball 将于 7 月 6 日加入，负责灾难性风险、递归自我改进、劳动力市场影响和前沿实验室与政府关系。其任命令显示 OpenAI 正在构建政治护城河。

**OpenAI ChatGPT 退役时间表**：o3 将于 8 月 26 日从 ChatGPT 退役，GPT-4.5 将于 6 月 27 日退役。模型退役节奏加快，OpenAI 正在为 IPO 清理产品线。

## 新工具 & CLI

- **GPT-Rosalind**：OpenAI 生命科学推理模型，专为药物发现和基因组学分析设计，已与 Amgen、Moderna、Novo Nordisk 合作。[TechTimes](https://www.techtimes.com/articles/318356/20260614/openais-rosalind-biodefense-opens-gpt-rosalind-vetted-partnersdual-use-fears-mount.htm)
- **GPT-Rosalind Biodefense**：GPT-Rosalind 的生物防御变体，面向审查通过的合作伙伴开放，关注双用途潜在风险。
- **Anthropic Claude Apple Foundation Models 集成**：Claude 将通过 Apple Foundation Models 框架在 iOS 27、macOS 27 等全平台原生可用，开发者使用 Anthropic API 密钥即可集成。[Releasebot](https://releasebot.io/updates/anthropic/claude)

## 编程方式

SpaceX 以 600 亿美元收购 Cursor 的交易引发行业热议。Jason Calacanis 称其为"自 Instagram 和 YouTube 以来最好的科技交易"。Cursor 成为 SpaceX 全资子公司意味着 xAI 的 Grok 模型将直接嵌入开发者工作流。AI 编程工具的价值不再仅仅是代码生成效率，而是成为获取开发者行为反馈信号的战略入口。这也预示着 AI 编程工具市场可能走向垂直整合——模型提供商直接拥有开发环境。

## 总结

诺贝尔奖得主流入 Anthropic 加速 Google 人才流失，AI 实验室间的竞争已从模型性能扩展到科研人才储备的全方位博弈。
