---
title: "AI 开发日报 · 2026年07月01日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-01
tags: ["AI日报"]
---

## 今日要闻

### 1. Anthropic 恢复 Fable 5 全球上线，联合行业发布越狱评估框架

7月1日，Anthropic 正式宣布 Claude Fable 5 和 Claude Mythos 5 恢复全球部署，结束了自6月12日起因美国出口管制而实施的暂停。Anthropic 开发了针对此前绕过技术的全新安全分类器，经美国商务部 CAISI 研究人员验证，拦截率超过 99%。同时，Anthropic 联合 Amazon、Microsoft、Google 共同提出行业级越狱严重性评估框架，从能力增益、影响范围、武器化难度和可发现性四个维度对越狱行为分级。

来源：[Anthropic 官方公告](https://www.anthropic.com/news/redeploying-fable-5) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

### 2. DeepSeek 发布 V4 Preview，引入双 API 变体并兼容 OpenAI/Anthropic 格式

DeepSeek 发布 DeepSeek-V4 Preview，强化 Agent 能力与推理，API 引入 `deepseek-v4-flash`（非思考模式，替代 `deepseek-chat`）与 `deepseek-v4-pro`（可配置 `reasoning_effort` 的思考模式，替代 `deepseek-reasoner`）两个变体。旧标识将于7月24日弃用。新 API 同时兼容 OpenAI 和 Anthropic 两种格式，Claude Code、GitHub Copilot、OpenCode 可零代码改动接入。

来源：[DeepSeek 官网](https://deepseek.com/en/) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

### 3. Together AI 完成 8 亿美元 C 轮融资，押注开源模型生产化

Together AI 宣布完成 8 亿美元 C 轮融资，并附带超 500 MW 独立投资的算力承诺。投资方包括 NVIDIA、Aramco Ventures、General Catalyst、Salesforce Ventures 等。其核心论点是闭源专有 LLM 在大规模生产中成本不可持续，而 DeepSeek、Kimi、GLM 等开权重模型正以 6-20 倍的成本优势缩小质量差距。

来源：[Together AI 公告](https://www.together.ai/blog/announcing-our-series-c) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

### 4. Cognition 推出 Devin Security Swarm，多智能体安全扫描召回率 72%

Cognition 发布 Devin Security Swarm，基于 Agentic MapReduce 架构的多智能体应用安全系统。并行 Agent 检查代码段，中央 Agent 合并结果形成完整攻击路径，每个漏洞在隔离沙箱中验证后自动生成补丁并开 PR。在 50 个真实 CVE 基准上召回率 72%（$90/scan），比 Claude Security 便宜 30%。

来源：[Cognition 公告](https://cognition.com/blog/introducing-devin-security-swarm) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

### 5. GitHub Copilot 五连更新，首个开源权重模型进入选择器

GitHub 同步发布五项 Copilot 更新：Copilot Vision（多模态图像/PDF 识别）正式可用；VS Code 浏览器工具（Agent 可控制真实浏览器）正式可用；月之暗面 Kimi K2.7 Code 成为 Copilot 模型选择器中首个可选的开源权重模型；Copilot CLI 与 SDK 支持会话级 AI credit 限额；Copilot CLI 新增 Auto 模式按任务自动路由最优模型并享 -10% credit 折扣。

来源：[GitHub Changelog - Copilot Vision](https://github.blog/changelog/2026-07-01-copilot-vision-is-generally-available/) · [GitHub Changelog - Browser Tools](https://github.blog/changelog/2026-07-01-browser-tools-for-github-copilot-in-vs-code-are-generally-available/) · [GitHub Changelog - Kimi K2.7](https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/) · [JLS42](https://jls42.org/en/news/ia-actualites-1-jul-2026)

## 涨星最快项目

1. **microsoft/markitdown** — 将 PDF、Word、PPT、Excel、音视频一键转为 Markdown，LLM 预处理层事实标配。月增 +34,072 ★，总 161k ★。[GitHub](https://github.com/microsoft/markitdown)

2. **harry0703/MoneyPrinterTurbo** — 接入 LLM 一键生成高清短视频，支持 DeepSeek、通义千问等国产大模型。月增 +29,272 ★，总 93.9k ★。[GitHub](https://github.com/harry0703/MoneyPrinterTurbo)

3. **Leonxlnx/taste-skill** — 赋予 AI Agent 审美品味，告别千篇一律的生成内容。月增 +27,093 ★，总 52.6k ★。[GitHub](https://github.com/Leonxlnx/taste-skill)

> 数据来源：[51CTO GitHub 热点项目盘点](https://www.51cto.com/aigc/11880.html)

## 大模型进展

### 国内

- **DeepSeek V4 Preview** — 7月1日发布，推出 V4 Flash / V4 Pro 双 API 变体，兼容 OpenAI 与 Anthropic 格式，旧标识 7月24日弃用。（[DeepSeek 官网](https://deepseek.com/en/)）

- **Kimi K2.7 Code** — 月之暗面旗下编码模型，成为 GitHub Copilot 模型选择器中首个可选的开源权重模型，由 GitHub 托管于 Microsoft Azure。（[GitHub Changelog](https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/)）

### 国外

- **Anthropic Claude Fable 5** — 经历美国政府出口管制对峙后于 7月1日全球恢复，Anthropic 训练新安全分类器拦截率达 99%，并联合 Amazon、Microsoft、Google 发布行业级越狱评估框架。（[Anthropic 公告](https://www.anthropic.com/news/redeploying-fable-5)）

- **xAI Grok Voice Agent Builder** — 7月1日开启 Beta，基于 Grok Voice Think Fast 1.0 语音到语音模型，2 分钟内无代码构建生产级语音 Agent，内置 80+ 语音、25+ 语言，定价 $0.05/分钟。（[xAI 公告](https://x.ai/news/grok-voice-agent-builder)）

## 新工具 & CLI

- **Devin Security Swarm** — Cognition 发布的多智能体应用安全系统，基于 Agentic MapReduce 架构，在 50 个真实 CVE 上召回率 72%（$90/scan），自动开 PR 修复。（[Cognition 公告](https://cognition.com/blog/introducing-devin-security-swarm)）

- **GitHub Copilot CLI Auto 模式** — 按任务自动路由最优模型（推理、代码生成、Bug 诊断、工具编排），享 -10% AI credit 折扣。（[GitHub Changelog](https://github.blog/changelog/2026-07-01-copilot-cli-auto-model-selection-routes-based-on-task/)）

- **GitHub Copilot CLI 会话级限额** — 通过 `--max-ai-credits` 限制单次会话 AI credit 消耗，支持 `/limits` 交互式调整。（[GitHub Changelog](https://github.blog/changelog/2026-07-01-set-ai-credit-session-limits-in-copilot-cli-and-sdk/)）

- **Grok Voice Agent Builder** — xAI 推出的无代码语音 Agent 构建平台，支持知识库上传、日历/邮箱/Notion 等连接器、电话号码接入。（[xAI 公告](https://x.ai/news/grok-voice-agent-builder)）

## 编程方式

- **开源模型进入主流开发工具链** — Kimi K2.7 Code 成为 GitHub Copilot 首个可选开源权重模型，标志着开源大模型正式进入主流 AI 编程工具的模型选择器，开发者不再被闭源模型绑定。

- **DeepSeek 双格式兼容降低迁移成本** — DeepSeek V4 API 同时接受 OpenAI 和 Anthropic 两种格式，Claude Code 和 GitHub Copilot 可零代码改动接入，多供应商策略的技术门槛进一步降低。

- **Agent 安全扫描走向自动化** — Devin Security Swarm 以多智能体架构实现代码安全审计自动化，无需 CI 集成即可扫描全代码库并自动开 PR 修复，安全左移从理念走向工具落地。

## 总结

今日 AI 生态异常活跃：Anthropic 恢复 Fable 5 并推动行业级安全标准、DeepSeek 以双格式兼容降低迁移门槛、Together AI 8 亿美元押注开源生产化、GitHub Copilot 引入首个开源权重模型——开源与闭源的边界正在模糊，模型选择权正加速回归开发者手中。
