export const SITE_TITLE = 'Notion 风格博客';
export const SITE_DESCRIPTION = '一个温暖的、纸质感的技术博客';

export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '博客', href: '/blog' },
  { label: '标签', href: '/tags' },
  { label: '关于', href: '/about' },
];

export const GISCUS_CONFIG = {
  repo: 'dlldsys/blog',
  repoId: 'R_kgDOTUfW1w',
  category: 'Announcements',
  categoryId: 'DIC_kwDOTUfW184DA5yr',
  mapping: 'pathname' as const,
  reactionsEnabled: '1',
  inputPosition: 'bottom' as const,
  lang: 'zh-CN',
  theme: 'light',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/dlldsys',
};

export const POSTS_PER_PAGE = 6;
