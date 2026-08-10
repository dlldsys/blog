---
title: "AI 开发日报 · 2026年08月10日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-10
tags: ["AI日报"]
---

## 今日要闻

### 1. FLI 发布 AI 安全指数：全球九大实验室无一超过 C+

8 月 10 日，未来生命研究所（FLI）发布 2026 夏季 AI 安全指数报告，七位独立专家对九家 AI 实验室进行评分。Anthropic 以 C+（2.66 分）领先，OpenAI 为 C（2.28 分），Google DeepMind 为 C（2.01 分），Meta 为 D+，xAI、DeepSeek 和 Mistral 均为 F。报告最关键发现是：排名前四的实验室均已弱化或撤销此前在安全阈值触发时暂停开发的承诺。存在性安全是最薄弱领域——没有一家实验室超过 C-。

来源：[AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-august-10-2026) · [FLI 官方报告](https://futureoflife.org/ai-safety-index-summer-2026/)

### 2. DeepSeek V4 Flash 登顶全球调用量榜首，国产模型包揽前五

OpenRouter 最新周度榜单（7 月 27 日至 8 月 2 日）显示，DeepSeek V4 Flash 以 7.22 万亿 Token 的周调用量排名全球第一。第二至第五名同样全部为国产模型：小米 MiMo V2.5、腾讯 Hy3、DeepSeek V4 Pro 和智谱 GLM 5.2。这是国产大模型调用量连续 14 周超过美国模型。8 月 1 日单日，DeepSeek V4 Flash 处理量达 8 万亿 Token，使用量和新增订阅均增长约 30%。

来源：[36氪](https://36kr.com/p/3926297010256263) · [Global Times](http://www.globaltimes.cn/page/202608/1367454.shtml)

### 3. OpenAI 曝光迄今最大预训练模型 "Doug"

8 月 9 日，AI 评论人 ChrisGPT 爆料称 OpenAI 正在推进代号为 Doug 的新一轮大型预训练模型，规模为迄今最大，且与 GPT-6 并非同一模型。他预计 Doug 最迟 11 月前推出，并称 GPT-6 可能就是因安全问题暂缓发布的 Astra。此前 SemiAnalysis 也曾提及 Doug，称 OpenAI 已解决预训练瓶颈。若属实，这意味着 OpenAI 在两年依赖后训练与推理计算后，重新启动大规模基础模型换代。

来源：[36氪](https://36kr.com/p/3931902519639429) · [TheWinCentral](https://thewincentral.com/openai-doug-ai-model-gpt-6-successor/)

### 4. Sequoia：AI 基础设施投入 1.5 万亿美元，需 3 万亿收入回本

Sequoia 合伙人 David Cahn 指出，2026 年全球 AI 基础设施支出约 1.5 万亿美元，按完整数据中心 TCO 翻倍、50% 毛利率再翻倍计算，需要约 3 万亿美元收入才能覆盖。目前 Anthropic 与 OpenAI 合计 ARR 约 800 亿美元，缺口约 2.9 万亿。Apollo 警告：若四大超大规模厂商 2028 年现金流不及预期，标普 500 集中度将使其成为宏观问题。

来源：[AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-august-10-2026) · [TechCrunch](https://techcrunch.com/2026/07/09/can-ai-answer-the-3-trillion-question/)

### 5. 谷歌重组 DeepMind，哈萨比斯或将离职

据《卫报》等报道，谷歌正逐步削弱 DeepMind 的独立性，创始人德米斯·哈萨比斯可能在数月内彻底离开。所有 Gemini 开发已迁至湾区，谢尔盖·布林将发挥更大作用。分析人士对重组解读分歧：或为押注云与基础设施，或显示谷歌在模型竞赛中落后。

来源：[ReadAITime](https://www.readaitime.com/digests/2026-08-09) · [The Decoder](https://thedecoder.com)

## 涨星最快项目

### 1. github/copilot-sdk — Copilot Agent 多平台 SDK

GitHub 官方出品的 Copilot Agent 多平台 SDK，支持 TypeScript、Python、Go、.NET、Java、Rust 六种语言，MIT 协议开源。2026 年 6 月正式 GA，标志着 Copilot 从 IDE 插件向 Agent 开发平台转型。累计 10,215 星，Fork 数 1,389。

来源：[头条](http://m.toutiao.com/group/7670735452663579142/) · [GitHub](https://github.com/github/copilot-sdk)

### 2. agentscope-ai/QwenPaw — 个人 AI 助手

基于通义千问的个人 AI 助手项目，支持本地或云端部署，多聊天应用集成，易于扩展。目前累计 28,997 星，本周持续增长。

来源：[OSSInsight 精选](https://github.com/cx0110/OssTrending/blob/main/README.md)

### 3. addyosmani/agent-skills — AI 编程 Agent 工程技能库

为 AI 编程 Agent 提供生产级工程技能，支持 Cursor、Codex、Claude Code 等主流工具。8 月 6 日更新，JavaScript 实现。

来源：[GitHub Explore](https://github.com/explore?language=13&sort=name_asc)

### 4. tanaos/artifex — 小语言模型推理与微调平台

面向小语言模型的推理、微调和可观测性工具，支持情感分析、文本分类、命名实体识别、意图分类等任务，专注于本地 AI 部署。8 月 7 日更新。

来源：[GitHub Topics](https://github.com/topics/self-hosted-ai)

### 5. NVIDIA/SkillSpector — AI Skills 安全扫描器

NVIDIA 开源的静态分析扫描器，检测 AI Skills 中的 16 大类 64 种漏洞模式，包括恶意命令注入、prompt 注入、凭证窃取、数据外泄等。

来源：[CSDN](https://blog.csdn.net/zohan134/article/details/162497218) · [GitHub](https://github.com/NVIDIA/SkillSpector)

## 大模型进展

### 国内

**阿里巴巴 Qwen3.8-Max**：8 月 3 日发布新一代旗舰模型，总参数量 2.4 万亿，采用稀疏 MoE 架构，单次激活约 950 亿参数，支持 100 万 Token 上下文窗口，原生集成多模态视觉理解。实现自主编程能力突破，开发者仅需一句话指令即可完成真实项目交付。Qwen3.8-Max 权重将于下周正式开源，为千问 Max 级别旗舰模型首次开源。

来源：[36氪](https://36kr.com/newsflashes/3932935402028421) · [新浪财经](http://finance.sina.cn/stock/jdts/2026-08-09/detail-inimtiqm3391929.d.html)

**DeepSeek V4 Flash**：7 月 31 日正式版 API 上线公测，版本号 0731。登顶 OpenRouter 全球调用榜首。8 月 6 日公告计划近期整体上调 API 定价，预计涨幅较大。此前已引入峰谷定价机制，高峰时段价格为平峰 2 倍。

来源：[36氪](https://36kr.com/newsflashes/3932935402028421) · [腾讯云公告](https://cloud.tencent.com/announce/detail/2416)

**月之暗面 Kimi K3**：7 月 16 日发布，在 Artificial Analysis 智能指数排名第三，成为首个登顶 Arena.ai 前端编程排行榜的中国模型。开源权重模型，可免费下载修改，对美国前沿实验室高价模型构成定价压力。

来源：[Global Times](http://www.globaltimes.cn/page/202608/1367517.shtml)

**智谱 GLM-5.2**：6 月开源，MIT 许可，在 Hugging Face Open LLM Leaderboard 登顶。处理能力达超长上下文，编程能力据称超越 GPT-5.5。国家超算互联网平台同步上线 API 服务与完整模型文件。下一代 GLM-5.3 预计 8 月中下旬发布。

来源：[AI-Damn](https://ai-damn.com/zhipu-ai-s-glm-5-2-goes-open-source-with-record-breaking-text-processing-1781756084088) · [CSDN](https://blog.csdn.net/weixin_48900778/article/details/162224545)

**字节跳动**：正在训练大规模 AI 模型，规模显著大于此前公开模型，直接对标 Anthropic Claude 和 OpenAI GPT 系列。字节拥有 TikTok 推荐引擎的海量分布式训练基础设施，若匹配前沿质量并保持低推理成本，将成为类似 DeepSeek 的定价压力。

来源：[dev.to](https://dev.to/lukeocodes/this-last-week-in-ai-aug-8-2026-46g6)

### 国外

**OpenAI**：8 月 6 日更新 GPT-5.6 Sol，免费用户获得新默认模型，Plus/Pro 用户获得带努力程度滑块的 GPT-5.6 Sol。Astra 模型因触发最高网络安全风险等级被暂停。代号为 Doug 的迄今最大预训练模型正在推进，预计 11 月前推出。

来源：[OpenAI 官方 PDF](https://cdn.openai.com/pdf/GPT_5_6_August_Updates.pdf) · [36氪](https://36kr.com/p/3931902519639429)

**Anthropic**：7 月 24 日发布 Claude Opus 5，在编码和知识工作评测（Frontier-Bench、GDPval-AA）上达到新 SOTA，接近旗舰 Fable 5 性能但价格减半（$5/$25 每百万 Token）。在 IMO 2026 数学竞赛中取得 42/42 满分，ARC-AGI-3 得分 30.2%。Anthropic 同时宣布计划设计自有硬件以降低推理成本并增强安全控制。

来源：[Anthropic 官方](https://www.anthropic.com/news/claude-opus-5) · [dev.to](https://dev.to/lukeocodes/this-last-week-in-ai-aug-8-2026-46g6)

**Google DeepMind**：发布 DiffusionGemma——将 Gemma 4 改造为扩散模型，仅需不到原始训练预算 10% 的计算量，在 H100 上实现每秒约 1500 Token 生成速度，已开源。同时推出 WeatherNext Cyclones AI 气旋预报系统，预测时效比领先业务模型长约一天。DeepMind 正经历重组，哈萨比斯或将离职。

来源：[ReadAITime](https://www.readaitime.com/digests/2026-08-09) · [The Decoder](https://thedecoder.com)

## 新工具 & CLI

### 1. Cloudflare Kitesurf — 为 AI Agent 量身打造的浏览器引擎

8 月 6 日发布，用 Rust 编写、编译为 WebAssembly 的无状态浏览器引擎，运行于 Cloudflare Workers。相比 Chromium，截图时 CPU 降低 3.1 倍、内存降低 4.7 倍；HTML 提取时 CPU 降低 3.8 倍、内存降低 7 倍。支持 Puppeteer 和 Playwright，测试期间免费，计划开源。

来源：[Cloudflare 官方](https://developers.cloudflare.com/changelog/post/2026-08-06-kitesurf/) · [Cloudflare 文档](https://developers.cloudflare.com/browser-run/kitesurf/)

### 2. Gemini CLI v0.54.0

Google 开源的终端 AI 编程 Agent，支持工具调用、MCP 协议和可扩展架构。最新版本 v0.54.0 已发布 100 个版本，包含 179 项功能和 467 项 Bug 修复。

来源：[Change8](https://www.change8.dev/ai-tools/gemini-cli)

### 3. Codex CLI v0.105 — 规范驱动循环

OpenAI Codex CLI 新版引入语法高亮、长按空格键语音输入、改进多 Agent 工作流和审批控制。安装方式：`npm i -g @openai/codex@latest`。开发者反馈 diff 显示效果优秀且速度极快。

来源：[ZeroNoise](https://zeronoise.ai/posts/orchestration-first-agent-coding-codex-cli-v0105-spec-driven-loops-and-eval-infra-wars-b90thp7gh6/download/pdf)

### 4. NVIDIA SkillSpector — AI Skills 漏洞扫描器

开源静态分析工具，检测 AI Skills 中的 16 大类 64 种漏洞模式，覆盖恶意命令注入、prompt 注入、凭证窃取和数据外泄等安全风险。

来源：[CSDN](https://blog.csdn.net/zohan134/article/details/162497218) · [GitHub](https://github.com/NVIDIA/SkillSpector)

### 5. unYOLO — Agent 凭证代理框架

新发布的凭证代理框架，管理 Agent 与 GitHub、Hugging Face、Google Workspace 等服务之间的访问权限，不暴露真实 Token。支持细粒度策略文件、限时授权和操作员审批流程。配套工具 us-vs-them 可分析 git 历史，识别人类编写与 Agent 生成的代码段落。

来源：[The Stack Podcast](https://podcasts.apple.com/us/podcast/the-stack-august-10-2026/id1888849368?i=1000781297872)

## 编程方式

### Agent Plugins 1.0.0 — 跨平台插件标准

8 月 6 日，Vercel、Amazon、Microsoft、OpenAI 和 Cursor 联合发布 Agent Plugins 1.0.0 开放打包标准。将 Agent Skills 和 MCP 服务器打包为含 `plugin.json` 清单的目录，任何兼容客户端均可读取。已支持 ChatGPT、Codex、Cursor、GitHub Copilot、Kiro 和 VS Code，Google 随后以核心维护者身份加入。Anthropic 未加入指导委员会，Claude Code 使用不同插件布局。

来源：[dev.to](https://dev.to/lukeocodes/this-last-week-in-ai-aug-8-2026-46g6)

### OpenAI Symphony — Codex 编排规范

OpenAI 发布开源 Codex 编排规范 Symphony，持续监控任务看板并确保每个活跃任务都有 Agent 运行。若 Agent 崩溃或停滞则自动重启，新任务出现则自动拾取并组织。基于 Linear 任务状态机构建工作流，将工作与 Session 和 PR 解耦——部分 Issue 跨仓库产生多个 PR，部分为纯调研。

来源：[OpenAI 官方](https://openai.com/index/open-source-codex-orchestration-symphony/)

### Spec → Plan → Execute → Verify 四阶段工作流

新兴的 AI 编程工作流分为四个阶段：Spec（编写一页规格说明，包含问题陈述、约束、成功标准和已知陷阱）→ Plan（AI 规划实现路径）→ Execute（AI 执行编码）→ Verify（验证结果）。开发者每周平均通过 AI 辅助节省 3.6 小时。

来源：[Blink](https://blink.new/blog/ai-coding-workflow) · [TechRounder](https://www.techrounder.com/pdf/blog/ai-is-no-longer-a-copilot-its-the-entire-workflow-how-84-of-developers-are-rebuilding-their-dev-stack-in-2026.pdf)

### GitHub Agent HQ — 多 Agent 协作工作流

新工作流将 Claude、Codex 和 Copilot 串联：Claude 负责分析和架构设计 → Codex 负责实现并生成草稿 PR → Copilot 负责代码审查 → 人工最终审核。每个 Agent 各司其职，人类在最终环节保持完整上下文。

来源：[Noqta](https://noqta.tn/en/blog/github-agent-hq-multi-ai-coding-2026)

## HuggingFace 热门模型

| 模型 | 类型 | 参数量 | 简介 |
|------|------|--------|------|
| MiniMaxAI/MiniMax-H3 | 图文转视频 | 33B | MiniMax 最新多模态模型，1 天前更新 |
| deepseek-ai/DeepSeek-V4-Flash-0731 | 文本生成 | 304B | DeepSeek V4 Flash 正式版，7 天前更新 |
| Salesforce BLIP3-o | 多模态 | — | 开源多模态模型，xGen-MM 系列最新成员 |
| HuggingFace SmolLM3 | 语言模型 | 紧凑型 | 紧凑高效开源模型，性能媲美更大模型 |
| Audio8/Audio8-TTS-Preview-0.6b | 语音合成 | 0.6B | 多语言零样本语音克隆，TTS 趋势榜第一 |

来源：[HuggingFace](https://huggingface.co/models?arxiv=arxiv:2111.06377) · [AI-Damn](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402) · [AI-Damn](https://ai-damn.com/hugging-face-releases-smollm3-a-compact-ai-model-rivaling-larger-counterparts-1752102544585)

## 总结

今日 AI 产业呈现三条主线：安全与商业的博弈加剧——FLI 安全指数无一及格，前四实验室弱化暂停承诺，但 OpenAI Astra 暂停表明框架仍在运转；中国大模型集体崛起——DeepSeek V4 Flash 登顶全球调用榜，国产模型包揽前五，连续 14 周超越美国；编程范式标准化加速——Agent Plugins 统一插件格式、Symphony 编排多 Agent、四阶段工作流成为主流，AI 编程正从辅助走向全流程自动化。
