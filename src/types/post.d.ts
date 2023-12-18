import type { blog, project } from 'src/lib/markdoc/frontmatter.schema';
import { z } from 'zod';

type BlogPostType = z.infer<typeof blog>;
type ProjectPostType = z.infer<typeof project>;
type RawPost = BlogPostType | ProjectPostType;

export type Post = {
  slug?: string;
  content?: string;
  frontmatter: RawPost;
};
