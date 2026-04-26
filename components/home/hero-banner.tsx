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
  },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((v) => (v + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  function goTo(i: number) {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 250);
  }

  const s = slides[active];

  return (
    <section className="relative pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden">
      {/* Animated BG glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 70% 40%, ${s.glow}, transparent 70%)`,
        }}
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
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${s.accent} opacity-25 blur-3xl transition-all duration-700`}
          />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

          {/* Grid lines bg */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
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
                  <div className="mt-1 text-xs text-gray-400">no PIX • parcelamos em até 12x</div>
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

            {/* Right — large product visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Glowing ring */}
                <div
                  className={`absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${s.accent} scale-110`}
                />
                {/* Product icon box */}
                <div className="relative flex h-56 w-56 items-center justify-center rounded-[3rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl md:h-72 md:w-72">
                  <div className={`flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br ${s.accent} opacity-90 md:h-44 md:w-44`}>
                    <svg className="h-20 w-20 text-white/90 md:h-24 md:w-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      {active === 0 || active === 2 ? (
                        // Laptop / Phone icon
                        active === 0 ? (
                          <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>
                        ) : active === 2 ? (
                          <><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" fill="currentColor" /><path d="M9 6h6" /></>
                        ) : null
                      ) : active === 1 ? (
                        // GPU icon
                        <><rect x="1" y="6" width="22" height="12" rx="2" /><circle cx="7" cy="12" r="2.5" /><circle cx="14" cy="12" r="2.5" /><path d="M19 10v4M4 6V4M8 6V4M12 6V4" /></>
                      ) : (
                        // CPU icon
                        <><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3" /><rect x="9" y="9" width="6" height="6" rx="0.5" fill="currentColor" opacity="0.5" /></>
                      )}
                    </svg>
                  </div>
                  {/* Corner badges */}
                  <div className="absolute -right-3 -top-3 rounded-2xl border border-white/10 bg-black/80 px-2.5 py-1.5 backdrop-blur-xl">
                    <div className="text-[10px] font-mono text-gray-400">desconto</div>
                    <div className="text-sm font-black text-emerald-300">-{s.discount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
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
