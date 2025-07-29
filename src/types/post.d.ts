import type { blog, project } from 'src/lib/markdoc/frontmatter.schema';
import { z } from 'zod';

export type BlogPostType = z.infer<typeof blog>;
export type ProjectPostType = z.infer<typeof project>;
export type RawPost = BlogPostType | ProjectPostType;

export type Post = {
  slug?: string;
  content?: string;
  frontmatter: RawPost;
};
