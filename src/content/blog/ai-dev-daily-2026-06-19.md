---
title: "AI 开发日报 · 2026年06月19日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-19
tags: ["AI日报"]
---

## 今日要闻

### OpenAI IPO 前人才闪电战：Shazeer + Dean Ball 双管齐下

继 Noam Shazeer 宣布加入 OpenAI 后，前白宫 AI 政策官员 Dean Ball 也宣布将于 7 月 6 日加入 OpenAI，领导新成立的"Strategic Futures"团队，负责前沿 AI 政策制定。Ball 曾参与编写美国 AI 行动计划。这一技术传奇加政治内行的组合，为 OpenAI IPO 路演提供了双重信誉保障。

来源：[TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)

### Anthropic 与白宫开始起草联合 AI 安全框架

据 Politico 报道，白宫与 Anthropic 正从出口管制对抗转向合作起草 AI 安全框架，评估新 AI 模型中安全漏洞的严重程度，并界定何时政府干预是合理的。Anthropic 实质上同意参与编写将治理前沿 AI 模型的规则。

来源：[Politico](https://www.politico.com/news/2026/06/18/white-house-talks-with-anthropic-shift-to-setting-ai-security-rules-00967758)

### Google 发布六年来首款智能音箱：99 美元搭载 Gemini

Google Home Speaker 开启预购，售价 99.99 美元，6 月 25 日发货。该设备从底层构建为原生 Gemini 硬件产品，支持 Gemini Live 免唤醒词对话、10 种语音选择和多步骤智能家居控制，可通过自然语言一次性执行"调暗卧室灯光、把恒温器设为 70 度、播放雨声"等复合指令。

来源：[Google Blog](https://blog.google/products-and-platforms/devices/google-nest/google-home-speaker-gemini-features/)

### OpenAI o3 模型为 18 名罕见病儿童确诊

波士顿儿童医院和哈佛研究人员使用 OpenAI o3 Deep Research 模型重新审查 376 个此前无法确诊的儿科罕见病例，结果确认 18 个新诊断。该模型通过交叉参考表型、基因变异和科学文献生成假设，由人类专家审核验证后采取临床行动。

来源：[NBC News](https://www.nbcnews.com/tech/innovation/ai-boston-childrens-hospital-diagnose-rare-diseases-kids-openai-rcna350387)

## 涨星最快项目

### Leonxlnx/taste-skill

让 AI 输出"有品味"内容的技能文件，阻止 AI 生成无聊、泛泛、模板化的内容，特别适用于前端开发和 UI 设计场景。

星标数：37,543 | 月新增：约 11,000 | [GitHub](https://github.com/Leonxlnx/taste-skill)

### lfnovo/open-notebook

开源版 NotebookLM，TypeScript 编写，提供本地知识管理和笔记功能。

星标数：约 3,000 | [GitHub](https://github.com/lfnovo/open-notebook)

### CopilotKit/CopilotKit

Agent 前端 UI 栈，TypeScript 编写，为 AI Agent 提供可嵌入应用的交互界面。

星标数：周新增 1,519 | [GitHub](https://github.com/CopilotKit/CopilotKit)

## 大模型进展

### 国内

**阿里 Qwen3.7-Max 登顶国产第一**：在 Arena 全球大模型盲测总榜中国产模型排名第一，GPQA 推理得分 92.4，SWE-bench 编程得分 80.4，支持双模式推理，可 35 小时全自主芯片优化。Qwen 系列三个月迭代三个版本（3.5 → 3.6 → 3.7）。

**金融监管总局发布金发〔2026〕8 号文件**：《银行业保险业人工智能安全开发应用指导意见》，确立四条红线：客户敏感信息禁用于 AI 训练、高风险场景必须人工把关、AI 生成内容必须标注、严禁 AI 扰乱市场秩序。这是国内首份针对金融机构 AI 开发应用的专项监管规范。

### 国外

**Google Gemini 3.5 Pro 发布在即**：预计本月正式发布，配备 200 万 token 上下文和 Deep Think 深度推理模式。5 月 Google I/O 大会已亮相，目前仅在谷歌内部和少量企业客户中使用。

**OpenAI 模型退役时间表确认**：GPT-4.5 将于 6 月 27 日从 ChatGPT 退役（30 天过渡期），o3 将于 8 月 26 日退役（90 天过渡期）。OpenAI 正在向 GPT-5 系列整合产品线。

## 新工具 & CLI

- **Google Home Speaker**：99 美元的原生 Gemini 智能音箱，支持免唤醒词多步对话和自然语言智能家居控制。[Google Blog](https://blog.google/products-and-platforms/devices/google-nest/google-home-speaker-gemini-features/)
- **OpenAI 企业用量分析**：ChatGPT Enterprise 推出新的额度使用分析和支出控制功能，Global Admin 可查看 ChatGPT、API 和第三方集成的消耗情况。
- **Claude Code + Design 整合**：Anthropic 将 Claude Code 和 Design 能力合并，使其协同工作，意图拥有完整的软件创建技术栈。[CNET](https://www.cnet.com/tech/services-and-software/anthropic-claude-code-design-june-2026-news/)

## 编程方式

一项涉及超过 10 万人的里程碑研究表明，当前的生成式 AI 系统已在标准化发散思维测试中超越人类平均水平。研究发表于同行评审期刊，测试了原创性、创意流畅性和创意思维。虽然 AI 尚未达到顶尖人类创意者的水平，但对于大多数商业场景——文案撰写、头脑风暴、概念构思——AI 已越过"普通人类"门槛。这意味着团队的竞争问题不再是"是否使用 AI 创意"，而是"如何在 AI 处理规模的同时将人类创意重新定向到策展、品牌策略和战略洞察"。

## 总结

OpenAI 通过人才和政策双线布局巩固 IPO 前的竞争壁垒，而 Anthropic 与白宫从对抗转向共编规则，AI 治理进入新阶段。
