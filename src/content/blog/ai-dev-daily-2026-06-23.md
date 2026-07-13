---
title: "AI 开发日报 · 2026年06月23日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-23
tags: ["AI日报"]
---

## 今日要闻

### 特朗普正式收回对 Anthropic 的"国家安全威胁"认定

特朗普在 Axios 采访中确认，一周前他差点将 Anthropic 正式列为国家安全威胁，但目前已收回该认定。特朗普表示 Amodei 对出口管制指令的响应"非常迅速"且"负责任"。但他未排除动用《国防生产法》的可能性。此前因 Anthropic 招聘了多名拜登政府官员（包括 AI 安全研究所前主任 Elizabeth Kelly），引发了当前政府的不满。

来源：[Axios](https://www.axios.com/2026/06/19/trump-anthropic-national-security-the-axios-show)

### 白宫发布重大 AI 安全行政令：建立网络安全信息交换中心

特朗普 6 月 2 日签署的 14409 号行政令《促进先进人工智能创新与安全》正在产生实质性影响。核心措施包括：30 天内建立 AI 网络安全信息交换中心，由财政部协调 NSA 和 CISA，扫描软件漏洞并协调补丁分发；30 天内国防部长须优先加固信息系统。该令将 AI 安全定位为创新的"前提"而非"刹车"。

来源：[White House](https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/)

### Transformer 共同作者 Shazeer 正式加入 OpenAI

Noam Shazeer 确认加入 OpenAI 担任架构研究负责人。Shazeer 自 2000 年起在 Google 工作，2021 年离职创办 Character.AI，2024 年 Google 以 27 亿美元收购 Character.AI 将其带回。如今他再次离开 Google 加入竞争对手。OpenAI CEO Sam Altman 据称戏称挖到 Shazeer"只花了 10 年"。

来源：[TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)

### Shift 派摄像头清洁工进入纽约公寓采集机器人训练数据

AI 初创公司 Micro AGI（品牌名 Shift）推出一项大胆计划：为纽约市民提供免费的专业清洁和烹饪服务，由佩戴头戴式摄像头的人类清洁工执行，全程录制用于机器人训练。数据经匿名化后出售给 AI 和机器人公司。创始人 Bercan Kilic 表示目标是收集"大量"灵巧手任务数据。

来源：[BBC News](https://www.bbc.com/news/articles/cpwerjy20kyo)

## 涨星最快项目

### bytedance/deer-flow

字节跳动开源的深度研究框架（Deep Exploration and Efficient Research Flow），编排子 Agent 完成长周期研究任务，对标 Gemini Deep Research 但完全开源。

星标数：22,000+ | [GitHub](https://github.com/bytedance/deer-flow)

### harry0703/MoneyPrinterTurbo

一键 AI 生成竖屏短视频，全流程自动化——AI 写文案、匹配视频素材、配音、加字幕、配乐。

星标数：81,554 | [GitHub](https://github.com/harry0703/MoneyPrinterTurbo)

### dmtrKovalenko/fff

Rust 编写的 AI Agent 文件搜索工具，高性能文件查找和内容检索。

星标数：879 | [GitHub](https://github.com/dmtrKovalenko/fff)

## 大模型进展

### 国内

**EU 选择 EUROPA 联盟赢得前沿 AI 大挑战**：欧盟委员会 6 月 19 日宣布选择 EUROPA 联盟建设覆盖全部 24 种欧盟官方语言的开源前沿 AI 模型。此举直接回应美国出口管制，加速欧洲 AI 主权建设。

**美团 LongCat-Next 多模态底座商用试点**：开源原生融合多模态底座进入线下商用试点，适配无人配送车、智能取餐柜、商超自助终端，离线交互延迟控制在 1 秒内。开放硬件厂商定制开发接口，面向线下实体经济数字化提供免费底座授权。

### 国外

**Anthropic Claude 集成 Apple Foundation Models**：Claude 将通过 Apple Foundation Models 框架在 iOS 27、iPadOS 27、macOS 27、visionOS 27 和 watchOS 27 全平台原生可用。开发者使用 Anthropic API 密钥即可集成。同时 Anthropic 合并 Claude Code 和 Design 能力。

**Gemini 3.5 Pro 进入最后倒计时**：Google 在 Gemini API 层面宣布多个视频生成模型将于 6 月 30 日停用——与 Gemini 3.5 Pro 预计发布日期重合。这表明 Google 正在刻意清理产品线，为 3.5 Pro 的发布腾出叙事空间。

## 新工具 & CLI

- **White House EO 14409 AI 网络安全信息交换中心**：30 天内建立的行业-政府自愿合作平台，扫描漏洞并协调关键基础设施补丁。[White House](https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/)
- **Anthropic Claude Apple Foundation Models**：Claude 原生集成 Apple 全平台开发者框架。[Releasebot](https://releasebot.io/updates/anthropic/claude)
- **google-labs-code/design.md**：向编码 Agent 描述视觉身份的格式规范，让 Agent 持续理解设计系统。[GitHub](https://github.com/google-labs-code/design.md)

## 编程方式

Shift 的免费清洁服务换数据采集模式揭示了物理 AI 数据经济的独特逻辑：不同于互联网上几乎无限的文本数据，真实家庭中的物理任务数据几乎不存在。通过提供免费服务来获取稀缺的灵巧手任务训练数据，形成了一个只有人们同意才能运作的引导循环。对于关注人形机器人赛道的企业，数据瓶颈正在被破解——物理 AI 的进展速度可能比大多数人预期的更快。这也引发了一个伦理问题：在自己家中收集的数据，即使"匿名化"，本质上也是敏感的。

## 总结

特朗普与 Anthropic 的缓和暂解地缘政治危机，但 AI 安全行政令的 30 天时限显示政府对 AI 的管控正在从被动应对转向主动架构。
