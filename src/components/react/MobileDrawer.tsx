import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import React from 'react';
import { EyeIcon } from 'lucide-react';

export default function MobileDrawer() {
  return (
    <aside className='md:hidden grid'>
      <Drawer>
        <DrawerTrigger className='cursor-pointer'>
          <EyeIcon className='size-6' />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className='text-4xl'>
              Are you absolutely sure?
            </DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <a
            className='unset ml-4 rounded-sm transition-[background-size] duration-150 ease-in-out bg-left-bottom bg-[length:0%_55%] hover:bg-[length:100%_55%] bg-no-repeat bg-gradient-to-r from-primary-yellow to-primary-yellow dark:bg-none dark:hover:text-primary-yellow'
            href='https://github.com/vdloc'
            target='_blank'
          >
            <i
              className='fa-brands fa-github'
              aria-hidden='true'
              title='Blogster on GitHub'
            ></i>
            <span>GitHub</span>
          </a>
          <a
            className='unset ml-4 rounded-sm transition-[background-size] duration-150 bg-left-bottom bg-[length:0%_55%] hover:bg-[length:100%_55%] bg-no-repeat bg-gradient-to-r from-primary-blue to-primary-blue dark:bg-none dark:hover:text-primary-blue'
            href='https://www.facebook.com/vdlocdotme'
          >
            <i
              className='fa-brands fa-facebook'
              aria-hidden='true'
              title='Dinesh on Twitter'
            ></i>
            <span>Facebook</span>
          </a>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </aside>
  );
}
