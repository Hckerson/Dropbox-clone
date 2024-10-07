"use client";
import { useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);  
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const smoothScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      // Define a small value for speed
      const speed = 1;

      // Smooth scrolling effect
      window.scrollTo({
        top: lastScrollY + scrollDiff * speed,
        behavior: 'auto',
      });

      lastScrollY = currentScrollY;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(smoothScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
