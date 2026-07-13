---
title: "AI 开发日报 · 2026年06月01日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-01
tags: ["AI日报"]
---

## 今日要闻

### 1. MiniMax 发布年度旗舰模型 M3，1M 上下文 + 原生多模态

6月1日，MiniMax 正式发布年度旗舰大模型 M3。M3 采用全新注意力架构 MSA（MiniMax Sparse Attention），最高支持 1M Token 超长上下文，集齐原生多模态感知、超长上下文处理与高阶智能体长周期异步执行三大核心能力。在多个权威编程与逻辑推理评测中综合成绩优异，部分复杂逻辑任务超越海外主流旗舰模型。模型为 428B 参数 MoE 架构，单 Token 激活约 9.8B。

来源：[MiniMax Research 官方博客](https://www.minimaxi.com/blog/minimax-m3) · [中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

### 2. NVIDIA GTC Taipei @ COMPUTEX：RTX Spark、Cosmos 3、Vera CPU 三连发

6月1日上午，黄仁勋在台北国际电脑展（COMPUTEX 2026）发表主题演讲，一连发布多项重磅产品：面向消费级 PC 的 RTX Spark 超级芯片（1 PetaFLOP AI 算力，与联发科合作，主打本地个人智能体）；专为物理 AI 打造的开放世界基础模型 Cosmos 3（基于 Mixture-of-Transformer 架构，统一视觉推理、世界生成与动作预测）；以及专为 Agent 异步并发调度设计的 Vera CPU（比 x86 快 1.8 倍）。黄仁勋称 RTX Spark 是"33 年技术积累浓缩到一颗芯片"。

来源：[NVIDIA 官方博客](https://blogs.nvidia.com/blog/nvidia-gtc-taipei-computex-2026-news/) · [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-unveils-vera-the-cpu-for-agents) · [电子工程专辑](https://www.eet-china.com/news/202606028118.html)

### 3. 美国商务部关闭 AI 芯片出口"子公司漏洞"

6月1日，美国商务部工业与安全局（BIS）发布新指引，明确先进 AI 芯片的出口许可要求适用于任何总部在中国的实体，无论其子公司设在何处。此举封堵了自 2022 年以来中国企业通过马来西亚等第三国子公司采购芯片的最常用绕道途径，意味着向中国总部企业出货 Blackwell 芯片即使经由非中国子公司也属违法。

来源：[Big Hat Group - China AI Weekly](https://www.bighatgroup.com/blog/china-ai-weekly-2026-06-13/)

### 4. 工信部《具身智能基准测试方法》正式生效

由工信部批准实施的国内首部《YD/T 6770—2026 人工智能关键基础技术 具身智能基准测试方法》于6月1日正式生效，填补了行业评测长期空白，为国内具身智能产业规范化发展奠定制度底座。

来源：[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

## 涨星最快项目

1. **affaan-m/ECC** — Agent 性能优化系统，覆盖技能、本能、记忆、安全四层，总星已超 21 万，是 Claude Skills 生态的标杆项目。[GitHub](https://github.com/affaan-m/ECC)

2. **chopratejas/headroom** — LLM 输入压缩工具，宣称压缩 60-95% Token 且问答质量几乎不受影响，本月最大黑马。[GitHub](https://github.com/chopratejas/headroom)

3. **mvanhorn/last30days-skill** — 跨 Reddit、X、YouTube 等平台的话题研究 Skill，周增超 1.2 万星。[GitHub](https://github.com/mvanhorn/last30days-skill)

4. **NVIDIA/SkillSpector** — NVIDIA 官方维护的 Agent Skill 安全扫描器，检查权限声明与数据泄露风险。[GitHub](https://github.com/NVIDIA/SkillSpector)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **MiniMax M3** — 428B MoE 旗舰模型，MSA 稀疏注意力，1M 上下文，原生多模态，编程与智能体能力达前沿水平。（[MiniMax](https://www.minimaxi.com/blog/minimax-m3)）

- **百度 ERNIE 5.1** — 采用"多维弹性预训练"，预训练成本仅为同规模模型的 6%，LMArena Search 全球第四、国产第一。（[AIBase](https://news.aibase.com/news/27882)）

### 国外

- **NVIDIA Cosmos 3** — 全球首款完全开放的全模态物理 AI 基础模型，统一文本、图像、视频、音频与动作序列输入输出。（[NVIDIA 台湾博客](https://blogs.nvidia.com.tw/blog/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai/)）

- **Google Gemma 4-12B** — DeepMind 开源的轻量级多模态模型，支持原生音频与视觉波形输入，可在消费级终端本地运行。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

## 新工具 & CLI

- **NVIDIA RTX Spark** — 面向 Windows 笔记本的 AI 超级芯片，1 PetaFLOP 算力支持本地 100 万 Token 上下文处理，今秋由华硕、戴尔、惠普、联想等出货。（[NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-unveils-vera-the-cpu-for-agents)）

- **NVIDIA Vera CPU** — 专为 Agent 异步并发调度与大规模上下文处理设计的 CPU，比 x86 快 1.8 倍，驱动 Vera Rubin 系统量产。（[NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-unveils-vera-the-cpu-for-agents)）

- **OpenBMB VoxCPM2** — 无 Tokenizer 架构的多语言 TTS 系统，强调逼真语音克隆与创意语音设计。（[AI News June 2](https://aitoolly.com/ai-news/2026-06-02)）

## 编程方式

- **PC 被重新定义为"个人智能体"载体** — NVIDIA RTX Spark 与微软即将发布的 Scout 个人智能体形成软硬件呼应，"always on、always local"的本地 Agent 成为 PC 新范式，开发者可摆脱云端延迟与带宽依赖在本地运行长上下文智能体。（[电子工程专辑](https://www.eet-china.com/news/202606028118.html)）

- **具身智能进入标准化评测阶段** — 随着 YD/T 6770—2026 生效与 Cosmos 3 发布，物理 AI 从"实验室演示"走向"可基准化衡量"，开发者开始拥有统一的仿真、评测与训练基础。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

## 总结

今日 AI 行业的关键词是"本地化"与"长上下文"——MiniMax M3 的 1M 上下文、NVIDIA RTX Spark 的本地 PetaFLOP 算力、Cosmos 3 的物理 AI 统一模型，共同把智能体从云端推向终端与物理世界；而美国芯片出口管制的再度收紧，则加速了国产算力与国产模型的自主闭环。
