---
title: "AI 开发日报 · 2026年08月25日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-08-25
tags: ["AI日报"]
---

## 今日要闻

### 1. 阿里云 Wan3.0 视频生成大模型正式上线：单次生成 30 秒视频，文档直接转视频

8 月 24 日，阿里云宣布视频生成大模型 Wan3.0 正式上线。该模型单次可生成最长 30 秒视频，并首次支持 doc、xls、ppt、pdf、md 等文档直接转视频，将文档内容动态可视化，进一步降低视频创作门槛。

来源：[阿里云官方（Alibaba Cloud）via 拓实科技](http://www.toast.com.cn/news)

### 2. Vetta 框架发布：长周期 Agent 任务成本降至 claude-code 三分之一

8 月 24 日，面向长周期 Agent 任务的高效框架 Vetta 发布。据其官方数据，在相同模型与任务条件下，仅更换框架即可显著降低任务完成成本——Vetta 完成单个任务的成本为 0.298 美元，而 claude-code 为 0.872 美元，约为后者的三分之一，为长时自治 Agent 的成本控制提供了新方案。

来源：[InfoQ AI 简报](https://www.infoq.cn/aibriefs)

### 3. 腾讯开源 AI Agent 框架 Youtu-agent

8 月 24 日，腾讯开源了 AI Agent 框架 Youtu-agent，定位为构建、运行与评估自治 AI 智能体的高性能、灵活框架。该框架在多项基准上表现强劲，并内置数据分析、文件处理等实用能力，进一步丰富了国产开源 Agent 生态。

来源：[ai-damn](https://ai-damn.com/tencent-open-sources-ai-agent-framework-youtu-agent-1756428786611)

### 4. 英伟达拟砸 60 亿美元打造 "美国版 DeepSeek"，与中国开源模型正面对抗

多家美媒爆料称，英伟达计划投入 60 亿美元重金，打造 "地球最强" 的开放权重 AI 模型之一，借此与中国的 DeepSeek 和 Kimi K3 等重量级开源模型竞争。此举被视为英伟达从卖芯片向 "芯片 + 开源模型" 生态延伸的战略转向。

来源：[凤凰网科技](https://tech.ifeng.com/c/8vpa1Rig1fL)

### 5. Salesforce 开源多模态模型 BLIP3-o 登陆 Hugging Face

8 月 24 日，Salesforce AI Research 发布开源多模态模型 BLIP3-o，现已上线 Hugging Face。作为 xGen-MM（BLIP-3）系列的最新成员，它在视觉理解与多模态任务上进一步提升，延续了大厂押注开源多模态的趋势。

来源：[ai-damn](https://ai-damn.com/salesforce-launches-open-source-blip3-o-multimodal-ai-on-hugging-face-1747804046402)

## 涨星最快项目

本周 GitHub 飙升榜显示，开发者注意力持续向 "Agent 技能（skill）" 与 "长记忆" 基础设施集中。

### 1. akitaonrails/ai-memory — 🔥 3,910（精选榜首位）

为 Agent 编码 CLI 提供长期记忆解决方案，可在不同 Agent 厂商之间平滑交接上下文，是当下 Agent 记忆基建的代表项目。

GitHub：[akitaonrails/ai-memory](https://github.com/cx0110/OssTrending/blob/main/README.md)

### 2. zenbu-labs/terminal-browser — 🔥 1,875

一款直接在现有终端里运行的浏览器，让 Agent 在命令行环境中即可完成网页交互，无需离开终端。

GitHub：[zenbu-labs/terminal-browser](https://github.com/cx0110/OssTrending/blob/main/README.md)

### 3. obra/superpowers — 周增约 3,700（总 276,698 星）

将 TDD 等专业软件工程纪律编码为 Agent 技能文件，把需求澄清、测试、评审装进编码 Agent，让流程稳定交付。

GitHub：[obra/superpowers](http://m.toutiao.com/group/7677421262885126692/)

### 4. volcengine/OpenViking — 周增约 3,400（总 32,520 星）

火山引擎出品的开源 Viking 项目，持续在榜单前列攀升。

GitHub：[volcengine/OpenViking](http://m.toutiao.com/group/7677421262885126692/)

### 5. winfunc/opcode — ⭐ 22,382

为 Claude Code 提供的强大 GUI 应用与工具集，支持自定义 Agent、管理交互式 Claude Code 会话、运行安全后台 Agent 等。

GitHub：[winfunc/opcode](https://github.com/morpheusadam/awesome-ai-200)

## 大模型进展

### 国内

- **阿里 Qwen**：8 月 24 日，qwen-turbo-latest 完成后台静默升级，数学、代码、复杂指令理解能力增强，推理侧响应时延小幅下降，API 侧同步更新能力基线；同日 Wan3.0 视频生成模型正式上线。此外，"通义" App 已正式更名为 "千问"，AI 业务独立披露。
- **DeepSeek**：API 平台更新错误返回码规范，优化 Function Calling 强约束模式的 JSON 输出容错，官方文档更新模型选型指引；V4-Pro 持续商用，开源 Harness 框架热度不减。
- **月之暗面 Kimi**：kimi-k3-max 在大模型周榜位列第 10 名，ELO 1489 分，较上周上升 2 位；Kimi Code CLI v0.38.0（8 月 20 日）新增 WaitFor 工具，Agent 可在当前轮次内等待后台任务完成。
- **智谱 GLM**：glm-5.3-max 在周榜位列第 13 名，ELO 1487 分，整体表现稳定。
- **腾讯**：开源 Youtu-agent 智能体框架，进一步丰富国产开源 Agent 生态。

### 国外

- **OpenAI**：8 月 19 日发布开源 Codex Agent 框架，提供三级开发者集成选项；此前因 Astra 模型网络风险放缓训练，并预览了由 Cerebras 驱动的 Ultrafast 服务层级，GPT-5.6 Sol 速度提升至 14 倍、达 750 tokens/秒。
- **Google**：8 月 13 日发布 Gemini 3.7 Flash 并正式可用，定位 "最强干活模型"，编码与 Agent 能力显著提升，价格为 3.6 Flash 的一半，保持 1M 上下文窗口与 64K 输出。
- **Anthropic**：Claude Opus 5 持续领跑智能榜；8 月 18 日 Claude Code 推出 Design 设计技能；IPO 进程或于月底启动，目标估值约 2 万亿美元。
- **Meta**：Muse Code 终端编码 Agent 进入 Beta（8 月 5 日），具备持久后台子 Agent、精确回放事件日志与 Muse Spark 1.2。
- **微软**：Agent Framework 发布 1.18.0（8 月 19 日），强化 .NET Agent 处理、托管会话与对话历史、并发工具调用，并接入 Cosmos 聊天历史与向量存储。

## 新工具 & CLI

- **Vetta**：面向长周期 Agent 任务的高效框架，单个任务成本仅约 claude-code 的三分之一。动态：[InfoQ AI 简报](https://www.infoq.cn/aibriefs)
- **腾讯 Youtu-agent**：开源的高性能 Agent 框架，支持构建、运行与评估自治智能体。动态：[ai-damn](https://ai-damn.com/tencent-open-sources-ai-agent-framework-youtu-agent-1756428786611)
- **OpenAI Codex Agent 框架**：8 月 19 日开源，将 Agent 能力作为基础设施嵌入第三方产品，提供三级集成选项。动态：[C114](https://www.c114pro.com/ainews/187738.html)
- **Kimi Code CLI v0.38.0**：8 月 20 日新增 WaitFor 工具，Agent 可在轮次内等待后台任务完成并继续处理结果。动态：[Kimi Code 文档](https://www.kimi.com/code/docs/kimi-code/whats-new.html)
- **GitHub Copilot CLI v1.0.79**：8 月 10 日发布，沙箱目录可保持可写、模型选择更智能、企业管理员安全策略更精细。动态：[Havoptic](https://www.havoptic.com/r/github-copilot-v1.0.79)
- **Muse Code**：Meta 的终端编码 Agent（Beta），支持持久后台子 Agent 与事件回放。动态：[Awesome AI Tools](https://github.com/dspachos/awesome-ai-tools)
- **LLM 0.32（Simon Willison）**：支持可见推理轨迹、OpenAI Responses API、服务端工具与内容寻址 SQLite 日志。动态：[Simon Willison](https://simonwillison.net/tags/llm/)

## 编程方式

### 终端成为多 Agent 控制面板

GitHub Copilot CLI 在 8 月 13 日的周度更新中加入 /tasks、排队提示与 shell 命令、headless --plan 与 --mode autopilot 以及 /rewind，使终端从单点助手进化为多 Agent 控制面板。开发者需在放任无人值守运行前，建立显式取消、计划评审与审计规则。

来源：[neodrop.ai](https://neodrop.ai/ja/post/BabpZ37GegD)

### Replit MCP 打通 "对话即发布" 全链路

8 月 14 日 Replit MCP 可从兼容客户端创建、检视、更新并发布应用，并新增工作区区域、可分享技能与企业管理 API，把 MCP 访问、技能启用、区域与预算 API 纳入平台治理边界，推动 "自然语言 → 可发布应用" 的全链路 Agent 化。

来源：[neodrop.ai](https://neodrop.ai/ja/post/BabpZ37GegD)

### 模块化、可拆卸的 Agent 基建成为主流

DeepSeek 开源的 Harness（dsh）采用微内核架构、模块化插件与只追加事件日志，把模型适配器、工具、会话日志与 Agent 循环全部做成可替换插件，被视为 AI Agent 基础设施走向 "解耦、可组装" 的标志。

来源：[InfoQ](https://www.infoq.com/agentic-ai-architecture/news/)

## 总结

今日 AI 开发圈呈现 "开源多模态多点开花、Agent 框架争相解耦、成本与流程治理并行" 三条主线：阿里 Wan3.0 与 Salesforce BLIP3-o 让视频与多模态能力进一步平民化，腾讯 Youtu-agent 与 OpenAI Codex 框架让 Agent 基建走向模块化可组装，而 Vetta 与 Copilot CLI 的演进则表明开发者正同时追求更低的任务成本与更稳的流程可控性。
