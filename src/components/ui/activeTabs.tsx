'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './button';

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | unknown;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab | null>();

  return (
    <>
      <div className={containerClassName}>
        {propTabs.map((tab) => (
          <Link
            href={`/${tab.value}`}
            key={tab.title}
            onMouseEnter={() => setActive(tab)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              'relative !px-2 !py-0.5 rounded-md !text-lg',
              tabClassName,
              buttonVariants({ variant: 'headerGhost' })
            )}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {active && active.value === tab.value && (
              <motion.div
                layoutId="hoveredbutton"
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 bg-gray-200 dark:bg-muted rounded-md -z-20',
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">{tab.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};
