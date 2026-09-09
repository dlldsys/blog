---
title: "AI 开发日报 · 2026年09月09日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-09-09
tags: ["AI日报"]
---

## 今日要闻

### 1. NVIDIA 官宣以 129.303 亿美元收购 Hugging Face

NVIDIA 官方博客确认已就收购 Hugging Face 达成协议，交易金额 129.303 亿美元（含约 11.9 亿美元股权对价加留存激励）。Hugging Face 平台托管超 300 万模型、1800 万开发者，黄仁勋承诺平台保持开放、且不强制要求使用 NVIDIA 算力即可构建和部署，AMD / Intel 路径是否继续一等公民是后续观察点。

来源：[NVIDIA 官方博客](https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/) · [Unite.AI](https://www.unite.ai/nvidia-signs-definitive-agreement-to-acquire-hugging-face-for-12-9b/) · [证券时报 e 公司](http://m.toutiao.com/group/7681328581040980514/)

### 2. 面壁智能开源 MiniCPM5-2B，登顶全球 4B 以下开源基座第一

9 月 8 日面壁智能联合 OpenBMB 开源新一代端侧「小钢炮」MiniCPM5-2B：2B 稠密 Transformer，在 Artificial Analysis 榜单以 23 分登顶全球 4B 参数以下开源基座模型第一，支持工具调用、深度搜索与代码生成。预训练数据精炼框架、后训练 Meshy 与 JustRL II 及训练 Recipe 一并开源，FlagOS 社区完成平头哥、昇腾、海光、昆仑芯等 12 款芯片的 Day0 适配。

来源：[新智元](http://m.toutiao.com/group/7683067343437627958/) · [证券日报](http://m.toutiao.com/group/7683300283832631849/) · [OpenBMB/MiniCPM](https://github.com/OpenBMB/MiniCPM/) · [同花顺财经](https://stock.10jqka.com.cn/20260908/c679694690.shtml)

### 3. 亚马逊与高通达成 AI 推理芯片多代际合作

9 月 8 日亚马逊与高通宣布建立多代际合作关系，共同开发面向 AI 数据中心的定制化推理芯片及最高 1.6T 的光互联解决方案；高通将向亚马逊发行最多 2500 万股普通股认股权证（行权价 161.26 美元/股），协议对应最高约 600 亿美元采购规模。

来源：[每日经济新闻](http://m.toutiao.com/group/7683315035841577499/)

### 4. OpenAI 推出 ChatGPT for Teens，并表态支持加州 SB 1119

OpenAI 宣布支持加州 SB 1119 法案（要求面向青少年的 AI 产品提供年龄验证、独立审计、家长管控与有害内容防护），同时上线 ChatGPT for Teens，对 13-17 岁用户自动启用，内置学习工具、记忆与不可关闭的安全护栏。

来源：[FutureTools](https://futuretools.io/news?s=03)

### 5. 苹果今日举办九月发布会，John Ternus 任 CEO 后首秀

苹果于今日（9 月 9 日）举行九月发布会，这是 John Ternus 于 9 月 1 日接任 CEO 后的首场发布会，预期亮相 iPhone 18 Pro 等新品，市场关注点之一是 Siri 能否成为真正的智能家居中枢；苹果仍是唯一没有自研前沿模型的大型科技公司。

来源：[AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-september-09-2026)

## 涨星最快项目

数据来自 OpenGithubs 2026.09.01-09.06 周榜，多智能体、Agent Skills 与端侧语音项目涨势最猛：

- **THU-MAIC/OpenMAIC** ⭐ 31.9k（+8,095）— 多智能体互动课堂，一键开启沉浸式多人协作学习体验。 ([GitHub](https://github.com/THU-MAIC/OpenMAIC))
- **bilawalsidhu/gods-eye-view** ⭐ 17.9k（+7,045）— 浏览器里的真实数据「间谍卫星」模拟器，基于真实数据的开源空间智能 3D 地球。 ([GitHub](https://github.com/bilawalsidhu/gods-eye-view))
- **debpalash/VoiceStudio** ⭐ 18.8k（+5,104）— 完全本地化的 ElevenLabs 替代品，语音克隆、配音、转写与有声书创作，支持 646 种语言。 ([GitHub](https://github.com/debpalash/VoiceStudio))
- **zhaoxuya520/reverse-skill** ⭐ 34.7k（+4,580）— 逆向/渗透/安全研究技能路由包，AI 自动路由 + 按需自举工具链，兼容 Claude Code / Kiro / Cursor / Cline。 ([GitHub](https://github.com/zhaoxuya520/reverse-skill))
- **sapientinc/PRAXIST** ⭐ 6.3k（+3,370）— 8 月 30 日新开源的自主研究系统，面向可度量、可在计算机上执行的研究任务。 ([GitHub](https://github.com/sapientinc/PRAXIST))

## 大模型进展

### 国内

- **阿里通义千问**：9 月 2 日更新旗舰模型 Qwen3.8-Max-0902，针对编程（Coding）与专业办公（Cowork）专项后训练，已上线千问 AI 平台并接入千问办公、Qoder、千问 APP。 ([新浪财经](https://finance.sina.com.cn/jjxw/2026-09-02/doc-iniqkzme3030599.shtml.md) · [千问平台模型发布记录](https://platform.qianwenai.com/docs/changelog/models))
- **千问智能体生态**：9 月 7 日千问开放平台集中上线首批金融智能体，覆盖证券投资、基金研选、期货研究、保险咨询，合作方含兴业证券、国泰海通、中金财富、易方达基金、众安保险等；阿里云「万有无界」多角色 Agent 协作平台已于 9 月 2 日公测，可调用 Qwen3.8-Max。 ([i黑马·AI智能体周报](http://m.toutiao.com/group/7683113558518874630/))
- **月之暗面 Kimi**：9 月 4 日开源编程特化模型 Kimi K2.7 Code——1T 总参 / 32B 激活 MoE、256K 上下文、内置 MoonViT 视觉编码器，Kimi Code Bench v2 达 62.0（较 K2.6 提升 21.8%），思考 token 用量平均减少约 30%，已成为 Kimi Code 默认模型。 ([Kimi 官方](https://www.kimi.com/resources/kimi-k2-7-code))
- **腾讯**：开源 770B 旗舰 MoE 模型 Hy4 Preview（49B 激活、100 万 token 上下文），采用标准 Apache 2.0 许可，成为今夏首个使用标准宽松许可的开源旗舰；另开源 Youtu-agent 智能体框架。 ([AIToolsRecap](https://aitoolsrecap.com/Blog/tencent-hy4-apache-open-weights-2026) · [ai-damn](https://ai-damn.com/tencent-open-sources-ai-agent-framework-youtu-agent-1756428786611))
- **智谱**：GLM-5.3-Flash 促销定价今日结束；按承诺 GLM-5.3 旗舰权重预计 9 月中下旬发布。 ([AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-september-09-2026))
- **DeepSeek**：DeepSeek-V4-Flash-Vision-Exp 位居 HuggingFace 周榜热门模型第一（9 月 6 日数据，下载量 20.9 万+）。 ([HuggingFace 周榜](https://gaojihao.github.io/github-hot/hf-trending-weekly.html))

### 国外

- **OpenAI**：支持加州 SB 1119 并推出 ChatGPT for Teens（见今日要闻）；宣布 DevDay 定于 9 月 29 日在旧金山举行，预计带来 Astra 更大范围开放与完整评测套件；内部以「每个研究员工作日对应 3.1 个 agent 工作日」衡量智能体使用，明确「测使用、不测产出」。 ([AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-september-09-2026) · [FutureTools](https://futuretools.io/news?s=03))
- **Anthropic**：Claude Code 周使用额度将于 9 月 14 日起下调约 17%（仍较 5 月基线高 25%），影响重度订阅用户。 ([AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-september-09-2026))
- **Microsoft**：发布 MAI-Transcribe-2 语音转写模型（9 月 3 日）。 ([Unite.AI](https://www.unite.ai/series/artificial-intelligence/))
- **Google / Meta**：Gemini 3.8 Flash 与 Meta Muse Spark 1.3 于本周初发布后持续铺开，Gemini 3.1 Pro 仍为谷歌旗舰稳定版。 ([Web3AI Blog](https://www.web3aiblog.com/blog/gpt-6-astra-vs-claude-fable-5-1-vs-gemini-3-1-pro-2026))

## 新工具 & CLI

- **Kimi Code** — 月之暗面面向终端与 IDE 的新一代编程 agent，由 K2.7 Code 驱动，可分析整个仓库、规划多步骤任务、执行命令并自主迭代，面向「终端优先」开发流程。 ([官方介绍](https://www.kimi.com/resources/kimi-code-introduction))
- **openai-cli** — OpenAI 官方命令行工具，把公司模型能力直接带进终端，减少脚本与终端间的来回切换。 ([报道](https://ai-damn.com/openai-s-new-cli-tool-brings-ai-power-to-your-terminal-1778213693127))
- **Terminal for AI CLI v0.3.0（9月3日）** — 在编辑器侧边栏嵌入真实终端，支持多会话、分屏与拖拽图片，与 AI CLI 并列使用。 ([GitHub](https://github.com/den0206/terminal-for-ai-cli/blob/main/README.md))
- **腾讯 Youtu-agent** — 腾讯开源的高性能 Agent 框架，用于构建、运行与评估自主智能体，支持数据分析、文件处理等实用能力。 ([报道](https://ai-damn.com/tencent-open-sources-ai-agent-framework-youtu-agent-1756428786611))
- **browser-use/video-use** — browser-use 团队开源的视频智能体项目，本周新增 2,590 星，把浏览器 agent 能力延伸到视频场景。 ([GitHub](https://github.com/browser-use/video-use))

## 编程方式

- **Agent Skills 生态全面爆发**：本周 GitHub 涨星榜被「可插拔技能库」主导——claude-scientific-skills（39k 星，165 个科研 skills、19 万科学家使用）、reverse-skill、diagram-design、emilkowalski/skills 等，把能力包成 Claude Code / Codex / Cursor 可即插即用的 skill，成为 coding agent 的新扩展范式。 ([GitHub 周榜](https://github.com/OpenGithubs/github-weekly-rank/blob/main/2026/09/20260907.md) · [CSDN 周报](https://blog.csdn.net/2301_79444864/article/details/161808377))
- **「多角色 Agent 协作」进入国内生产环境**：阿里云「万有无界」把复杂任务拆解给多位不同职责的 Agent 协作完成，与单 Agent 独立完成任务形成对比，标志企业级多智能体工作台开始公测落地。 ([i黑马](http://m.toutiao.com/group/7683113558518874630/))
- **以「使用量」度量 agent**：OpenAI 披露 3.1 agent-workdays / 研究员工作日指标，明确以使用而非产出衡量智能体价值，为团队评估 agent 投入提供新口径。 ([AIToolsRecap](https://aitoolsrecap.com/Blog/ai-news-september-09-2026))
- **推理效率成为编程模型新赛道**：Kimi K2.7 Code 在编程与 agent 基准全面领先 K2.6 的同时思考 token 减少约 30%，「少想多做」的长程编程优化思路正在主流化。 ([Kimi 官方](https://www.kimi.com/resources/kimi-k2-7-code))

## 总结

今日 AI 开发圈的关键词是「整合与开源提速」：NVIDIA 以 129 亿美元收编 Hugging Face 重塑开源分发层，国内面壁 MiniCPM5-2B、腾讯 Hy4、Kimi K2.7 Code 密集开源并以标准许可与极致效率争夺生态卡位；工程侧 Agent Skills 技能库爆发、「多角色 Agent 协作」与「以使用量度量 agent」正在把 AI 编程推向更成熟的编排范式。
