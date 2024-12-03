'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, ReactNode } from 'react';

export const HoverEffect = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('', className)}>
      {React.Children.map(children, (child, idx) => (
        <div
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-gray-200 dark:bg-muted rounded-md -z-20"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          {child}
        </div>
      ))}
    </div>
  );
};
