'use client';

import Navbar from '@/components/Navbar';
import Twin from '@/components/twin';
import { useLang } from '@/contexts/LanguageContext';
import { BadgeKey } from '@/lib/translations';
import {
  Shield,
  Brain,
  Code2,
  Cpu,
  Scale,
  ArrowDown,
  Mail,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

const expertiseIcons = [Shield, Scale, Brain, Code2, Cpu];

const badgeStyle: Record<BadgeKey, string> = {
  Live: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
  'In Development': 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
  Commercial: 'bg-blue-500/15 text-blue-400 border border-blue-500/20',
  Research: 'bg-zinc-700/50 text-zinc-400 border border-zinc-600/30',
  Enterprise: 'bg-violet-500/15 text-violet-400 border border-violet-500/20',
};

export default function Home() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t.hero.badge}&nbsp;·&nbsp;Montréal, QC
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              Raoul Elysée
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl text-emerald-400 font-medium mb-6">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#digital-twin"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors duration-200"
              >
                {t.hero.ctaPrimary}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 flex justify-center">
              <a href="#about" className="text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────────── */}
      <section id="about" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">{t.about.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.about.heading}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Bio */}
              <div className="md:col-span-2 space-y-4 text-zinc-300 text-base leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {t.about.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="p-4 bg-zinc-800/40 border border-zinc-700/40 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-zinc-400 mt-0.5 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────────────────────── */}
      <section id="education" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">{t.education.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.education.heading}</h2>
            </div>
            <div className="space-y-3">
              {t.education.items.map((item) => (
                <div
                  key={`${item.period}-${item.degree}`}
                  className="flex items-start gap-5 p-5 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                >
                  <div className="shrink-0 w-24 pt-0.5">
                    <span className="text-emerald-400 text-xs font-mono font-medium leading-tight block">{item.period}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-snug">{item.degree}</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.institution}</p>
                  </div>
                  <div className="shrink-0">
                    {item.status === 'completed' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        {t.education.statusLabels.completed}
                      </span>
                    )}
                    {item.status === 'in_progress' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20">
                        {t.education.statusLabels.in_progress}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ───────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">{t.differentiators.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.differentiators.heading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {t.differentiators.items.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                >
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-zinc-300 text-xs leading-snug">
                        <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────────────────────────── */}
      <section id="expertise" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                {t.expertise.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.expertise.heading}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {t.expertise.areas.map((area, i) => {
                const Icon = expertiseIcons[i];
                return (
                  <div
                    key={area.title}
                    className="p-6 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{area.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-zinc-700/50 text-zinc-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────────── */}
      <section id="projects" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                {t.projects.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.projects.heading}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {t.projects.items.map(project => (
                <div
                  key={project.title}
                  className="p-6 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-white font-semibold text-base">{project.title}</h3>
                    <span className={`shrink-0 px-2 py-0.5 rounded-md text-xs font-medium ${badgeStyle[project.badge]}`}>
                      {t.badgeLabels[project.badge]}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-zinc-700/50 text-zinc-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">{t.impact.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.impact.heading}</h2>
              <p className="text-zinc-400 mt-4 text-base leading-relaxed">{t.impact.intro}</p>
            </div>
            <ul className="space-y-4 mb-8">
              {t.impact.points.map((point) => (
                <li key={point} className="flex items-start gap-3 p-4 bg-zinc-800/30 border border-zinc-700/40 rounded-xl">
                  <span className="text-emerald-400 shrink-0 mt-0.5 font-bold">→</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-zinc-300 text-base italic border-t border-zinc-800/50 pt-6">
              &ldquo;<span className="text-emerald-400">{t.impact.closing}</span>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              &ldquo;{t.philosophy.q1}{' '}
              <span className="text-emerald-400">{t.philosophy.q1em}</span>&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed">
              &ldquo;{t.philosophy.q2}{' '}
              <span className="text-emerald-400">{t.philosophy.q2em}</span>&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed">
              &ldquo;<span className="text-emerald-400">{t.philosophy.q3em}</span>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── DIGITAL TWIN ──────────────────────────────────────────────────────── */}
      <section id="digital-twin" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.digitalTwin.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.digitalTwin.heading}
              </h2>
              <p className="text-zinc-400 text-base max-w-xl mx-auto">
                {t.digitalTwin.description}
              </p>
            </div>

            <div className="h-[580px]">
              <Twin />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
              {t.contact.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-zinc-400 text-base mb-10 max-w-md mx-auto">
              {t.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:raoulelysee@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                raoulelysee@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/raoul-elysee-636ab867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="relative py-8 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
            <span>{t.footer.rights}</span>
            <span>{t.footer.tagline}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
