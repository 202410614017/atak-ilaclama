export const BLOG_CATEGORIES = [
  "Tümü",
  "Haşere Kontrolü",
  "Pratik Bilgiler",
  "Sektör Haberleri",
  "Tahtakurusu",
  "Yasal Bilgiler",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const POSTS_PER_PAGE = 9;
