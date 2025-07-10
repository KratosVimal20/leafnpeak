'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-white/10 backdrop-blur-md shadow-md'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white transition-opacity duration-500 ease-in-out">
        <Link href="/" className="text-2xl font-bold">Leaf n&apos; Peak</Link>
        <div className="space-x-6 text-sm font-medium hidden md:flex">
          <Link href="/" className="hover:text-[var(--brand-sand)]">Home</Link>
          <Link href="/rentals" className="hover:text-[var(--brand-sand)]">Tents</Link>
          <Link href="/contact" className="hover:text-[var(--brand-sand)]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
