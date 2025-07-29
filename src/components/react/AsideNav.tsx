import AuthorCard from '@/components/react/AuthorCard';
import React from 'react';

export default function AsideNav() {
  return (
    <ul className='p-2'>
      <li className='p-2 bg-background hover:bg-gray-200 transition-colors duration-400 ease-in-out rounded-sm'>
        <a href='/' className='block '>
          <AuthorCard></AuthorCard>
        </a>
      </li>
    </ul>
  );
}
