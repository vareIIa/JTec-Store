const brands = [
  { name: "Intel", color: "text-blue-300" },
  { name: "AMD", color: "text-red-300" },
  { name: "NVIDIA", color: "text-green-300" },
  { name: "Apple", color: "text-gray-300" },
  { name: "Samsung", color: "text-blue-200" },
  { name: "ASUS", color: "text-sky-300" },
  { name: "MSI", color: "text-red-200" },
  { name: "Corsair", color: "text-yellow-200" },
  { name: "Logitech", color: "text-slate-300" },
  { name: "Razer", color: "text-green-200" },
  { name: "HyperX", color: "text-rose-300" },
  { name: "Kingston", color: "text-orange-200" },
  { name: "Western Digital", color: "text-indigo-300" },
  { name: "LG", color: "text-red-200" },
  { name: "Dell", color: "text-cyan-300" },
];

function BrandItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="mx-6 flex shrink-0 items-center gap-2">
      <div className={`h-1.5 w-1.5 rounded-full ${color.replace("text-", "bg-")} opacity-60`} />
      <span className={`font-nacelle text-sm font-semibold tracking-wide ${color} opacity-70 hover:opacity-100 transition-opacity`}>
        {name}
      </span>
    </div>
  );
}

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030014] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030014] to-transparent z-10" />

      <div className="flex items-center border-y border-white/[0.05]">
        {/* Label */}
        <div className="shrink-0 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600">
            Marcas Parceiras
          </span>
        </div>

        {/* Scrolling brands */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex items-center py-3"
            style={{
              animation: "scroll-x 30s linear infinite",
            }}
          >
            {doubled.map((b, i) => (
              <BrandItem key={`${b.name}-${i}`} name={b.name} color={b.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
