'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers2({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}