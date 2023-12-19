import type { BlogPostType, Post, ProjectPostType } from '@types/postd.';

export function sortPostsByDate<T extends Post>(posts: T[]): T[] {
  return posts
    .filter((p) => p.frontmatter.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    );
}

export function getFormattedDate(date: Date) {
  return new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
