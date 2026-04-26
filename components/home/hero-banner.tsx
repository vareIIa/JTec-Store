"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Lançamento 2025",
    headline: "ASUS ROG Strix",
    sub: "G16 Gaming",
    desc: "Intel Core i9 · RTX 4070 · QHD 240Hz",
    price: "R$ 8.499",
    originalPrice: "R$ 10.999",
    discount: "23%",
    cta: "/loja?cat=Notebooks",
    ctaLabel: "Ver Notebooks",
    accent: "from-rose-500 via-orange-500 to-amber-500",
    glow: "rgba(249,115,22,0.45)",
    badge: "ROG",
    badgeColor: "bg-rose-500/20 border-rose-400/40 text-rose-200",
    specs: [
      { label: "Core i9-14900HX", sub: "Processador" },
      { label: "RTX 4070", sub: "Placa de Vídeo" },
      { label: "QHD 240Hz", sub: "Display" },
      { label: "32GB DDR5", sub: "Memória" },
    ],
    icon: (
      <svg className="h-24 w-24 md:h-28 md:w-28 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <rect x="5" y="6" width="10" height="7" rx="1" opacity="0.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "Melhores GPUs",
    headline: "RTX 4090",
    sub: "ASUS ROG OC 24GB",
    desc: "16.384 CUDA · 2640MHz · GDDR6X",
    price: "R$ 12.499",
    originalPrice: "R$ 14.999",
    discount: "17%",
    cta: "/loja?cat=Placas+de+V%C3%ADdeo",
    ctaLabel: "Ver GPUs",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    glow: "rgba(20,184,166,0.45)",
    badge: "NVIDIA",
    badgeColor: "bg-emerald-500/20 border-emerald-400/40 text-emerald-200",
    specs: [
      { label: "16.384 CUDA", sub: "Núcleos" },
      { label: "24GB GDDR6X", sub: "Memória VRAM" },
      { label: "2640MHz Boost", sub: "Clock" },
      { label: "PCIe 4.0", sub: "Interface" },
    ],
    icon: (
      <svg className="h-24 w-24 md:h-28 md:w-28 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <circle cx="7" cy="12" r="2.5" /><circle cx="14" cy="12" r="2.5" />
        <path d="M19 10v4M4 6V4M8 6V4M12 6V4" />
        <circle cx="7" cy="12" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="12" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    tag: "Topo de linha",
    headline: "iPhone 16",
    sub: "Pro Max · 256GB Titânio",
    desc: "A18 Pro · ProRes 4K 120fps · Zoom 5x",
    price: "R$ 9.999",
    originalPrice: "R$ 11.499",
    discount: "13%",
    cta: "/loja?cat=Smartphones",
    ctaLabel: "Ver Smartphones",
    accent: "from-slate-400 via-gray-300 to-zinc-400",
    glow: "rgba(148,163,184,0.35)",
    badge: "Apple",
    badgeColor: "bg-white/10 border-white/20 text-white/80",
    specs: [
      { label: "A18 Pro", sub: "Chip" },
      { label: "ProRes 4K", sub: "Vídeo" },
      { label: "Zoom Óptico 5x", sub: "Câmera" },
      { label: "Titânio Grade 5", sub: "Material" },
    ],
    icon: (
      <svg className="h-24 w-24 md:h-28 md:w-28 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
        <path d="M9 6h6" />
        <rect x="7" y="8" width="10" height="7" rx="1" opacity="0.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "Processadores",
    headline: "AMD Ryzen 9",
    sub: "7950X · 16 Núcleos 5.7GHz",
    desc: "AM5 · DDR5 · 80MB Cache Total",
    price: "R$ 3.299",
    originalPrice: "R$ 3.999",
    discount: "18%",
    cta: "/loja?cat=Processadores",
    ctaLabel: "Ver CPUs",
    accent: "from-red-600 via-rose-500 to-orange-500",
    glow: "rgba(239,68,68,0.45)",
    badge: "AMD",
    badgeColor: "bg-red-500/20 border-red-400/40 text-red-200",
    specs: [
      { label: "16 Núcleos / 32T", sub: "Arquitetura" },
      { label: "5.7GHz Boost", sub: "Frequência" },
      { label: "80MB Cache", sub: "Total L2+L3" },
      { label: "Socket AM5", sub: "Plataforma" },
    ],
    icon: (
      <svg className="h-24 w-24 md:h-28 md:w-28 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" fill="currentColor" opacity="0.4" />
        <line x1="10.5" y1="11" x2="13.5" y2="11" strokeWidth="0.8" /><line x1="10.5" y1="13" x2="13.5" y2="13" strokeWidth="0.8" />
      </svg>
    ),
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const DURATION = 5000;

    const progInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 50);

    const t = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((v) => (v + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }, DURATION);

    return () => {
      clearInterval(progInterval);
      clearTimeout(t);
    };
  }, [active]);

  function goTo(i: number) {
    if (i === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 250);
  }

  const s = slides[active];

  return (
    <section className="relative pb-8 overflow-hidden">
      {/* Animated BG glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{ background: `radial-gradient(ellipse 70% 60% at 70% 40%, ${s.glow}, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_60%,rgba(99,102,241,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] glass-heavy transition-all duration-300 ${
            animating ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
          }`}
          style={{ minHeight: 420 }}
        >
          {/* Top sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Gradient blob inside card */}
          <div className={`pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${s.accent} opacity-25 blur-3xl transition-all duration-700`} />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

          {/* Grid lines bg */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-14">
            {/* Left content */}
            <div>
              {/* Tag + badge */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider backdrop-blur-xl ${s.badgeColor}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  {s.badge}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300 backdrop-blur-xl">
                  {s.tag}
                </span>
              </div>

              {/* Headline */}
              <h1 className={`mb-1 font-nacelle text-5xl font-black leading-none tracking-tight md:text-7xl bg-gradient-to-br ${s.accent} bg-clip-text text-transparent`}>
                {s.headline}
              </h1>
              <h2 className="mb-4 font-nacelle text-2xl font-semibold text-white/80 md:text-3xl">
                {s.sub}
              </h2>
              <p className="mb-8 text-base text-gray-400 md:text-lg">{s.desc}</p>

              {/* Price */}
              <div className="mb-8 flex items-end gap-4">
                <div>
                  <div className="text-xs text-gray-500 line-through">{s.originalPrice}</div>
                  <div className="font-nacelle text-4xl font-black text-white">{s.price}</div>
                  <div className="mt-1 text-xs text-gray-400">no PIX · parcelamos em até 12x</div>
                </div>
                <div className="mb-1.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40">
                  <span className="text-sm font-black text-emerald-300">-{s.discount}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={s.cta}
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br ${s.accent} px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.03]`}
                >
                  <span className="relative z-10">{s.ctaLabel}</span>
                  <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
                <Link
                  href="/loja"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-gray-200 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Ver todos os produtos
                </Link>
              </div>
            </div>

            {/* Right — product visual with floating specs */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Outer rotating ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.accent} opacity-15 blur-3xl scale-110 transition-all duration-700`}
                />
                <div
                  className={`absolute inset-4 rounded-full border-2 border-dashed opacity-20 border-white transition-all duration-700`}
                  style={{ animation: "spin-slow 20s linear infinite" }}
                />
                <div
                  className={`absolute inset-2 rounded-full border border-white/10 transition-all duration-700`}
                  style={{ animation: "spin-slow 30s linear infinite reverse" }}
                />

                {/* Product icon box */}
                <div className="absolute inset-12 flex items-center justify-center">
                  <div className={`flex h-full w-full items-center justify-center rounded-[2.5rem] bg-gradient-to-br ${s.accent} opacity-90 shadow-[0_0_60px_rgba(0,0,0,0.5)] ring-1 ring-white/20`}>
                    <div className="text-white/90 drop-shadow-lg">
                      {s.icon}
                    </div>
                  </div>
                </div>

                {/* Floating spec tags */}
                {s.specs.map((spec, i) => {
                  const positions = [
                    "top-0 left-0 -translate-x-4 -translate-y-2",
                    "top-0 right-0 translate-x-4 -translate-y-2",
                    "bottom-4 left-0 -translate-x-6",
                    "bottom-4 right-0 translate-x-6",
                  ];
                  return (
                    <div
                      key={spec.label}
                      className={`absolute ${positions[i]} rounded-xl border border-white/10 bg-black/70 px-2.5 py-1.5 backdrop-blur-xl shadow-lg`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <div className="text-[10px] font-mono text-gray-400">{spec.sub}</div>
                      <div className="text-[11px] font-bold text-white whitespace-nowrap">{spec.label}</div>
                    </div>
                  );
                })}

                {/* Discount badge */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/80 px-3 py-2 backdrop-blur-xl shadow-lg">
                  <div className="text-[10px] font-mono text-gray-400">desconto</div>
                  <div className="text-base font-black text-emerald-300">-{s.discount}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar + slide indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            {/* Active dot progress fill */}
            <div className="h-px w-16 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${s.accent} transition-none`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            type="button"
            onClick={() => goTo((active - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-black/60 hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo((active + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-black/60 hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
