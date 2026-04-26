import Link from "next/link";

const categories = [
  {
    label: "Notebooks",
    href: "/loja?cat=Notebooks",
    gradient: "from-rose-600 via-orange-500 to-amber-500",
    glow: "rgba(249,115,22,0.3)",
    count: "3 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Processadores",
    href: "/loja?cat=Processadores",
    gradient: "from-red-600 via-rose-500 to-orange-500",
    glow: "rgba(239,68,68,0.3)",
    count: "3 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3" />
      </svg>
    ),
  },
  {
    label: "Placas de Vídeo",
    href: "/loja?cat=Placas+de+V%C3%ADdeo",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    glow: "rgba(20,184,166,0.3)",
    count: "3 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <circle cx="7" cy="12" r="2.5" /><circle cx="14" cy="12" r="2.5" />
        <path d="M19 10v4M4 6V4M8 6V4M12 6V4" />
      </svg>
    ),
  },
  {
    label: "Monitores",
    href: "/loja?cat=Monitores",
    gradient: "from-cyan-600 via-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.3)",
    count: "2 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 16v5" />
      </svg>
    ),
  },
  {
    label: "Periféricos",
    href: "/loja?cat=Perif%C3%A9ricos",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    glow: "rgba(139,92,246,0.3)",
    count: "4 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
      </svg>
    ),
  },
  {
    label: "Smartphones",
    href: "/loja?cat=Smartphones",
    gradient: "from-slate-400 via-gray-300 to-zinc-500",
    glow: "rgba(148,163,184,0.25)",
    count: "2 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
        <path d="M9 6h6" />
      </svg>
    ),
  },
  {
    label: "Armazenamento",
    href: "/loja?cat=Armazenamento",
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    count: "2 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M6 11h4M6 14h2" />
        <circle cx="17" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "Memória RAM",
    href: "/loja?cat=Mem%C3%B3ria+RAM",
    gradient: "from-yellow-600 via-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    count: "2 produtos",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="8" rx="1.5" />
        <path d="M6 8V5M9 8V5M12 8V5M15 8V5M18 8V5M6 16v3M9 16v3M12 16v3M15 16v3M18 16v3" />
      </svg>
    ),
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400">
              Categorias
            </div>
            <h2 className="font-nacelle text-2xl font-bold text-white md:text-3xl">
              O que você está{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                buscando?
              </span>
            </h2>
          </div>
          <Link
            href="/loja"
            className="hidden items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white sm:flex"
          >
            Ver todos <span className="text-indigo-400">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl glass-heavy p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.25)]"
            >
              {/* Glow blob */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${cat.glow}, transparent 70%)`,
                }}
              />
              {/* Top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {cat.icon}
              </div>

              {/* Label */}
              <div className="font-nacelle text-sm font-semibold text-white transition-colors group-hover:text-white">
                {cat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-gray-500">{cat.count}</div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1">
                <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
