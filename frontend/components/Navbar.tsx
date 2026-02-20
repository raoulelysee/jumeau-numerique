'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Digital Twin', href: '#digital-twin' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-white font-semibold text-base tracking-tight">
          Raoul <span className="text-emerald-400">Elysée</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/98 backdrop-blur-sm border-b border-zinc-800/60 px-6 py-5">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium py-1 transition-colors"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors mt-1"
              onClick={close}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
