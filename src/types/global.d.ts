import type { RenderableTreeNode } from '@markdoc/markdoc';
import type { blog, project } from 'src/lib/markdoc/frontmatter.schema';
import { z } from 'zod';

type BlogPostType = z.infer<typeof blog>;
type ProjectPostType = z.infer<typeof project>;
type BasePost = {
  slug: string;
  content: RenderableTreeNode;
};
export type BlogPost = BasePost & {
  frontmatter: BlogPostType;
};

export type ProjectPost = BasePost & {
  frontmatter: ProjectPostType;
};

export type Post = BlogPost | ProjectPost;
