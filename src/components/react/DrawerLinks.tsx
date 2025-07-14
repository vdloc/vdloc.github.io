import HeaderLink from '@/components/HeaderLink.astro';
import React from 'react';

export default function DrawerLinks() {
  return (
    <>
      <HeaderLink
        class='unset ml-4 rounded-sm transition-[background-size] duration-150 ease-in-out bg-bottom-left bg-size-[0%_55%] hover:bg-size-[100%_55%] bg-no-repeat bg-linear-to-r from-primary-yellow to-primary-yellow dark:bg-none dark:hover:text-primary-yellow'
        href='https://github.com/vdloc'
      >
        GitHub
      </HeaderLink>
      <HeaderLink
        class='unset ml-4 rounded-sm transition-[background-size] duration-150 bg-bottom-left bg-size-[0%_55%] hover:bg-size-[100%_55%] bg-no-repeat bg-linear-to-r from-primary-blue to-primary-blue dark:bg-none dark:hover:text-primary-blue'
        href='https://www.facebook.com/vdlocdotme'
      >
        Facebook
      </HeaderLink>
    </>
  );
}
