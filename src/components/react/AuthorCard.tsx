import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DrawerTitle } from '@/components/ui/drawer';
import React from 'react';

export default function AuthorCard() {
  return (
    <div className='flex items-center gap-2'>
      <Avatar className='size-12 lg:size-9 bg-gray-300 p-1 shadow-gray-200 shadow-sm'>
        <AvatarImage
          className='block rounded-full'
          src='https://github.com/vdloc.png'
          alt='Profile picture'
        />
      </Avatar>
      <div className='space-y-1'>
        <h4 className='text-md font-bold lg:text-sm'>Vũ Đức Lộc</h4>
        <p className='lg:text-sm'>Frontend Developer</p>
      </div>
    </div>
  );
}
