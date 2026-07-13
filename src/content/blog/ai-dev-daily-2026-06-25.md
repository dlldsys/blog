---
title: "AI 开发日报 · 2026年06月25日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-25
tags: ["AI日报"]
---

## 今日要闻

### OpenAI 与 Broadcom 揭晓首款自研 AI 芯片 Jalapeño

OpenAI 和 Broadcom 正式揭晓联合设计的首款 AI 推理处理器 Jalapeño，专为 LLM 推理优化而非训练。该芯片从初步设计到流片仅用约 9 个月，开发过程中使用了 OpenAI 自身模型加速芯片设计。Jalapeño 目标将推理成本降低约 50%，初步部署目标为 2026 年底。芯片可能向外部 AI 公司开放，定位为平台型产品。

来源：[The New York Times](https://www.nytimes.com/2026/06/24/technology/openai-broadcom-chip-jalapeno.html)

### Google 人才流失加速：Adler 和 Pritzel 加入 Anthropic

Bloomberg 和 TechCrunch 报道，Google Gemini 关键贡献者 Jonas Adler 和 Alexander Pritzel 离开加入 Anthropic。此前一周内，Transformer 共同作者 Noam Shazeer 加入 OpenAI，诺贝尔奖得主 John Jumper 加入 Anthropic。Google 在两周内失去了五位顶级 AI 研究员，Alphabet 市值两个交易日蒸发超 2700 亿美元。

来源：[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/google-poised-to-lose-two-more-high-profile-ai-staffers-to-anthropic)

### Anthropic 指控阿里巴巴非法访问 Claude 窃取能力

Anthropic 向美国参议员和白宫官员发送信函，正式指控阿里巴巴 Qwen AI 实验室通过第三方运营商非法访问 Claude。据 Bloomberg 报道，与 Qwen 关联的运营商使用约 25,000 个欺诈账户，在 2026 年 4 月 22 日至 6 月 5 日间与 Claude 进行了超过 2880 万次交互，专门针对软件工程和智能体推理能力。

来源：[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models)

### EU AI Act 透明度义务 8 月 2 日生效，仅剩 38 天

EU AI Act 第 50 条透明度义务将于 2026 年 8 月 2 日生效。要求包括：与 AI 系统交互时必须向用户披露、AI 生成的合成音频/图像/视频/文本内容须标注、部署影响用户信念或决策的 AI 系统须满足透明度要求。该义务不限于"高风险" AI 系统，许多标准商业 LLM 部署都在范围内。

来源：[Sidley Austin](https://datamatters.sidley.com/2026/06/24/eu-ai-act-transparency-obligations-preparing-for-compliance-by-2-august-2026/)

## 涨星最快项目

### openai/codex

OpenAI 的轻量级编码 Agent，直接在终端运行，支持远程执行和 MCP 集成。

星标数：日新增 349 | [GitHub](https://github.com/openai/codex)

### alibaba/page-agent

JavaScript 页面内 GUI Agent，用自然语言控制网页界面。

星标数：日新增 280 | [GitHub](https://github.com/alibaba/page-agent)

### vercel-labs/agent-browser

为 AI Agent 构建的浏览器自动化 CLI 工具。

星标数：日新增 141 | [GitHub](https://github.com/vercel-labs/agent-browser)

## 大模型进展

### 国内

**阿里通义千问 Qwen3.7 API 降价**：企业阶梯计价下调，中小开发者按量单价降低 12%，包月/包年企业套餐附赠免费微调算力额度。Agent Coding 代码工具调用成功率提升 18%，Java、Python 和国产前端框架兼容性优化。打通阿里云信创云一体化部署，支持政企客户一键拉起私有化实例。

**Kimi K2.7 Code 代码审计工具优化**：Git 全仓库批量解析逻辑优化，可一次性拉取完整开源项目依赖、架构、注释并自动生成安全审计报告。代码推理算力消耗再降 30%，个人笔记本即可运行中小型代码仓库离线分析。

### 国外

**Anthropic Claude 降价全面生效**：个人 Pro 月费从 20 美元降至 15 美元（降幅 25%），Team 团队单席位从 30 美元降至 25 美元（降幅 16.7%）。存量老用户系统自动完成升级。降价核心目标是挽留自由职业者、学生和小型创业团队。

**AI 公司创纪录投入美国中期选举**：NPR 分析显示，Anthropic Q1 2026 游说支出增至 156 万美元（同比翻四倍），OpenAI 增至 102 万美元（同比翻倍）。AI 相关 super PAC 已向 2026 年中期选举投入超 5000 万美元。

## 新工具 & CLI

- **OpenAI Jalapeño 芯片**：与 Broadcom 联合设计的 LLM 推理专用芯片，目标降低 50% 推理成本，可能向第三方 AI 公司开放。[VentureBeat](https://venturebeat.com/infrastructure/openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom-and-its-development-was-sped-up-with-openais-own-models)
- **stablyai/orca**：Agent 开发环境，支持在桌面和移动端运行并行编程 Agent 舰队。[GitHub](https://github.com/stablyai/orca)
- **jamiepine/voicebox**：开源 AI 语音工作室，支持语音克隆、听写和创作。[GitHub](https://github.com/jamiepine/voicebox)

## 编程方式

OpenAI 自研 Jalapeño 芯片标志着 AI 公司从"模型采购商"向"全栈自研商"的转变。OpenAI 每花在英伟达 GPU 上的一美元都是未能保留的利润——Jalapeño 的 50% 推理成本削减不是脚注，而是整个 AI 商业模式的重组。更便宜的推理意味着更经济可行的智能体 AI、更激进的企业定价和更强的竞争护城河。对于一直关注 AI ROI 的企业，这是让几乎所有用例的经济计算更优的开发——OpenAI 可能在 2026 年底前将 Jalapeño 成本节约作为企业市场的定价武器。

## 总结

自研芯片、人才争夺和安全攻防三线并进，AI 基础设施竞争从模型层延伸到芯片层，行业垂直整合趋势加速。
