"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useCart } from "@/lib/cart-context";

const navCategories = [
  { label: "Notebooks", href: "/loja?cat=Notebooks" },
  { label: "Processadores", href: "/loja?cat=Processadores" },
  { label: "Placas de Vídeo", href: "/loja?cat=Placas+de+V%C3%ADdeo" },
  { label: "Monitores", href: "/loja?cat=Monitores" },
  { label: "Periféricos", href: "/loja?cat=Perif%C3%A9ricos" },
  { label: "Smartphones", href: "/loja?cat=Smartphones" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {/* ── Top bar ─────────────────────────────────────── */}
      <div className="flex justify-center px-3 pt-2.5 md:px-4 md:pt-3">
        <div
          className={`relative w-full max-w-7xl overflow-hidden rounded-2xl transition-all duration-500 ${
            scrolled ? "glass-nav" : "glass"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="flex h-14 items-center justify-between gap-3 px-4 md:px-5">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Logo />
            </div>

            {/* Search — expanded on md+ */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <svg
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar produtos, marcas…"
                  className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 backdrop-blur-xl outline-none transition-all focus:border-indigo-400/50 focus:bg-white/[0.07]"
                />
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle mobile */}
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] transition-all"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </button>

              {/* Cart */}
              <button
                type="button"
                onClick={openDrawer}
                className="relative inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] transition-all"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M3 4h2l2.5 12h11L21 7H6" />
                </svg>
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-[9px] font-bold text-white ring-1 ring-black/40">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </button>

              {/* Store CTA */}
              <Link
                href="/loja"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.07]"
              >
                Ver Loja
              </Link>

              {/* Login / account */}
              <Link
                href="/checkout"
                className="inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_4px_16px_-4px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_-4px_rgba(139,92,246,0.8)]"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category nav bar ────────────────────────────── */}
      <div className={`flex justify-center px-3 transition-all duration-300 md:px-4 ${scrolled ? "mt-1" : "mt-1.5"}`}>
        <div className="w-full max-w-7xl overflow-x-auto">
          <div className="flex items-center gap-0.5 py-0.5">
            {navCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="whitespace-nowrap rounded-full px-3 py-1 text-xs text-gray-400 transition-all hover:bg-white/[0.06] hover:text-white"
              >
                {cat.label}
              </Link>
            ))}
            <Link
              href="/loja"
              className="ml-2 whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-indigo-300 transition-all hover:bg-indigo-500/10"
            >
              Ver todos →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile search dropdown */}
      {searchOpen && (
        <div className="flex justify-center px-3 md:hidden">
          <div className="w-full max-w-7xl rounded-2xl glass-heavy mt-1 p-3">
            <div className="relative">
              <svg className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos…"
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
