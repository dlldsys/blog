export const SITE_TITLE = 'Notion 风格博客';
export const SITE_DESCRIPTION = '一个温暖的、纸质感的技术博客';

export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '博客', href: '/blog' },
  { label: '标签', href: '/tags' },
  { label: '关于', href: '/about' },
];

export const GISCUS_CONFIG = {
  repo: 'your-username/your-blog-repo',
  repoId: 'R_kgDXXXXXXXX',
  category: 'Announcements',
  categoryId: 'DIC_kwDXXXXXXXX',
  mapping: 'pathname' as const,
  reactionsEnabled: '1',
  inputPosition: 'bottom' as const,
  lang: 'zh-CN',
  theme: 'light',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  twitter: 'https://twitter.com/your-username',
};

export const POSTS_PER_PAGE = 6;
