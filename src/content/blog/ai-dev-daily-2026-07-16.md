---
title: "AI 开发日报 · 2026年07月16日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-16
tags: ["AI日报"]
---

## 今日要闻

### 1. WAIC 2026 明日开幕：108 款芯片、261 款大模型集中亮相

2026 世界人工智能大会暨人工智能全球治理高级别会议将于 7 月 17 日至 20 日在上海举行，主题为"智能伙伴 共创未来"。展览面积首次突破 10 万平方米，1100 余家企业参展、3000 余项展品亮相、超 300 款产品全球首发。华为将首展业界最大规模超节点 Atlas 950 真机（最大支持 8192 张昇腾 950DT 芯片直连），努比亚将展出全球首款 AI 智能体手机，阶跃星辰将推出面向智能体原生的 Agent 操作系统。9 位图灵奖/诺奖得主参会，强化学习之父理查德·萨顿、深度学习三巨头之一约书亚·本吉奥等将发表演讲。

来源：[36氪](https://36kr.com/p/3896827901200259)

### 2. Mozilla 发布 2026 开源 AI 现状报告：DeepSeek V4 Flash 月用量登顶

Mozilla 于 7 月 14 日发布 2026 年《开源 AI 现状报告》。报告显示，基于 Chatbot Arena 数据，开源模型与闭源模型的平均差距已缩小至 3.3%，在编码、指令执行和通用知识方面基本持平。在 API 调用月消耗量方面，前五名均为开源模型——DeepSeek V4 Flash 以 18.4T Tokens 位居榜首，小米 Mimo-V2.5 以 14.9T Tokens 第二，腾讯 Hy3 Preview 以 14.8T Tokens 第三。同时，GPT-4 级模型每百万 Token 价格已从 2022 年末的 20 美元跌至 0.40 美元，36 个月降至五十分之一。

来源：[凤凰网科技](https://tech.ifeng.com/c/8umOPjOSWJx)

### 3. OpenAI GPT-5.6 家族公开发布：Sol、Terra、Luna 三型号齐亮相

7 月 9 日，OpenAI 正式公开发布 GPT-5.6 家族，包含三款型号：旗舰 Sol 主打高级 Agent 能力，覆盖编码、生物和网络安全；Terra 面向日常任务，以 GPT-5.5 级性能、半价成本为卖点；Luna 聚焦速度与低成本。此次全面发布此前因美国政府要求短暂限制了访问权限。此前 GPT-5.5 已于 5 月 5 日成为 ChatGPT 默认模型。

来源：[BuildEZ](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)

### 4. DeepSeek V4 正式版即将上线：百万 Token 上下文 + 峰谷定价

DeepSeek 官方宣布 V4 正式版计划于 7 月中旬正式上线，标配 100 万 Token 上下文窗口。V4 正式版包含 Flash 和标准两个版本，推理算力消耗仅为 V3.2 的 27%，并提供 25% 永久折扣 + 峰谷定价策略。旧 API 接口（deepseek-chat 与 deepseek-reasoner）将于 7 月 24 日停止使用。模型已开源权重，支持本地部署，与华为昇腾 950 芯片实现深度协同。

来源：[TechNode](https://technode.com/2026/06/30/deepseek-to-launch-v4-in-mid-july-with-new-peak-time-api-pricing/) · [CSDN](https://blog.csdn.net/starzhou/article/details/160746068)

### 5. Meta 发布 Muse Image 图像生成模型，Samsung 开发 GAIA AI 芯片

Meta 于 7 月 7 日发布迄今最先进的图像生成模型 Muse Image，支持理解复杂提示词、混合照片、生成功能性二维码，并可与 Instagram、WhatsApp 等 Meta AI 应用集成。此外，Samsung 正在开发面向 PC 的专用 AI 加速器芯片 GAIA，HP 和 Lenovo 已开始测试原型。

来源：[BuildEZ](https://www.buildez.ai/blog/ai-new-model-july-2026-developments) · [ghacks](https://www.ghacks.net/category/ai/)

## 涨星最快项目

### 1. iOfficeAI/OfficeCLI — AI Agent 专用的 Office 操作工具

OfficeCLI 是首个面向 AI Agent 的 Office 套件，让智能体直接读写和自动化 Word、Excel、PowerPoint 文件。免费开源、单一二进制文件、无需安装 Office。本周达 14,504 星、周增 5,789 星。Agent 进入办公场景，文档/表格/PPT 是绕不过去的入口。

GitHub：[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)

### 2. Zackriya-Solutions/meetily — 隐私优先的本地 AI 会议助手

Rust/Tauri 桌面应用，使用本地 Whisper/Parakeet 转录 + Ollama 摘要，支持 Metal、CoreML、CUDA、Vulkan 硬件加速，100% 本地处理无需上云。本周达 22,729 星、周增 8,795 星。

GitHub：[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)

### 3. asgeirtj/system_prompts_leaks — AI 系统提示词泄露库

收录 Anthropic、OpenAI、Google、xAI、Cursor、Copilot 等 10+ 厂商的系统提示词，已更新至 GPT-5.6 Sol 和 Codex GPT-5.6 的材料，包括 Claude Fable 5 长达 3,800 行的提示词。本周达 55,869 星、周增 7,765 星。

GitHub：[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)

### 4. usestrix/strix — AI 渗透测试工具

开源 AI 渗透测试工具，利用自主 Agent 团队像攻击者一样测试应用程序——拦截 HTTP、驱动浏览器、打开 Shell、编写漏洞利用代码，覆盖 OWASP Top 10。本周达 40,192 星、周增 6,443 星。

GitHub：[usestrix/strix](https://github.com/usestrix/strix)

### 5. diegosouzapw/OmniRoute — 免费 AI 网关

单一接口整合 231+ 大模型供应商（50+ 免费），可将 Claude Code、Codex、Cursor、Cline、Copilot 直连免费 Claude/GPT/Gemini。RTK+Caveman 堆叠压缩技术最高可省 95% Token。本周达 15,126 星、周增 4,268 星。

GitHub：[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)

## 大模型进展

### 国内

- **DeepSeek V4 正式版**：7 月中旬上线，100 万 Token 上下文窗口，推理算力仅为 V3.2 的 27%，开源权重，DeepSeek V4 Flash 月用量 18.4T Tokens 全球第一。[来源](https://technode.com/2026/06/30/deepseek-to-launch-v4-in-mid-july-with-new-peak-time-api-pricing/)
- **小米 Mimo-V2.5**：全球 API 调用量月消耗 14.9T Tokens，排名全球第二，仅次于 DeepSeek V4 Flash。[来源](https://tech.ifeng.com/c/8umOPjOSWJx)
- **腾讯 Hy3 Preview**：月用量 14.8T Tokens 排名全球第三，前五名均为中国开源模型。[来源](https://tech.ifeng.com/c/8umOPjOSWJx)
- **通义千问 Qwen 3.5-72B**：在 Chatbot Arena 排行中评分 1443，居全球开源模型前列，衍生生态活跃。[来源](https://joulyan.com/en/blog/the-us-vs-china-ai-race-a-july-2026-performance-analysis-of)
- **阶跃星辰 Agent 操作系统**：将在 WAIC 2026 上展出面向 AI 智能体原生的底层系统，直接管理 Agent 的生命周期、记忆、工具调用与协作流程。[来源](https://36kr.com/p/3896827901200259)
- **中国开源模型 HuggingFace 占比 41%**：中国开放权重模型占 HuggingFace 下载量的 41%，已超越美国模型。[来源](https://m.sohu.com/a/1049830895_122066679/)

### 国外

- **OpenAI GPT-5.6 家族**：7 月 9 日公开发布 Sol（旗舰 Agent）、Terra（半价日常）、Luna（快速低价）三款型号。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)
- **OpenAI gpt-oss 120B/20B**：开放权重推理模型，Apache 2.0 许可证，120B 面向前沿级推理和编码，20B 面向消费端。[来源](https://openai.com/open-models/)
- **Anthropic Claude Sonnet 5**：6 月 30 日发布，成为 Free/Pro 默认模型，输入 $2/百万 Token、输出 $10/百万 Token。Claude Fable 5（Mythos 级）已在 6 月末恢复访问。Claude Opus 4.8 于 5 月 28 日首发。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)
- **Google Gemini 3.5 Flash & Omni Flash**：Omni Flash 为原生多模态模型，支持视频工作流；同期发布 Nano Banana 2 Lite 和 Gemini 3.5 Live Translate（支持 70+ 语言实时语音翻译）；开源模型 Gemma 4 12B 6 月发布。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)
- **Meta Muse Image**：7 月 7 日发布，Meta 最先进图像生成模型，支持复杂提示词理解、照片混合和功能性二维码生成。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)
- **Microsoft MAI 模型家族**：Build 2026 发布 7 款基础模型（MAI-Thinking-1、MAI-Image-2.5、MAI-Code-1-Flash 等），已集成至 Excel、Outlook，以降低对 Anthropic 模型的依赖（此前年支出约 5 亿美元）。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)
- **xAI Grok 4.5**：马斯克宣布 7 月初发布，定位为"Opus 级模型，但更快、更省 Token、成本更低"。[来源](https://www.buildez.ai/blog/ai-new-model-july-2026-developments)

## 新工具 & CLI

- **GitHub Copilot CLI（Beta）**：7 月 10 日公开测试，将 AI 编程助手能力从代码编辑器扩展到终端环境，开发者可在 Terminal 中直接使用 AI。来源：[ai-damn](https://ai-damn.com/github-copilot-cli-beta-ai-comes-to-the-terminal-1759014146319)
- **openai-cli**：OpenAI 于 7 月 13 日发布的命令行工具，将 AI 能力直接带入终端，让开发者在命令行中调用 OpenAI 模型。来源：[ai-damn](https://ai-damn.com/openai-s-new-cli-tool-brings-ai-power-to-your-terminal-1778213693127)
- **Gemini CLI Extensions**：Google 为 Gemini CLI 推出第三方扩展功能，首批合作伙伴包括 Figma 和 Stripe，允许开发者无需 Google 审核直接发布扩展。来源：[ai-damn](https://ai-damn.com/google-gemini-cli-expands-with-third-party-extensions-1760052243895)
- **subagentmaxxing**：无依赖 Python CLI 工具，将多个编码 Agent（OpenAI Codex、Claude Code 等）统一到单一接口，支持扇出能力和远程执行，驱动多模型 Agent 编排。来源：[TheNextGenTechInsider](https://www.thenextgentechinsider.com/pulse/subagentmaxxing-cli-normalizes-multi-model-agentic-orchestration)
- **JetBrains Koog**：JetBrains 3 月发布的 Java 企业级 AI Agent 框架，让 Java 后端无需引入 Python 微服务即可编排 LLM。来源：[JetBrains Blog](https://blog.jetbrains.com/ai/2026/03/koog-comes-to-java/)

## 编程方式

### AI 工具从"辅助编码"向"辅助项目管理"进化

7 月中旬，三家头部 AI 工具厂商集中推送面向开发者工作流的新功能：

- **ChatGPT 项目模板库**：Plus/Team 用户可从数十个预置模板（React+TS、FastAPI、Flutter 等）直接启动项目空间，预置代码规范、组件库信息和自定义指令，支持创建团队定制模板。[来源](https://blog.csdn.net/2601_96168194/article/details/162670236)
- **Claude 批量文件处理**：Pro/Team 用户可一次性上传整个项目文件夹（200+ 文件），Claude 自动扫描建立索引，支持生成架构文档、代码质量扫描和测试用例建议，跨文件分析能力突出。[来源](https://blog.csdn.net/2601_96168194/article/details/162670236)
- **Gemini GitHub 仓库分析**：输入 GitHub 仓库地址，Gemini 自动拉取代码并分析项目结构，可针对代码库提问核心模块、数据库 Schema、性能优化等。目前仅支持公开仓库。[来源](https://blog.csdn.net/2601_96168194/article/details/162670236)

### Cursor 3 引入 Cloud Agents

Cursor 3 于 4 月发布，核心新功能 Cloud Agents 让 AI 代理在隔离虚拟机中持续运行完整开发环境，即使笔记本关闭也能继续执行任务，将 Cursor 从代码编辑器重新定位为 Agent 编排控制台。[来源](https://anycap.ai/page/en-US/ai/cursor-ai-2026-new-features-guide)

### 多模型协作进入开发工作流

openai/codex-plugin-cc 让 Claude Code 可将代码审查或任务委派给 Codex，标志着多模型协作进入开发工作流——一个 Agent 不再包办所有事情，而是开始调度另一个更适合的 Agent。[来源](https://blog.csdn.net/u014390502/article/details/162793206)

## 总结

今日 AI 行业的核心信号很清晰：大模型从"技术展示"进入"应用落地"关键阶段，开源模型用量全面超越闭源，Agent 正从聊天对象变为操作系统——WAIC 2026 明日开幕将集中验证这一趋势。
