---
title: "AI 开发日报 · 2026年06月05日"
description: "今日 AI 开发资讯精选"
pubDate: 2026-06-05
tags: ["AI日报"]
---

## 今日要闻

### 1. 特朗普签署第11号国家安全总统备忘录，加速 AI 在情报与作战领域部署

6月5日，白宫宣布美国总统特朗普正式签署第11号国家安全总统备忘录。备忘录明确要求负责任地加快 AI 在情报与作战领域的部署，并指示国防部长皮特·赫格塞斯在 90 天内修订武器系统自主性相关指令，确保 AI 系统"尊重指挥链"。同时要求头部 AI 开发商在发布最高性能模型前，自愿提交政府进行网络安全测试。备忘录明令禁止利用 AI 进行言论审查或非法监控。

来源：[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

### 2. 五角大楼与 Anthropic 矛盾公开化：拒绝解除 Claude 军用禁令被列为"供应链风险实体"

在新政背景下，五角大楼与顶尖 AI 实验室 Anthropic 的矛盾彻底公开化。因 Anthropic 拒绝解除其 Claude 模型在"自主武器系统"及"大规模监控"两项领域的应用禁令，五角大楼已于今年3月正式将其列为"供应链风险实体"，并强调军方有权依法使用相关技术。这一罕见的公开斥责，直接切断了该公司此前对美军（包括伊朗行动）的任务支持。

来源：[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

### 3. 备忘录强调"多供应商采购"避免单一故障点

白宫科技政策办公室强调"多供应商采购以避免单一故障点"以及"防止实体削弱作战 AI"，将 AI 供应链安全级别提升到与传统军工同等高度。这意味着美国防部在 AI 采购上刻意避免对单一厂商的依赖，客观上也为更多 AI 公司进入国防采购体系打开窗口。

来源：[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)

## 涨星最快项目

1. **mukul975/Anthropic-Cybersecurity-Skills** — 754 个结构化网络安全技能，映射 MITRE ATT&CK、NIST CSF 等五大安全框架，给 Agent 配"资深安全顾问"，总星超 1.2 万。[GitHub](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

2. **microsoft/agent-governance-toolkit** — 覆盖 OWASP Agentic Top 10 全部 10 个风险点的 Agent 治理工具包，含策略引擎、零信任身份与执行沙盒。[GitHub](https://github.com/microsoft/agent-governance-toolkit)

3. **NVIDIA/SkillSpector** — NVIDIA 官方 Skill 安全扫描器，检查第三方 Agent 技能包的权限声明与命令注入风险。[GitHub](https://github.com/NVIDIA/SkillSpector)

4. **pydantic/monty** — 极简 Python 解释器沙箱，用于 AI 执行环境隔离，在 Agent 安全议题升温后受关注。[GitHub](https://github.com/pydantic/monty)

> 数据来源：[CSDN GitHub 6月热门项目盘点](https://blog.csdn.net/yanceyxin/article/details/162208780)

## 大模型进展

### 国内

- **国产模型军用化讨论升温** — 第11号国安备忘录与 Anthropic 事件叠加，凸显 AI 从"生成式文本工具"跃迁为可直接接入杀伤链、操控自主武器的"智能体引擎"，国内对自主可控大模型的战略价值认知进一步强化。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

### 国外

- **Anthropic Claude 军用禁令** — Anthropic 坚持 Claude 不用于自主武器与大规模监控，因此被五角大楼列为"供应链风险实体"，"企业道德护栏"与"军方战术需求"的冲突公开化。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

- **前沿模型预发布安全审查** — 美国推行"自愿原则但附带强约束"的模型安全审查机制，头部模型发布前需自愿提交政府网络安全测试，影响 OpenAI GPT-5.6 等模型的公开发布节奏（被调整为分阶段开放）。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

## 新工具 & CLI

- **Anthropic-Cybersecurity-Skills** — 754 个安全技能包，覆盖 26 个安全领域，从渗透测试到事件响应，让 Agent 拥有安全专家知识体系。（[GitHub](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)）

- **agent-governance-toolkit** — OWASP Agentic Top 10 全覆盖的治理工具包，Agent 不默认信任任何人或系统，每次操作验证权限。（[GitHub](https://github.com/microsoft/agent-governance-toolkit)）

- **SkillSpector** — 类似 npm audit 但面向 Agent 技能包，检查权限声明、数据泄露模式与命令注入风险。（[GitHub](https://github.com/NVIDIA/SkillSpector)）

## 编程方式

- **Agent 安全治理成为"必选项"** — 第11号国安备忘录把 AI 供应链安全提升到军工级别，叠加公开的"Agent 误删邮件"事故与 ICML 2026 语义缓存键碰撞攻击论文，Agent 安全从"可选"变成"必选"；策略引擎、零信任身份、可审计沙箱成为开发者的新基线。（[CSDN](https://blog.csdn.net/yanceyxin/article/details/162208780)）

- **"企业道德护栏"让位于国家安全** — 五角大楼对 Anthropic 的处理释放明确信号：在国家安全与大国博弈面前，商业大模型厂商的"企业道德护栏"必须让步于军方战术需求；拒绝妥协者被踢出国防采购体系，愿意绑定者瓜分防务红利。（[中国指挥与控制学会](http://www.c2.org.cn/h-nd-3104.html)）

## 总结

今日 AI 行业的关键词是"AI 军事化"与"供应链安全"——特朗普第11号国安备忘录加速 AI 接入情报与作战，五角大楼与 Anthropic 的公开冲突撕开了"企业道德"与"国家安全"的裂痕；当 AI 从文本工具跃迁为可操控自主武器的智能体引擎，Agent 安全治理与多供应商采购成为新的强制基线。
