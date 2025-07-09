'use client';
import { useEffect, useState } from 'react';

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
        <a href="/" className="text-2xl font-bold">Leaf n' Peak</a>
        <div className="space-x-6 text-sm font-medium hidden md:flex">
          <a href="/" className="hover:text-[var(--brand-sand)]">Home</a>
          <a href="/rentals" className="hover:text-[var(--brand-sand)]">Tents</a>
          <a href="/contact" className="hover:text-[var(--brand-sand)]">Contact</a>
        </div>
      </div>
    </nav>
  );
}
