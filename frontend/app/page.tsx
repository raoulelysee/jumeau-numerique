import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI-Powered Digital Twin
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
              Raoul Elysee
            </h1>
            <p className="text-zinc-400 text-base max-w-md mx-auto">
              Cybersecurity Engineer & AI Specialist
            </p>
          </header>

          {/* Chat Container */}
          <div className="h-[580px]">
            <Twin />
          </div>

          {/* Footer */}
          <footer className="mt-8 flex items-center justify-center gap-4 text-xs text-zinc-500">
            <span>&copy; {new Date().getFullYear()} Raoul Elysee</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Powered by AI</span>
          </footer>
        </div>
      </div>
    </main>
  );
}