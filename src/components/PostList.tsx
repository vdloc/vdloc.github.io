import React from 'react';
import { sortPostsByDate } from 'src/utils';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { blog } from '../lib/markdoc/frontmatter.schema';
import { readAll } from '../lib/markdoc/read';

const posts = await readAll({
  directory: 'blog',
  frontmatterSchema: blog,
});
dsd;
const sortedPosts = sortPostsByDate(posts);

export default function PostList({ className }: { className?: string }) {
  return (
    <section className={`post-list ${className}`}>
      <Table>
        <TableCaption>Bài viết</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Ngày viết</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPosts.map((post) => {
            const formattedDate = new Date(
              post.frontmatter.date
            ).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return (
              <TableRow>
                <TableCell className='title'>
                  {post.frontmatter.external ? (
                    <a
                      href={post.frontmatter.url}
                      target='_blank'
                      className='unset
                      transition-[background-size] duration-300 
                      bg-linear-to-r bg-bottom-left bg-no-repeat
                      bg-size-[0%_55%] hover:bg-size-[100%_55%] dark:bg-size-[0%_2px] hover:dark:bg-size-[100%_2px]
                      from-primary-blue to-primary-blue dark:from-primary-blue dark:to-primary-blue
                    '
                    >
                      <span>{post.frontmatter.title}</span>
                      <span>
                        <i className='ml-1 mr-1 text-[12px] pb-2 fa-solid fa-up-right-from-square' />
                      </span>
                    </a>
                  ) : (
                    <a
                      href={`/blog/${post.slug}`}
                      className='unset
                      transition-[background-size] duration-300 
                      bg-linear-to-r bg-bottom-left bg-no-repeat
                      bg-size-[0%_55%] hover:bg-size-[100%_55%] dark:bg-size-[0%_2px] hover:dark:bg-size-[100%_2px]
                      from-primary-blue to-primary-blue dark:from-primary-blue dark:to-primary-blue
                    '
                    >
                      {post.frontmatter.title}
                    </a>
                  )}
                </TableCell>
                <TableCell className='text-text-muted text-sm italic pt-1'>
                  <time dateTime={post.frontmatter.date.toISOString()}>
                    {formattedDate}
                  </time>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
