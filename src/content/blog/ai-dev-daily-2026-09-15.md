---
title: "AI 开发日报 · 2026年09月15日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-15
tags: ["AI日报"]
---

## 今日要闻

### 1. DeepSeek V4.1 Flash 正式发布，V4 Pro API 继续保留

9 月 10 日 DeepSeek 正式发布 V4.1 Flash，这是其全新模型结构系列中最小尺寸的模型，为 552B 参数的 MoE 模型，采用全新的 Causal-Encoder-Decoder 结构（输入激活 8B、输出激活 1B 水平），具备原生多模态视觉理解能力，相应 API 同步上线。原计划 9 月 14 日下线 V4 Pro，但因用户需求强烈，DeepSeek 决定继续提供 V4 Pro API 调用服务，计费方式保持不变，仅同步下调 API 价格。

来源：[DeepSeek API 更新日志](https://api-docs.deepseek.com/zh-cn/updates/) · [Hacker News](https://news.ycombinator.com/item?id=49638687) · [36氪](https://36kr.com/newsflashes/3978941735091206)

### 2. OpenAI GPT-6 Astra 全面开放，成最先进前沿模型

9 月 3 日 OpenAI 发布 GPT-6 Astra，作为其最新前沿模型向 ChatGPT Plus、Pro、Business、Enterprise 用户以及 OpenAI API、Microsoft Azure、AWS Bedrock 全面开放。OpenAI 称其在 FrontierMath 第四档上得分 97.6%，是当前最智能且对齐最充分的模型，具备受限的网络安全访问能力。

来源：[dutchstartup.ai](https://www.dutchstartup.ai/en/news/four-major-ai-labs-launch-new-models-in-the-first-week-of-september-2026) · [imfounder](https://imfounder.com/science-tech/ai/gpt-6-astra-ai-updates/)

### 3. Anthropic 发布 Claude Fable 5.1 与 Mythos 5.1

9 月 1 日 Anthropic 发布 Claude Fable 5.1 与 Claude Mythos 5.1，定位为面向编程与知识工作的最先进模型。Fable 5.1 在 Terminal-Bench v2.1（91.4%）等多项基准刷新纪录；缓存读取价格从每百万 Token 1 美元降至 0.25 美元（下调 75%），鼓励长周期 Agent 任务。

来源：[Anthropic 官方新闻](https://www.anthropic.com/news) · [InfoQ 全景分析](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8)

### 4. 智谱 GLM-5.3-Flash 开源，匿名代号曾登顶全球调用量

GLM-5 系列首个原生多模态大模型 GLM-5.3-Flash 正式开源，参数规模 320B、仅激活 18B，支持高达 1M 长上下文。此前它以"Ox Alpha"匿名代号在 OpenRouter 上线，一周内处理约 23.2 万亿 Tokens、登顶全球调用量榜首，被开发者社区称为"牛来"。

来源：[InfoQ 全景分析](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8) · [Hugging Face](https://huggingface.com)

### 5. OpenAI Codex CLI 0.154.0：把终端改造成并行工作系统

9 月 9 日 OpenAI Codex 0.154.0 发布，编码 Agent 不再把每个任务都强制塞进同一个 checkout，而是支持实验性 worktrees、内联提问、GPT-6-Astra 接入以及共享 Windows 服务端，显著改变了 Codex CLI 的工作模型。

来源：[remio.ai](https://www.remio.ai/post/openai-codex-0-154-0-turns-the-cli-into-a-parallel-working-system)

## 涨星最快项目

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) — "一切皆插件"的 DeepSeek 模型模块化编排框架，从推理策略到外部工具均可灵活组合，约 20.6 万星。[来源](https://dev.to/muildev/github-trending-digest-2026-09-01-4pik)
- [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) — 开源、全本地运行的 ElevenLabs 替代方案，支持 646 种语言的声音克隆、视频配音、听写与有声书创作，本周新晋榜单。[来源](https://trendshift.io/weekly?language=Python)
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — 终端内的 Agentic 编码工具，能读懂代码库、执行常规任务并处理 git 工作流，本周继续高热度。[来源](https://trendshift.io/weekly/2026/14)
- [stablyai/orca](https://github.com/stablyai/orca) — 面向并行 Agent 舰队的 Agent 开发环境（ADE），支持用自己的订阅运行任意编码 Agent，可用在桌面、移动端与远程运行时。[来源](https://trendshift.io/weekly?language=TypeScript)

## 大模型进展

### 国内

- 阿里 Qwen3.8-Flash（8 月 26 日发布）：摒弃传统 Transformer，采用自研 Next 架构，引入 QSA 稀疏注意力、Gated Residual 与 51B N-gram Embedding 参数；总参数 125B、仅激活 6B，1M 上下文下缓存命中推理提速 8 倍以上，输入价格仅 1 元/百万 Token、训练成本较上代骤降 90%。[来源](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8)
- DeepSeek V4.1 Flash（9 月 10 日发布）：与 V4-Flash-Vision-Exp 同属新一代，强调多模态 Agent 能力，能"看着界面做操作"，并带动 API 全面降价。[来源](http://m.toutiao.com/group/7683786651918746147/)
- 月之暗面 Kimi Code：专为终端优先开发流程打造的 AI 编程 Agent，由具备长上下文推理能力的 Kimi K3 驱动，能分析整个仓库、规划多步骤任务、执行命令并自主迭代。[来源](https://www.kimi.com/resources/kimi-code-introduction)
- 蚂蚁百灵 Ling-3.0-flash-VL（9 月发布）：百灵系列首个原生多模态大模型，总参 124B、单次激活约 5.5B，采用任意分辨率视觉编码器与两层投影器，已开源。[来源](https://www.qishuzhi.com/llmlist)

### 国外

- OpenAI GPT-6 Astra（9 月 3 日）：新一代前沿模型全面开放，FrontierMath 第四档 97.6%，并接入 Codex CLI。[来源](https://www.dutchstartup.ai/en/news/four-major-ai-labs-launch-new-models-in-the-first-week-of-september-2026)
- Anthropic Claude Fable 5.1 / Mythos 5.1（9 月 1 日）：编程与知识工作最强模型，缓存读取降价 75%，但深度思考导致输出 Token 增加 1.7 倍、复杂任务总成本上升约 20%。[来源](https://www.anthropic.com/news)
- Google Gemini 3.8 Flash（预计 9 月 2 日）：以强化学习重点补齐编程短板，内部 JetSki 对比评价优于 Claude Opus。[来源](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8)
- Meta Muse Glimmer 与 Muse Code：开源面向 Agent 应用（30B）与代码模型 Muse Code，内置 Agent 循环与本地事件日志，支持精确回放和重启。[来源](https://xie.infoq.cn/article/4b8748462d597b87f4f3536b8)

## 新工具 & CLI

- [OpenAI Codex CLI 0.154.0](https://www.remio.ai/post/openai-codex-0-154-0-turns-the-cli-into-a-parallel-working-system) — 支持并行 worktrees、内联提问与 GPT-6-Astra 接入。
- [Kimi Code](https://www.kimi.com/resources/kimi-code-introduction) — 月之暗面推出的终端与 IDE 双端 Agent 级编程工具。
- [Cline](https://cline.bot/) — 从终端到 IDE 的开放编码 Agent，发布新 SDK，68k 星、全平台 800 万+ 安装。
- [Gemini CLI v0.23.0](https://geminicli.com/docs/changelogs/) — 引入实验性 Agent Skills 支持（Preview 构建）。
- 华为云码道 CodeArts — 新增轻量 Web 端，支持定时任务、AtomGit 代码仓对接与内置专家技能。[来源](https://support.huaweicloud.com/wtsnew-codeartsagent/index.html)

## 编程方式

GitHub Copilot 的一个信号是协作式多 Agent 编程的到来：Copilot Workspace 现可在共享上下文窗口内并行运行多个专用编码 Agent，而开源自主编码 Agent OpenHands 同期发布 1.0，二者共同指向"多智能体协作"范式。[来源](https://www.aitrove.ai/blog/github-copilot-agent-teams-openhands-1-0-2026)

与此同时 AI 编程正从"单行补全"走向"多文件自治闭环"——给模型一个需求，它自行拆任务、跨文件改代码、跑测试、修 bug，还能自治地完成整个开发会话。[来源](https://blog.csdn.net/2601_96416683/article/details/164127576) 工具链层面也加速向 AI-Native 演进，本地 LLM 运行时星标增速环比 +42%，Chrome DevTools MCP、GitButler、Letta-code 等共同指向"AI 原生协作开发"。[来源](https://blog.csdn.net/lpfasd123/article/details/158151476)

## 总结

今日趋势一句话：模型竞赛从"拼参数量"全面转向"效率优先"——国产生态以架构创新和极致性价比领跑（Qwen3.8-Flash、GLM-5.3、DeepSeek V4.1），国外巨头转向缓存降价与编程强化，而终端 Agent 与多智能体协作正在重写 AI 编程的工作方式。