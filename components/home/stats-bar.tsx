const STATS = [
  {
    value: "8.9K+",
    label: "Clientes satisfeitos",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "text-indigo-300",
    bg: "bg-indigo-500/10",
  },
  {
    value: "4.9★",
    label: "Avaliação média",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.3l3 6.1 6.7.97-4.85 4.72 1.15 6.68L12 17.6l-6 3.17 1.15-6.68L2.3 9.37 9 8.4z" />
      </svg>
    ),
    color: "text-amber-300",
    bg: "bg-amber-500/10",
  },
  {
    value: "24h",
    label: "Suporte disponível",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  {
    value: "99.8%",
    label: "Pedidos entregues",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
  },
];

export default function StatsBar() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl glass-heavy">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
          <div className="grid grid-cols-2 divide-x divide-white/[0.06] md:grid-cols-4">
            {STATS.map((s, idx) => (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-6 py-5 ${idx > 0 ? "" : ""}`}
              >
                <div className={`hidden shrink-0 items-center justify-center rounded-xl p-2.5 sm:flex ${s.bg} ${s.color}`}>
                  {s.icon}
                </div>
                <div>
                  <div className={`font-nacelle text-xl font-black md:text-2xl ${s.color}`}>
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-gray-400">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
