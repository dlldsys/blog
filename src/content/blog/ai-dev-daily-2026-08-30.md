---
title: "AI 开发日报 · 2026年08月30日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-30
tags: ["AI日报"]
---

## 今日要闻

### 1. 腾讯混元开源 Hy4 preview：770B 参数、1M 上下文

8 月 28 日，腾讯混元发布并开源新一代大语言模型 Hy4 preview，总参数 770B、激活参数 49B，上下文长度突破 100 万 tokens，并同步上线 TokenHub。模型定位"为生产力而生"，面向 Coding、Agent、办公与科研场景，可通过 WorkBuddy、CodeBuddy、元宝、ima 等产品使用，官方也坦承预览版仍有推理过长、过度验证等问题。

来源：[腾讯官方](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/) · [新华网](http://imgs.xinhuanet.com/tech/20260828/b12d8417291b4193ba9e5d435a1a40db/c.html) · [21 世纪经济报道](http://m.toutiao.com/group/7679082262226305571/)

### 2. OpenAI 将于 11 月 12 日停止向 SpaceX 旗下 Cursor 提供模型服务

当地时间 8 月 28 日，OpenAI 通知 SpaceX，计划于 2026 年 11 月 12 日终止向代码编辑器 Cursor 提供 AI 模型服务的合同。Cursor 母公司 Anysphere 本月初被 SpaceX 以 600 亿美元全股票收购。OpenAI 称这是"非常艰难的决定"，理由是"根据以往埃隆·马斯克旗下公司违反合同的经验，无法确定 SpaceX 会遵守服务条款"；马斯克 29 日回应称"我根本不在乎"。

来源：[环球网](https://m.huanqiu.com/article/4Szlg1oMkZJ) · [DoNews](https://www.donews.com/news/detail/4/6690443.html)

### 3. MiniMax H3 Max：视频生成速度超过观看速度

8 月 29-30 日，MiniMax 发布 H3 Max（基于开源的 H3 模型速度微调），配合 fal 的适配版可在不到 3 秒内生成一段 5 秒视频，吞吐量约为官方 H3 端点的 35 倍；开发者 Rehan Sheikh 已将其接入 Twitch 直播，实现"生成速度快于观看速度"的无限流式视频体验，并在 Design Arena 图生视频等评测中排名第一。

来源：[fal 官方博客](https://blog.fal.ai/introducing-h3-max-by-fal/) · [WorldNL](https://worldnl.com/h3-max-delivers-up-to-35-times-the-throughput-of-its-predecessor-482435.html) · [MiniMax 官方](https://www.minimaxi.com/news/minimax-h3-open-source)

### 4. Perplexity 推出 Portable Computer：全本地化 Agent 运行环境

Perplexity 发布 Portable Computer，这是其 Computer Agent 平台的本地优先版本：orchestrator LLM、subagent LLM 与 agent harness 全部跑在 NVIDIA DGX Spark 上（后续支持 RTX 显卡 PC），本地步骤不消耗 token 与积分，涉及敏感数据时可完全离线执行，向云端发送任何步骤都需用户单独批准。

来源：[Implicator AI](https://www.implicator.ai/perplexity-ships-local-ai-agent-on-nvidia-dgx-spark-with-no-on-device-token-cost/) · [MetaAI Labs](https://metaailabs.com/perplexity-ships-portable-computer-on-nvidia-dgx-spark-local-harness-os-enforced-sandbox-and-zero-per-token-cost-for-local-steps/) · [Techzine](https://www.techzine.eu/news/infrastructure/143850/perplexity-opts-for-local-ai-with-nvidia/)

### 5. Google DeepMind 扩展 Co-Scientist 系统，加速科学发现

Google DeepMind 宣布在"利用 Gemini 加速现实世界科学发现"方面取得早期进展，推出 Co-Scientist 系统的扩展版本，与材料科学、生物学和计算机科学领域的科学家协作。官方表示这是早期进展公告，具体技术细节与成果数据尚未披露。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

## 涨星最快项目

### 1. tt-a1i/archify — 架构可视化 Agent 技能（8/29 单日 +4,422）

把代码仓库自动转成架构图、流程图、时序图等自包含 HTML 图表，主打"先看图、再下钻"的代码理解方式，被 GitHub 官方 Explore 收录为 Trending 仓库，也是 8 月 29 日开源日榜增量第一。

GitHub 链接：[tt-a1i/archify](https://github.com/tt-a1i/archify) · 数据来源：[GitHub 日榜](https://www.cnblogs.com/wflynn/p/22756470/github-daily-growth-2026-08-29)

### 2. bilawalsidhu/gods-eye-view — 实时空间情报"上帝视角"（8/29 单日 +2,998）

把分散的空间与实时信息组织成直观、可交互的态势感知界面，代表多源数据接入 + 实时状态叠加的产品方向，适合情报研究、地图与实时监控类开发者。

GitHub 链接：[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) · 数据来源：[GitHub 日榜](https://www.cnblogs.com/wflynn/p/22756470/github-daily-growth-2026-08-29)

### 3. K-Dense-AI/scientific-agent-skills — 科研 Agent 技能积木箱（8/29 单日 +1,473）

把科研流程拆成可组合、可独立测试的 Skills（检索、分析、实验、数据处理、写作），体现"Agent 竞争从模型更聪明转向技能资产更完整"的趋势。

GitHub 链接：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) · 数据来源：[GitHub 日榜](https://www.cnblogs.com/wflynn/p/22756470/github-daily-growth-2026-08-29)

### 4. DietrichGebert/ponytail — AI 编程"少即是多"（8/29 单日 +1,373）

用一套规则集让 AI 代理主动写最少代码、优先复用，基准测试显示可减少约 54% 代码量，走红背后是"AI 能快速造代码后，稀缺的变成判断力"这一反思。

GitHub 链接：[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · 数据来源：[GitHub 日榜](https://www.cnblogs.com/wflynn/p/22756470/github-daily-growth-2026-08-29)

### 5. omacom/omarchy — 开发环境成为完整产品（8/30 Trending 榜首）

Shell 编写的"Beautiful, Modern & Opinionated Linux"发行环境，把系统安装、工具选择与默认配置组合成开箱即用的体验，当前星标 3.4 万+，本月新增超 9,000 星。

GitHub 链接：[omacom/omarchy](https://github.com/omacom/omarchy) · 数据来源：[GitHub Trending](https://gaojihao.github.io/github-hot/trending-monthly.html)

## 大模型进展

### 国内

**腾讯混元 Hy4 preview**：8 月 28 日开源，770B/49B 参数、1M 上下文，配套 TokenHub 上线，稳居开源模型第一梯队，距 Hy3 发布不足两个月即迭代（Hy3 为 295B 总参/21B 激活/256k 上下文）。

来源：[腾讯官方](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/) · [新华网](http://imgs.xinhuanet.com/tech/20260828/b12d8417291b4193ba9e5d435a1a40db/c.html)

**智谱 GLM-5.3 上线 Tinker 平台**：8 月 30 日智谱 GLM-5.3 现可在 Tinker 平台使用，支持 256k 上下文，基于 GLM-5.2 基础模型扩展后训练，据称在 Terminal-Bench 3.0、DeepSWE 1.1 等编码基准上表现最强，是目前最强的开源编码权重模型之一。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**MiniMax H3 生态爆发**：H3 基础权重已于 8 月 3 日开源（通用全模态、最高 2K/15 秒视频），随后 H3 Max 速度微调版把 5 秒视频生成压到 3 秒内、吞吐提升约 35 倍，开放权重视频模型正式进入"生成速度快于观看速度"的实时档位。

来源：[MiniMax 官方](https://www.minimaxi.com/news/minimax-h3-open-source) · [fal 官方博客](https://blog.fal.ai/introducing-h3-max-by-fal/)

**Qwen3.8 系列领跑 HuggingFace 热榜**：据 HF 趋势追踪，Qwen3.8-27B 多模态版本以 11,735 likes 居周度热榜榜首，Unsloth 的 GGUF 量化版下载量已超 510 万；8 月 29 日的 HF 开源模型 Top 20 中 Qwen3.8-Flash-Next 也高居第一。

来源：[HF Trending 2026-08-21](https://github.com/duanyytop/agents-radar/issues/2827) · [HF 开源模型热榜](https://www.fxdst.com/rankings/open-models/)

**DeepSeek**：据行业预测消息，DeepSeek 或将在近期推出一款比 Kimi K3 便宜约 10 倍、主打极致性价比的模型，被看作对闭源系统的直接威胁（仍属预测，尚未官宣）。

来源：[Kalera AI 新闻聚合](https://news.kalera.ai/en/topics/ai/)

### 国外

**OpenAI**：宣布 11 月 12 日起停止向 SpaceX 旗下 Cursor 提供模型；同日其 Codex 开源 Agent 框架与"Codex for (almost) everything"更新继续推进"全生命周期编码"方向。

来源：[环球网](https://m.huanqiu.com/article/4Szlg1oMkZJ) · [c114](https://www.c114pro.com/ainews/187738.html) · [OpenAI 官方](https://openai.com/index/codex-for-almost-everything/)

**Google**：本月已发布 Gemini 3.7 Flash（面向编码与 Agent 的"日常主力"模型，较 3.6 Flash 生产代码质量显著提升），Agent Development Kit（ADK）2.0 也在推进图式工作流运行时；8 月 30 日 DeepMind 扩展 Co-Scientist 系统。

来源：[Scott Harvanek 观察](https://www.scottharvanek.com/google-gemini-3-7-flash-openai-ultrafast-cerebras-anthropic-claude-text-watermark/) · [Google ADK](https://github.com/google/adk-python) · [InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

**Perplexity**：发布 Portable Computer，把 agent 全栈（harness、orchestrator、planner、tool router）搬上 NVIDIA DGX Spark 本地运行，本地推理零 token 成本，主打敏感数据不出设备。

来源：[Implicator AI](https://www.implicator.ai/perplexity-ships-local-ai-agent-on-nvidia-dgx-spark-with-no-on-device-token-cost/) · [Android Authority](https://www.androidauthority.com/perplexity-portable-computer-local-ai-agent-3703083/)

## 新工具 & CLI

### Perplexity Portable Computer — 本地优先 Agent 运行环境

基于 NVIDIA DGX Spark 的完全本地化 Computer Agent，orchestrator、subagent 与 harness 全部本地执行，本地步骤零积分消耗，云端调用需逐次批准，适合处理不能外发到云端的敏感数据场景。

来源：[Implicator AI](https://www.implicator.ai/perplexity-ships-local-ai-agent-on-nvidia-dgx-spark-with-no-on-device-token-cost/) · [MetaAI Labs](https://metaailabs.com/perplexity-ships-portable-computer-on-nvidia-dgx-spark-local-harness-os-enforced-sandbox-and-zero-per-token-cost-for-local-steps/)

### Google Agent Development Kit（ADK）2.0

Google 的 Agent 开发套件推出 2.0 版本，新增图式工作流运行时（支持路由、扇出/扇入、循环、重试、状态管理与嵌套工作流）、结构化 Agent 间通信的 Task API 等能力。

来源：[Google ADK 仓库](https://github.com/google/adk-python)

### 腾讯混元 TokenHub

随 Hy4 preview 同步上线的 TokenHub 平台，旨在承接开源模型周边工具与生态，帮助开发者在 Coding、Agent 与办公场景中快速接入混元模型。

来源：[腾讯官方](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)

### Codex CLI 持续迭代

OpenAI 官方 changelog 显示 Codex CLI 发布 0.104.0，新增 WS_PROXY/WSS_PROXY 环境变量支持（含小写变体）以配置 WebSocket 代理，终端侧 AI 编程工具持续打磨网络与并发能力。

来源：[OpenAI Codex changelog](https://developers.openai.com/codex/changelog/)

### Chip Huyen《AI Engineering》免费资源库

MIT CSAIL 推荐 Chip Huyen 新书《AI Engineering》的免费在线资源库，系统覆盖基于基础模型构建应用的全流程（提示工程、RAG、Agent、微调、评估、性能与安全），已翻译成十余种语言，强调"工具易过时、原理更持久"。

来源：[InfoQ AI 快讯](https://www.infoq.cn/aibriefs)

## 编程方式

### OpenAI Codex 覆盖软件开发生命周期

OpenAI 发布《Codex for (almost) everything》更新：Codex 现在可处理 GitHub PR 评论、支持多终端标签、在侧栏预览 PDF/表格/幻灯片等文件、加入 SSH 远程开发 alpha 支持，并新增摘要面板跟踪 agent 的计划、来源与产出物，把"写代码"扩展为覆盖检查、评审、协作的全流程工作台。

来源：[OpenAI 官方](https://openai.com/index/codex-for-almost-everything/) · [OpenAI 社区](https://community.openai.com/t/introducing-the-new-codex-for-almost-everything/1379125/2)

### "Spec → Plan → Execute → Verify"四阶段工作流

社区总结的 AI 编程主流工作流正在收敛为四阶段：写一页以内的 spec（问题、约束、成功标准、已知坑）→ 拆解计划 → 单 Agent 单执行循环执行 → 验证。强调先规划后实现、任务独立可测、单文件/单模块粒度，以减少上下文切换。

来源：[Blink Blog](https://blink.new/blog/ai-coding-workflow)

### Agent 技能化成为涨星主线

8 月 29 日 GitHub 日榜前三中，archify（+4,422）、gods-eye-view（+2,998）、scientific-agent-skills（+1,473）全是"技能/可组合能力"形态；ponytail 则反其道强调"少写代码"。开发者正把"技能"做成可安装、可分享、可组合的包，Agent 生态从 Prompt 竞争转向 Skills 资产竞争。

来源：[GitHub 日榜](https://www.cnblogs.com/wflynn/p/22756470/github-daily-growth-2026-08-29)

## 总结

今天的趋势是"模型与基建双线提速"：国产这边腾讯混元 Hy4、智谱 GLM-5.3、MiniMax H3 系列密集发力，开源模型继续比拼效率与价格；国外 OpenAI、Google、Perplexity 则不约而同把重心放到"Agent 全栈与本地化"上——从 Codex 覆盖完整开发生命周期，到 Portable Computer 让 Agent 全链路离线运行，AI 开发的竞争正从"谁能生成"转向"谁能把 Agent 跑得更顺、更可控、更贴近开发者日常工作流"。
