---
title: "AI 开发日报 · 2026年08月28日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-28
tags: ["AI日报"]
---

## 今日要闻

### 1. 英伟达 129 亿美元收购 Hugging Face：芯片巨头抢"分发权"

8 月 26 日晚外媒率先爆出 Hugging Face"正在探索出售"，仅两天后（8 月 27 日）多家媒体即报道英伟达与 Hugging Face 已就 129 亿美元收购达成协议。Hugging Face 成立于 2016 年，是开发者分享 AI 模型与数据集的核心平台，此次收购被解读为英伟达从"卖算力"向掌控 AI 生态分发入口的关键一步。截至发稿，双方尚未发布官方确认公告。

来源：[36氪](https://36kr.com/p/3957325982842242) · [朝鲜日报（英文）](https://www.chosun.com/english/industry-en/2026/08/27/WFMKQ4LC5JESBIXHIWHJQMVGZQ/?outputType=native)

### 2. NVIDIA 发布 Mesh：把闲置 GPU 连成开放算力网络

8 月 28 日，NVIDIA 官方宣布推出 Mesh，一个面向 AI 的开放算力网络。Mesh 将各地闲置的 NVIDIA GPU 接入开放网络，使数千台机器能够协同运行 AI 工作负载，算力贡献者可获得收益。在算力供应整体偏紧的背景下，这一"算力共享"模式备受关注。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 3. Google 发布 Gemini Omni 1.1 Flash，登顶视频生成竞技场

8 月 28 日，Google 发布多模态模型 Gemini Omni 1.1 Flash，专为视频生成与编辑设计，为开发者提供扩展场景、指定镜头起止帧、添加视频等新能力。据 Arena 官方公告，该模型在文本生成视频竞技场中排名第一（得分 1495），图像生成视频排名第二，由 CEO Sundar Pichai 亲自转发。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 4. MiniMax 发布 H3-Max 视频生成模型，速度质量双突破

8 月 28 日，MiniMax 发布 H3-Max，在自研及第三方评测中于整体质量、提示理解力、美学效果均排名第一，5 秒 720p 视频生成耗时低于 3 秒。该模型基于 MiniMax H3 由 fal 团队后训练，并协同设计了推理栈以保证生成速度。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### 5. Anthropic 启动模型硬件标准（MHS）研究预览

8 月 28 日，Anthropic 宣布启动模型硬件标准（Model Hardware Standard, MHS）研究预览的第一阶段。MHS 旨在让 AI 智能体（Agent）在科学研究和先进制造领域安全地操作物理设备，标志着大模型能力从"数字世界"向"物理世界"延伸。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

## 涨星最快项目

### 1. mattpocock/skills — 真实工程师的 Agent 技能目录（周增 +14,917）

面向真实工程师的 Agent 技能集合，直接从 `.agents` 目录分发，本周新增 14,917 星、总星标 233.9k，稳居本周 GitHub 涨星榜首，"可分享的 Agent 技能"正成为新的分发层。

GitHub 链接：[mattpocock/skills](https://github.com/mattpocock/skills) · [周趋势榜](https://github.com/YunhaoDou/github-weekly-trending)

### 2. cathrynlavery/diagram-design — 让 Agent 生成可直接用的技术图（周增 +11,325）

为 Claude Code 打造的 29 种图表设计技能，自包含 HTML + SVG，不依赖 Mermaid。本周新增 11,325 星、总星标 24,663，位列本周飙升榜 Top 1。

GitHub 链接：[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) · [周榜数据](https://news.qiniu.com/archives/1787307269122)

### 3. obra/superpowers — Agentic 技能框架与开发方法论（周增 +4,260）

一个 Agentic 技能框架与软件开发方法论，本周新增 4,260 星、总星标 276.7k，与 skills 一起验证了"技能即包"的生态趋势。

GitHub 链接：[obra/superpowers](https://github.com/obra/superpowers)

### 4. anywhere-labs/deepseek-harness-desktop — DSH 生态桌面端（周增 +3,960）

为 DeepSeek Harness（DSH）生态打造的现代化桌面端体验，本周新增 3,960 星、总计 6,049 星，是 DeepSeek 开源 Agent 框架生态快速扩大的直接体现。

GitHub 链接：[anywhere-labs/deepseek-harness-desktop](https://github.com/KhangYen/rising-stars-weekly)

### 5. volcengine/OpenViking — Agent 上下文数据库（周增 +2,444）

字节跳动开源的 Agent 上下文数据库，统一 Agent 记忆、知识 RAG 与技能管理，本周新增 2,444 星、总星标 31,330，体现"Agent 上下文即新数据库"的趋势。

GitHub 链接：[volcengine/OpenViking](https://github.com/volcengine/OpenViking) · [周榜数据](https://news.qiniu.com/archives/1787307269122)

## 大模型进展

### 国内

**智谱 GLM-5.3-Flash（Ox Alpha）首次大规模跑在国产算力上**：此前以代号 Ox Alpha 在海外平台匿名测试、5 天累计流量突破 50T 的神秘模型，8 月 26 日晚揭晓为智谱 GLM-5.3-Flash。其全部线上流量由约 10 万张国产芯片承载（行业信息显示来自华为昇腾、海光、摩尔线程等），通过自研推理引擎与高带宽互联，硬件效率和单 Token 成本已达到与主流英伟达 GPU 相当的水平；指数测评分数与 Claude Opus 4.8 持平，定价却仅为后者的 1/40。这是国产算力芯片首次大规模承接前沿模型推理，具标志性意义。

来源：[新浪财经](http://m.toutiao.com/group/7678675870043505192/) · [扬子晚报](http://m.toutiao.com/group/7678653639623180863/) · [智谱研究院](https://www.zhipuai.cn/zh/research/163) · [凤凰网](https://i.ifeng.com/c/8vuzesHSV4G)

**DeepSeek V3.1 更新至 Terminus 版本**：8 月 27 日晚，深度求索宣布 DeepSeek V3.1 更新至 V3.1 Terminus 版本，官方 App、网页端、小程序与 API 同步更新，在保持原有能力的基础上针对用户需求进行升级。此前 DeepSeek 已上线 V4-Pro 正式版及 Vision 多模态模型。

来源：[中华网软件（快科技）](https://soft.china.com/article/2073748.html) · [DeepSeek 官网](https://www.deepseek.com/com/)

**月之暗面 Kimi K2.5 月底退役，K3 全面接棒**：8 月 24 日月之暗面宣布第一代万亿参数多模态模型 Kimi K2.5 于本月底结束服役，K2.5 API 将于 8 月 31 日下线（同期下线更早的 moonshot-v1 系列），2.8 万亿参数的 Kimi K3 已全面接棒。

来源：[未来图灵](http://m.toutiao.com/group/7677477765926584871/) · [C114](https://m.c114.com.cn/w5339-1316225.html)

**4 万亿算力网开建，日均词元调用量突破 500 万亿**：央视财经 8 月 28 日报道，"十五五"时期 4 万亿元算力网投资启幕，"词元工厂"与国产算力生态加速落地；截至今年 6 月，我国日均词元调用量已突破 500 万亿，较 2024 年初增长超千倍。

来源：[央视云视](https://ysxw.cctv.cn/article.html?channelId=1215&item_id=5565698741024857480&toc_style_id=feeds_default) · [界面新闻](https://www.jiemian.com/article/15010404.html)

**Sam Altman 称最新大模型突破自动化科研关键基准**：8 月 28 日快讯，Sam Altman 表示最新大模型已突破自动化科研关键基准，预计年底实现 AGI，引发业界广泛讨论。

来源：[网易科技 openai 标签](https://tech.163.com/keywords/0/6/006f00700065006e00610069/1.html)

### 国外

**Google**：8 月 28 日发布 Gemini Omni 1.1 Flash，多模态视频生成与编辑模型，登顶文本生成视频竞技场（1495 分）。此前 8 月 13 日推出的 Gemini 3.7 Flash 已被称"迄今最强编程和 Agent 工作负载模型"。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**OpenAI**：Ultrafast 模式预览中，GPT-5.6 Sol 速度最高提升至 14 倍、每秒 750 Tokens（由 Cerebras 驱动）。8 月 28 日联合 Anthropic、AWS、Google、Microsoft、Oracle 等 100 多家组织签署公开信，呼吁全球加强网络防御以应对 AI 驱动的网络攻击。

来源：[Scott Harvanek](https://www.scottharvanek.com/google-gemini-3-7-flash-openai-ultrafast-cerebras-anthropic-claude-text-watermark/) · [InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**Anthropic**：8 月 28 日启动模型硬件标准（MHS）研究预览第一阶段，探索 AI 智能体安全操作物理设备，向"具身智能体"方向布局。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**NVIDIA**：129 亿美元收购 Hugging Face（待官方确认），并发布 Mesh 开放算力网络聚合闲置 GPU，算力供给侧动作密集。

来源：[36氪](https://36kr.com/p/3957325982842242) · [InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

## 新工具 & CLI

### OpenAI Codex 开源 Agent 框架

8 月 19 日，OpenAI 发布 Codex 开源 Agent 框架，将 Agent 能力作为基础设施集成，可无缝嵌入第三方产品，提供三级开发者集成选项。

来源：[C114](https://www.c114pro.com/ainews/187738.html)

### OpenAI openai-cli — 终端 AI 工具

8 月 20 日发布，把 AI 能力直接带入终端，适合在脚本与终端窗口间切换的开发者。

来源：[AI-Damn](https://ai-damn.com/openai-s-new-cli-tool-brings-ai-power-to-your-terminal-1778213693127)

### Meta Muse Code — 终端编程代理（Beta）

8 月 5 日 Meta 推出，Meta Superintelligence Labs 首个编程产品，支持持久化后台子代理与精确回放事件日志，内置 Muse Spark 1.2 模型。

来源：[ExplainX](https://explainx.ai/blog/meta-muse-code-coding-agent-muse-spark-1-2-launch-august-2026) · [Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### DeepSeek Harness (dsh) — 开源 CLI 编程代理

DeepSeek 开源的 MIT 协议 CLI 编程代理，模型适配器、工具、会话日志与 Agent 循环全部可插拔，3 天内获 119.8k 星，生态已扩展出桌面端 deepseek-harness-desktop。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### llmfit — 一条命令筛选适配模型

Rust 编写（⭐32,830，周增 +1,316），用一条命令在数百个模型与提供商中找出哪些能在你的提示词与成本约束下工作。

来源：[GitHub 周增长盘点](https://blog.csdn.net/weixin_72370568/article/details/163893365)

### Microsoft Agent Framework 进入生产运行时

微软将 Agent Framework 从 SDK 阶段推进至受支持的生产运行时，Agent Harness 与 Hosted Agents 已稳定发布，支持多代理编排。

来源：[InfoQ](https://www.infoq.cn/article/aDEJegvNSKwvue2JZ0yI)

## 编程方式

### Spec → Plan → Execute → Verify 四阶段工作流成主流

开发者社区总结出"先写一页 Spec（问题、约束、成功标准、已知陷阱），再让推理模型生成分步实施计划，最后以 Spec 为准绳执行与验证"的工作流，AI 编程从"随手写代码"转向"规格驱动的工程化"。

来源：[Blink](https://blink.new/blog/ai-coding-workflow)

### 编码代理正在改变开发者的 PR 交流方式

基于 GitHub 47,000 份 PR 的分析发现，常使用编码代理的开发者 PR 中出现以 "load-bearing"、"quietly"、"latent"、"genuine" 等词为主的独特"口音"词汇集群，AI 辅助编码正重塑开发者沟通风格。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### a16z 复盘 Cursor 四年：从 VS Code 分支到前沿 AI 编程工具

a16z 投资人发文回顾：2023 年四名 MIT 辍学生分叉微软 VS Code，尽管微软手握 VS Code、GitHub 与 OpenAI 权重等分发优势，Cursor 仍凭借产品专注与清晰信念成长为 AI 编程前沿工具。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

### Agent 技能成为新的"包管理器"层

本周涨星榜前两名 mattpocock/skills（+14,917）与 obra/superpowers（+4,260）都是 Agent 技能分发项目，开发者正在把"技能"定义成可安装、可分享、可组合的包，AI 编程 Agent 的生态分发层正在形成。

来源：[GitHub Weekly Trending](https://github.com/YunhaoDou/github-weekly-trending)

## 总结

今日 AI 趋势的核心信号是"算力与分发权的争夺"：英伟达 129 亿美元收购 Hugging Face 并发布 Mesh 算力网络，智谱 GLM-5.3-Flash 首次大规模跑在国产芯片上、4 万亿算力网开建——算力供给侧格局剧烈重构；同时 Google Gemini Omni 1.1 Flash 与 MiniMax H3-Max 把竞争焦点推向视频生成，Agent 技能生态（skills、superpowers）持续爆发，AI 开发正从"模型军备竞赛"走向"生态与工程效率之争"。
