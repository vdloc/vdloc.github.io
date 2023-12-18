import type { Post } from 'src/types/post';

export function sortPostsByDate(posts: Post[]) {
  return posts
    .filter((p) => p.frontmatter.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    );
}
