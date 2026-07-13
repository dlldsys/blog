---
title: "AI 开发日报 · 2026年06月11日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-11
tags: ["AI日报"]
---

## 今日要闻

### 1. 百度 ERNIE 5.1：用 6% 算力登顶国产搜索第一，改写效率法则

百度 ERNIE 5.1 的表现本周持续巩固其作为 2026 年 Q2 最重要发布之一的地位。核心数据：ERNIE 5.1 在 LMArena Search Arena 排名全球第四（得分 1223），是搜索性能全球前十中唯一的中国模型。真正的故事在于它如何被构建——ERNIE 5.1 将总参数压缩至 ERNIE 5.0（2.4 万亿参数）的约三分之一，激活参数减半，仅使用可比前沿模型约 6% 的预训练算力。它从 ERNIE 5.0 的弹性子模型矩阵中被提取为最优子网络，本质上是"训练一次大模型，再找出最佳小切片"。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/) · [AIBase](https://news.aibase.com/news/27882)

### 2. "参数效率"成为新竞争武器，Scaling Laws 时代让位效率时代

ERNIE 5.1 的策略性转向值得密切关注。当行业常态是"越大越好"时，百度押注参数效率与推理成本将成为企业采用的决胜因素。如果 ERNIE 5.1 的基准表现在真实部署中成立，它将验证一个论点：Scaling Laws 时代正让位于效率时代。ERNIE 5.1 通过 ERNIE Bot 与百度智能云千帆平台提供。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 3. 中国九款国产 AI 芯片获国家采购认证，政府项目须拆除外国硅

中国正式批准九款国产 AI 处理器用于所有国家出资的智算中心项目，认证厂商包括华为（昇腾 310、910）、阿里平头哥（M530、M890）、壁仞、海光、天数智芯、摩尔线程等，均由中芯国际 7nm 等效节点制造。进度低于 30% 的项目须拆除已安装的外国芯片——这是对英伟达硬件在政府项目中的即时强制替代，涉及每年数百亿美元。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

## 涨星最快项目

1. **chopratejas/headroom** — LLM 输入压缩 60-95%，与"效率时代"主题高度契合，是降低推理成本的工程利器。[GitHub](https://github.com/chopratejas/headroom)

2. **TencentCloud/TencentDB-Agent-Memory** — 4 层渐进式管线、零外部 API 的全本地 Agent 记忆，月增超 5000 星，呼应效率优先思路。[GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory)

3. **LMCache** — LLM KV 缓存层，月增超 8700 星，缓存命中直接降本，效率主题下的热门基建。[GitHub](https://github.com/LMCache)

4. **dmtrKovalenko/fff** — AI Agent 文件搜索，Rust 编写，用更少算力完成更快检索。[GitHub](https://github.com/dmtrKovalenko/fff)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **百度 ERNIE 5.1** — 总参数压至 ERNIE 5.0 的 1/3、激活减半、预训练算力仅 6%，LMArena Search 全球第四、国产第一，验证"效率优先"路线。（[AIBase](https://news.aibase.com/news/27882)）

- **九款国产芯片认证** — 华为、阿里平头哥、壁仞、海光等获国家采购认证，政府项目须拆除外国硅，中芯国际 7nm 成关键瓶颈。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

- **中国 AI 芯片市场** — 预计从 2024 年 1430 亿元（200 亿美元）增长至 2029 年 1.34 万亿元（1960 亿美元），年复合增长率 54%，结构性驱动来自出口管制。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

### 国外

- **效率叙事全球扩散** — ERNIE 5.1 的"训练一次、提取最优子网络"思路，与 Gemma 4 的轻量高效、headroom 的输入压缩形成全球性"效率优先"共识，挑战"越大越好"的 Scaling Laws。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

## 新工具 & CLI

- **ERNIE 5.1（千帆平台）** — 通过 ERNIE Bot 与百度智能云千帆平台提供，6% 算力达前沿搜索性能。（[AIBase](https://news.aibase.com/news/27882)）

- **TencentDB-Agent-Memory** — 4 层渐进式管线、零外部 API 的全本地 Agent 记忆，效率优先的全本地部署方案。（[GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory)）

- **fff** — Rust 编写的 AI Agent 文件搜索，以更少算力完成更快检索，契合效率主题。（[GitHub](https://github.com/dmtrKovalenko/fff)）

## 编程方式

- **"弹性训练"改变模型生产方式** — ERNIE 5.1 的"多维弹性预训练"从一次训练中生成多个模型规模，找到最优子网络；这意味着开发者未来可能不再为每个规模单独训练，而是从弹性矩阵中按需提取。（[AIBase](https://news.aibase.com/news/27882)）

- **推理成本成为企业采用首要考量** — 当 ERNIE 5.1 用 6% 算力达前沿表现、DeepSeek V4 Flash 近乎免费，企业选型标准从"模型多强"转向"每美元能做多少事"；headroom、LMCache 等降本工具成为工程标配。（[Big Hat Group](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)）

## 总结

今日 AI 行业的关键词是"效率优先"与"国产替代"——百度 ERNIE 5.1 用 6% 算力登顶国产搜索第一，验证 Scaling Laws 时代正让位于效率时代；九款国产芯片获国家采购认证、政府项目须拆除外国硅，把"国产替代"从战略口号变成即时强制执行，而 54% 年复合增长的国产芯片市场，预示效率与自主将成为未来五年的双主轴。
