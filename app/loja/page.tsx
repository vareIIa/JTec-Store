export const metadata = {
  title: "Loja JTEC — Notebooks, GPUs, CPUs, Monitores e mais",
  description:
    "Compre os melhores produtos de informática: notebooks gamer, processadores AMD e Intel, placas de vídeo NVIDIA e AMD, monitores, periféricos, smartphones e muito mais.",
};

import { Suspense } from "react";
import StoreClient from "@/components/store/store-client";

export default function LojaPage() {
  return (
    <section className="relative pt-36 pb-24 md:pt-40 md:pb-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Hero banner */}
        <div className="relative mb-12 overflow-hidden rounded-[2rem] glass-heavy p-8 md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Grid bg */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />

          <div className="relative grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300 backdrop-blur-xl">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Loja JTEC · Informática
              </div>

              <h1 className="mb-4 font-nacelle text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                <span className="text-white/90">A tecnologia que </span>
                <span className="bg-gradient-to-br from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  você merece.
                </span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
                Notebooks, GPUs, CPUs, monitores, periféricos e smartphones das maiores marcas. Todos os produtos com garantia e entrega rápida.
              </p>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-400">
                {[
                  "Pagamento via PIX",
                  "Garantia de 7 dias",
                  "Frete rápido",
                  "Login com Google",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "20+", v: "Produtos disponíveis" },
                { k: "4.9★", v: "Avaliação média" },
                { k: "PIX", v: "Pagamento instantâneo" },
                { k: "7d", v: "Garantia total" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                  <div className="font-nacelle text-2xl font-black bg-gradient-to-br from-white via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                    {s.k}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-relaxed text-gray-400">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Store client (filter + grid) */}
        <Suspense fallback={<div className="py-20 text-center text-sm text-gray-500">Carregando produtos…</div>}>
          <StoreClient />
        </Suspense>
      </div>
    </section>
  );
}
