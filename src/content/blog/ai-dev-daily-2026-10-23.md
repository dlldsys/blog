---
title: "AI 开发日报 · 2026年10月23日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-10-23
tags: ["AI日报"]
---

## 今日要闻

### DeepSeek 完成史上最大规模融资：约 1000 亿元人民币

据彭博社 10 月 22 日报道，DeepSeek 在最新一轮融资中筹集约 1000 亿元人民币（折合约 150 亿美元），投资方包括石溪资本、中芯聚源、CPE 源峰、君联资本、吉利等，宁德时代、腾讯、IDG 资本、砺思资本、拾象资本等老股东继续跟投。这也是 DeepSeek 迄今规模最大的一轮融资。

来源：[虎嗅APP](http://m.toutiao.com/group/7699548493655851563/)

### LiteLLM 发布流水线被黑：v1.107.0 携带窃密恶意软件

10 月 21 日，LiteLLM 披露其发布流水线被入侵，恶意版本 1.107.0 被推送到 PyPI 与 Docker 镜像仓库。该版本包含窃取 SSH、云平台与 LLM Provider 密钥的编译恶意软件，并具备远程代码执行能力；PyPI 上七个 wheel 从 11:39 起暴露约 2 小时后被移除。官方建议锁定 1.106.2 并轮换所有可能暴露的密钥。

来源：[LiteLLM 官方公告](https://www.litellm.ai/blog?post=security-incident-oct-21-2026) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/litellm-release-pipeline-hacked-to-distribute-info-stealer-malware/) · [Security.io](https://www.security.io/articles/2026/10/22/litellm-1-107-0-supply-chain-compromise)

### 智谱 GLM-5.3 上线千问AI平台：编程能力较上代提升 50%

智谱 GLM-5.3 已通过千问AI平台直供上线，官方称其为智谱迄今编程能力最强的模型，内部自建体感评测较 GLM-5.2 提升 50%；在白盒代码审查与漏洞发现等网络安全任务中表现持平 Mythos 5，并支持 1M 上下文与 128K 输出。

来源：[千问AI平台模型发布记录](https://platform.qianwenai.com/docs/changelog/models)

### Recursive 开源 Flint：40B MoE 本地编程模型，MacBook Pro 可跑

前 Meta FAIR 田渊栋团队（Recursive Superintelligence）于 10 月 22 日开源首个本地编程模型 Flint：40B 参数 MoE、仅 2.5B 激活参数，Apache 2.0 许可，在 MacBook Pro 上可达 125 tokens/s 左右，模型权重主要由自动化构建的 Eureka Machine 生成，主打"Agent 本地编程"场景。

来源：[Darren Oakey](https://darren.insidemind.com.au/good) · [GitHub: recursive-oss/rec](https://github.com/recursive-oss/rec) · [智东西](http://m.toutiao.com/group/7699501833726853670/)

### Claude Haiku 4.5 进入退役窗口，Haiku 5.5 已接棒

Claude Haiku 4.5 的最早退役承诺日期为 2026 年 10 月 15 日之后，今日（10 月 23 日）正式进入退役窗口。Anthropic 已推出 Claude Haiku 5.5，早期测试中比 4.5 高 11 分、延迟减半，开发者需关注模型代号 `claude-haiku-4-5` 别名重定向与迁移。

来源：[Claude Haiku 4.5 文档](https://platform.claude.com/docs/id/models/haiku-4-5/overview) · [Anthropic: Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) · [AI Release Calendar](https://qcode.cc/en/ai-model-releases-october-2026)

## 涨星最快项目

（数据来源：[NGJOO 恩筑AI](https://www.ngjoo.com/trending/)，统计口径为近一周涨星；昨日报道过的 DeepInfer 等不再重复收录）

### morluto/rea（⭐ 361,531，+9,009）

用 Agent 对任何东西做逆向工程——从 App 行为到原生二进制，TypeScript 实现，连续多日位居开源热度榜前列。

[GitHub](https://github.com/morluto/rea)

### career-ops-hq/career-ops（⭐ 76,482，+306）

开源 AI 求职 Agent，自动化投递、跟踪职位并辅助面试准备。

[GitHub](https://github.com/career-ops-hq/career-ops)

### recursive-oss/rec（Flint 开源仓库）

田渊栋团队本地编程模型 Flint 的官方仓库，Apache 2.0，40B MoE / 2.5B 激活参数，权重托管在 Hugging Face。

[GitHub](https://github.com/recursive-oss/rec)

### Asymptote-Labs/agent-beacon（⭐ 2,425）

跨框架（cross-harness）的自改进记忆层，为 AI Agent 提供可复用的长期记忆与检索能力。

[GitHub](https://github.com/Asymptote-Labs/agent-beacon)

### OpenBMB/MiniCPM-V

端侧部署的多模态小模型家族（图片、视频、语音交互），近一周热度持续走高，是本地多模态的实用选择。

[AI Quick Bites](https://aiquickbites.com/) · [GitHub](https://github.com/OpenBMB/MiniCPM-V)

## 大模型进展

### 国内

**DeepSeek**：完成约 1000 亿元史上最大规模融资（10 月 22 日）；同时 V4.1-Flash 连续两周位居全球大模型周 Token 调用量榜首（32.8 万亿 Token，环比下滑 20%）。[虎嗅APP](http://m.toutiao.com/group/7699548493655851563/) · [每日经济新闻·调用榜](http://m.toutiao.com/group/7698198922950443560/)

**智谱 GLM**：GLM-5.3 上线千问AI平台，编程能力较 5.2 提升 50%；GLM-5.3-Flash 以周调用 12.2 万亿 Token 排名全球第二。[千问AI平台](https://platform.qianwenai.com/docs/changelog/models) · [每日经济新闻](http://m.toutiao.com/group/7698198922950443560/)

**科大讯飞**：发布基于全国产算力训练的星火 X2.6 大模型，并推出全新端云一体协同架构，在模型能力、算力效率与应用场景上进一步升级，刘庆峰同期谈及国产算力差距与发展前景。[新浪财经](http://m.toutiao.com/group/7699613736369193508/)

**阶跃星辰**：Step5 Preview 周调用量达 11.5 万亿 Token，跻身全球调用榜第三。[每日经济新闻](http://m.toutiao.com/group/7698198922950443560/)

**通义千问**：Qwen3 系列 Plus 模型更新（10 月 22 日），实现思考模式与非思考模式融合、对话中可切换，推理能力显著超过 QwQ。[GpuGeek 模型页](https://ai.gpugeek.com/model)

### 国外

**Anthropic**：Haiku 4.5 进入退役窗口、Haiku 5.5 接棒；10 月 21 日发布新版客户端 SDK（Python SDK 2.0.0、TypeScript SDK 1.0.0、C# SDK 13.0.0）及 ant CLI，默认 API 版本更新为 2026-10-21。[Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)

**OpenAI**：GPT-6.1 Sol 以接近 Astra 的能力、不到其一半的 Token 价格主打高难度编程与专业工作；GPT-6 Pro 在 ChatGPT 中支持多智能体并行处理任务；主动型助手 dot 持续推进复杂项目。[OpenAI 新闻中心](https://openai.com/zh-Hans-CN/news/research/?display=list) · [OpenAI 发布说明](https://openai.com/zh-Hans-CN/products/release-notes/)

**Google**：Gemini Enterprise Agent Platform CLI 默认启用进程级沙箱运行命令以保护工作站，可通过 `--sandbox=false` 或 `--unrestricted` 关闭。[Gemini Agent Platform release notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)

## 新工具 & CLI

- **LiteLLM 安全提醒**：1.107.0 已被 PyPI/Docker 移除，请锁定 1.106.2 并轮换暴露的 SSH/云/LLM 密钥；官方已发布完整事故复盘。[LiteLLM Blog](https://www.litellm.ai/blog?post=security-incident-oct-21-2026)
- **Claude SDK + ant CLI 大版本更新**：Python 2.0.0 / TypeScript 1.0.0 / C# 13.0.0，ant CLI 默认发送 API 版本 2026-10-21。[Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
- **Gemini Agent Platform CLI 沙箱**：进程级沙箱默认开启，终端 Agent 操作更安全。[Release notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)
- **OpenCode 2.0**：推出 Code Mode（代码模式）、后台 Agent 与升级机制，Agent 可在 IDE 后台持续运行。[AIToolsReview](https://aitoolsreview.co.uk/insights/opencode-2-0-shared-service)
- **OpenAI Agents SDK 0.24.0**：10 月 15 日发布于 PyPI，Python 版持续迭代。[PyPI](https://pypi.org/project/openai-agents/)
- **Glean 无头 Agent 构建**：面向 Claude Code、Cursor 与 Codex 的新工作流，Agent 以 spec 文件形式在代码库中定义、测试并发布。[Unite.AI](https://www.unite.ai/glean-adds-headless-agent-building-for-claude-code-cursor-and-codex/)

## 编程方式

- **Agentic coding 从"新特性"走向"核心基础设施"**：Claude Code、Codex CLI、OpenCode 在数天内密集更新，VS Code 团队甚至为同时管理多个 Agent 会话构建了可视化控制面板——四个不同方向、同一个论点：终端/IDE 里的 Agent 正在成为开发工具链的地基。[shattered.io](https://shattered.io/claude-code-codex-cli-opencode-update-4-days-2026/)
- **本地小模型 + Agent 编程成为可行路径**：Flint 证明 2.5B 激活参数、MacBook Pro 可跑的本地模型已能承载 Agent 编程任务，端侧推理与云端大模型的分工边界正在被重画。[GitHub](https://github.com/recursive-oss/rec)
- **Agent 以"文件"为单位交付**：Glean 把 Agent 定义成 spec 文件放进仓库、随代码评审与版本管理，Agent 资产开始享受与代码同等的工程化待遇。[Unite.AI](https://www.unite.ai/glean-adds-headless-agent-building-for-claude-code-cursor-and-codex/)

## 总结

今日关键词是"安全与本地化"：LiteLLM 供应链事件给所有 AI 工具链敲响密钥轮换警钟，DeepSeek 融资与星火 X2.6、GLM-5.3 等国产模型密集发力，而 Flint 的发布则把"本地可跑的 Agent 编程模型"正式摆上台面——AI 开发栈正在变得更便宜、更安全，也更贴近开发者自己的机器。
