---
title: "AI 开发日报 · 2026年09月18日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-18
tags: ["AI日报"]
---

## 今日要闻

### 1. Claude Code 升级 Projects：一个对话拆出并行线程

9 月 17 日，Anthropic 旗下编程助手 Claude Code 正式升级 Projects 功能，AI 辅助开发由单次对话转为多线程自动化工作流。其核心是「协调者 + 工作线程」双层架构：用户在项目主聊天界面发出高层指令，Claude 扮演「参谋长」角色将任务路由至独立的工作线程，每条线程在各自的代码分支和仓库副本上并行执行；官方称关闭笔记本电脑后线程仍会在云端继续运行。

来源：[华尔街见闻](http://m.toutiao.com/group/7686615550524523071/) · [金融界](http://m.toutiao.com/group/7686634677754397193/)

### 2. 华为昇腾 960 芯片将提前至 2027 年 Q1 发布

在华为全联接大会 2026 上，华为轮值董事长汪涛表示昇腾 960 芯片已提前就绪、实现性能翻番：昇腾 960DT 将于 2027 年 Q1 发布，比原计划提前三个季度；昇腾 960PR 将于 2027 年 Q3 发布，同样大幅提前。

来源：[科创板日报](http://m.toutiao.com/group/7686658834877743662/)

### 3. 黄仁勋：英伟达明年芯片销量将翻倍

9 月 17 日在英国 AI 峰会上，英伟达 CEO 黄仁勋表示，随着 AI 向医疗、交通、娱乐等行业扩散，英伟达明年的芯片销量将达到今年的两倍；他同时强调 AI 是支撑其他产品和技术的底层技术，监管应针对具体 AI 产品及应用场景，而非照搬社交媒体模式。

来源：[科创板日报](http://m.toutiao.com/group/7686658834877743662/) · [每日经济新闻](http://m.toutiao.com/group/7686655336744223283/)

### 4. Claude Fable 5.1 登顶 BenchAlign 大模型榜单

9 月榜单（数据截至 9 月 17 日核实）显示，Anthropic 的 Claude Fable 5.1 以 84.77 分位居 BenchAlign 排行榜第一；9 月当月已追踪到 23 个模型发布，Google 在厂商排名中上一位。

来源：[BenchLM](https://benchlm.ai/)

### 5. 软通动力联合华为云发布「软通天璇 AgentOS」1.2 商用版本

9 月 17 日在华为全联接大会 2026 上，软通动力联合华为云发布「软通天璇 AgentOS」1.2 商用版本，标志着该企业级智能体操作系统从技术验证走向规模化商用。

来源：[界面快讯](http://m.toutiao.com/group/7686520562948047366/)

## 涨星最快项目

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — DeepSeek 开源的插件化 Agent 线束（"Everything is a Plugin"），基于 Cordis、MIT 许可，近一个月新增约 19.1 万星（其中单周超过 6.2 万），累计超 14,000 次提交。[来源](https://www.briefia.fr/article/aout-2026-sur-github-agents-skills-et-outils-documentaires-dominent)
- [obra/superpowers](https://github.com/obra/superpowers) — Agentic skills 框架，强调以「可复用能力」取代逐行写代码的软件构建方式，约 26.9 万星，是长期霸榜的 AI Agent 类项目。[来源](https://dev.to/sarantoon/30-github-repos-ai-aela-agentic-ai-thiikamlangepn-trend-singhaakhm-2026-18h2)
- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) — Prime Intellect 开源的门面向长时任务的编码与研究 Agent，构建在递归语言模型与持久化 harness 之上，单周涨星约 +8,488、累计约 1.65 万星。[来源](https://00011000.com/en/news/github-ai-weekly-2026-w33)

## 大模型进展

### 国内

- DeepSeek V4.1 Flash 上线阿里千问 AI 平台，API 与 Token 套餐同时开放；开发者可通过标准 API 或 Qoder、Qwen APP、Codex 等工具调用，用于代码、文档、视觉理解与智能体任务，定位为轻量旗舰模型。[来源](https://www.aibase.com/search/AI%20tools&type=0)
- 阿里千问 Qwen3.8-27B 登顶 Hugging Face「最受欢迎」开源模型榜，超越 FLUX.1、DeepSeek-R1、Kimi-K3、Meta-Llama-3 等，成为该平台历史上最受欢迎的开源模型。[来源](https://tidenews.com.cn/news.html?id=3560425)
- 智谱 GLM-5.3（最新旗舰，强化编程与长程任务）与 DeepSeek-V4-Pro（强化智能体能力）正式版已接入千问 AI 平台，对应 API 服务同步开放。[来源](https://finance.sina.com.cn/roll/2026-08-21/doc-ininzyex1559868.shtml.md)

### 国外

- Anthropic：9 月 1 日发布 Claude Fable 5.1 与 Claude Mythos 5.1，官方称其面向编码与知识工作的最强模型；Claude Fable 5.1 已登顶 BenchAlign 榜单（见今日要闻）。[来源](https://www.anthropic.com/news)
- Google：Gemini 3.8 Flash 及受限版 Gemini 3.8 Flash Cyber 于 9 月 2 日发布，随后推出主打实时语音对话的 Gemini 3.8 Live / Extended Thinking；DeepMind 同步发布 AlphaGenome Atlas（人类基因组每个可能的 DNA 变化预测图）与 WeatherNext 3 天气模型等科研成果。[来源](https://deepmind.google/)
- Meta：9 月 2 日发布 Muse Spark 1.3，与 Claude、Gemini 赶在 72 小时内密集上新，主打各异的成本与使用场景。[来源](https://www.siliconsnark.com/the-definitive-guide-to-ai-gpts-and-friends/)
- OpenAI：9 月 3 日推出 GPT-6 Astra，官方称其为「最具智能与对齐性」的模型，支持 1.05M context、128K 输出，批发价 10 美元/百万 token 输入、50 美元/百万 token 输出。[来源](https://futuretechnologyhq.com/article/ai-model-releases-september-2026/)

## 新工具 & CLI

- [Cline Desktop](https://cline.bot/blog/archive)（9 月 14 日）— Cline 推出的开源桌面应用，面向开源权重模型：可并行运行多个 AI Agent、自动化重复任务、支持 300+ 模型并用插件/MCP/Skills 扩展。
- [Gemini CLI](https://developers.google.com/gemini-code-assist/docs/gemini-cli) — 谷歌开源的终端 AI Agent，基于 ReAct 循环接入内置工具与本地/远程 MCP 服务器，可用于修 Bug、建文件、网页搜索等。
- [Salesforce in Claude](https://support.claude.com/en/articles/12138966-release-notes)（9 月 15 日 beta）— 把销售人员的账户、机会与 pipeline 接入 Claude 的插件，内置 37 个预置销售技能。
- [阿里云百炼 BaiLian CLI](https://ai-damn.com/alibaba-cloud-s-bailian-goes-open-source-one-command-to-rule-ai-agents-1780268746183) — 阿里云将百炼 CLI 完全开源，以「一条命令」统一管理 AI Agent 开发。
- [Cline CLI](https://cline.bot/) — Cline 新增的命令行运行方式，可在脚本、cron 与 CI 流水线中运行周期检查与自定义工作流。

## 编程方式

Claude Code Projects 将 AI 开发从「单次对话」推进到「多线程并行工作流」：主线程充当协调者下发高层目标，各工作线程在独立分支上并行推进，且任务在后台云端持续运行（详见今日要闻）。这与此前 Cursor Projects、OpenAI Agents API 所代表的「代码智能体编队（fleets of coding agents）」方向一致，多 Agent 并行编排正成为主流范式。

框架侧，Microsoft Agent Framework 1.0（AutoGen 与 Semantic Kernel 的继任者）在 BUILD 2026 公布 Agent Harness、托管 Agents 与 CodeAct 等新能力；AWS 的 Amazon Bedrock AgentCore 托管代理框架也已全面推出，团队可在数分钟内将 Agent 构想落地为可用代理。[来源](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/) · [AWS](https://aws.amazon.com/cn/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-harness-generally-available/)

## 总结

今日趋势一句话：算力与工具同步提速——华为昇腾 960 提前亮相、英伟达放言芯片销量翻倍，Claude Code 全面进入「多线程并行工作流」，Qwen3.8-27B 稳居开源模型榜首，「多 Agent 并行编排 + 开源登顶 + 算力军备竞赛」成为当前主线。