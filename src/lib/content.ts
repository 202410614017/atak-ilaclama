import pagesData from "./pages.json";

export type Heading = { level: string; text: string };
export type PageData = {
  slug: string;
  pageTitle: string;
  h1: string;
  headings: Heading[];
  paragraphs: string[];
  bullets: string[];
};

const pages = pagesData as Record<string, PageData>;

export function getPage(slug: string): PageData | undefined {
  return pages[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(pages);
}

export function getHasereSubpage(slug: string) {
  return getPage(`hasere-ilaclama/${slug}`);
}

export function getTemizlikSubpage(slug: string) {
  return getPage(`temizlik/${slug}`);
}

export function getBlogPost(slug: string) {
  return getPage(slug);
}
