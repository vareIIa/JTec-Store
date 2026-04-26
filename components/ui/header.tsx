"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useCart } from "@/lib/cart-context";

const NAV_CATS = [
  { label: "Notebooks", href: "/loja?cat=Notebooks", color: "text-orange-400", dot: "bg-orange-400" },
  { label: "Processadores", href: "/loja?cat=Processadores", color: "text-red-400", dot: "bg-red-400" },
  { label: "Placas de Vídeo", href: "/loja?cat=Placas+de+V%C3%ADdeo", color: "text-emerald-400", dot: "bg-emerald-400" },
  { label: "Monitores", href: "/loja?cat=Monitores", color: "text-cyan-400", dot: "bg-cyan-400" },
  { label: "Periféricos", href: "/loja?cat=Perif%C3%A9ricos", color: "text-violet-400", dot: "bg-violet-400" },
  { label: "Smartphones", href: "/loja?cat=Smartphones", color: "text-pink-400", dot: "bg-pink-400" },
  { label: "Armazenamento", href: "/loja?cat=Armazenamento", color: "text-blue-400", dot: "bg-blue-400" },
];

const ANNOUNCEMENTS = [
  "🔥 Flash Sale ativa — até 23% OFF em GPUs e Processadores",
  "✅ Pagamento via PIX com confirmação instantânea",
  "🚀 Frete grátis nas compras acima de R$ 500",
  "⭐ Mais de 8.900 clientes satisfeitos — nota 4.9/5",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [announceFade, setAnnounceFade] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rotate announcements
  useEffect(() => {
    const t = setInterval(() => {
      setAnnounceFade(false);
      setTimeout(() => {
        setAnnouncementIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
        setAnnounceFade(true);
      }, 300);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Rainbow top line ──────────────────────────────────── */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 via-fuchsia-500 via-pink-500 to-orange-500" />

      {/* ── Announcement bar ──────────────────────────────────── */}
      <div className="fixed inset-x-0 top-[2px] z-50 h-8 overflow-hidden bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div
          className="flex h-full items-center justify-center px-4 text-[11px] font-medium transition-all duration-300"
          style={{ opacity: announceFade ? 1 : 0, transform: announceFade ? "translateY(0)" : "translateY(-4px)" }}
        >
          <span className="text-gray-200">{ANNOUNCEMENTS[announcementIdx]}</span>
        </div>
      </div>

      {/* ── Main header ───────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-[calc(2px+2rem)] z-40 transition-all duration-500 ${
          scrolled ? "top-[2px]" : "top-[calc(2px+2rem)]"
        }`}
      >
        <div
          className={`border-b transition-all duration-500 ${
            scrolled
              ? "border-white/[0.08] bg-[#030014]/90 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_8px_32px_-8px_rgba(0,0,0,0.8)]"
              : "border-white/[0.05] bg-[#030014]/70 backdrop-blur-xl"
          }`}
        >
          {/* ── Top row: logo | search | actions ── */}
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">

            {/* Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Search bar — center, takes remaining space */}
            <div className="relative flex-1 max-w-2xl mx-auto hidden sm:block">
              {/* Glow behind input when focused */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 ${
                  searchFocused
                    ? "opacity-100 blur-md bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 scale-[1.02]"
                    : "opacity-0"
                }`}
              />

              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl p-[1px] transition-all duration-300 ${
                  searchFocused
                    ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-100"
                    : "bg-white/10 opacity-100"
                }`}
              >
                <div className="h-full w-full rounded-[calc(1rem-1px)] bg-[#0a0a1a]" />
              </div>

              <div className="relative flex items-center">
                <svg
                  className="pointer-events-none absolute left-4 h-4 w-4 text-gray-400 transition-colors duration-200"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Buscar produtos, marcas, categorias…"
                  className="relative h-11 w-full bg-transparent py-2 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 outline-none"
                />
                {/* Keyboard shortcut hint */}
                {!searchFocused && !query && (
                  <div className="absolute right-3 hidden items-center gap-1 sm:flex">
                    <kbd className="rounded border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-gray-500">
                      ⌘K
                    </kbd>
                  </div>
                )}
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                    className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
                  >
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-auto sm:ml-0">
              {/* Mobile search */}
              <button
                type="button"
                onClick={() => inputRef.current?.focus()}
                className="sm:hidden relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all hover:border-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </button>

              {/* Wishlist */}
              <button
                type="button"
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* Cart */}
              <button
                type="button"
                onClick={openDrawer}
                className="relative flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-gray-300 transition-all hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M3 4h2l2.5 12h11L21 7H6" />
                </svg>
                <span className="hidden text-xs font-mono sm:block">
                  {count > 0 ? `${count} iten${count > 1 ? "s" : ""}` : "Carrinho"}
                </span>
                {count > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-[9px] font-black text-white ring-2 ring-[#030014] shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </button>

              {/* Login CTA */}
              <Link
                href="/checkout"
                className="group relative hidden sm:flex h-10 items-center gap-2 overflow-hidden rounded-xl px-4 text-sm font-semibold text-white"
              >
                {/* Animated gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 transition-all duration-500 group-hover:from-indigo-500 group-hover:via-violet-500 group-hover:to-fuchsia-500" />
                {/* Sheen */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
                <svg className="relative z-10 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <span className="relative z-10">Entrar</span>
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="sm:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {mobileMenuOpen ? <><path d="M18 6L6 18M6 6l12 12" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
                </svg>
              </button>
            </div>
          </div>

          {/* ── Category nav row ── */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center gap-1 overflow-x-auto border-t border-white/[0.04] py-2 pb-2.5 scrollbar-none">
              {/* "Ofertas" special pill */}
              <Link
                href="/loja"
                className="group mr-1 flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 transition-all hover:border-amber-400/60 hover:bg-amber-500/20"
              >
                <svg className="h-3 w-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-xs font-semibold text-amber-300">Ofertas</span>
              </Link>

              <div className="mx-2 h-4 w-px bg-white/10 shrink-0" />

              {NAV_CATS.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="group flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-gray-400 transition-all hover:bg-white/[0.06] hover:text-white"
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${cat.dot} opacity-70 transition-all group-hover:opacity-100 group-hover:scale-125`} />
                  <span className={`transition-colors group-hover:${cat.color}`}>{cat.label}</span>
                </Link>
              ))}

              <div className="mx-2 h-4 w-px bg-white/10 shrink-0" />

              <Link
                href="/loja"
                className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-indigo-400 transition-all hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                Ver todos →
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed left-0 right-0 z-30 sm:hidden transition-all duration-300 ${
          mobileMenuOpen ? "top-[calc(2px+2rem+7rem)] opacity-100" : "top-[calc(2px+2rem+7rem)] opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <div className="mx-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1a]/95 backdrop-blur-2xl shadow-2xl">
          {/* Mobile search */}
          <div className="p-3 border-b border-white/[0.06]">
            <div className="relative">
              <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos…"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-1 p-3">
            {NAV_CATS.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all hover:bg-white/[0.06]"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${cat.dot}`} />
                <span className="text-xs text-gray-300">{cat.label}</span>
              </Link>
            ))}
          </div>

          {/* Login */}
          <div className="border-t border-white/[0.06] p-3">
            <Link
              href="/checkout"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 py-3 text-sm font-semibold text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              Entrar / Criar conta
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't go behind header */}
      <div className="h-[calc(2px+2rem+7.5rem)]" />
    </>
  );
}
