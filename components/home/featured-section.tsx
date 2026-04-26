"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { products } from "@/components/store/products";

const FEATURED_IDS = [
  "asus-rog-strix-g16",
  "rtx-4090-asus-rog",
  "macbook-air-m3",
  "iphone-16-pro-max",
  "amd-ryzen9-7950x",
  "lg-ultrawide-34",
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3 w-3 ${i < Math.round(rating) ? "text-amber-300" : "text-white/15"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.3l3 6.1 6.7.97-4.85 4.72 1.15 6.68L12 17.6l-6 3.17 1.15-6.68L2.3 9.37 9 8.4z" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedSection() {
  const { addItem, items, openDrawer } = useCart();

  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-fuchsia-400">
              Destaques
            </div>
            <h2 className="font-nacelle text-2xl font-bold text-white md:text-3xl">
              Mais{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                Vendidos
              </span>
            </h2>
          </div>
          <Link
            href="/loja"
            className="hidden items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white sm:flex"
          >
            Ver todos <span className="text-fuchsia-400">→</span>
          </Link>
        </div>

        {/* Grid — 3 cols on md, 2 on sm */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, idx) => {
            const inCart = items.some((i) => i.id === p.id);
            const discount = p.originalPrice
              ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
              : null;

            return (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-3xl glass-heavy transition-all duration-300 hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.3)]"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                {/* Gradient header */}
                <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="pointer-events-none absolute inset-0 opacity-25" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)",
                  }} />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/30 text-white ring-1 ring-white/20 backdrop-blur-xl transition-all group-hover:scale-110 group-hover:ring-white/40">
                      {p.icon}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {p.badges.slice(0, 1).map((b) => (
                      <span
                        key={b.label}
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider backdrop-blur-xl ${
                          b.tone === "hot" ? "border-fuchsia-300/40 bg-fuchsia-500/20 text-fuchsia-100"
                          : b.tone === "new" ? "border-emerald-300/40 bg-emerald-500/20 text-emerald-100"
                          : b.tone === "limited" ? "border-amber-300/40 bg-amber-500/20 text-amber-100"
                          : "border-white/20 bg-white/10 text-white"
                        }`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>

                  {discount && (
                    <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-200 backdrop-blur-xl ring-1 ring-amber-300/30">
                      -{discount}%
                    </div>
                  )}

                  {/* Brand */}
                  <div className="absolute bottom-2 left-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/90 backdrop-blur-xl">
                    {p.brand}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-1.5 font-nacelle text-base font-semibold leading-snug text-white line-clamp-2">
                    {p.name}
                  </h3>

                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                    <Stars rating={p.rating} />
                    <span className="text-gray-300">{p.rating.toFixed(1)}</span>
                    <span className="text-gray-600">({p.reviews.toLocaleString("pt-BR")})</span>
                    <span className="text-white/15">·</span>
                    <span className="font-mono">{p.sales.toLocaleString("pt-BR")} vendas</span>
                  </div>

                  {/* Spec pills */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {p.features.slice(0, 3).map((f) => (
                      <span key={f} className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-gray-400">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between gap-4 border-t border-white/5 pt-4">
                    <div>
                      {p.originalPrice && (
                        <div className="text-xs text-gray-500 line-through">{brl(p.originalPrice)}</div>
                      )}
                      <div className="font-nacelle text-xl font-black bg-gradient-to-br from-white via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                        {brl(p.price)}
                      </div>
                      <div className="mt-0.5 text-[10px] text-gray-500">no PIX</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        addItem({ id: p.id, name: p.name, price: p.price, category: p.category, gradient: p.gradient });
                        openDrawer();
                      }}
                      className={`group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-[1.04] ${
                        inCart
                          ? "border border-emerald-400/50 bg-emerald-500/20 text-emerald-300"
                          : "bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-[0_4px_16px_-4px_rgba(139,92,246,0.6)]"
                      }`}
                    >
                      {inCart ? (
                        <><svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> No carrinho</>
                      ) : (
                        <><span className="relative z-10">Comprar</span>
                        <svg className="relative z-10 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M3 4h2l2.5 12h11L21 7H6" /></svg>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" /></>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(236,72,153,0.2))",
                  maskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
