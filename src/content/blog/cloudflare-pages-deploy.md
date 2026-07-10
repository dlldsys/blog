---
title: "Cloudflare Pages 部署指南"
description: "从零开始将 Astro 博客部署到 Cloudflare Pages，包括 Git 集成和 Wrangler CLI 两种方式。"
pubDate: 2026-07-08
tags: ["技术", "部署"]
---

Cloudflare Pages 是一个快速、安全的静态网站托管平台，免费额度对个人博客来说完全够用。

## 前置准备

- 一个 GitHub 账号
- 一个 Cloudflare 账号（免费即可）
- 本地安装 Node.js 20+

## 方式一：Git 集成部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 Cloudflare Dashboard
3. 进入 Workers & Pages → Create → Pages → Connect to Git
4. 选择你的仓库
5. 配置构建设置：

| 设置项 | 值 |
|--------|-----|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

6. 点击 Save and Deploy

每次推送到 main 分支会自动触发生产部署，Pull Request 会生成预览部署。

## 方式二：Wrangler CLI

```bash
# 安装 wrangler
npm install -g wrangler

# 登录
wrangler login

# 构建并部署
npm run build
npx wrangler pages deploy dist
```

## 自定义域名

在 Cloudflare Dashboard 中：

1. 进入你的 Pages 项目
2. Custom domains → Set up a custom domain
3. 输入你的域名
4. 按提示添加 CNAME 记录

## 性能优化

- Cloudflare 自动提供全球 CDN
- 启用自动压缩（Brotli/Gzip）
- 配置缓存规则

> 部署应该是无感的 — 写完文章 push 一下，剩下的交给自动化。
