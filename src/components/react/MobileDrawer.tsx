import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import React from 'react';
import { BoltIcon } from 'lucide-react';
import DrawerLinks from '@/components/react/DrawerLinks';
import AuthorCard from '@/components/react/AuthorCard';

export default function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className='cursor-pointer'>
        <BoltIcon className='size-[1.4rem] hover:animate-spin transition' />
      </DrawerTrigger>
      <DrawerContent className='z-[100]'>
        <DrawerHeader className='text-left'>
          <AuthorCard></AuthorCard>
        </DrawerHeader>
        <DrawerLinks></DrawerLinks>
      </DrawerContent>
    </Drawer>
  );
}
