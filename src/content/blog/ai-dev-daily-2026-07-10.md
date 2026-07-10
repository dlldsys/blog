---
title: "AI 开发日报 · 2026年07月10日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-10
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI 正式全量发布 GPT-5.6 系列三档模型

7月10日，OpenAI 正式向全球用户开放 GPT-5.6 系列，包含旗舰版 Sol、均衡版 Terra 与轻量版 Luna 三款模型，即日起通过 ChatGPT、Codex 及 OpenAI API 提供服务。Sol 引入全新"Ultra 模式"，可协调 4 个 AI 子代理并行处理代码、网络安全与科研任务；Terra 与 Luna 的输入/输出定价分别为 $2.50/$15 和 $1/$6 每百万 Token。同日，OpenAI 宣布将于 8 月 9 日关停运营不足一年的 Atlas 浏览器，智能浏览能力将整合进 ChatGPT 桌面应用与 Chrome 扩展。

来源：[新华网](http://imgs.xinhuanet.com/tech/20260710/d5d93f14967948ad99fcef1231def932/c.html) · [CSDN AI科技热点日报](https://blog.csdn.net/haohaizi_liu/article/details/162759916) · [ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)

### 2. SpaceXAI 联手 Cursor 发布 Grok 4.5

7月9日，马斯克旗下 SpaceXAI 正式发布 Grok 4.5，这是其与 AI 编程公司 Cursor 联合训练的首款专攻代码与智能体任务的模型，依托数万张 NVIDIA GB300 GPU 完成训练。官方数据显示，Grok 4.5 在关键基准测试中全面超越 Claude Opus 4.8，运行速度达 80 TPS，Token 利用效率为竞品两倍，定价仅 $2/$6 每百万 Token，不到同类模型一半。目前已在 SpaceXAI 控制台、Grok Build 及 Cursor 上线，并成为 Grok Build 默认模型。

来源：[华尔街见闻（头条转载）](http://m.toutiao.com/group/7660176498251072027/) · [微博](https://m.weibo.cn/detail/5318685059449864)

### 3. DeepSeek V4 正式版定档 7月15日

DeepSeek 官方公告，新一代旗舰大模型 DeepSeek V4 将于 7月15日全量正式上线，同步开放 V4 Pro 与 V4 Flash 双版本商用 API。新版本重点强化百万级超长文档解析、全场景工业代码生成等能力，并首创算力峰谷分时定价机制——高峰时段（每日 9-12 时及 14-18 时）API 价格为平时两倍，非高峰维持原价。

来源：[太平洋科技](http://news.pconline.com.cn/2178/21780096.html) · [头条](http://m.toutiao.com/group/7659587647668503075/)

### 4. ChatGPT Work 正式上线，Codex 独立应用下线

OpenAI 同日推出 ChatGPT Work，定位为可跨应用和文件行动、连续工作数小时的项目级智能体，可连接 Google Drive、Slack、邮箱等工具，读取资料、拆解任务、生成方案和可分享网站。同时，独立应用 Codex 正式下线，能力整体并入新版 ChatGPT 桌面 App，与 Chat 模式、ChatGPT Work 并列同一入口。

来源：[微博](https://m.weibo.cn/detail/5319141016732485) · [微博](https://m.weibo.cn/detail/5319131542066971)

### 5. 苹果与 PrismML 接洽，270亿参数模型有望塞进 iPhone

加州理工孵化的 AI 初创公司 PrismML 宣布，已成功将基于阿里 Qwen 3.6 的 270 亿参数模型压缩至可在 iPhone 17 Pro 上本地运行。其核心突破是原生 1-bit 模型压缩技术，权重仅用 {-1, +1} 表示，体积压缩至全精度的 1/14，内存占用降低超 90%，推理速度最高提升 8 倍。苹果已与 PrismML 接洽探讨落地。

来源：[CSDN AI科技热点日报](https://blog.csdn.net/haohaizi_liu/article/details/162759916)

## 涨星最快项目

以下数据来自 2026年6月 GitHub Trending 飙星榜（月增 Star 排序）：

1. **microsoft/markitdown** — 将 PDF、Word、PPT、Excel、音视频一键转为 Markdown，LLM 预处理层事实标配。月增 +34,072 ★，总 161k ★。[GitHub](https://github.com/microsoft/markitdown)

2. **harry0703/MoneyPrinterTurbo** — 接入 LLM 一键生成高清短视频，支持 DeepSeek、通义千问等国产大模型。月增 +29,272 ★，总 93.9k ★。[GitHub](https://github.com/harry0703/MoneyPrinterTurbo)

3. **Leonxlnx/taste-skill** — 赋予 AI Agent 审美品味，告别千篇一律的生成内容。月增 +27,093 ★，总 52.6k ★。[GitHub](https://github.com/Leonxlnx/taste-skill)

4. **Panniantong/Agent-Reach** — 让 AI Agent 无需 API 费用读取 Twitter/Reddit/YouTube 等 17 个平台。月增 +23,835 ★，总 44.5k ★。[GitHub](https://github.com/Panniantong/Agent-Reach)

5. **apple/container** — Apple 官方出品，Mac 上用轻量 VM 跑 Linux 容器，仅支持 Apple Silicon。月增 +17,676 ★，总 44.3k ★。[GitHub](https://github.com/apple/container)

> 数据来源：[51CTO GitHub热点项目盘点](https://www.51cto.com/aigc/11880.html)

## 大模型进展

### 国内

- **DeepSeek V4** — 7月15日全量上线，开放 V4 Pro 与 V4 Flash 双版本，首创峰谷分时定价，强化百万级长文档解析与工业代码生成。（[太平洋科技](http://news.pconline.com.cn/2178/21780096.html)）

- **腾讯混元 Hy3** — 295B 参数 MoE 模型，激活参数仅 21B，附带 3.8B MTP 层用于投机解码，上下文 256K，以 Apache 2.0 协议在 HuggingFace 开源。（[头条](http://m.toutiao.com/group/7659809222892274202/)）

- **美团 LongCat-2.0** — 1.6 万亿参数，业界首个依靠国产算力完成训练、推理全流程的万亿参数大模型，已对外开源。（[CSDN](https://blog.csdn.net/agito_cheung/article/details/162587564)）

- **智谱 GLM-5.2** — 据 LLMCheck 7月指数，GLM 5.2 成为首个在 SWE-Bench Pro 上击败 GPT-5 和 Claude 的开源模型，得分 68.5%。（[LLMCheck](https://llmcheck.net/blog/state-of-open-source-local-llms-july-2026/)）

- **通义千问 Qwen 4.1 32B-A3B** — 在本地 LLM 排行中表现突出，持续推动开源模型竞争力。（[LLMCheck](https://llmcheck.net/blog/state-of-open-source-local-llms-july-2026/)）

### 国外

- **OpenAI GPT-5.6** — Sol/Terra/Luna 三档齐发，Sol 引入 Ultra 模式协调多子代理并行，定价 $5/$30、$2.50/$15、$1/$6 每百万 Token。美国政府参与发布审查。（[新华网](http://imgs.xinhuanet.com/tech/20260710/d5d93f14967948ad99fcef1231def932/c.html) · [ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

- **SpaceXAI Grok 4.5** — 联手 Cursor 联合训练，对标 Claude Opus 4.8，80 TPS，Token 成本仅同类一半。（[华尔街见闻](http://m.toutiao.com/group/7660176498251072027/)）

- **Anthropic Claude Sonnet 5** — 6月30日发布，号称"最 Agent 化的 Sonnet"，可自主规划、使用浏览器和终端，性能接近 Opus 4.8 但价格更低，定价 $2/$10 每百万 Token。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/) · [API Pulse](https://www.getapipulse.com/blog-state-of-ai-api-pricing-july-2026.html)）

- **Anthropic Claude Fable 5** — 经历美国政府出口管制对峙后，于7月1日恢复上线，Anthropic 训练了新的安全分类器，拦截率达 99%。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

- **Google Gemini Spark** — 可自主完成多步骤任务的 AI Agent，能跨 Gmail、Drive 等应用链式操作文件发现、数据提取、推理和邮件撰写，本周扩展至 macOS 并可访问本地文件。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

## 新工具 & CLI

- **ChatGPT Work** — OpenAI 推出的项目级智能体，可连接 Google Drive、Slack、邮箱等工具，连续工作数小时，从"回答问题"走向"执行任务"。（[微博](https://m.weibo.cn/detail/5319141016732485)）

- **Ollama** — 开源 AI 模型本地运行工具完成 6500 万美元 B 轮融资（Theory Ventures 领投），月活开发者接近 890 万，团队仅 14 人。让开发者数分钟内在个人电脑启动 Llama、DeepSeek、Qwen 等开源模型。（[CSDN AI科技热点日报](https://blog.csdn.net/haohaizi_liu/article/details/162759916)）

- **ART Framework** — 7月9日发布的 Python 框架，简化 AI Agent 强化学习训练流程，降低智能体训练门槛。（[ai-damn.com](https://ai-damn.com/art-framework-launches-simplify-ai-agent-training-with-python-1752812139339)）

- **Microsoft Agent Framework (MAF)** — 微软将 AutoGen 整合为统一框架，核心 1.0 于4月发布，7月新增 Python orchestration 模式，Copilot Studio 原生支持 MCP 工具注册。（[CSDN](https://blog.csdn.net/guwentian/article/details/162757496) · [TECHTAEK](https://techtaek.com/autogen%EC%97%90%EC%84%9C-microsoft-agent-framework%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B8%B0-%EC%A0%84-%EC%B2%B4%ED%81%AC%ED%95%A0-%EA%B2%83-2026-%EA%B6%8C%ED%95%9C%C2%B7%EA%B4%80%EC%B8%A1%EC%84%B1/)）

- **MiMo Code** — 小米开源的终端 AI 编程助手，基于 OpenCode 二次开发，MIT 协议，主打"持久记忆系统 + 无限上下文"，独创 Compose 模式和 Dream 记忆沉淀系统。（[CSDN](https://blog.csdn.net/zohan134/article/details/162497218)）

## 编程方式

- **Codex 并入 ChatGPT 桌面应用** — OpenAI 将独立编程应用 Codex 的能力整体并入新版 ChatGPT 桌面 App，编程不再需要切换独立工具，对话与编程统一在同一入口。（[微博](https://m.weibo.cn/detail/5319131542066971)）

- **企业 AI 成本管控时代来临** — 据 404 Media 获取的内部文件，Citi、Atlassian、Adobe、Amazon 等企业纷纷限制高端模型使用。Atlassian 月度 AI 支出从 2025年8月的 500 万美元飙升至 2026年5月的 1500 万美元，年化超 1.2 亿美元。企业开始按模型分层使用，"AI for everything"转向"AI for the right things"。（[ruocco.it](https://ruocco.it/news/the-week-ai-grew-teeth-models-money-and-the-battle-for-control/)）

- **AI Agent 技能生态成独立赛道** — GitHub 上带"-skill"后缀的可插拔 Agent 能力模块集体爆发（taste-skill +27k、last30days-skill +21k、Anthropic-Cybersecurity-Skills +11k），兼容 Claude Code、Cursor、OpenClaw 等主流编程助手，与 MCP 协议生态同步扩张。（[51CTO](https://www.51cto.com/aigc/11880.html)）

- **MCP 协议成为 Agent 互操作标准** — 微软在 Build 2026 大会上宣布全面拥抱 MCP 协议，Copilot Studio 原生支持 MCP 工具注册，LangGraph 主导生产编排，CrewAI 占据原型开发，多 Agent 协作的价值被实证研究重新校准。（[CSDN](https://blog.csdn.net/guwentian/article/details/162757496) · [阿里云天池](https://tianchi.aliyun.com/forum/post/1061920)）

## 总结

今日 AI 行业关键词是"模型商品化"与"巨头分疆"——OpenAI GPT-5.6 三档定价、SpaceXAI Grok 4.5 半价对标、DeepSeek V4 峰谷定价，AI 模型正从"技术稀缺品"转向"按需调用的水电煤"；同时 ChatGPT Work 和 Gemini Spark 让 AI Agent 从概念走向真正可用，企业端则开始认真对待成本管控，编程方式正从"AI 辅助写代码"演进为"AI 自主完成任务"。
