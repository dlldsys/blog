---
title: "AI 开发日报 · 2026年08月12日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-12
tags: ["AI日报"]
---

## 今日要闻

### 1. GPT-6 要来了：内部代号 Astra，参数据称破 10 万亿

多方信源透露 OpenAI 正在研发的下一代旗舰模型 GPT-6（内部代号 Astra），参数量估计约 10 万亿，是 GPT-4（约 1.8 万亿）的五倍以上。OpenAI 目前暂缓发布，年底还有更大的"Doug"计划。Astra 被定位为真正的通用人工智能基石，训练尚未完成。

来源：[七牛云](https://news.qiniu.com/archives/1786327102930) · [头条](http://m.toutiao.com/group/7672725054207148596/)

### 2. 字节跳动被曝训练 10 万亿参数 AI 模型，张一鸣"绝不蒸馏"

Financial Times 独家报道：字节跳动正在训练一个 10 万亿参数的 AI 模型，目前处于预训练阶段。作为对比，Anthropic 最大模型 Mythos 5 约 8 万亿参数，DeepSeek V4-Pro 约 1.2 万亿。张一鸣此前三次否决蒸馏外部模型提案，选择"自研到底"路线。

来源：[头条](http://m.toutiao.com/group/7672725054207148596/) · [AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

### 3. Gemini 应用月活跃用户达 10 亿，谷歌史上增长最快产品

谷歌 CEO 皮查伊宣布 Gemini 应用月活跃用户达到 10 亿，成为谷歌有史以来增长最快的产品，也是该公司第 14 款跨越十亿用户大关的产品。今年 6 月该数字为 9 亿，两个月内再增 1 亿。

来源：[新浪科技微博](https://m.weibo.cn/detail/5330986998956706)

### 4. GitHub Copilot CLI 公测上线，AI 编程进入终端时代

GitHub 推出 Copilot CLI 公开测试版，将 AI 编程助手能力从代码编辑器扩展到终端环境。开发者可直接在终端中使用 AI 生成命令、解释脚本和调试问题，无需切换到 IDE。

来源：[Summer Origin Tech](https://ai-damn.com/github-copilot-cli-beta-ai-comes-to-the-terminal-1759014146319)

### 5. 4B 开源模型检索能力追平 GPT-5.6 Sol，成本仅 1/100

Neon 与 Castform 联合发布：一个 4B 参数的开源模型，经过 RL 后训练后，在检索任务上的准确率追平了 GPT-5.6 Sol，但每次请求成本仅为 1/100。这表明在特定场景下，小模型 + 精准后训练可以挑战顶级大模型。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

## 涨星最快项目

### 1. cloudflare/computer — 给你的 Agent 一台电脑

总星标 7,596，本周增长 6,775。Cloudflare 开源的 npm 包，核心理念是"容器不适合 Agent 计算，Isolate 才是"。基于 Workerd 运行时构建完整沙箱环境，Agent 可像在真实桌面系统上操作文件系统、网络和进程。

来源：[GitHub Trending](https://github.com/trending?since=weekly) · [项目地址](https://github.com/cloudflare/computer)

### 2. virgiliojr94/book-to-skill — 将技术书籍 PDF 转为 Claude Code 技能

总星标 20,497，本周增长 4,155。将任何技术书籍 PDF 转换为 Claude Code 可用的 Skill，支持学习、参考和工作时实时查询。体现了"Skill 生态"正在快速外扩——从代码工具到知识管理。

来源：[GitHub Trending](https://github.com/trending?since=weekly) · [项目地址](https://github.com/virgiliojr94/book-to-skill)

### 3. semantica-agi/semantica — 面向可问责 AI 的图原生基础设施

总星标 4,849，本周增长 2,712。提供上下文管理和可问责 AI 系统的图原生基础设施，用知识图谱为 AI Agent 构建可追溯的推理链路。在 Agent 安全与透明度日益受关注的背景下，这类项目快速崛起。

来源：[GitHub Trending](https://github.com/trending?since=weekly) · [项目地址](https://github.com/semantica-agi/semantica)

### 4. huangruiteng/loopx — 长时运行 Agent 团队的轻量状态内核

总星标 4,159，本周增长 2,687。为长时间运行的 AI Agent 团队提供轻量级循环工程状态内核，跨 Codex、Claude Code 等编程 Agent 通用，支持持久化目标、配额自动唤醒和可验证交接。

来源：[GitHub Trending](https://github.com/trending?since=weekly) · [项目地址](https://github.com/huangruiteng/loopx)

### 5. google/skills — Google 产品 Agent 技能库

总星标 17,782，本周增长 2,216。Google 官方出品的 Agent Skills 库，覆盖 Google 产品和技术栈，为 AI Agent 提供原生操作 Google 生态的能力。

来源：[GitHub Trending](https://github.com/trending?since=weekly) · [项目地址](https://github.com/google/skills)

## 大模型进展

### 国内

**字节跳动 10 万亿参数模型**：FT 报道字节正训练 10 万亿参数模型，张一鸣明确"绝不依赖 AI 蒸馏"。Anthropic 此前指控 DeepSeek、月之暗面、MiniMax、智谱和阿里蒸馏 Claude，但字节从未上名单。避开蒸馏这条捷径，字节选了最难但最合规的路。

来源：[头条](http://m.toutiao.com/group/7672725054207148596/) · [AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

**阿里通义千问 Qwen3.8-Max + 苹果合作**：Qwen3.8-Max 采用 2.4 万亿参数 MoE 架构、950 亿激活参数、100 万 token 超广上下文。苹果官网一度上线"在 Mac 上配合 Apple 智能使用千问"支持文档（macOS 26.6+），数小时后删除，但"苹果 + 阿里千问"国行合作基本确认。

来源：[Qwen3.8-Max 技术分析](https://yorozuipsc.com/uploads/1/3/2/5/132566344/ebf03a3c39ff7986d7d1.pdf) · [AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

**月之暗面 Kimi K3**：Moonshot AI 发布 Kimi K3，2.8 万亿参数 MoE 模型（896 专家中 16 个活跃），基于 Kimi Delta Attention 和 Attention Residuals 架构，原生支持视觉，号称首个开源 3T 级模型。

来源：[Scott Harvanek](https://www.scottharvanek.com/category/ai-llm/)

**小米开源 Xiaomi-Robotics-1**：小米技术官微宣布自研具身基座模型开源，含 1000 个机器人训练场景、1700 种物体、10 万小时训练数据，在 4 个主流机器人基准测试中表现出色。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

**DeepSeek 战略投资宇树科技**：人形机器人第一股宇树科技 IPO 战配结果披露，DeepSeek 获配 93.3 万股，投资超 1.4 亿元，锁定 36 个月。AI 模型公司投资机器人公司，布局 AI + 具身智能。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

### 国外

**OpenAI GPT-6 代号 Astra**：GPT-6 内部代号 Astra，参数量评估约 10 万亿，是 GPT-4 的五倍以上。OpenAI 先暂停发布，年底还有更大的"Doug"计划。同时 GPT-5.6-Cyber 网络安全模型扩展 Daybreak 项目，新增 Blue 和 Red 两档，合作方包括 Accenture、IBM、CrowdStrike，内部测试高级安全请求完成率达 95%。

来源：[七牛云](https://news.qiniu.com/archives/1786327102930) · [TPS Report](https://tpsreport.news/news)

**Google Gemini 月活破 10 亿**：Gemini 应用月活跃用户达 10 亿，是谷歌史上增长最快的产品。Google Gemini 3.5 同期发布，进一步巩固多模态能力。Google Maps 也新增了 AI 代理功能，支持食物订购、酒店预订等操作。

来源：[新浪科技微博](https://m.weibo.cn/detail/5330986998956706) · [Frontier AI Daily](https://neodrop.ai/post/CetHJGVE66C)

**英伟达开发 Nemotron 4 开源模型**：据报道英伟达正在开发 Nemotron 4 系列开源 AI 模型，最大版本预计拥有至少 1 万亿参数。发布时间尚未确定，模型训练工作仍在进行中。

来源：[凤凰网科技](https://tech.ifeng.com/c/8vVrve4A3oC)

## 新工具 & CLI

### 1. GitHub Copilot CLI — 终端 AI 编程助手公测

GitHub 推出 Copilot CLI 公开测试版，开发者可直接在终端中使用 AI 生成命令、解释脚本和调试问题，无需切换到 IDE。将 AI 编程能力从编辑器扩展到命令行场景。

来源：[Summer Origin Tech](https://ai-damn.com/github-copilot-cli-beta-ai-comes-to-the-terminal-1759014146319)

### 2. Salesforce BLIP3-o — 开源多模态模型

Salesforce AI Research 发布 BLIP3-o，xGen-MM（BLIP-3）系列的最新开源多模态模型，已在 Hugging Face 上线。专注于图文理解与生成任务，Apache 许可。

来源：[Summer Origin Tech](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402)

### 3. Claude Code 跨会话消息 — Week 32 更新

Claude Code v2.1.220–v2.1.224（8 月 3-7 日）新增跨会话消息功能：在 macOS 和 Linux 上，不同 Claude Code 会话之间可以互相发送消息，让 Claude 在会话间传递发现或决策。进一步提升多 Agent 协作能力。

来源：[Claude Code 官方文档](https://code.claude.com/docs/en/whats-new)

### 4. Cloudflare Computer — Agent 原生沙箱环境

Cloudflare 开源 `@cloudflare/computer` npm 包，核心论点是"容器不适合 Agent 计算，Isolate 才是"。基于 Workerd 运行时构建完整沙箱，Agent 可操作文件系统、网络和进程，像在真实桌面系统上工作。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/) · [项目地址](https://github.com/cloudflare/computer)

### 5. Microsoft Agent Framework Harness GA — Agent 运行时正式可用

微软 Agent Framework Harness 和 Foundry Hosted Agents 达到正式可用（GA）。该框架于 4 月 2 日达到 1.0 GA，Build 2026 带来 Agent Harness、GitHub Copilot SDK 和 Claude Agent SDK 连接器，现可运行和治理 Agent，而不仅仅是构建 Agent 的库。

来源：[InfoQ](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/)

## 编程方式

### Rust 项目通过 LLM 使用政策：不禁止 AI，但要标注出处

Rust 语言项目正式通过 LLM 使用政策，覆盖 rust-lang/rust 单一仓库的代码贡献。核心要求：不禁止用 AI 辅助写代码，但必须标注哪些代码是 AI 生成的。五个核心团队已采纳，可能是主流开源项目中最细致的 AI 辅助贡献规范。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

### Zadig v5.0：AI 审查专员和 AI 发布专员正式上线

Zadig 团队直言"卡点不是 AI 写得不够好，是 AI 写得太好了"。v5.0 让 AI 来做 Code Review 和发布审批——AI 审查专员和 AI 发布专员正式上岗，用 AI 审 AI 成为新的工程实践。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

### 亚马逊 AI 写代码成本失控：超预算 860%

FT 曝光亚马逊多份内部报告：AI 辅助编码在多个项目严重超支，最夸张的一个项目成本超支 180 万美元，超预算 860%。一名工程师用 AI 写了大量代码，但维护和调试成本远高于预期。AI 写得快不代表省钱，代码能跑不代表能用。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

### Atlassian Rovo 数据泄露：Agent 权限越大，安全边界越重要

安全公司 PromptArmor 发布报告：Atlassian AI Agent Rovo 存在严重数据泄露漏洞，攻击者通过间接提示注入可窃取整个租户的 Jira 和 Confluence 数据。厂商两个月未修复。Agent 接入企业内部系统是大趋势，但安全审计必须跟上。

来源：[AI 工具实验室](https://ai.saiita.com.cn/2026-8-tech-news/)

## HuggingFace 热门模型

| 模型 | 发布方 | 7 日下载 | 周增长 | 简介 |
|------|--------|----------|--------|------|
| Qwen3-Coder-30B-A3B-Instruct-GGUF | unsloth | 3.54M | +95.1% | 编码专用模型，Apache 2.0，GGUF 量化版 |
| Mellum2-12B-A2.5B-Instruct-GGUF-Q8_0 | JetBrains | 8.3K | +241.4% | JetBrains 新编码模型，本周增速第一 |
| Qwen3.6-35B-A3B-NVFP4 | nvidia | 3.37M | +20.1% | 英伟达 NVFP4 量化版 Qwen 模型 |
| DeepSeek-R1 | deepseek-ai | 3.13M | +7.2% | DeepSeek 推理模型，MIT 许可 |
| granite-4.1-8b | ibm-granite | 652K | +14.7% | IBM Granite 4.1 系列，Apache 2.0 |

来源：[ParaPulse HuggingFace 排行](https://parapulse.io/trending/text-generation)

## 总结

今日 AI 产业呈现三条主线：万亿参数军备竞赛白热化——字节 10 万亿、OpenAI GPT-6 代号 Astra 10 万亿、英伟达 Nemotron 4 破万亿，但 4B 小模型追平 GPT-5.6 Sol 证明参数不是唯一答案；AI 编程从辅助走向自主——GitHub Copilot CLI 进入终端、Cloudflare Computer 为 Agent 打造原生运行时、Zadig 让 AI 审 AI；开源治理意识觉醒——Rust 项目出台 LLM 标注政策、Agent 安全漏洞敲响警钟，行业开始认真对待 AI 的边界与责任。
