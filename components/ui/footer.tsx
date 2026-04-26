import Logo from "./logo";
import JtecLogoCircle from "./jtec-logo-circle";

const NAV_LINKS = [
  { label: "Notebooks", href: "/loja?cat=Notebooks" },
  { label: "Processadores", href: "/loja?cat=Processadores" },
  { label: "Placas de Vídeo", href: "/loja?cat=Placas+de+V%C3%ADdeo" },
  { label: "Monitores", href: "/loja?cat=Monitores" },
  { label: "Periféricos", href: "/loja?cat=Perif%C3%A9ricos" },
  { label: "Smartphones", href: "/loja?cat=Smartphones" },
  { label: "Ver Todos", href: "/loja" },
];

const SOCIALS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5531999999999",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    hoverClass: "hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-300",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jtecbh",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    hoverClass: "hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300",
  },
  {
    label: "E-mail",
    href: "mailto:jtecBH@hotmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    hoverClass: "hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300",
  },
];

const TRUST_ITEMS = [
  { label: "Compra Segura", icon: "🔒" },
  { label: "PIX Oficial", icon: "⚡" },
  { label: "Garantia 7d", icon: "🛡️" },
  { label: "Frete Rápido", icon: "🚀" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 pb-10">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Main footer card */}
        <div className="relative mb-8 overflow-hidden rounded-[2rem] glass-light p-10 md:p-14">
          {/* Logo watermark */}
          <div
            className="pointer-events-none absolute inset-0 select-none flex items-center justify-center overflow-hidden"
            style={{
              maskImage: "radial-gradient(ellipse 72% 72% at 50% 50%, black 20%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 72% 72% at 50% 50%, black 20%, transparent 80%)",
            }}
          >
            <div className="opacity-[0.05]">
              <JtecLogoCircle size={400} uid="footer" />
            </div>
          </div>

          {/* Glow blobs */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.5fr_auto_auto]">

            {/* Brand column */}
            <div>
              <div className="mb-5">
                <Logo />
              </div>
              <p className="mb-5 max-w-xs text-sm leading-relaxed text-gray-400">
                A melhor loja de informática de BH. Notebooks, GPUs, CPUs, monitores e periféricos com garantia e entrega rápida.
              </p>

              {/* Social links */}
              <div className="mb-6 flex gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-xl transition-all hover:scale-110 ${s.hoverClass}`}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {TRUST_ITEMS.map((t) => (
                  <span
                    key={t.label}
                    className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[10px] text-gray-400"
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories nav */}
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">Categorias</h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                    >
                      <span className="h-px w-3 bg-gray-600 transition-all group-hover:w-5 group-hover:bg-indigo-400" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:jtecBH@hotmail.com" className="text-gray-400 transition-colors hover:text-white">
                    jtecBH@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5531999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-green-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    (31) 9 9999-9999
                  </a>
                </li>
                <li className="text-gray-500">
                  Belo Horizonte, MG · Brasil
                </li>
                <li className="pt-2">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-gray-600 mb-2">
                    Horário de atendimento
                  </div>
                  <div className="text-xs text-gray-400">Seg–Sex: 8h–20h</div>
                  <div className="text-xs text-gray-400">Sáb–Dom: 9h–17h</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PIX banner */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.04] px-5 py-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20">
                <svg className="h-5 w-5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Pagamento exclusivo via{" "}
                  <span className="text-emerald-300">PIX</span>
                </div>
                <div className="text-xs text-gray-400">Confirmação instantânea · 100% seguro · Banco Central do Brasil</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-emerald-300">PIX ATIVO</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} JTEC Informática. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Feito com</span>
            <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text font-semibold text-transparent">
              precisão
            </span>
            <span>em Belo Horizonte · MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
