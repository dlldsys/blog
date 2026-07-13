---
title: "AI 开发日报 · 2026年06月13日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-13
tags: ["AI日报"]
---

## 今日要闻

### 1. 第八届北京智源大会收官，"智能体"与"世界模型"成核心议题

6月13日，第八届北京智源大会进入第二天并收官。大会坚持"学术硬核"，围绕 Agent、世界模型、具身智能、强化学习、AI 智能体安全等议题展开 25 场论坛。智源研究院推出的"悟界"全栈技术体系正式亮相，标志 AI 沿"大语言模型→多模态大模型→世界模型"路径加速演进。大会官方部署的"听会伙伴"AI 智能体成为亮点，能自主理解多语种学术长难句、跨语境提取研究脉络，甚至生成学者 AI 分身与现场观众实时辩论，直观展示原生多智能体在严谨知识场景的落地价值。

来源：[智源社区](https://hub.baai.ac.cn/view/55492) · [百度百科](https://m.baike.com/wiki/%E7%AC%AC%E5%85%AB%E5%B1%8A%E5%8C%97%E4%BA%AC%E6%99%BA%E6%BA%90%E5%A4%A7%E4%BC%9A/7650454806771417138) · [中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

### 2. 中国 AI 周报：DeepSeek V4 全面主流化，国产模型价值凸显

6月13日发布的 China AI Weekly 总结了6月8-13日中国 AI 生态五大看点：DeepSeek V4 家族全面可用（万亿参数 MoE、37B 激活、1M+ 上下文、首个国产芯片优化前沿模型）；百度 ERNIE 5.1 以 6% 算力登 LMArena Search 全球第四；阿里通义千问开放第三方 Agent（瑞幸、肯德基、东航试点）；美国关闭芯片出口子公司漏洞；中国国务院加速 AI 综合立法。报告指出"中国将在芯片上追上"的叙事已转向"中国已在国产硅上跑生产工作负载"。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 3. OpenClaw 发布 dev 工具：一键部署云端沙箱 Agent

6月13日，OpenClaw 发布 openclaw-dev 工具，可将 OpenClaw 一键部署到临时云端沙箱，通过浏览器即可对话，始终在线、与笔记本隔离、任意设备可达。后端默认使用 Azure OpenAI Foundry Models（默认 gpt-5-mini），Microsoft Teams 为可选附加。这让开发者无需本地配置即可快速体验 OpenClaw 智能体能力。

来源：[Microsoft Learn](https://learn.microsoft.com/en-us/samples/microsoft/openclaw-dev/openclaw-dev/)

## 涨星最快项目

1. **bytedance/deer-flow** — 字节跳动开源深度研究框架，编排子 Agent 完成长周期研究，对标 Gemini Deep Research，总星超 2.2 万，智源大会后关注度上升。[GitHub](https://github.com/bytedance/deer-flow)

2. **affaan-m/ECC** — Agent 性能优化系统（技能/本能/记忆/安全），总星超 21 万，Fable 5 下线后开发者涌向开源 Agent 方案。[GitHub](https://github.com/affaan-m/ECC)

3. **NousResearch/hermes-agent** — 通用 Agent 框架，多模型后端+内置技能系统，与 OpenClaw 深度集成，总星超 18.6 万。[GitHub](https://github.com/NousResearch/hermes-agent)

4. **calesthio/OpenMontage** — 世界首个开源 Agentic 视频生产系统，12 条流水线、52 个工具、400+ Agent Skills，把编程助手改造成视频导演。[GitHub](https://github.com/calesthio/OpenMontage)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **智源"悟界"体系** — 全栈技术体系亮相，AI 沿"大语言模型→多模态大模型→世界模型"路径加速演进；"听会伙伴"展示多智能体在学术场景落地。（[智源社区](https://hub.baai.ac.cn/view/55492)）

- **DeepSeek V4 主流化** — 万亿参数 MoE、37B 激活、1M+ 上下文，V4 Flash $0.14/$0.28，首个国产芯片优化前沿模型，"国产硅跑生产负载"成新叙事。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **国务院加速 AI 综合立法** — 工作计划首次使用"加快推进综合性立法"表述，覆盖数据保护、算力准入、AI 内容知识产权等。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

### 国外

- **OpenClaw openclaw-dev** — 一键部署云端沙箱 Agent，浏览器即可对话，后端默认 Azure OpenAI，Teams 可选附加。（[Microsoft Learn](https://learn.microsoft.com/en-us/samples/microsoft/openclaw-dev/openclaw-dev/)）

## 新工具 & CLI

- **openclaw-dev** — OpenClaw 云端沙箱部署工具，临时隔离、任意设备可达，Microsoft Teams 可选附加。（[Microsoft Learn](https://learn.microsoft.com/en-us/samples/microsoft/openclaw-dev/openclaw-dev/)）

- **deer-flow** — 字节开源深度研究框架，编排子 Agent 完成长周期研究，完全开源对标 Gemini Deep Research。（[GitHub](https://github.com/bytedance/deer-flow)）

- **OpenMontage** — 开源 Agentic 视频生产系统，12 流水线+52 工具+400+ Skills，把 AI 编程助手改造成视频导演。（[GitHub](https://github.com/calesthio/OpenMontage)）

## 编程方式

- **世界模型成 AI 演进下一站** — 智源大会"悟界"体系把 AI 演进路径明确为"大语言模型→多模态大模型→世界模型"，开发者开始从"文本交互"转向"物理世界闭环执行"的范式准备。（[智源社区](https://hub.baai.ac.cn/view/55492)）

- **深度研究 Agent 成新品类** — deer-flow、Gemini Deep Research 等编排子 Agent 完成长周期研究的框架兴起，"研究"本身被 Agent 化：从检索-阅读-总结的人工作流，变为子 Agent 分工编排的自动化流程。（[CSDN](https://blog.csdn.net/yanceyxin/article/details/162208780)）

## 总结

今日 AI 行业的关键词是"世界模型"与"国产主流化"——北京智源大会以"悟界"体系与"听会伙伴"收尾，把"世界模型"确立为 AI 演进下一站；China AI Weekly 则总结 DeepSeek V4 全面主流化、ERNIE 5.1 效率突围、国产芯片认证与 AI 立法加速，"国产硅跑生产负载"从叙事变成事实，自主可控与智能体落地双线并进。
