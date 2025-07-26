import HeaderLink from '@/components/HeaderLink.astro';
import { Separator } from '@/components/ui/separator';
import {
  ArrowUpRight,
  CameraIcon,
  GitBranchIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  PenBoxIcon,
  PenIcon,
  PhoneCall,
  PhoneOutgoing,
  SquareArrowOutUpRightIcon,
} from 'lucide-react';
import React, { type ReactElement } from 'react';
import { cn } from '@/lib/utils';

const navLinkConfigs = [
  {
    href: '/',
    icon: HomeIcon,
    text: 'Trang chủ',
  },
  {
    href: 'https://github.com/vdloc',
    icon: PenBoxIcon,
    text: 'Bài viết',
  },
  {
    href: 'https://github.com/vdloc',
    icon: CameraIcon,
    text: 'Ảnh',
  },
];

const contactLinkConfigs = [
  {
    href: 'https://github.com/vdloc',
    icon: GithubIcon,
    text: 'Github',
  },
  {
    href: 'https://github.com/vdloc',
    icon: LinkedinIcon,
    text: 'Linkedin',
  },
  {
    href: 'tel:0374354106',
    icon: PhoneCall,
    text: '+840374354106',
  },
];

type LinkConfigs = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

function LinkList({
  linkConfigs,
  className,
}: {
  linkConfigs: LinkConfigs[];
  className: string;
}) {
  const cls = cn(className, 'pb-6 grid gap-2');
  return (
    <ul className={cls}>
      {linkConfigs.map(({ href, icon: Icon, text }) => (
        <li>
          <a
            className='unset flex gap-4 py-2 px-2 justify-between items-center rounded-sm duration-200 ease-in-out hover:bg-foreground hover:text-background transition-colors'
            href={href}
          >
            <div className='flex gap-2 items-center'>
              <Icon className='size-5' />
              <span className='text-base'>{text}</span>
            </div>
            <span>
              <ArrowUpRight className='size-4' />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function DrawerLinks() {
  return (
    <nav className='p-4 font-semibold'>
      <LinkList className='pb-6' linkConfigs={navLinkConfigs} />
      <Separator className='bg-foreground' />
      <h4 className='text-sm  mt-8'>Liên hệ</h4>
      <LinkList className='py-4' linkConfigs={contactLinkConfigs} />
    </nav>
  );
}
