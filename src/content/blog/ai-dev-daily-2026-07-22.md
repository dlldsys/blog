---
title: "AI 开发日报 · 2026年07月22日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-07-22
tags: ["AI日报"]
---

## 今日要闻

### 1. 谷歌发布三款 Gemini Flash 模型，主力型号输出 Token 省用 17%

谷歌一次性发布三款 Gemini Flash 系列模型。旗舰 Gemini 3.6 Flash 输出 Token 比 3.5 Flash 少用 17%，在 DeepSWE 编码测试中最高节省 65% Token，编程得分从 37% 升至 49%，输出价从 9 美元降至 7.5 美元/百万 Token。同步发布的 3.5 Flash-Lite 定价 0.3 美元输入/2.5 美元输出，吞吐量达 350 Token/s；3.5 Flash Cyber 则为网络安全特供版本。

来源：[艾瑞咨询](https://news.iresearch.cn/content/202607/561392.shtml) · [Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)

### 2. AMD 与 Anthropic 战略合作：部署最高 2GW 算力 Instinct MI450 GPU

AMD 与 Anthropic 宣布战略合作，将部署最高 2GW 算力的 AMD Instinct MI450 系列 GPU。这是首次一线大模型公司大规模引入非 NVIDIA 供应链，标志着 AI 算力供应链多元化迈出关键一步，也可能为行业降低对英伟达的单一依赖打开局面。

来源：[AMD 投资者关系](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus)

### 3. OpenAI 推出 Presence 企业智能体平台

OpenAI 推出 Presence 企业智能体平台，支持部署可信的语音和聊天智能体。该平台能够理解上下文、执行任务并协调跨系统流程，标志着 OpenAI 从消费级聊天产品向企业级 Agent 工作流正式进军。

来源：[OpenAI](https://openai.com/index/introducing-openai-presence/)

### 4. OpenAI 公布 Project Camellia：佐治亚州 3.2GW AI 数据中心园区

OpenAI 公布 Project Camellia 计划，将在佐治亚州建设 3.2GW 的 AI 数据中心园区。这是 OpenAI 持续扩展 AI 基础设施版图的又一重大举措，进一步凸显超大规模算力需求对电力和土地资源的压力。

来源：[OpenAI](https://openai.com/index/building-ai-infrastructure-with-the-efficiency-county-community/)

### 5. Alphabet 发布 Q2 财报：Google 已开训 Gemini 4，全年资本开支上调至 1950-2050 亿美元

Alphabet 发布 2026 年 Q2 财报，透露 Google 已开始训练 Gemini 4，全年资本开支指引上调至 1950-2050 亿美元，目标每月发布一个新模型。巨额资本开支反映出 AI 军备竞赛进入"基础设施定胜负"阶段。

来源：[Alphabet 投资者关系](https://abc.xyz/investor/) · [新浪财经](https://cj.sina.cn/articles/view/5953740931/162dee08306703qwt4)

## 涨星最快项目

### 1. NousResearch/hermes-agent — 开源 Agent 框架

Hermes Agent 是 NousResearch 推出的开源智能体框架，聚焦于自主 Agent 的构建与编排，社区活跃度极高。目前约 217k 星，稳居 GitHub AI Agent 类项目头部。

GitHub：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

### 2. Significant-Gravitas/AutoGPT — 自主 AI Agent 先驱

AutoGPT 是最早引爆"AI 自主 Agent"概念的开放项目，让大模型自主分解任务、调用工具并循环执行。目前约 170k 星，仍是 Agent 领域的标杆项目。

GitHub：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)

### 3. langgenius/dify — 开源 LLM 应用开发平台

Dify 是一款开源的 LLM 应用开发平台，提供可视化工作流编排、RAG 引擎、Agent 能力和模型管理，帮助企业快速构建 AI 应用。目前约 149k 星。

GitHub：[langgenius/dify](https://github.com/langgenius/dify)

### 4. ollama/ollama — 本地大模型运行工具

Ollama 让用户在本地一键运行 Llama、Gemma 等开源大模型，极大地降低了本地部署门槛。目前约 140k 星，是本地推理生态的核心基础设施。

GitHub：[ollama/ollama](https://github.com/ollama/ollama)

### 5. huggingface/transformers — 大模型核心库

Transformers 是 Hugging Face 推出的开源 NLP 库，支持数千种预训练模型，是大模型生态的基石。目前约 140k 星，几乎成为所有 AI 开发者的标配工具。

GitHub：[huggingface/transformers](https://github.com/huggingface/transformers)

来源：[CSDN](https://blog.csdn.net/debug_fan/article/details/163221533)

## 大模型进展

### 国内

- **通义千问（阿里）**：Qwen3.8-Max 处于 Preview 状态，持续在编码和 Agent 能力上追赶国际一线水平。阿里在 AI 编程领域强调市场份额，以成本优势筑牢竞争壁垒。[来源](https://www.elser.ai/news/july-2026-ai-model-report)
- **智谱 GLM-5.2**：已正式发布，在 SWE-bench Verified 达到 81% 的成绩，年内完成多次快速迭代，智谱同步披露商业化进展。[来源](https://www.163.com/dy/article/L38L5FIE055616YL.html)
- **DeepSeek V4**：Pro/Flash 版本处于 Preview 状态，推理算力消耗大幅下降，开源权重策略持续推进，成本优势显著。[来源](https://www.elser.ai/news/july-2026-ai-model-report)
- **Kimi K3（月之暗面）**：服务已上线，完整权重承诺 7 月 27 日发布，此前因需求过大曾暂停新订阅。[来源](https://www.elser.ai/news/july-2026-ai-model-report)
- **豆包（字节）**：持续下沉市场，接入 HMD Touch AI 手机等终端设备，扩大消费端覆盖面。[来源](https://www.163.com/dy/article/L38L5FIE055616YL.html)

### 国外

- **Google Gemini 3.6 Flash**：今日发布的主力模型，输出 Token 比 3.5 Flash 少用 17%，编程得分从 37% 升至 49%，输出价降至 7.5 美元/百万 Token。Gemini 4 已开始训练，预计 11-12 月发布。[来源](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- **OpenAI GPT-5.6**：Sol/Terra/Luna 三型号已正式可用，旗舰 Sol 主打高级 Agent 能力，Luna 以低成本定位覆盖日常任务。[来源](https://www.elser.ai/news/july-2026-ai-model-report)
- **Anthropic Claude**：Fable 5 已可用，Claude Opus 5 即将发布，价格仅为 Fable 5 的一半。Anthropic 同时与 AMD 达成 2GW 算力合作。[来源](https://www.elser.ai/news/july-2026-ai-model-report) · [AMD](https://ir.amd.com/news-events/press-releases/detail/1292/amd-and-anthropic-announce-strategic-partnership-to-deploy-up-to-2-gigawatts-of-amd-instinct-mi450-series-gpus)
- **Meta**：持续推进开源模型生态，Muse 系列图像生成模型和 Llama 系列语言模型保持高频迭代。

## 新工具 & CLI

- **OpenAI Presence**：企业级智能体平台，支持部署可信语音和聊天 Agent，能理解上下文、执行任务并协调跨系统流程，标志 OpenAI 正式进军企业 Agent 工作流。来源：[OpenAI](https://openai.com/index/introducing-openai-presence/)
- **Gemini 3.5 Flash Cyber**：谷歌发布的网络安全特供模型，专为安全分析和威胁检测场景优化。来源：[Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- **Gemini 3.5 Flash-Lite**：超轻量级推理模型，定价 0.3 美元输入/2.5 美元输出，吞吐量 350 Token/s，适合高并发低延迟场景。来源：[Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)

## 编程方式

### AI 编程从"模型比拼"转向"价格战"

谷歌 Gemini 3.6 Flash 将输出价从 9 美元降至 7.5 美元/百万 Token，在 DeepSWE 编码测试中最高节省 65% Token，编程得分从 37% 升至 49%。这表明 AI 编程的竞争焦点正从"谁的模型更聪明"转向"谁的成本更低、Token 更省"——效率正在取代绝对智力成为开发者的首选指标。

来源：[艾瑞咨询](https://news.iresearch.cn/content/202607/561392.shtml)

### 企业智能体从试点进入工作流

OpenAI 推出 Presence 企业智能体平台，支持部署可信语音和聊天 Agent，能理解上下文、执行任务并协调流程。这标志着 AI Agent 正从概念验证阶段进入企业核心业务工作流，企业级 Agent 编排能力成为新的竞争维度。

来源：[OpenAI](https://openai.com/index/introducing-openai-presence/)

## 总结

今日 AI 行业的核心信号：大模型竞争从"堆智力"转向"堆效率"——Gemini 3.6 Flash 以更低成本和更高编码效率领跑，AMD 与 Anthropic 的 2GW 合作打破英伟达算力垄断，而 OpenAI Presence 和 Project Camellia 则表明 Agent 工作流与超大规模基础设施正同步提速。
