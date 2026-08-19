---
title: "AI 开发日报 · 2026年08月19日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-19
tags: ["AI日报"]
---

## 今日要闻

### 1. Google 发布 Gemini 3.5 Flash 模型

8 月 19 日，Google 开发者官方通过社交媒体宣布 Gemini 3.5 Flash 模型正式发布。官方称开发者社区正快速跟进该模型，并已涌现出多种新的集成方案和创意开发工具，Google 将精选社区优秀作品进行展示。目前尚未公布模型的具体技术细节与性能数据。

来源：[InfoQ 全球 AI 大模型资讯](https://www.infoq.cn/aibriefs)

### 2. OpenAI 暂停最新模型 RL 训练两周，前沿运行搁置

OpenAI 宣布已暂时暂停其最新拟部署模型的强化学习（RL）训练两周，以强化研究安全措施并进行红队测试。此外，其最大规模计划中的前沿 RL 运行仍处于搁置状态。OpenAI 解释称，随着模型能力日益增强，内部开发与测试相关风险也随之增加，因此需要提高安全标准。

来源：[InfoQ 全球 AI 大模型资讯](https://www.infoq.cn/aibriefs)

### 3. Anthropic 预计数周内 IPO，Q2 营收超 115 亿美元

8 月 19 日消息，Anthropic 预计将在几周内（约 10 月）进行 IPO。其第二季度营收超过 115 亿美元，较 2025 年同期实现约 14 倍的强劲增长，较第一季度亦增长逾一倍。若以 2 万亿美元甚至更高估值上市，将成为史上规模最大的首次公开募股。

来源：[财联社微博](https://m.weibo.cn/detail/5333536619890013) | [搜狐·大模型下半场全景扫描](https://m.sohu.com/a/1063978041_122755661/)

### 4. DeepSeek-V4 自 8 月 17 日起上调价格，峰谷定价高峰涨 350%

8 月 13 日，DeepSeek 确认 DeepSeek-V4-Flash 和 DeepSeek-V4-Pro 自 8 月 17 日起上调价格，实行峰谷分时定价，高峰时段输出价格涨幅高达 350%。这是国产龙头模型首次系统性价格上调，标志着"绝对低价普惠"时代的终结。招商证券国际分析认为，这一动作验证了推理需求超预期、算力供给偏紧的现实。

来源：[搜狐·大模型下半场全景扫描](https://m.sohu.com/a/1063978041_122755661/)

### 5. OpenAI 加强 AI 模型安全监控，Hugging Face 遭入侵后收紧防护

当地时间 8 月 18 日，OpenAI 表示将加强对开发中 AI 模型的监控和安全防护，计划跟踪未发布模型处理问题及使用网络工具的行为，目标是在发现异常行为后 30 分钟内向安全团队发出警报，并增加了对部分 AI 模型访问的限制。

来源：[界面新闻](https://www.jiemian.com/article/14944029.html)

## 涨星最快项目

统计周期：2026 年 8 月 10 日 — 8 月 16 日。本周 GitHub AI 开源热度的关键词是"把智能体真正投入工作"，视觉技能、长时间任务代理、可审计上下文与分层记忆同时进入前列。

### 1. cathrynlavery/diagram-design

将图表制作变成智能体技能，内置 27 类架构、流程、时序、数据和分析图形，输出可浏览或编辑的 HTML 与 SVG，把"图的语义"与布局分开。上周新增约 15,600 Stars，当前 19,677 Stars。

GitHub：[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

### 2. PrimeIntellect-ai/prime-agent

基于递归语言模型思路的长任务代理框架，把上下文当作可编程变量，提供守护进程、断线重连、目标心跳与有预算的自主模式，使任务跨会话持续推进。上周新增约 6,400 Stars，当前 16,615 Stars。

GitHub：[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)

### 3. semantica-agi/semantica

位于 LLM、向量库与智能体框架之下的上下文治理层，把输入上下文、事实来源、规则与决策组织为可查询图结构，提供知识抽取、冲突检测与 W3C 来源追踪，适合金融、医疗等需要问责的场景。上周新增约 5,300 Stars，当前 8,233 Stars。

GitHub：[semantica-agi/semantica](https://github.com/semantica-agi/semantica)

### 4. TencentCloud/TencentDB-Agent-Memory

腾讯云开源的智能体分层记忆方案，短期层将工具日志外置并用 Mermaid 符号图保留任务结构，长期层把对话提炼为原子事实、场景与画像，可从执行轨迹生成技能。上周新增约 3,600 Stars，当前 22,285 Stars。

GitHub：[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)

### 5. addyosmani/agent-skills

将软件工程做法整理成 24 个可执行技能，覆盖定义问题、制定计划、实现、验证、评审与发布，可安装到 70 多种代理宿主，为每项工作规定步骤、检查点、证据和退出条件。上周新增约 2,900 Stars，当前 87,794 Stars。

GitHub：[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

## 大模型进展

### 国内

**DeepSeek：涨价与开源框架并行。** 除上述 V4 峰谷定价外，8 月 13 日晚 DeepSeek 发布并开源了 DeepSeek Harness（DSH）开发者预览版 v0.1，采用 MIT 协议。招商证券国际在报告中直言，DSH 的战略意图是从模型层向框架层上移，做"Agent 时代的安卓"——通过定义"动态可组合 Agent"运行标准增强生态定义权。来源：[搜狐](https://m.sohu.com/a/1063978041_122755661/)

**通义千问 Qwen3.8-27B 发布并登顶 HF 热榜。** 8 月 13 日阿里巴巴发布 Qwen3.8-27B 模型，并同步开放旗舰模型权重，主打"家用显卡也能跑"，降低开发者使用门槛。该模型登顶 Hugging Face 开源模型热榜第一，同时发布了 FP8 量化 27B 版本，在保持接近原精度性能的同时大幅降低显存与计算开销。来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/) | [HyperAI](https://hyper.ai/en/stories/3c6993de807d20485350b162fbbe2888)

**智谱发布 GLM-5.3。** 仅靠后训练便将编程能力提升 50%。来源：[搜狐](https://m.sohu.com/a/1063978041_122755661/)

**中国大模型调用量连续多周保持全球第一。** Hugging Face 报告指出，2026 年以来大部分月份中国 AI 企业发布的最大开源模型在参数规模上显著超越美国同行，基于 Qwen 的衍生模型数量已超过 15 万个，全球模型调用量排名前十的模型中 6 个为国产模型。来源：[凤凰网](https://finance.ifeng.com/c/8vhwipMYIA0) | [搜狐](https://m.sohu.com/a/1063978041_122755661/)

### 国外

**Google：Gemini 3.5 Flash 与 3.7 Flash 接连发布。** 8 月 19 日发布 Gemini 3.5 Flash；此前 8 月 13 日 Gemini 3.7 Flash 已正式 GA（generally available），Google 称其为"迄今编码与 Agent 最强工作模型"，保留 1M 上下文窗口、64K 最大输出与多模态输入。来源：[InfoQ](https://www.infoq.cn/aibriefs) | [LLM API Changelog](https://github.com/janwilmake/state-of-llm-apis/blob/main/changelog.md)

**OpenAI：Ultrafast 模式预览与青少年版 ChatGPT。** 8 月 13 日推出 Ultrafast 模式预览，由 Cerebras 驱动，GPT-5.6 Sol 速度最高提升至 14 倍，可达 750 输出 token/秒；8 月 18 日推出青少年版 ChatGPT，提供更强的内置保护、健康使用功能与家长控制。来源：[OpenAI 新闻中心](https://openai.com/zh-Hans-CN/news/product-releases/?display=list) | [Gen AI Live](https://www.goml.io/gen-ai-live)

**Meta：发布 Muse Glimmer 30B 开源多模态模型。** Apache 2.0 协议，约 300 亿参数，可在消费级 GPU 上实现本地 Agent 长期运行，内存占用低、速度快，支持 100 余种语言，面向自主 Agent 与复杂任务执行。来源：[InfoQ](https://www.infoq.com/ai-ml-data-eng/news/)

**NVIDIA：Nemotron 3.5 Lightning 30B 开源 MoE。** 8 月 11 日发布，3B 活跃参数，1M 上下文，输出速度中位数达 301 token/s，定位于 Agent 高频执行层，推动 Agent 推理从租用 API 向自有 GPU 迁移。来源：[AI News Roundup](https://www.mejba.me/blog/ai-news-roundup-august-2026)

## 新工具 & CLI

### DeepSeek Harness（DSH）

DeepSeek 开源的 Agent 运行框架，MIT 协议，设计思路是"一切皆插件"——模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等所有 Agent 能力均由插件组合而成，可自由替换、灵活重组。作为 CLI 编码 Agent 在 3 天内即收获 119.8k Stars。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools/blob/main/README.md) | [搜狐](https://m.sohu.com/a/1063978041_122755661/)

### Muse Code

Meta 的终端编码 Agent（8 月 5 日 beta），支持持久后台子智能体、精确回放的事件日志，并搭载 Muse Spark 1.2，面向本地工作流。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools/blob/main/README.md)

### GitHub Copilot CLI

8 月 13 日周更版本新增 /tasks、队列提示与 shell 命令、headless --plan 加 --mode autopilot 以及 /rewind 回退，使终端成为多智能体控制面板。

来源：[neodrop.ai](https://neodrop.ai/post/BabpZ37GegD)

### Replit MCP

8 月 14 日更新，Replit MCP 可从兼容客户端创建、检查、更新并发布应用，新增工作区区域、可共享技能与企业 Admin API。

来源：[neodrop.ai](https://neodrop.ai/post/BabpZ37GegD)

### CLIO

终端 AI 编码 Agent，支持多种 provider 与模型，最新版本 20260815.2 于 8 月 16 日发布。

GitHub：[SyntheticAutonomicMind/CLIO](https://github.com/SyntheticAutonomicMind/CLIO/)

### Agent 框架动态

- **Microsoft Orchard**：8 月 3 日开源，框架使训练自主 AI Agent 的成本大幅降低（约 10 倍），同时公开训练数据、评估方法与三个预训练模型，面向学术实验室与小团队。来源：[BitsMinds](https://www.bitsminds.com/news/microsoft-orchard-open-agent-training-framework-2026)
- **Tencent Youtu-agent**：8 月 18 日腾讯开源，构建、运行与评估自主 AI Agent 的高性能框架，具备数据分析、文件处理等实用能力。来源：[AI Damn](https://ai-damn.com/tencent-open-sources-ai-agent-framework-youtu-agent-1756428786611)
- **Google A2A 协议**：8 月 18 日，Google 的 Agent2Agent 协议（A2A）移入 Agentic AI Foundation，与 Model Context Protocol 等开放 Agent 基础设施并列。来源：[AI Agent Store](https://aiagentstore.ai/ai-agent-news/this-week)

## 编程方式

### Claude Code 升级到 Opus 5

Claude Code 成为 8 月终端优先 AI 编码 Agent 的首选，7 月 24 日 Opus 5 发布带来近旗舰级质量、价格减半，并新增 per-request effort 调节。多数开发者开始组合使用：一个终端 Agent + 一个 IDE + 一个廉价模型或审查工具。

来源：[Build Fast With AI](https://www.buildfastwithai.com/blogs/7-ai-tools-changed-developer-workflow-augustt-2026)

### Roo Code 的"模式"驱动设计

Roo Code 以可切换的"模式"（Modes）为核心，每种模式针对特定开发任务深度优化，包含系统指令、步骤、检查点与退出条件，将 AI 行为范式标准化而非简单堆砌提示词模板。

来源：[CSDN](https://blog.csdn.net/weixin_42601547/article/details/160512367)

### AI 工具多入口渗透

Claude Code、Google Antigravity、Qwen Code、Qwen Cloud CLI 共同说明一件事：AI 不再只停留在网页聊天框，而是进入 IDE、终端、浏览器、云平台、RAG 系统与办公软件。Qwen Code Weekly 在 v0.16.2 中引入 Parallel Agent Panel 等能力。

来源：[CSDN](https://blog.csdn.net/qq_32892383/article/details/161633701)

## 总结

今日 AI 开发的核心趋势是从"模型竞赛"转向"Agent 工程与商业化"：Google 与 OpenAI 持续迭代模型，而 DeepSeek 以涨价加开源 Harness 宣告框架层成为新战场，Anthropic 的天价 IPO 预期则将 AI 商业化推向高潮。
