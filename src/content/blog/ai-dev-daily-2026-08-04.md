---
title: "AI 开发日报 · 2026年08月04日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-04
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI 曝光多智能体模型家族 Astra，被视为 GPT-6 前身

据 The Information 等媒体爆料，OpenAI 正在准备推出一个暂定名为"Astra"的全新模型家族，目前已进入内部测试阶段。Astra 的核心亮点是让多个 AI 智能体围绕同一目标"组队干活"——拆解任务、并行推进、相互校验，可持续处理耗时数小时甚至数天的复杂问题。Astra 已用内部版本攻克了 10 个此前未解的数学与理论计算机科学难题，覆盖高维几何、编码理论、群论、密码学等领域。最终命名可能是 GPT-6 或 GPT-5.7，正式推出还需等待美国新 AI 监管框架审查。

来源：[InfoQ](https://www.infoq.cn/news/uRoTVrUKptoRHzFwSpxj) · [新浪](https://cj.sina.cn/articles/view/7879923512/1d5ae173806801fe2y) · [The Technology Express](https://thetechnologyexpress.com/openai-showcases-astra-multi-agent-ai-system/) · [搜狐](https://m.sohu.com/a/1057502782_122921598/)

### 2. Hugging Face CEO：中国开源 AI 已统治，年底或全面超越美国

8 月 4 日，全球最大开源 AI 平台 Hugging Face 首席执行官克莱门特·德朗格接受 CNBC 采访时直言，中国在开放权重 AI 模型领域已占据明显统治地位，并警告如果势头持续，美国长期垄断的"前沿"阵地也可能在年底前被中国夺走。他指出中国开发者更倾向开放共享、快速迭代，而美国模型厂商正陷入"各自为战"的孤岛困局。此前 OpenAI 训练智能体攻击 Hugging Face 平台时，Hugging Face 部署了英伟达适配优化的中国开源模型来化解威胁，而非使用美国自研技术。

来源：[网易](https://www.163.com/dy/article/L3ETNUIS05561FXV.html) · [36氪](https://36kr.com/p/3914938171020931)

### 3. DeepSeek-V4-Flash 正式版上线公测，价格仅为 Claude 的 1/90

7 月 31 日，DeepSeek-V4-Flash 正式版 API 开启公测，Agent 能力与代码能力大幅增强。在 DeepSWE 基准测试中 V4-Flash 得分 54.4 分，Terminal Bench 2.1 得分 82.7 分；DeepSeek V4-Pro 位列全球综合榜单第 9。价格方面，V4-Flash 仅为 Claude 的 1/90，延续国产模型极致性价比路线。同期谷歌、Meta、微软、亚马逊第二季度 AI 资本开支分别达 449 亿、301 亿、358 亿和 542 亿美元，同比大幅增长 68% 至 110%。

来源：[中财网](http://sj.cfi.cn/newspage.aspx?client=phone&id=20260803001075) · [今日头条](http://m.toutiao.com/group/7669649324564939298/) · [新浪](https://cj.sina.cn/articles/view/7879923048/1d5ae156806801dgdw)

### 4. AI 模型集体降价开源，云算力应用板块迎重大利好

大模型价格战全面升级：DeepSeek-V4-Flash 价格仅为 Claude 的 1/90；OpenAI 下调 GPT-5.6 部分模型定价，Luna 降价 80%（输入 $0.20/百万 Token、输出 $1.2/百万），Terra 降价 20%（输入 $2/百万、输出 $12/百万），旗舰 Sol 定价不变并引入 Fast mode。多模态领域，MiniMax 发布开源模型 H3，视频编辑能力全球第一，价格仅为同类旗舰的极低水平。模型降价与开源双管齐下，正推动云算力应用板块加速落地。

来源：[中财网](http://fund.cfi.cn/p20260801000241.html)

## 涨星最快项目

> 数据来源：GitHub Trending 周榜，采集时间 2026-08-03。

### 1. bojieli/ai-agent-book — 系统化 Agent 教材登顶

《深入理解 AI Agent：设计原理与工程实践》开源主仓库，提供全书正文、PDF 与分章代码，把 Agent 原理和工程实践放进一套连续知识体系。本周新增 9,298 Star，当前总 Star 30,013，周榜第一。

GitHub：[bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)

### 2. block/buzz — Rust 协作通信平台

定位为"A hive mind communication platform"的团队沟通与群体协作平台，使用 Rust 构建，契合多人、多 Agent 协同方向。本周新增 8,217 Star，当前总 Star 21,139。

GitHub：[block/buzz](https://github.com/block/buzz)

### 3. diegosouzapw/OmniRoute — 多模型 AI 网关

统一端点连接多家 AI 提供商和数百个模型，强调配额感知、自动回退、Token 压缩（宣称省 15%~95% Token），兼容 Claude Code、Codex、Cursor 等主流编码工具。本周新增 7,141 Star，当前总 Star 37,943。

GitHub：[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)

### 4. microsoft/AI-For-Beginners — 经典 AI 入门课程

微软出品的 12 周、24 课结构化 AI 课程，在 Agent 工具迅速扩张的同时扎实的基础教育仍有强需求。本周新增 5,601 Star，当前总 Star 59,173。

GitHub：[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)

### 5. alibaba/open-code-review — 规则流水线 + LLM 代码审查

将确定性代码审查流水线与 LLM Agent 结合，内置空指针、线程安全、XSS、SQL 注入等规则，传统规则负责稳定发现已知风险，模型负责上下文理解和解释。本周新增 4,365 Star，当前总 Star 17,925。

GitHub：[alibaba/open-code-review](https://github.com/alibaba/open-code-review)

## 大模型进展

### 国内

- **DeepSeek V4-Flash（深度求索）**：正式版 API 公测，Agent 与代码能力大幅升级，DeepSWE 得分 54.4，Terminal Bench 2.1 得分 82.7，价格仅为 Claude 的 1/90。V4-Pro 位列全球综合榜单第 9。[来源](http://sj.cfi.cn/newspage.aspx?client=phone&id=20260803001075)
- **Kimi K3（月之暗面）**：2.8 万亿参数全球最大开源模型，7 月 27 日开源权重后 30 分钟内获 4000+ 点赞登顶 HuggingFace Trending，Code Arena 编程榜开源模型首次登顶。[来源](https://36kr.com/p/3914938171020931)
- **智谱 GLM-5.2**：开源旗舰模型，百万上下文窗口，DeepSWE 基准得分 44，位列全球综合榜单第 7。[来源](https://cj.sina.cn/articles/view/7879923048/1d5ae156806801dgdw)
- **通义千问 Qwen3.8-Max（阿里）**：2.4 万亿参数预览版，旗舰线重回开源路线，据称是除 Claude Fable 5 外最强模型。[来源](https://m.thepaper.cn/newsDetail_forward_33679819)
- **特斯拉中国接入豆包大模型**：8 月 1 日推送系统更新，Model 3/Y/S/X 全系可通过"嘿，特斯拉"唤醒豆包 AI 深度聊天与实时资讯查询。[来源](http://m.toutiao.com/group/7669211229260464650/)
- **MiniMax H3（开源）**：视频编辑能力全球第一的开源多模态模型，价格仅为同类旗舰极低水平。[来源](http://fund.cfi.cn/p20260801000241.html)

### 国外

- **OpenAI Astra**：全新多智能体模型家族进入内部测试，支持多个 AI 智能体长时间协同分工，被视为 GPT-6 前身，已攻克 10 个此前未解的数学难题。[来源](https://www.infoq.cn/news/uRoTVrUKptoRHzFwSpxj)
- **OpenAI GPT-5.6 降价**：Luna 降价 80%（输入 $0.20/百万 Token），Terra 降价 20%，旗舰 Sol 引入 Fast mode。[来源](http://fund.cfi.cn/p20260801000241.html)
- **Google Gemini 3.5 系列**：DeepMind 官网已更新至 Gemini 3.5 系列，主打"前沿智能 + 行动能力"，Gemini 月活达 9.5 亿，市场份额 27.7%。[来源](https://blog.csdn.net/enheng1238/article/details/163389458)
- **Anthropic Claude Opus 5**：旗舰模型发布，编码、智能体任务和专业知识工作性能显著提升，价格约为 GPT-5.6 的一半。[来源](http://m.hibor.com.cn/wap_detail.aspx?id=b7ec992de36d0841142505fbbcb50886)
- **Meta Llama**：Meta 第二季度 AI 资本开支达 301 亿美元，同比大幅增长，持续加码开源模型训练基础设施。[来源](http://sj.cfi.cn/newspage.aspx?client=phone&id=20260803001075)

## 新工具 & CLI

- **阿里云百炼 CLI（开源）**：2026 年 5 月开源，一行命令打通 AI Agent 全栈能力编排，将主流模型、应用工作流、知识库检索、长期记忆管理、联网搜索统一为终端命令，彻底打破传统 AI 开发工具能力分散、部署繁琐的痛点。[来源](https://www.52ai.com/33927.html) · [阿里云开发者社区](https://developer.aliyun.com/article/1749158)
- **OpenAI openai-cli（官方）**：OpenAI 正式推出官方命令行工具，开发者无需编写 SDK 代码，即可在终端中直接调用 Responses API 与全套 Agent 工具，大幅提升本地开发和自动化脚本效率。[来源](https://m.chinaz.com/ainews/27769.shtml)
- **virgiliojr94/book-to-skill（开源）**：使用 Python 将技术书籍 PDF 转换为 Claude Code Skill，相比把整本书塞进上下文，结构化 Skill 更适合按任务检索并控制无关信息。15,403 Star，本周 +5,223。[GitHub](https://github.com/virgiliojr94/book-to-skill)
- **citrolabs/ego-lite（开源）**：面向 AI Agent 的轻量浏览器自动化工具，强调共享用户已有登录状态且尽量不打扰日常操作，复用登录态降低配置成本。7,689 Star，本周 +3,582。[GitHub](https://github.com/citrolabs/ego-lite)
- **ayghri/i-have-adhd（开源）**：面向编码 Agent 的 Skill，减少冗长铺垫让答案更快抵达重点，把输出协议、信息密度和认知负担视为可工程化的生产力问题。15,719 Star，本周 +5,225。[GitHub](https://github.com/ayghri/i-have-adhd)

## 编程方式

### Spec → Plan → Execute → Verify：真正能交付的 AI 编码工作流

2026 年顶级开发者已从"打开工具直接对话"转向"先规范、后提示"的工程化工作流。核心范式为：先写 Spec（需求规范）→ Plan（让 AI 规划方案）→ Execute（执行编码）→ Verify（验证产出），可让交付速度提升 3 倍。大多数开发者使用 AI 编码工具的方式仍是错误的——缺少规范约束直接生成代码，导致返工率高。

来源：[Blink](https://blink.new/zh-Hans/blog/ai-coding-workflow-2026) · [Blink (EN)](https://blink.new/blog/ai-coding-workflow)

### Cursor + Claude Code 双剑合璧

根据 Stack Overflow 最新调查，71% 的开发者已在使用 Vibe Coding。Cursor 负责 IDE 内交互式编辑，Claude Code 作为终端原生 Agent 处理多文件、长时间任务，配合 CLAUDE.md 配置文件和 Edit-Test Loop 实战打法，开发效率可提升 10 倍。"AI 不会取代程序员，但会用 AI 的团队，会取代不用 AI 的团队"已成为行业共识。

来源：[SegmentFault](https://segmentfault.com/a/1190000048091984)

### OpenAI Codex 全能型助手更新

OpenAI 发布 Codex 重大更新，全球已有超过 300 万名开发者每日使用。Codex 进一步深化对开发者工作流的支持，涵盖 PR 审查、多文件及终端视图查看、任务延续与长期自动化，能深度参与软件构建全生命周期的各类工具、工作流及决策环节。

来源：[OpenAI 官方](https://openai.com/index/codex-for-almost-everything/)

### Agent 框架进入稳定期：LangGraph 1.2.0 与 CrewAI 持续演进

2026 年上半年，LangChain 旗下 LangGraph 于 5 月 12 日发布 1.2.0 版本，进入稳定双周更新节奏，核心新增持久化执行（失败自动恢复）、Human-in-the-loop 的 interrupt/resume 图节点一等公民功能，以及与 LangSmith 的深度集成。CrewAI 则专注于多 Agent 协作编排，以角色定义和任务分配见长。框架选型已从"哪个最好"转向"场景分工"——LangGraph 适合复杂状态图，CrewAI 适合多角色协作，AutoGen 适合研究探索。

来源：[LearnAgent](https://learnagent.org/library/updates/framework-updates-2026/) · [LangChain](https://www.langchain.com/resources/ai-agent-frameworks)

## 总结

今日 AI 行业信号明确指向三大趋势：**多智能体协作成为下一代模型核心能力**——OpenAI Astra 让多个 AI 智能体长时间组队攻克难题，被视为 GPT-6 前身；**中国开源模型全球统治地位获硅谷公开认可**——Hugging Face CEO 直言中国已占据优势，年底或全面超越；**大模型价格战白热化**——DeepSeek 仅为 Claude 的 1/90、OpenAI 降价 80%，降价与开源双管齐下正将 AI 能力推向普惠化。
