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
import type { Post } from '@/types/post';

const posts = await readAll({
  directory: 'blog',
  frontmatterSchema: blog,
});

const sortedPosts = sortPostsByDate(posts as Post[]);

export default function PostList({ className }: { className?: string }) {
  return (
    <section className={`post-list ${className}`}>
      <Table className='text-base'>
        <TableHeader>
          <TableRow>
            <TableHead className='font-semibold first:pl-0 last:pr-0'>
              Tiêu đề
            </TableHead>
            <TableHead className='font-semibold first:pl-0 last:pr-0'>
              Ngày viết
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPosts.map((post) => {
            const formattedDate = new Date(
              post.frontmatter.date
            ).toLocaleDateString('vi-VI', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return (
              <TableRow
                className='peer-hover:opacity-50'
                id={`post-${post.id}`}
                key={post.id}
              >
                <TableCell className='first:pl-0 last:pr-0'>
                  {post.frontmatter.external ? (
                    <a
                      href={post.frontmatter.url}
                      target='_blank'
                      className='block transition-transform hover:skew-1 hover:underline'
                    >
                      <span>{post.frontmatter.title}</span>
                    </a>
                  ) : (
                    <a
                      href={`/blog/${post.slug}`}
                      className='block transition-transform hover:skew-1 hover:underline'
                    >
                      {post.frontmatter.title}
                    </a>
                  )}
                </TableCell>
                <TableCell className='text-text-muted text-sm italic pt-1 first:pl-0 last:pr-0'>
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
