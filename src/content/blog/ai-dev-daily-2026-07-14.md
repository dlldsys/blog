---
title: "AI 开发日报 · 2026年07月14日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-14
tags: ["AI日报"]
---

## 今日要闻

### 1. 阶跃星辰发布全球首款 AI 智能体手机，落地"星枢 OS"Agent 操作系统

7 月 13 日晚 19:00，阶跃星辰召开"阶跃终端品牌暨新一代智能体战略发布会"，正式发布自有终端品牌、新一代智能体操作系统"星枢 OS"以及全球首款 AI 智能体手机。这是国内大模型头部企业首次完整定义"Agent OS"概念并落地消费级硬件——手机从"App 的容器"变为"Agent 的执行终端"。同期，努比亚联合字节豆包团队打造的全球首款量产 AI 智能体手机将于 7 月 17 日 WAIC 大会首秀，首批量产规模达 50 万台。

来源：[头条](http://m.toutiao.com/group/7661819446646637083/) · [CSDN](https://blog.csdn.net/haohaizi_liu/article/details/162838788)

### 2. 美团开源 LongCat-2.0：1.6 万亿参数，全程 5 万卡国产算力训练

美团技术团队正式发布并开源 LongCat-2.0，总参数量 1.6 万亿，动态激活范围 33B-56B（平均 48B），是行业首个全程在 5 万卡国产算力集群上完成训练与推理全生命周期的万亿参数模型。模型原生支持 100 万 Token 上下文窗口，架构专门优化 Agentic Coding 任务。同期开源 VitaBench 2.0 长程动态 Agent 评测基准，以及 General 365 推理基准——在 26 个主流模型测评中，最强的 Gemini 3 Pro 也仅获 62.8% 准确率，多数模型未达 60% 及格线。

来源：[aitoolly](https://aitoolly.com/ai-news/2026-07-13) · [美团技术博客](https://tech.meituan.com/2026/06/30/LongCat2.0.html) · [VitaBench 2.0](https://tech.meituan.com/2026/06/29/LongCat-VitaBench-2.0.html)

### 3. Anthropic 发布 Claude Opus 4.8，Fable 5 访问再延 7 天

Anthropic 正式发布升级旗舰模型 Claude Opus 4.8，专为复杂长程软件工程和 Agentic 工作流设计，具备更强的自主性与精度。同时宣布 Claude Fable 5 在所有付费套餐的订阅访问再延长 7 天至 7 月 19 日，Claude Code 每周限额同步提升 50%，用户最多可将一半周配额用于 Fable 5。

来源：[WAM](https://www.wam.ae/en/article/1790utj-anthropic-launches-new-claude-48-opus-artificial) · [jls42.org](https://jls42.org/en/news/ia-actualites-12-jul-2026)

### 4. GPT-5.6 全系登陆 Amazon Bedrock，Vercel 指数显示开源模型生产占比逼近三成

OpenAI 的 GPT-5.6 家族（Sol/Terra/Luna）已正式在 Amazon Bedrock 上可用。旗舰版 Sol 在 Artificial Analysis Coding Agent Index 拿下 80 分（领先第二名 2.8 分），输出 Token 不到对手一半。与此同时，Vercel AI 指数显示开源模型在生产端的调用占比正逼近 30%，模型多供应商策略成为开发者新常态。

来源：[头条](http://m.toutiao.com/group/7662163439904653839/)

### 5. AI 智能体监管新规明日（7 月 15 日）生效，主流平台下线自建智能体

全国统一的 AI 拟人陪伴、虚拟智能体监管新规将于 7 月 15 日正式生效，全面规范 AI 情感对话、虚拟恋人、自定义智能体等功能。配合新规落地，豆包、通义千问等主流大模型平台已陆续关停用户自主创建智能体功能；用户可在过渡期查看历史对话数据，10 月 15 日后未备份数据将统一清理，平台同步上线官方标准化合规智能体模板。

来源：[头条](http://m.toutiao.com/group/7660713865767862824/)

## 涨星最快项目

### 1. topoteretes/cognee — 自托管知识图谱长期记忆

cognee 在 7 月 12 日发布 3.0 大版本并冲上 GitHub Trending。它为 AI Agent 提供自托管长期记忆，将原始数据集分析实体与关系后构建为结构化知识图谱，Agent 可直接在图谱上查询以保留完整语境，避免了扁平向量搜索易丢上下文的问题。

GitHub：[topoteretes/cognee](https://github.com/topoteretes/cognee) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

### 2. VoltAgent/awesome-agent-skills — 1000+ 模块化 Agent 技能库

一个开源仓库收录了 1000+ 标准化模块化技能，专为 Claude Code、Cursor、Windsurf、Gemini CLI 等 AI 编程 Agent 设计，技能来自 Anthropic、Stripe、Google Labs 工程师实战经验，覆盖 Define/Plan/Build/Verify/Ship 全流程，社区反馈可缩短 70% 的 Agent 工作流配置时间。

GitHub：[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

### 3. stablyai/orca — 并行 Coding Agent 舰队

orca 提供并行运行 Coding Agent 舰队的环境，可将大型编程任务（如完整网站前后端）拆分为独立子任务，由多个 sub-agent 并行执行，大幅缩短开发周期。支持桌面与移动端，通过 npm 安装 CLI 即可启动。

GitHub：[stablyai/orca](https://github.com/stablyai/orca) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

### 4. davila7/claude-code-templates — Claude Code 配置与监控 CLI

7 月 13 日登上 GitHub Trending 的专用 CLI 工具，通过 npm 包为 Claude Code 提供结构化配置与监控环境，帮助开发者更高效地管理本地 AI 编程环境，代表了围绕 AI 编程助手生长的"元工具"生态。

GitHub：[davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) · 来源：[aitoolly](https://aitoolly.com/ai-news/2026-07-13)

### 5. unclecode/crawl4ai — LLM/Agent 专用 Web 爬虫

专为 RAG 和实时知识供给设计的 Web 爬虫，可将任意动态网页（含大量 JavaScript）转为超干净的 Markdown/JSON，剔除广告与冗余代码，让大模型读取时不浪费 Token。基于 Playwright，支持登录态抓取，是目前最受 AI 开发者欢迎的爬虫工具之一。

GitHub：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

## 大模型进展

### 国内

**阶跃星辰**：发布全球首款 AI 智能体手机及"星枢 OS"Agent 操作系统，首次将"Agent OS"概念完整落地消费级硬件，手机定位从 App 容器转向 Agent 执行终端。

来源：[头条](http://m.toutiao.com/group/7661819446646637083/)

**美团 LongCat**：开源 LongCat-2.0（1.6 万亿参数、5 万卡国产算力全程训练）、VitaBench 2.0 长程动态 Agent 评测基准、General 365 推理基准（揭示主流模型推理能力差距）、LongCat-Video-Avatar 1.5 商用级数字人模型，以及 AIGC 海报生成"生成-编辑-评估"闭环系统。

来源：[美团技术博客](https://tech.meituan.com/2026/06/30/LongCat2.0.html) · [General 365](https://tech.meituan.com/2026/05/15/LongCat-General-365.html)

**DeepSeek**：据外媒报道正自研 AI 推理芯片以降低推理成本；DeepSeek V4 正式版将于 7 月中旬上线并首次引入"峰谷定价"机制；DeepSeek-V4-Flash 连续七周蝉联 OpenRouter 单模型调用量榜首，DeepSeek 已成为 OpenRouter 最大 Token 供应商。

来源：[头条](http://m.toutiao.com/group/7661921566388683310/) · [CSDN](https://blog.csdn.net/yuntongliangda/article/details/162807778)

**通义千问 / 豆包**：配合 7 月 15 日施行的 AI 拟人化新规，两大平台已下线用户自建智能体功能，并上线官方标准化合规智能体模板。通义千问此前已发布实时语音识别模型 Fun-ASR-Realtime。

来源：[头条](http://m.toutiao.com/group/7660713865767862824/)

**华为云**：联合十余家产业伙伴发布 OpenIndustry 工业 AI 开放社区（国内首个以工业本体知识图谱为核心的开放社区）；此前已跻身 Gartner 2026 云 AI 基础设施魔力象限领导者象限。

来源：[CSDN](https://blog.csdn.net/yuntongliangda/article/details/162807778)

### 国外

**OpenAI**：GPT-5.6 全系登陆 Amazon Bedrock；7 月 13 日内部机密文件曝光，显示即将发布的 GPT-5 底层架构将重大重构，首次原生集成量子计算模拟模块，旨在突破传统 Transformer 在多步复杂推理中的算力瓶颈；同时发布 Codex 插件示例仓库，规范化插件架构。

来源：[头条](http://m.toutiao.com/group/7662163439904653839/) · [头条](http://m.toutiao.com/group/7662151827177144882/) · [GitHub openai/plugins](https://github.com/openai/plugins)

**Anthropic**：发布 Claude Opus 4.8 升级旗舰模型，强化长程软件工程与 Agentic 工作流自主性；Fable 5 访问延长至 7 月 19 日，Claude Code 周限额提升 50%。

来源：[WAM](https://www.wam.ae/en/article/1790utj-anthropic-launches-new-claude-48-opus-artificial) · [jls42.org](https://jls42.org/en/news/ia-actualites-12-jul-2026)

**Agnes AI**：7 月 13 日发布新一代文本模型 Agnes-2.5-Flash，Coding 能力跻身全球第一梯队，同步上线 Agnes Code 桌面端支持本地项目开发，实测 3 分钟定位修复隐藏 Bug，可独立完成复杂网页应用并跨十几个文件联动改造大型项目。

来源：[AIBoss](https://www.aiboss88.com/ja/news/news-1064249713-1783951420781-4)

## 新工具 & CLI

### 1. DesktopCommanderMCP — 赋予 Claude 终端控制与文件系统能力

新发布的 MCP 服务器（wonderwhy-er 开发），为 Claude 提供三大核心能力：全面的终端控制、高效的文件系统搜索、精确的 diff 文件编辑，让 AI 能直接执行终端命令并管理本地文件。

来源：[aitoolly](https://aitoolly.com/ai-news/2026-07-13)

### 2. OpenAI Codex 插件示例仓库 — 标准化插件架构

OpenAI 在 GitHub 发布精选的 Codex 插件示例仓库，每个插件需在 `.codex-plugin/` 目录下包含配置文件，为开发者提供扩展 Codex 能力的标准化框架与模块化集成参考。

GitHub：[openai/plugins](https://github.com/openai/plugins) · 来源：[aitoolly](https://aitoolly.com/ai-news/2026-07-13)

### 3. LangChain deepagents v0.7.0a6 — 文件系统工具增强

LangChain 旗下 deepagents 于 7 月 7 日发布 v0.7.0a6，新增 filesystem delete 工具（可递归删除目录），write_file 支持覆盖写入，不支持删除的后端会自动向模型隐藏该工具。

来源：[LangChain Changelog](https://docs.langchain.com/oss/python/releases/changelog)

### 4. crawl4ai — LLM 专用 Web 爬虫

将动态网页转为干净 Markdown/JSON 的爬虫工具，专为 RAG 与 Agent 实时知识供给优化，基于 Playwright 支持登录态与反爬场景。

GitHub：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

### 5. orca — 并行 Coding Agent 舰队

通过拆分大型任务、调度多个 sub-agent 并行执行来加速软件开发，支持桌面与移动端，npm 全局安装即可使用。

GitHub：[stablyai/orca](https://github.com/stablyai/orca) · 来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

## 编程方式

### 1. Agent OS 落地消费硬件，终端入口从 App 转向 Agent

阶跃星辰"星枢 OS"将 Agent 操作系统概念落地手机硬件，标志着终端交互范式从"App 容器"向"Agent 执行终端"迁移。这一趋势与 7 月 15 日生效的智能体监管新规形成对照——Agent 正式进入消费级规模化阶段，合规框架也同步收紧。

来源：[头条](http://m.toutiao.com/group/7661819446646637083/)

### 2. 并行 Agent 与技能模块化重塑编程工作流

orca 的并行 Coding Agent 舰队与 awesome-agent-skills 的 1000+ 标准化技能库，共同推动 AI 编程从"单 Agent 串行"走向"多 Agent 并行 + 可复用技能"。开发者不再从零编写 prompt 与工作流，而是组合共享技能模块，据社区反馈可缩短 70% 配置时间。

来源：[deaitinh](https://deaitinh.com/diem-tin-github-ai-12-07-2026/)

### 3. 开源模型生产占比逼近三成，多供应商策略成标配

Vercel AI 指数显示开源模型在生产端调用占比逼近 30%。叠加 GPT-5.6 曾被白宫限制 12 天、Fable 5 曾被商务部下架等监管风险，开发者的最佳实践已变为：基于真实流量选模型并保留第二供应商接入能力，多供应商抽象层正成为业务连续性的必需品。

来源：[头条](http://m.toutiao.com/group/7662163439904653839/)

### 4. 国产算力验证万亿模型可行性

美团 LongCat-2.0 在 5 万卡国产算力集群上完成万亿参数模型训练与推理全生命周期，首次系统性验证了国产硬件支撑超大规模模型的能力，General 365 基准则揭示即便最强模型在复杂推理上仍存在显著差距——推理能力仍是下一阶段攻坚焦点。

来源：[美团技术博客](https://tech.meituan.com/2026/06/30/LongCat2.0.html) · [General 365](https://tech.meituan.com/2026/05/15/LongCat-General-365.html)

## 总结

今日 AI 产业呈现"Agent OS 落地消费端 + 国产算力验证万亿模型 + 工具链走向并行模块化"三线并进：阶跃星辰将 Agent OS 装进手机硬件，美团 LongCat-2.0 证明 5 万卡国产算力可训万亿模型，而 cognee、orca、awesome-agent-skills 等项目正让 AI 编程工作流从单线程走向多 Agent 并行与可复用技能组合。
