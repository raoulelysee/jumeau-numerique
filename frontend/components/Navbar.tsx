'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.expertise, href: '#expertise' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.digitalTwin, href: '#digital-twin' },
    { label: t.nav.contact, href: '#contact' },
  ];

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
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-0.5 bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-0.5">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
                lang === 'en'
                  ? 'bg-emerald-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
                lang === 'fr'
                  ? 'bg-emerald-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            {t.nav.cta}
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
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium py-1 transition-colors"
                onClick={close}
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle (mobile) */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-zinc-500 text-xs">Langue / Language:</span>
              <div className="flex items-center gap-0.5 bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-0.5">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
                    lang === 'en'
                      ? 'bg-emerald-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('fr')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
                    lang === 'fr'
                      ? 'bg-emerald-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full text-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors mt-1"
              onClick={close}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
