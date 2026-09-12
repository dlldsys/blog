---
title: "AI 开发日报 · 2026年09月12日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-12
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 指控 DeepSeek 实施大规模非法蒸馏攻击

9 月 12 日早报披露，Anthropic 指控 DeepSeek 对其模型实施大规模非法蒸馏攻击；此前一日 Anthropic 还将小米、月之暗面一同列为蒸馏 Claude 能力的对象，同周美国三大安全机构也联合指控六家中国 AI 企业「工业级窃密」，AI 知识产权争端集中爆发。

来源：[JustSayAI 早晚报](https://www.justsayai.org/briefing/2026-09-12/am)

### 2. Meta 因使用用户照片训练 AI 被起诉

与蒸馏指控同一天，Meta 因 AI 训练数据来源问题被诉——诉讼称其使用用户照片训练 AI，隐私诉讼与模型训练数据合规问题再次成为焦点。

来源：[JustSayAI 早晚报](https://www.justsayai.org/briefing/2026-09-12/am)

### 3. 工信部发布《"人工智能+软件"专项行动实施方案》

工信部 9 月 11 日发布方案，提出到 2028 年推广应用覆盖 2 万家规模以上软件企业，组织实施 100 项智能化技改项目、打造 100 个智能体软件标杆应用、孵化 5 个以上优质开源项目，到 2030 年关键软件全面实现智能化升级。

来源：[光明网](http://m.toutiao.com/group/7684364614309528099/)

### 4. IBM 与 NASA 联合发布开源月球测绘 AI 模型

9 月 12 日，IBM 与 NASA 发布面向月球测绘的开源 AI 模型，将基础模型能力引入深空探测与行星科学数据处理场景。

来源：[TNGlobal](https://technode.global/)

### 5. Apple 确认 Siri AI 将于 9 月 14 日随新系统发布 beta

Apple 确认 Siri AI 将于 2026 年 9 月 14 日与 iOS 27、iPadOS 27、macOS 27 Golden Gate、watchOS 27、visionOS 27 同步进入公测，首发仅支持英语，法语、日语、韩语、葡萄牙语、西班牙语将于 10 月跟进，并对 Siri AI 等服务器端功能设置每日用量上限。

来源：[FutureTools](https://futuretools.io/news?s=03)

## 涨星最快项目

本周 GitHub 增长最快仓库中，AI 编码 Agent 与「Agentic Workflows」相关项目占据多条（数据来源：ghtrending 7 日增长榜）：

- **PrimeIntellect-ai/prime-agent** ⭐ 20,565 — 用于编码工作流与长时自治任务的自进化 RLM（强化学习模型）Agent，本周增长榜第 7。 ([GitHub](https://github.com/PrimeIntellect-ai/prime-agent))
- **pingdotgg/t3code** ⭐ 22,429 — T3 团队推出的 AI 编码工具，进入本周增长榜前 15。 ([GitHub](https://github.com/pingdotgg/t3code))
- **github/gh-aw** ⭐ 5,128 — GitHub 官方 Agentic Workflows（智能体工作流）工具，本周增长榜第 15。 ([GitHub](https://github.com/github/gh-aw))
- **Tencent/teamai-cli** — 腾讯开源的「Make Every Team AI Native」团队 AI 化 CLI 工具，9 月 9 日仍在更新，登上 GitHub Explore Trending。 ([GitHub](https://github.com/Tencent/teamai-cli))
- **rohitg00/ai-engineering-from-scratch** ⭐ 约 5 万 — 20 阶段、523 节的 AI 工程实战课程，从零手写反向传播与注意力机制，此前一周以日均近 300 星高速增长。 ([GitHub](https://github.com/rohitg00/ai-engineering-from-scratch))

数据来源：[ghtrending 本周增长榜](https://www.ghtrending.com/fastest-growing) · [GitHub Explore](https://github.com/explore)

## 大模型进展

### 国内

- **DeepSeek**：9 月 10 日发布并开源 V4.1 Flash——552B 参数的 MoE 模型，采用全新 Causal Encoder-Decoder 架构，长文本缓存硬盘占用暴降 88%，性能超越 V4 Pro 等旗舰；9 月 11 日摩尔线程宣布完成适配，MTT S5000 实现 Day-0 支持。 ([36氪](http://m.toutiao.com/group/7683836152742248995/) · [金融界](http://m.toutiao.com/group/7684367586640921151/) · [HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash))
- **智谱**：GLM-5.3-Flash（代号 Ox-Alpha「牛来」）8 月 20 日匿名上线 OpenRouter 与 OpenCode，首日刷新平台单日 token 调用纪录、终结 DeepSeek 连续 56 天霸榜，8 月 26 日官宣认领。 ([威观科技](http://m.toutiao.com/group/7684114169876775460/))
- **科大讯飞**：开源端侧模型星火 X2.5-4B 于 9 月 9 日登顶 Hugging Face Trending，凭百万级上下文与强智能体能力持续霸榜。 ([东方财富](https://caifuhao.eastmoney.com/news/20260909085534538139600))
- **通义千问**：Qwen3.8-27B 领衔 HuggingFace 月度热榜（14,602 点赞、732 万+下载），Qwen3.8-Flash-Next 紧随其后，开源多模态生态保持强势。 ([HF Trending](https://gaojihao.github.io/github-hot/hf-trending-monthly.html))

### 国外

- **OpenAI**：GPT-6 Astra（9 月 3 日）以每百万 token 输入 10 美元/输出 50 美元的定价和 1.05M 上下文窗口上线；黄仁勋发帖称「AGI 已到来」，但 36氪报道指出其 ARC-AGI 测试「换个考场」后 99.9% 的得分掉到 62.7%，引发能力边界争议。 ([36氪](http://m.toutiao.com/group/7684212751371108879/) · [Future Technology HQ](https://futuretechnologyhq.com/article/ai-model-releases-september-2026/))
- **Anthropic**：Claude Fable 5.1（9 月 1 日）发布后宣布将缓存读取价格下调 75%，主攻编程与知识工作场景。 ([Future Technology HQ](https://futuretechnologyhq.com/article/ai-model-releases-september-2026/))
- **Google**：9 月 2 日发布 Gemini 3.8 Flash，并推出号称最强网络安全模型的 Gemini 3.8 Flash Cyber，通过 Fairwind Program 向可信防御者开放。 ([The Hacker News](https://thehackernews.com/2026/09/google-anthropic-and-openai-unveil.html))
- **Meta**：Meta Superintelligence Labs 于 9 月 2 日发布 Muse Spark 1.3。 ([新浪财经](http://m.toutiao.com/group/7683770879800508978/))
- **Apple**：Siri AI 公测定档 9 月 14 日，随 iOS 27 等系统更新上线。 ([FutureTools](https://futuretools.io/news?s=03))

## 新工具 & CLI

- **OpenAI openai-cli v1.14.0（9 月 9 日）** — 官方 CLI 新增服务账号密钥过期（service account key expiration）标志等能力。 ([GitHub Releases](https://github.com/openai/openai-cli/releases) · [介绍](https://ai-damn.com/openai-s-new-cli-tool-brings-ai-power-to-your-terminal-1778213693127))
- **GitHub Copilot CLI HydraFusion（experimental）** — 新增自动化语义路由，可在本地、云端与复合模型之间按任务自动选择工作流，平衡性能、成本与延迟。 ([GitHub Blog Changelog](https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/))
- **Gemini CLI v0.60.0-nightly** — Google 命令行 AI 助手本周持续高频更新。 ([agents-radar CLI Digest](https://github.com/duanyytop/agents-radar/issues/3125))
- **Tencent/teamai-cli** — 腾讯开源的团队 AI 原生 CLI 工具，帮助团队把 AI 能力嵌入日常开发流程。 ([GitHub](https://github.com/Tencent/teamai-cli))
- **losna-cli** — 基于 OpenRouter 的终端 AI 开发助手，支持多会话聊天、动态工具执行、记忆压缩与可选 Agent 驱动的网页搜索，9 月 4 日更新。 ([GitHub](https://github.com/snui1s/losna-cli))

## 编程方式

- **Agent 并行化成为标配**：GitHub Copilot app 推出并行运行多个 Agent 的能力，官方博客称其正在从「有点吓人」变成「强大」的开发体验。 ([GitHub Blog](https://github.blog/ai-and-ml/github-copilot/))
- **先规划、后生成**：主流 AI 编程工具内置「计划模式」，开发者先以 spec.md 规格说明 + 计划锁定方向，再让 Agent 改动代码库；代码跑偏时回滚并修改计划重新生成，避免无效循环。 ([CSDN](https://blog.csdn.net/zz_1205094250/article/details/162430203))
- **从 Vibe Coding 到 Agent 多文件自主编程**：2025–2026 快速流行的工作流是「一句话需求 → AI 自主检索多文件、修改多处代码、运行测试、迭代修复」（Cursor Composer、Claude Code、Cline 等），全流程需人工审核改动清单。 ([CSDN 方法论总结](https://blog.csdn.net/dongjing991/article/details/163721293))
- **「AI 替代程序员」的官方回应**：中国软件协会吕卫锋表示，重复性编码岗位正由智能编程工具承担，岗位职责向上游需求/架构、下游集成/运营延伸，同时围绕智能体开发、模型运营的新岗位快速形成。 ([IT之家](http://m.toutiao.com/group/7684132567179739699/))

## 总结

今日 AI 开发圈呈现「发布潮与争议潮并行」：模型侧 GPT-6 Astra、Claude Fable 5.1、DeepSeek V4.1 Flash 等前沿模型密集上新并打起价格战，开源侧端侧小模型与自进化编码 Agent（prime-agent、gh-aw）领跑 GitHub 增长榜；同时蒸馏指控、训练数据诉讼等知识产权与隐私争端集中爆发，安全与合规正成为与能力竞赛同等重要的主题。
