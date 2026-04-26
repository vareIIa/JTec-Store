const BRANDS_ROW1 = [
  { name: "Intel", abbr: "IN", gradient: "from-blue-500 to-blue-700", ring: "ring-blue-500/30" },
  { name: "NVIDIA", abbr: "NV", gradient: "from-green-500 to-emerald-700", ring: "ring-green-500/30" },
  { name: "Apple", abbr: "AP", gradient: "from-gray-400 to-gray-600", ring: "ring-gray-400/30" },
  { name: "ASUS", abbr: "AS", gradient: "from-sky-500 to-blue-700", ring: "ring-sky-500/30" },
  { name: "Corsair", abbr: "CR", gradient: "from-amber-500 to-orange-600", ring: "ring-amber-500/30" },
  { name: "Logitech", abbr: "LO", gradient: "from-slate-500 to-slate-700", ring: "ring-slate-500/30" },
  { name: "Dell", abbr: "DL", gradient: "from-cyan-500 to-teal-700", ring: "ring-cyan-500/30" },
  { name: "Kingston", abbr: "KG", gradient: "from-orange-500 to-amber-600", ring: "ring-orange-500/30" },
  { name: "Western Digital", abbr: "WD", gradient: "from-indigo-500 to-blue-700", ring: "ring-indigo-500/30" },
];

const BRANDS_ROW2 = [
  { name: "AMD", abbr: "AD", gradient: "from-red-500 to-rose-700", ring: "ring-red-500/30" },
  { name: "Samsung", abbr: "SM", gradient: "from-blue-600 to-indigo-800", ring: "ring-blue-600/30" },
  { name: "MSI", abbr: "MS", gradient: "from-red-700 to-gray-800", ring: "ring-red-700/30" },
  { name: "Razer", abbr: "RZ", gradient: "from-green-400 to-green-700", ring: "ring-green-400/30" },
  { name: "HyperX", abbr: "HX", gradient: "from-rose-500 to-pink-700", ring: "ring-rose-500/30" },
  { name: "LG", abbr: "LG", gradient: "from-red-400 to-red-600", ring: "ring-red-400/30" },
  { name: "Seagate", abbr: "SG", gradient: "from-violet-500 to-purple-700", ring: "ring-violet-500/30" },
  { name: "Gigabyte", abbr: "GB", gradient: "from-sky-400 to-cyan-600", ring: "ring-sky-400/30" },
  { name: "Cooler Master", abbr: "CM", gradient: "from-slate-400 to-slate-600", ring: "ring-slate-400/30" },
];

function BrandTile({ name, abbr, gradient, ring }: { name: string; abbr: string; gradient: string; ring: string }) {
  return (
    <div className="mx-2.5 flex shrink-0 items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ring-1 ${ring}`}
      >
        <span className="text-[9px] font-black font-mono text-white tracking-widest">
          {abbr}
        </span>
      </div>
      <span className="whitespace-nowrap text-xs font-semibold text-white/60">
        {name}
      </span>
    </div>
  );
}

export default function BrandsMarquee() {
  const row1 = [...BRANDS_ROW1, ...BRANDS_ROW1];
  const row2 = [...BRANDS_ROW2, ...BRANDS_ROW2];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#030014] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#030014] to-transparent z-10" />

      {/* Section header */}
      <div className="relative z-10 mb-7 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-400">
          Marcas Parceiras
        </p>
        <h2 className="mt-1.5 font-nacelle text-xl font-bold text-white">
          As melhores marcas do{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
            mercado
          </span>
        </h2>
      </div>

      {/* Row 1 — scroll left */}
      <div className="overflow-hidden mb-3">
        <div
          className="flex items-center"
          style={{ animation: "scroll-x 32s linear infinite" }}
        >
          {row1.map((b, i) => (
            <BrandTile key={`r1-${b.name}-${i}`} {...b} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="overflow-hidden">
        <div
          className="flex items-center"
          style={{ animation: "scroll-x-right 28s linear infinite" }}
        >
          {row2.map((b, i) => (
            <BrandTile key={`r2-${b.name}-${i}`} {...b} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
