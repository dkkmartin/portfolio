'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="headerGhost"
      size={'icon'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-6 h-6 flex items-center justify-center hover:opacity-80"
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size={20} />
      <Moon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={20}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
