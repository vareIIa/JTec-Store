const FEATURES = [
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    metric: "100%",
    label: "Compra Segura",
    desc: "PIX oficial via Banco Central do Brasil. Dados protegidos com criptografia de ponta a ponta.",
    gradient: "from-emerald-600 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
    ring: "ring-emerald-500/30",
    accent: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.3l3 6.1 6.7.97-4.85 4.72 1.15 6.68L12 17.6l-6 3.17 1.15-6.68L2.3 9.37 9 8.4z" />
      </svg>
    ),
    metric: "4.9/5",
    label: "Avaliação Média",
    desc: "Mais de 8.900 avaliações verificadas de clientes reais. Nota máxima em satisfação.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    ring: "ring-amber-500/30",
    accent: "text-amber-300",
    bg: "bg-amber-500/10",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    metric: "24h",
    label: "Suporte Disponível",
    desc: "Atendimento humano via WhatsApp todos os dias, incluindo feriados e fins de semana.",
    gradient: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.25)",
    ring: "ring-sky-500/30",
    accent: "text-sky-300",
    bg: "bg-sky-500/10",
  },
  {
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    metric: "7 dias",
    label: "Garantia Total",
    desc: "Devolução sem perguntas em até 7 dias corridos. Produto com defeito? Substituímos imediatamente.",
    gradient: "from-violet-500 to-fuchsia-600",
    glow: "rgba(139,92,246,0.25)",
    ring: "ring-violet-500/30",
    accent: "text-violet-300",
    bg: "bg-violet-500/10",
  },
];

export default function TrustBar() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Por que a JTEC?
          </div>
          <h2 className="font-nacelle text-3xl font-black text-white md:text-4xl">
            Mais de{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              8.900 clientes
            </span>{" "}
            confiam
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
            Comprar na JTEC é simples, seguro e garantido. Veja por que somos a escolha número 1 em informática em BH.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="group relative overflow-hidden rounded-3xl glass-heavy p-7 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Glow bg */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${f.glow}, transparent 70%)` }}
              />
              {/* Top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Icon */}
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} ring-1 ${f.ring} shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-white">{f.icon}</span>
              </div>

              {/* Metric */}
              <div className={`mb-1 font-nacelle text-3xl font-black ${f.accent}`}>
                {f.metric}
              </div>

              {/* Label */}
              <div className="mb-3 font-nacelle text-base font-semibold text-white">
                {f.label}
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed text-gray-400">
                {f.desc}
              </p>

              {/* Hover border glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${f.glow}, transparent)`,
                  maskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/loja"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_rgba(139,92,246,0.7)] transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10">Explorar Produtos</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Sem cadastro obrigatório · Pagamento via PIX · Entrega rápida
          </p>
        </div>
      </div>
    </section>
  );
}
