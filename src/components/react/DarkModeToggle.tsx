import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Theme } from '@/types/enums';

export function ModeToggle() {
  const [theme, setThemeState] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains(Theme.Dark);
    setThemeState(isDarkMode ? Theme.Dark : Theme.Light);
  }, []);

  useEffect(() => {
    const isDark =
      theme === Theme.Dark ||
      (theme === Theme.System &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove'](Theme.Dark);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='border-0  grid w-auto h-auto [&_svg]:size-[1.3rem] cursor-pointer'
        >
          <Sun className='block scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='block absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-background'>
        <DropdownMenuItem onClick={() => setThemeState(Theme.Light)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState(Theme.Dark)}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState(Theme.System)}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
