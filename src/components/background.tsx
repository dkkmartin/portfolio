import React from 'react';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';

export function Background() {
  return (
    <div className="h-screen fixed w-full">
      <div className="h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,110,198,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
      <StarsBackground starDensity={0.0001} />
      <ShootingStars className="-z-10" />
    </div>
  );
}
