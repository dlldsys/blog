---
title: "AI 开发日报 · 2026年09月19日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-19
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 推迟 IPO 至 11 月，考虑在上市前发布新模型

9 月 19 日财联社报道，Anthropic 正考虑在 IPO 前推出一款新 AI 模型，公司 IPO 可能会推迟到美国中期选举之后（11 月）。据华尔街见闻援引知情人士消息，推迟至 11 月可让公司披露第三季度财务数据，在 OpenAI 于 9 月推出 GPT-6 Astra 后向投资者展示竞争力；投资者预计其估值约 2 万亿美元，募资规模最高可达 1000 亿美元。

来源：[财联社](https://www.cls.cn/detail/2487713) · [华尔街见闻](http://m.toutiao.com/group/7687004143013134886/)

### 2. Anthropic 公开「研发自动化指数」：Claude 已主导 26% 内部 AI 研发

Anthropic 发布了一套衡量前沿 AI 实验室研发进度的方法，核心是 AL0-AL5 六级「研发自动化指数」。截至 2026 年 8 月，Claude 尚未实现完全自主运行，但已「主导」约 26% 的 AI 研发工作（2026 年 2 月这一比例还不到 1%），处于「AI 协作」及以上等级的工作占比超过 90%；对 8 月超 10 亿次智能体决策的分析显示，约 0.002% 的操作被实时监控系统拦截。

来源：[93913](https://www.93913.com/124771.html)

### 3. 谷歌 Gemini 3.8 Live 及扩展思考版正式 GA

谷歌推出两款新的音频到音频模型，面向 Live API 实时语音应用：Gemini 3.8 Live（gemini-3.8-live）作为低延迟语音代理与实时对话的默认选项，支持交错推理与异步函数调用；Gemini 3.8 Live Extended Thinking 面向复杂推理场景。两款模型于 9 月 15 日正式上线，强化了实时语音交互能力。

来源：[Google Gemini API 版本说明](https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn) · [Gemini Audio](https://deepmind.google/models/gemini-audio/)

### 4. 智谱上线 GLM-5.3-FlashX：最高生成速度 200 tokens/s

9 月 18 日，智谱正式推出 GLM-5.3-FlashX，最高生成速度可达 200 tokens/s，是 GLM-5.3-Flash 的 5 倍，定价为原版 2.5 倍。API 已全面开放，Model Key 为「GLM-5.3-FlashX」，该模型即此前被称作「神秘模型」的 GLM-5.3-Flash 升级版。

来源：[上海证券报](http://m.toutiao.com/group/7686810287765013028/) · [21世纪经济报道](http://m.toutiao.com/group/7686764301008323107/)

### 5. 阿里 Qwen3.8-27B 登顶 Hugging Face 史上最受欢迎开源模型

9 月 16 日 Hugging Face 更新「最受欢迎（Most likes）」开源模型榜单，阿里千问 Qwen3.8-27B 超越 FLUX.1、DeepSeek-R1、Kimi-K3、Meta-Llama-3 等，成为该平台历史上最受欢迎的开源模型。

来源：[界面新闻](https://www.jiemian.com/article/15103077.html)

## 涨星最快项目

- [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) — AI 编码 Agent 的预执行安全护栏，在工具调用前拦截破坏性 Git/文件系统命令与敏感文件访问，支持 Claude Code、Codex、Cursor、Gemini CLI、Copilot CLI 等 14 种 Agent；约 1.5k 星，近期增长强劲。[来源](https://www.ghtrending.com/project/kenryu42/cc-safety-net)
- [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) — Apple Silicon 本地 AI 推理引擎，宣称比 Ollama 快 4.2 倍、缓存 TTFT 0.08s、100% 工具调用，可作 OpenAI 兼容替代并配合 Claude Code、Cursor、Aider 使用；约 3.7k 星。[来源](https://www.ghtrending.com/project/raullenchai/Rapid-MLX)
- [vm0-ai/vm0](https://github.com/vm0-ai/vm0) — 连接团队已有工具（营销、销售、工程、运营）的 AI 工作代理，在可控范围内自动完成工作；约 1.2k 星，近期增长强劲。[来源](https://www.ghtrending.com/project/vm0-ai/vm0)
- [xuzhougeng/wisp-science](https://github.com/xuzhougeng/wisp-science) — Rust 编写的本地优先科学计算 AI 研究台，支持 Python/R、MCP 生物信息工具、SSH/WSL/GPU 运行时与 OpenAI/Anthropic 模型；约 1.1k 星。[来源](https://www.ghtrending.com/project/xuzhougeng/wisp-science)
- [larksuite/cli](https://github.com/larksuite/cli) — 飞书官方 CLI 工具，为人类与 AI Agent 设计，覆盖 IM、文档、Base、表格、日历等核心域，提供 200+ 命令与 20+ AI Agent Skills；约 1.7 万星。[来源](https://www.ghtrending.com/project/larksuite/cli)

## 大模型进展

### 国内

- 智谱：GLM-5.3-FlashX 上线，最高 200 tokens/s（见今日要闻）。
- 阿里：qwen3.8-omni-flash 上线，基于 Qwen3.8-Flash-Next 架构的原生全模态模型，支持最长 1M 上下文，原生接受文本、图像、音频与视频输入，面向真实生产力场景的 Agent 能力。[来源](https://docs.qwencloud.com/changelog/models)
- 月之暗面：Kimi K2.8 Preview 全量上线 Kimi Code，综合性能接近 K3、支持 1M 上下文，Model ID 不变；另据报道其 8 月 ARR 突破 10 亿美元，正筹备估值 500 亿美元的香港 IPO。[来源](https://next.ithome.com/archiver/1/001/319.htm) · [36氪](https://36kr.com/p/3978923620177539)
- DeepSeek：App 端灰度测试 AI 语音对话，支持四种音色（贝壳等）的双向语音交互；DeepSeek-V4.1-Flash（552B 总参 MoE 的轻量旗舰）9 月 13 日上架千问平台。[来源](https://technode.com/2026/09/14/deepseek-begins-limited-test-of-ai-voice-interaction-with-four-voice-profiles/) · [千问平台](https://platform.qianwenai.com/docs/changelog/models)
- 小米：大模型负责人罗福莉在 X 平台公开直播 MiMo-V2.6 Pro/Flash 的强化学习训练（9 月 15 日晚启动），单步约 20 亿 token、1568 个 prompts × 16 次 rollouts，累计成本已超 130 万美元，每小时「烧钱」超 20 万元。[来源](https://3g.china.com/act/news/10000169/20260919/49752123.html) · [36氪](https://36kr.com/p/3988418295109249)

### 国外

- Anthropic：IPO 推迟至 11 月并考虑先发新模型；首次公开「研发自动化指数」，Claude 已主导 26% 内部 AI 研发（见今日要闻）。
- Google：Gemini 3.8 Live / Extended Thinking 正式 GA（见今日要闻）；9 月初已发布 Gemini 3.8 Flash。[来源](https://ai.google.dev/gemini-api/docs/changelog?hl=zh-cn)
- OpenAI：9 月 10 日推出 Agents API 与 GPT-Live-1 API 语音模型；9 月 3 日发布的 GPT-6 Astra 支持 1.05M 上下文、128K 输出，定价 10/50 美元每百万 token（输入/输出）。[来源](https://openai.com/zh-Hans-CN/news/product-releases/) · [新华网](http://intl.ce.cn/sjjj/qy/202609/t20260904_3193774.shtml)
- Meta：9 月初发布 Muse Spark 1.3，与 Claude Fable 5.1、Gemini 3.8 Flash、GPT-6 Astra 在 72 小时内密集上新，主打差异化的成本与使用场景。[来源](https://futuretechnologyhq.com/article/ai-model-releases-september-2026/)

## 新工具 & CLI

- [GitHub Copilot CLI「Rubber Duck」](https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/)（实验模式）— 让来自不同 AI 模型家族的第二个模型充当独立评审者，在 agent 执行计划前评估其方案与产出，为编码结果提供「第二意见」。
- [Project HydraFusion 进入 Copilot CLI /experimental](https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/) — 多模型运行时编排，在本地、云端与复合模型之间自动语义路由，按任务选择平衡性能、成本与延迟的执行路径。
- [cc-safety-net](https://github.com/kenryu42/cc-safety-net) — AI 编码 Agent 预执行安全护栏（见涨星项目），面向 14 种主流 Agent 的通用防护层。
- [Claude Code 2.1.277 支持 AGENTS.md](http://m.toutiao.com/group/7687012891156857383/) — 文件夹中没有 CLAUDE.md 时回退使用 AGENTS.md，让不同工具共享项目级通用规则（CLAUDE.md 管 Claude 特有配置，AGENTS.md 面向所有 AI）。
- [Claude Code 周更：claude plugin eval](https://code.claude.com/docs/en/whats-new) — 用一组测试用例运行插件并评分、与无插件基线对比，`claude plugin eval init` 可自动起草用例与评分器（9 月 7-11 日）。

## 编程方式

多模型编排正在成为编程助手的默认能力：GitHub Copilot 的 Project HydraFusion 以 Single、Cascade、Critique 等工作流模式动态构建执行计划，把任务路由到多家供应商的模型，在离线评测中接近前沿质量并显著降低 Agent 编码成本；配合 Copilot CLI 的 Rubber Duck「第二意见」审查，形成「一个任务、多个模型、先评审后执行」的新协作范式。[来源](https://www.infoq.com/news/2026/09/github-hydrafusion/)

规则文件层面，Claude Code 开始支持 AGENTS.md，标志项目级 AI 规则的跨工具标准化——CLAUDE.md 专属 Claude Code，AGENTS.md 则成为所有 AI 开发工具通用的「说明书」，降低多 Agent 工具链的配置成本。

## 总结

今日趋势一句话：Anthropic 首次量化「AI 参与研发」水平（Claude 主导 26%），多模型编排与 Agent 安全治理成为开发侧主线，国产模型（Qwen、GLM、Kimi、DeepSeek）则在开源登顶、生成速度与语音多模态上持续发力。
