"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { products } from "@/components/store/products";

const SALE_PRODUCTS = ["samsung-990-pro-2tb", "amd-ryzen5-7600x", "logitech-gpro-superlight2", "kingston-fury-beast-32gb-ddr5"];
const STOCK_WIDTHS = ["22%", "35%", "18%", "28%"];

function useCountdown(targetHours: number) {
  const [time, setTime] = useState({ h: targetHours, m: 59, s: 59 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { return { h: targetHours, m: 59, s: 59 }; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, [targetHours]);

  return time;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

export default function FlashSale() {
  const { h, m, s } = useCountdown(5);
  const { addItem, items, openDrawer } = useCart();

  const saleProducts = SALE_PRODUCTS.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Flash sale header */}
        <div className="relative mb-6 overflow-hidden rounded-2xl glass-heavy px-6 py-5">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-amber-500/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20">
                <svg className="h-5 w-5 text-red-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <div className="font-nacelle text-lg font-black text-white">
                  Flash Sale{" "}
                  <span className="bg-gradient-to-r from-red-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                    Relâmpago
                  </span>
                </div>
                <div className="text-xs text-gray-400">Ofertas por tempo limitado</div>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Termina em:</span>
              {[pad(h), pad(m), pad(s)].map((v, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10 font-nacelle text-xl font-black text-red-200 tabular-nums">
                    {v}
                  </div>
                  {i < 2 && <span className="font-black text-red-400 text-lg">:</span>}
                </div>
              ))}
              <div className="flex flex-col text-[9px] text-gray-500">
                <span>H</span><span>M</span>
              </div>
              <div className="flex flex-col text-[9px] text-gray-500 -ml-3">
                <span></span><span>S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {saleProducts.map((p, idx) => {
            const inCart = items.some((i) => i.id === p.id);
            const discount = p.originalPrice
              ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
              : null;

            return (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-2xl glass-heavy transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.2)]"
              >
                {/* Gradient top */}
                <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
                  <div className="text-white opacity-80 transition-transform duration-300 group-hover:scale-110">
                    {p.icon}
                  </div>
                  {discount && (
                    <div className="absolute left-2 top-2 rounded-lg bg-red-500 px-2 py-0.5 text-[11px] font-black text-white">
                      -{discount}%
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <div className="flex items-center gap-1 rounded-lg bg-black/50 px-2 py-0.5 text-[10px] text-amber-300 backdrop-blur-xl">
                      <svg className="h-3 w-3 fill-amber-300" viewBox="0 0 24 24">
                        <path d="M12 2.3l3 6.1 6.7.97-4.85 4.72 1.15 6.68L12 17.6l-6 3.17 1.15-6.68L2.3 9.37 9 8.4z" />
                      </svg>
                      {p.rating}
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="mb-0.5 text-[10px] font-mono uppercase tracking-wider text-gray-500">
                    {p.brand}
                  </div>
                  <h3 className="mb-2 text-xs font-semibold leading-tight text-white line-clamp-2">
                    {p.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-3">
                    {p.originalPrice && (
                      <div className="text-[10px] text-gray-500 line-through">
                        {brl(p.originalPrice)}
                      </div>
                    )}
                    <div className="font-nacelle text-base font-black text-white">
                      {brl(p.price)}
                    </div>
                  </div>

                  {/* Stock progress bar */}
                  <div className="mb-3">
                    <div className="mb-1 flex items-center justify-between text-[10px] text-gray-500">
                      <span>Estoque</span>
                      <span className="text-amber-300">Restando pouco!</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-500"
                        style={{ width: STOCK_WIDTHS[idx] }}
                      />
                    </div>
                  </div>

                  {/* Add to cart */}
                  <button
                    type="button"
                    onClick={() => {
                      addItem({ id: p.id, name: p.name, price: p.price, category: p.category, gradient: p.gradient });
                      openDrawer();
                    }}
                    className={`w-full rounded-xl py-2 text-xs font-semibold transition-all ${
                      inCart
                        ? "border border-emerald-400/50 bg-emerald-500/20 text-emerald-300"
                        : "bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 text-white hover:scale-[1.02] shadow-[0_4px_16px_-4px_rgba(239,68,68,0.5)]"
                    }`}
                  >
                    {inCart ? "✓ No carrinho" : "Aproveitar oferta"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm text-gray-300 transition-all hover:border-white/20 hover:text-white"
          >
            Ver todas as ofertas
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
