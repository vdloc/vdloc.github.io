import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import React from 'react';
import { BoltIcon } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import DrawerLinks from '@/components/react/DrawerLinks';

export default function MobileDrawer() {
  return (
    <aside className='md:hidden grid'>
      <Drawer>
        <DrawerTrigger className='cursor-pointer'>
          <BoltIcon className='size-[1.4rem] hover:animate-spin transition' />
        </DrawerTrigger>
        <DrawerContent className='z-[100]'>
          <DrawerHeader className='text-left'>
            <div className='flex items-center gap-2'>
              <Avatar className='size-12 bg-gray-300 p-1 shadow-gray-200 shadow-sm'>
                <AvatarImage
                  className='block rounded-full'
                  src='https://github.com/vdloc.png'
                  alt='Profile picture'
                />
              </Avatar>
              <div className='space-y-1'>
                <DrawerTitle className='text-md font-bold'>
                  Vũ Đức Lộc
                </DrawerTitle>
                <p>Frontend Developer</p>
              </div>
            </div>
          </DrawerHeader>
          <DrawerLinks></DrawerLinks>
        </DrawerContent>
      </Drawer>
    </aside>
  );
}
