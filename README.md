# Notion 风格博客

基于 Astro + Tailwind CSS v4 构建的静态博客，部署在 Cloudflare Pages，评论使用 Giscus (GitHub Discussions)。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

输出目录：`dist/`

## 配置 Giscus 评论

1. 确保博客仓库为 **public** 公开仓库
2. 安装 [giscus app](https://github.com/apps/giscus) 到仓库
3. 在仓库 Settings → General → Features 勾选 **Discussions**
4. 在 Discussions 中创建 **Announcements** 分类
5. 访问 https://giscus.app 填入仓库名，获取 `data-repo-id` 和 `data-category-id`
6. 编辑 `src/consts.ts`，替换 `GISCUS_CONFIG` 中的值

## 部署到 Cloudflare Pages

### 方式 A：Git 集成（推荐）

1. 将代码推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Workers & Pages → Create → Pages → Connect to Git
4. 选择仓库
5. 构建设置：
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Save and Deploy

### 方式 B：Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist
```

## 自定义

| 配置 | 文件 | 说明 |
|------|------|------|
| 站点标题/描述 | `src/consts.ts` | `SITE_TITLE`, `SITE_DESCRIPTION` |
| 导航链接 | `src/consts.ts` | `NAV_LINKS` |
| Giscus 评论 | `src/consts.ts` | `GISCUS_CONFIG` |
| 社交链接 | `src/consts.ts` | `SOCIAL_LINKS` |
| 设计 Token | `src/styles/global.css` | `@theme` 块 |
| 站点 URL | `astro.config.mjs` | `site` 字段 |

## 写文章

在 `src/content/blog/` 下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-07-10
tags: ["标签1", "标签2"]
---

正文内容...
```

## 技术栈

- [Astro 5.x](https://astro.build) — 静态站点生成
- [Tailwind CSS v4](https://tailwindcss.com) — 样式系统
- [Giscus](https://giscus.app) — GitHub Discussions 评论
- [Cloudflare Pages](https://pages.cloudflare.com) — 部署
