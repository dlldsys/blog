---
title: "AI 开发日报 · 2026年08月22日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-22
tags: ["AI日报"]
---

## 今日要闻

### 1. OpenAI 下调 GPT-5.6 Sol API 定价 20% 以上

8 月 21 日，OpenAI 在开发者社区公告，GPT-5.6 Sol 模型的 API 和积分定价将在未来 3 个月内下调 20% 以上，现已通过 API 提供并逐步向符合条件的 ChatGPT Work 和 Codex 积分套餐开放。此前 GPT-5.6 Sol 已开始向付费 ChatGPT 计划推送，成为 OpenAI 在编码、研究、网络安全和计算机使用领域的旗舰推理模型；同时 GPT-5.6 Luna 将成为免费和 Go 用户的默认模型，下周起开放无限文本聊天和新的 Think 按钮。

来源：[界面新闻](https://www.jiemian.com/article/14968215.html) | [OpenAI Release Notes](https://releasebot.io/updates/openai) | [ChatGPT 发布说明](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

### 2. DeepSeek 发布 V4-Flash-Vision-Exp，首个视觉理解模型

8 月 21 日下午，DeepSeek 官方 API 文档的"模型细节"页面出现新模型 deepseek-v4-flash-vision-exp，这是 V4 系列首个直接支持图片输入的视觉模型。它拥有 1M 上下文、最大输出 384K，支持 JSON Output、Tool Calls、Responses API 及 Anthropic API，图片按尺寸折算成 Token 与文本统一计费，定价与 V4 Flash 完全一致。就在一周前，DeepSeek 开源的 Agent Harness（dsh）因模型不支持图片输入而让社区自行搭建 vision bridge 插件，如今视觉能力正式接入，补齐了 Agent 系统最基础的感知入口。

来源：[36氪](https://36kr.com/p/3949138682379651) | [凤凰网](https://ishare.ifeng.com/c/s/v002OxBWhB9EHWfs1Pg8WDVvSzlUMjO9Izsti9rmrSSYJNI__) | [爱范儿](https://tech.ifeng.com/c/8vmGuAqX5Un)

### 3. 月之暗面发布 Kimi K3，2.8 万亿参数冲击前沿

8 月 21 日，月之暗面发布 Kimi K3，总参数达 2.8 万亿，采用 MoE 架构（896 个专家每次激活 16 个），原生多模态，100 万 token 上下文。在 Arena.ai 前端代码竞技场中，K3 以 1679 分排名第一，超越 Claude Fable 5（1631 分）和 GPT-5.6 Sol（1618 分）；Program Bench 得分 77.8，Terminal Bench 2.1 达 88.3，BrowseComp 达 91.2。月之暗面称 K3 为"首个开放的 3T 级模型"，完整权重计划后续发布，建议使用 64 张以上加速卡部署。

来源：[编程学习之家](http://www.pgsr.cn/news/31681.html) | [清霜之辰博客](https://h89.cn/archives/661.html)

### 4. Anthropic IPO 文件将"AI 抵制"列为风险因素

8 月 22 日消息，Anthropic 在其 IPO 文件中将"AI 抵制"（AI Backlash）正式列为一项风险因素，反映 AI 公司正面临来自公众、监管和社会层面的不确定性。此前 Anthropic 预计最快 8 月底公开递交 IPO 文件，募资规模或超 750 亿美元，可能追平甚至超过 SpaceX 创下的纪录。

来源：[财联社](https://www.cls.cn/detail/2461281)

### 5. 联合国人工智能与人类发展全球对话在西安举办

8 月 20 日至 21 日，联合国人工智能与人类发展系列全球对话第三场活动在陕西西安举办，汇聚政策制定者、技术专家、学术界人士及文化界代表，聚焦人工智能如何重塑人类文明。同期，欧盟 AI 法案透明度规则已于 8 月 2 日生效，成为全球首个要求 AI 系统披露其性质并标注合成内容的大洲级法规。

来源：[人民网](http://world.people.com.cn/n1/2026/0822/c1002-40784133.html) | [Pollar News](https://www.pollar.news/en/threads/ai-revolution)

## 涨星最快项目

本周 GitHub AI 开源生态的最大焦点是 Agent Harness 层的爆发式增长，DeepSeek 开源的 Harness 三天内斩获近 12 万星，成为有记录以来启动最快的仓库之一。

### 1. DeepSeek Harness（dsh）

DeepSeek 于 8 月 13 日开源的 MIT 协议 Agent Harness，模型适配器、工具注册表、会话日志和 Agent Loop 全部可插拔，模型无关，支持所有主流模型提供商。上线 3 天即达 119.8K Stars，是有追踪记录以来启动最快的仓库之一。

GitHub：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### 2. diagram-design

本周 GitHub 飙升榜第一，上周增长 11796 Stars，当前总星标 18.4K。

GitHub：[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 来源：[GitHub 每周飙升榜](https://github.com/OpenGithubs/github-weekly-rank)

### 3. prime-agent

PrimeIntellect 推出的 AI Agent 项目，上周增长 7747 Stars，当前总星标 16.2K。

GitHub：[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | 来源：[GitHub 每周飙升榜](https://github.com/OpenGithubs/github-weekly-rank)

### 4. semantica

semantica-agi 的 AI 项目，上周增长 5369 Stars，当前总星标 7.9K。

GitHub：[semantica-agi/semantica](https://github.com/semantica-agi/semantica) | 来源：[GitHub 每周飙升榜](https://github.com/OpenGithubs/github-weekly-rank)

### 5. Browser Use

基于 Playwright 的浏览器自动化开源原语，当前 109.4K Stars，Cloud v4 推出代码编写型 Web Agent，内部评估通过率从 v3 的 67.3% 提升至 76.5%。

GitHub：[browser-use/browser-use](https://github.com/browser-use/browser-use) | 来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

## 大模型进展

### 国内

**DeepSeek V4-Flash-Vision-Exp 上线。** 8 月 21 日，DeepSeek 发布 V4 系列首个视觉理解模型，拥有 1M 上下文、384K 最大输出，支持图片输入，定价与 V4 Flash 完全一致（空闲时段缓存未命中输入 1.5 元、输出 4.5 元/百万 Token）。视觉能力与一周前开源的 Harness 正式打通，让模型、图片、文件、工具和 Agent 执行链开始连为一体。来源：[36氪](https://36kr.com/p/3949138682379651)

**月之暗面发布 Kimi K3。** 8 月 21 日，Kimi K3 以 2.8 万亿总参数（MoE，896 专家激活 16 个）、原生多模态、100 万 token 上下文发布。Arena.ai 前端代码竞技场 1679 分排名第一，超越 Fable 5 和 GPT-5.6 Sol；Program Bench 77.8 分、Terminal Bench 2.1 达 88.3、BrowseComp 91.2。AA Intelligence Index 为 57，输出速度约 62 token/s。国内 API 定价：缓存命中 2 元、输入 20 元、输出 100 元/百万 Token，官方称编程场景缓存命中率可超 90%。来源：[编程学习之家](http://www.pgsr.cn/news/31681.html) | [清霜之辰](https://h89.cn/archives/661.html)

**智谱 GLM-5.3 API 正式上线。** 8 月 19 日，智谱宣布 GLM-5.3 API 即日起正式上线，模型擅长复杂编码、防御性网络安全和长程任务，在 AA Intelligence Index 中取得 60 分，进入全球前沿模型能力区间，与 Claude Fable 5、GPT-5.6 Sol 并列，权重计划下周开源。来源：[IT之家](http://m.toutiao.com/group/7675546359771988514/)

**阿里 Qwen3.8 系列持续开源。** 8 月 14 日开源的 Qwen3.8-27B 为原生多模态稠密模型（27.78B 参数，Apache 2.0），OSWorld 得分 84.3%、DeepSWE 42.2%，登顶 HuggingFace 开源模型热榜第一；此外还开源了 Qwen3.8-2.4T-A95B，2.4 万亿参数 MoE 激活 95B，262K 上下文可外推至 1M+，是首个 Qwen-Max 级开源模型。来源：[TechPillow](https://www.techpillow.co/blog/qwen3-8-27b-alibaba-open-weight-multimodal-model) | [mer.vin](https://mer.vin/news/qwen3-8-2-4t-a95b-alibaba-open-sources-a-qwen-max-class-2-4t-model/) | [阿里云](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max)

**MiniMax 发布并开源 H3。** MiniMax 发布下一代全模态生成模型 MiniMax-H3 并已开源，在视频编辑方向全球排名第一，发布当天即获华为昇腾、Moore Threads、AMD、Intel 等 16 家芯片厂商和开发者社区支持。来源：[人民日报海外版](https://peoplesdaily.pdnews.cn/tech/er/30052835385)

### 国外

**OpenAI：GPT-5.6 Sol 降价 20%+，Luna 成为免费默认。** 8 月 21 日，OpenAI 宣布 GPT-5.6 Sol API 和积分定价在未来 3 个月内下调 20% 以上，现已通过 API 提供并逐步向 ChatGPT Work 和 Codex 积分套餐开放；GPT-5.6 Luna 将成为免费和 Go 用户默认模型。来源：[界面新闻](https://www.jiemian.com/article/14968215.html) | [OpenAI 发布说明](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

**Google：Gemini 3.7 Flash GA。** 8 月 13 日，Google 推出 Gemini 3.7 Flash，官方称"迄今用于编码和智能体领域最智能的 Flash 级主力模型"，重点升级编程、智能体应用、Web 开发和复杂知识工作，保留约 1M 上下文与 64K 输出。来源：[36氪](https://36kr.com/p/3938616788204935)

**Anthropic：IPO 在即，AI 抵制列为风险。** 8 月 22 日，Anthropic 在 IPO 文件中将"AI 抵制"列为风险因素；此前预计 8 月底递交 IPO 文件，募资规模或超 750 亿美元。来源：[财联社](https://www.cls.cn/detail/2461281)

**Meta：Muse Code 终端编码 Agent。** 8 月 5 日，Meta 正式发布 Muse Code 测试版，由编码专用模型 Muse Spark 1.2 驱动，支持持久后台子 Agent、回放精确事件日志，可在大型代码仓库中完成复杂软件工程任务，直接对标 Claude Code 和 Codex。来源：[36氪](https://36kr.com/p/3927529945168265) | [Meta Research](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)

## 新工具 & CLI

### DeepSeek Harness（dsh）

DeepSeek 8 月 13 日开源的 MIT 协议 Agent Harness，"一切皆插件"：模型适配器、工具注册表、会话日志和 Agent Loop 全部可插拔，模型无关。3 天内斩获 119.8K Stars，V4-Pro GA 同步上线 Responses API 和 Codex 集成。

来源：[GitHub](https://github.com/deepseek-ai/deepseek-harness) | [Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### Meta Muse Code

Meta 首款终端编码 Agent（8 月 5 日测试版），由 Muse Spark 1.2 驱动。核心差异化是持久多 Agent 编排：后台子 Agent 在整个会话中保持存活并维护共享上下文文件，本地事件日志使运行时可回放、重启安全，将 Meta 从模型 API 供应商推进到应用层。

来源：[Meta Research](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) | [36氪](https://36kr.com/p/3927529945168265)

### VS Code 1.133 Agent Host 协议

8 月 12 日，VS Code 1.133 将 Agent 会话移入独立进程并发布 Agent Host Protocol（AHP）规范（MIT），明确定位为与 LSP、DAP 并列的基础设施。会话可在窗口关闭后存活、跨窗口附加、通过 SSH 或开发隧道访问，Claude 会话可逐轮混用 Anthropic 和 Copilot 模型。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools) | [GitHub Copilot CLI](https://github.com/features/copilot/cli)

### Codex CLI v0.105

OpenAI Codex CLI 更新：新增语法高亮、按住空格键口述提示、改进多 Agent 工作流与审批控制等体验优化，安装命令 `npm i -g @openai/codex@latest`。Codex 桌面版（Windows）已邀请首批候补名单用户。

来源：[ZeroNoise](https://zeronoise.ai/posts/orchestration-first-agent-coding-codex-cli-v0105-spec-driven-loops-and-eval-infra-wars-b90thp7gh6/download/pdf)

### Kilo Code

来自荷兰阿姆斯特丹的开源 AI 编程 Agent（Apache-2.0），支持 VS Code、JetBrains、CLI 和 Cloud 四种运行模式，提供 Code/Architect/Debug/Ask/Custom 五种 Agent 模式，通过 Kilo Gateway 接入 500+ AI 模型。

来源：[龙虾智能体](https://clawpk.net/)

### 更多工具速览

- **NVIDIA SkillSpector**：开源的 AI Skills 静态分析扫描器，检测恶意命令注入、prompt 注入、凭证窃取、数据外泄等 16 大类 64 种漏洞模式。[GitHub](https://github.com/NVIDIA/SkillSpector)
- **CLI-Anything**：香港大学开源工具，能将任何有源码的软件自动生成命令行接口，让 AI Agent 直接操控专业软件。[CSDN](https://blog.csdn.net/zohan134/article/details/162497218)
- **Hermes Agent v0.20.0**：Nous Research 推出"Herald"版本，新增流式语音、barge-in、唤醒词、A2A v1.0 插件、签名 Webhook，工具上限从 90 提升至 500。[GitHub](https://github.com/NousResearch/hermes-agent)
- **OpenAI Assistants API 8 月 26 日永久关闭**：/v1/assistants 和 /v1/threads 将停止接受请求，迁移目标为 Responses API。[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

## 编程方式

### Harness 层正在商品化

DeepSeek Harness 以 MIT 协议开源、3 天 119.8K Stars 的速度，把模型适配器、工具注册表、会话日志和 Agent Loop 全部免费交出，宣告 Agent Harness 这一层从"差异化护城河"变为"公共基础设施"。当模型在标准化接口后变得可互换，Harness——而非模型——本应是差异化所在，DeepSeek 却将这一层直接免费化，倒逼竞争向上游移至编排质量、治理能力和端到端工作流。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### Agent 会话协议之争：AHP vs ACP

VS Code 1.133 开源的 Agent Host Protocol（AHP）与 JetBrains 主导的 ACP 正在竞争成为"AI Agent 的 LSP"。Grok Build、OpenClaw 和 DeepSeek Harness 已支持 ACP，VS Code 则用 AHP。两套协议并行意味着集成成本可能保持在低位，但也可能演变为浏览器大战式的分裂。同期，GitHub Copilot 将于 9 月 1 日淘汰 Gemini 3.1 Pro、Claude Opus 4.5/4.6、Claude Sonnet 4.5/4.6 等旧模型，推荐替换为 Claude Opus 5/Sonnet 5、Gemini 3.6 Flash 和微软自研 MAI-Code-1-Flash。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### 八月关停潮加速整合

8 月成为 AI 产品的"清理月"：ChatGPT Atlas 于 8 月 9 日关停（书签未迁移），GitHub Models 于 7 月 30 日完全退役，GitHub Spark 停止新用户并将于 8 月 31 日退场，Flowise 于 8 月 10 日公开归档仓库（直言编码 Agent 让低代码工作流过时），微软在 8 月 18 日前砍掉消费者 Copilot 的群聊、AI 播客、Labs、Deep Research 等功能并合并两个 Copilot 应用。整合方向明确指向 Agent 原生界面。

来源：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)

### HuggingFace 热门开源模型（截至 8 月 18 日）

Qwen3.8-27B 以 415K 下载、10.8K 点赞登顶热榜第一；MiniMax-H3 达 240 万下载、4.1K 点赞；DeepSeek-V4-Flash-0731 达 200 万下载；Kimi-K3 达 220 万下载、10.8K 点赞；DeepSeek-V4-Pro-0813 达 25K 下载。Hugging Face 发布的 2026 年中期报告显示，Qwen 模型在 Hub 上录得约 20.45 亿次下载，远超 Google（4.18 亿）和 Meta（2.27 亿），成为全球下载量最大的开源模型系列。

来源：[方向舵 HF 热榜](https://www.fxdst.com/rankings/open-models/) | [Trending HF Models](https://www.techaimag.com/top-10-hugging-face-models/trending-hugging-face-models-for-august-2026) | [人民日报海外版](https://peoplesdaily.pdnews.cn/tech/er/30052944965)

## 总结

今日 AI 开发的核心主线是"国产模型集体冲击前沿、Harness 层商品化、Agent 协议之争白热化"：DeepSeek 视觉模型补齐 Agent 感知入口、Kimi K3 以 2.8 万亿参数在 Arena 前端代码榜登顶、智谱 GLM-5.3 追平 Fable 5，国产开放模型正从追赶走向并跑；而 DeepSeek Harness 三天 12 万星的开源、VS Code AHP 与 JetBrains ACP 的对峙、以及八月关停潮的加速，则共同指向一个趋势——差异化正从模型层上移至编排、治理和端到端工作流层。
