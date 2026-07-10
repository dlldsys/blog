---
title: "你好，世界"
description: "博客的第一篇文章 — 介绍这个项目的诞生与技术选型。"
pubDate: 2026-07-10
tags: ["公告", "技术"]
---

欢迎来到我的博客！这是第一篇文章。

## 为什么选择 Astro

Astro 是一个现代的静态站点生成器，它的核心理念是 **内容优先**：

- 默认零 JavaScript，页面加载极快
- 支持 Markdown 内容集合，类型安全
- 可以按需引入 React、Vue、Svelte 等框架
- 完美适配 Cloudflare Pages 部署

## 设计灵感

这个博客的设计灵感来自 Notion 的视觉语言 — 温暖的纸质画布、克制的色彩、编辑级的排版。

> 好的设计不是装饰，而是让内容自己说话。

## 代码示例

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## 部署

这个博客部署在 Cloudflare Pages 上，每次推送代码到 GitHub 就会自动触发部署。评论系统使用 Giscus 接入 GitHub Discussions，无需独立后端。

期待在这里分享更多内容。
