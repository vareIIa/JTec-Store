const items = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="16" rx="2" />
        <path d="M1 9h22" />
        <path d="M7 15h.01M11 15h4" />
      </svg>
    ),
    title: "Pagamento seguro",
    desc: "PIX com confirmação instantânea",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-400/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Garantia total",
    desc: "7 dias para devolução sem perguntas",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-400/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Envio rápido",
    desc: "Despacho em até 24h úteis",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-400/20",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Suporte humano",
    desc: "Atendimento via WhatsApp 24/7",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10 border-fuchsia-400/20",
  },
];

export default function TrustBar() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-2xl border glass-heavy p-5 ${item.bg}`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className={`mb-3 inline-flex ${item.color}`}>{item.icon}</div>
              <div className="font-nacelle text-sm font-semibold text-white">{item.title}</div>
              <div className="mt-0.5 text-xs leading-relaxed text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
