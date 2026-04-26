import type { ReactNode } from "react";

export type ProductCategory =
  | "Notebooks"
  | "Processadores"
  | "Placas de Vídeo"
  | "Monitores"
  | "Periféricos"
  | "Smartphones"
  | "Armazenamento"
  | "Memória RAM";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  sales: number;
  stock?: number;
  features: string[];
  badges: Array<{ label: string; tone: "new" | "hot" | "limited" | "default" }>;
  gradient: string;
  icon: ReactNode;
  brand: string;
};

// SVG icons for each category
const icons = {
  laptop: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  cpu: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  gpu: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="22" height="12" rx="2" />
      <circle cx="7" cy="12" r="2.5" />
      <circle cx="14" cy="12" r="2.5" />
      <path d="M19 10v4M4 6V4M8 6V4M12 6V4" />
    </svg>
  ),
  monitor: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 16v5" />
      <circle cx="12" cy="9.5" r="2.5" fill="currentColor" opacity="0.25" />
    </svg>
  ),
  keyboard: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8M6 14h.01M18 14h.01" />
    </svg>
  ),
  mouse: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7v6a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="5" y1="9" x2="19" y2="9" />
    </svg>
  ),
  headset: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <path d="M21 17a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 17a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  phone: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <path d="M9 6h6" />
    </svg>
  ),
  ssd: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <path d="M6 11h4M6 14h2" />
      <circle cx="17" cy="12" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  ),
  ram: (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M6 8V5M9 8V5M12 8V5M15 8V5M18 8V5M6 16v3M9 16v3M12 16v3M15 16v3M18 16v3" />
      <path d="M5 11h2v2H5zM9 11h2v2H9zM13 11h2v2h-2zM17 11h.5v2H17z" fill="currentColor" opacity="0.3" />
    </svg>
  ),
};

export const products: Product[] = [
  // ─── NOTEBOOKS ────────────────────────────────────────────────
  {
    id: "asus-rog-strix-g16",
    name: "ASUS ROG Strix G16 — Core i9 + RTX 4070",
    description:
      "Notebook gamer de alto desempenho com Intel Core i9-14900HX, NVIDIA RTX 4070 8GB, 32GB DDR5 e display QHD 240Hz.",
    category: "Notebooks",
    price: 8499,
    originalPrice: 10999,
    rating: 4.9,
    reviews: 312,
    sales: 840,
    features: ["Intel Core i9-14900HX", "RTX 4070 8GB", "32GB DDR5", "2TB NVMe", "QHD 240Hz"],
    badges: [{ label: "Mais Vendido", tone: "hot" }],
    gradient: "from-rose-600 via-orange-500 to-amber-500",
    brand: "ASUS",
    icon: icons.laptop,
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3 — 15\" 16GB/512GB",
    description:
      "O mais fino e leve da linha Apple. Chip M3 com GPU de 10 núcleos, autonomia de até 18 horas e tela Liquid Retina.",
    category: "Notebooks",
    price: 12999,
    originalPrice: 14999,
    rating: 4.9,
    reviews: 1840,
    sales: 2100,
    features: ["Apple M3", "16GB RAM", "512GB SSD", "15\" Retina", "18h bateria"],
    badges: [{ label: "Apple", tone: "default" }],
    gradient: "from-slate-500 via-gray-400 to-zinc-500",
    brand: "Apple",
    icon: icons.laptop,
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 — Intel i7 + OLED 3.5K",
    description:
      "Design ultrafino com tela OLED 3.5K, Intel Core i7-14700H, NVIDIA RTX 4060 e 32GB DDR5. O laptop premium definitivo.",
    category: "Notebooks",
    price: 9499,
    originalPrice: 11499,
    rating: 4.8,
    reviews: 527,
    sales: 610,
    stock: 5,
    features: ["Intel i7-14700H", "RTX 4060", "32GB DDR5", "OLED 3.5K", "1TB NVMe"],
    badges: [{ label: "Premium", tone: "new" }],
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    brand: "Dell",
    icon: icons.laptop,
  },
  // ─── PROCESSADORES ────────────────────────────────────────────
  {
    id: "amd-ryzen9-7950x",
    name: "AMD Ryzen 9 7950X — 16 Núcleos 5.7GHz",
    description:
      "Processador desktop topo de linha: 16 núcleos, 32 threads, frequência boost de 5.7GHz e 80MB de cache total.",
    category: "Processadores",
    price: 3299,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 748,
    sales: 1420,
    features: ["16 núcleos", "32 threads", "5.7GHz Boost", "80MB Cache", "AM5", "TDP 170W"],
    badges: [{ label: "Mais Rápido", tone: "hot" }],
    gradient: "from-red-600 via-rose-500 to-orange-500",
    brand: "AMD",
    icon: icons.cpu,
  },
  {
    id: "intel-i9-14900k",
    name: "Intel Core i9-14900K — 24 Núcleos 6.0GHz",
    description:
      "24 núcleos (8P+16E), frequência boost até 6.0GHz, desbloqueado para overclock. O melhor da 14ª geração Intel.",
    category: "Processadores",
    price: 2799,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 621,
    sales: 980,
    features: ["24 núcleos", "6.0GHz Boost", "36MB Cache", "LGA1700", "OC Desbloqueado"],
    badges: [{ label: "Bestseller", tone: "hot" }],
    gradient: "from-blue-600 via-cyan-500 to-sky-500",
    brand: "Intel",
    icon: icons.cpu,
  },
  {
    id: "amd-ryzen5-7600x",
    name: "AMD Ryzen 5 7600X — 6 Núcleos 5.3GHz",
    description:
      "Melhor custo-benefício para gaming. 6 núcleos, 4.7/5.3GHz, AM5 DDR5 e desempenho que supera gerações anteriores.",
    category: "Processadores",
    price: 1099,
    originalPrice: 1399,
    rating: 4.7,
    reviews: 1240,
    sales: 3100,
    features: ["6 núcleos", "5.3GHz Boost", "38MB Cache", "AM5", "DDR5"],
    badges: [{ label: "Custo-Benefício", tone: "new" }],
    gradient: "from-orange-500 via-red-500 to-rose-500",
    brand: "AMD",
    icon: icons.cpu,
  },
  // ─── PLACAS DE VÍDEO ──────────────────────────────────────────
  {
    id: "rtx-4090-asus-rog",
    name: "ASUS ROG STRIX RTX 4090 OC 24GB",
    description:
      "A placa de vídeo mais poderosa do mercado. 24GB GDDR6X, 16.384 CUDA cores e clock boost de 2640 MHz.",
    category: "Placas de Vídeo",
    price: 12499,
    originalPrice: 14999,
    rating: 5.0,
    reviews: 284,
    sales: 312,
    stock: 3,
    features: ["24GB GDDR6X", "16384 CUDA Cores", "2640MHz Boost", "HDMI 2.1", "4x DP 1.4a"],
    badges: [
      { label: "Topo de Linha", tone: "hot" },
      { label: "Últimas unidades", tone: "limited" },
    ],
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    brand: "ASUS",
    icon: icons.gpu,
  },
  {
    id: "rtx-4070ti-msi",
    name: "MSI Gaming RTX 4070 Ti SUPER 16GB",
    description:
      "16GB GDDR6X, DLSS 3.5 com Frame Generation, perfeita para 4K gaming. Desempenho RTX 3090 Ti a metade do preço.",
    category: "Placas de Vídeo",
    price: 4599,
    originalPrice: 5499,
    rating: 4.8,
    reviews: 519,
    sales: 780,
    features: ["16GB GDDR6X", "DLSS 3.5", "Ray Tracing", "AV1 Encode", "PCIe 4.0"],
    badges: [{ label: "Custo-Benefício 4K", tone: "new" }],
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    brand: "MSI",
    icon: icons.gpu,
  },
  {
    id: "rx-7900-xtx",
    name: "AMD Radeon RX 7900 XTX 24GB",
    description:
      "24GB GDDR6, arquitetura RDNA 3, FSR 3 com Frame Generation. A melhor GPU AMD para 4K com rasterização.",
    category: "Placas de Vídeo",
    price: 5499,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 316,
    sales: 445,
    features: ["24GB GDDR6", "RDNA 3", "FSR 3.0", "DisplayPort 2.1", "AV1 Encode"],
    badges: [{ label: "-21%", tone: "limited" }],
    gradient: "from-red-600 via-rose-500 to-pink-500",
    brand: "AMD",
    icon: icons.gpu,
  },
  // ─── MONITORES ────────────────────────────────────────────────
  {
    id: "lg-ultrawide-34",
    name: "LG UltraWide 34\" QHD IPS 160Hz",
    description:
      "Monitor ultrawide 34 polegadas, resolução QHD 3440×1440, IPS 160Hz, HDR10, 1ms GtG e AMD FreeSync Premium.",
    category: "Monitores",
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 872,
    sales: 1240,
    features: ["34\" 21:9", "QHD 3440×1440", "IPS 160Hz", "HDR10", "FreeSync Premium"],
    badges: [{ label: "Mais Vendido", tone: "hot" }],
    gradient: "from-cyan-600 via-sky-500 to-blue-600",
    brand: "LG",
    icon: icons.monitor,
  },
  {
    id: "samsung-odyssey-g7",
    name: "Samsung Odyssey G7 27\" QHD 240Hz",
    description:
      "Painel VA curvo 1000R, 27 polegadas, 2560×1440 a 240Hz, 1ms, G-Sync compatível. Gaming no nível máximo.",
    category: "Monitores",
    price: 2199,
    originalPrice: 2799,
    rating: 4.7,
    reviews: 641,
    sales: 890,
    features: ["27\" Curvo 1000R", "QHD 240Hz", "1ms MPRT", "G-Sync", "HDR600"],
    badges: [{ label: "Gamer", tone: "hot" }],
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
    brand: "Samsung",
    icon: icons.monitor,
  },
  // ─── PERIFÉRICOS ──────────────────────────────────────────────
  {
    id: "corsair-k100-rgb",
    name: "Corsair K100 RGB — Teclado Mecânico OPX",
    description:
      "Teclado mecânico premium com switches OPX ópticos, iluminação RGB por tecla, encoder iCUE e estrutura de aço.",
    category: "Periféricos",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 1124,
    sales: 2300,
    features: ["Switch OPX Óptico", "RGB por tecla", "iCUE", "Alumínio", "Anti-ghosting"],
    badges: [{ label: "Premium", tone: "hot" }],
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    brand: "Corsair",
    icon: icons.keyboard,
  },
  {
    id: "logitech-gpro-superlight2",
    name: "Logitech G Pro X Superlight 2 DEX",
    description:
      "Mouse gamer sem fio ultraleve de 60g, sensor HERO 2 25600DPI, LIGHTSPEED 2, bateria de 95 horas. Usado por pros.",
    category: "Periféricos",
    price: 599,
    originalPrice: 749,
    rating: 4.9,
    reviews: 2847,
    sales: 6100,
    features: ["60g ultraleve", "25600 DPI", "LIGHTSPEED 2", "95h bateria", "Sem fio"],
    badges: [
      { label: "Pro Player", tone: "hot" },
      { label: "Bestseller", tone: "default" },
    ],
    gradient: "from-slate-500 via-gray-500 to-zinc-600",
    brand: "Logitech",
    icon: icons.mouse,
  },
  {
    id: "hyperx-cloud3-wireless",
    name: "HyperX Cloud III Wireless — 120h",
    description:
      "Headset sem fio com drivers de 53mm, DTS Headphone:X Spatial, microfone destacável e até 120 horas de bateria.",
    category: "Periféricos",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 1532,
    sales: 3200,
    features: ["Drivers 53mm", "DTS:X Spatial", "120h bateria", "Sem fio 2.4GHz", "Mic destacável"],
    badges: [{ label: "Mais vendido", tone: "hot" }],
    gradient: "from-red-600 via-rose-500 to-pink-600",
    brand: "HyperX",
    icon: icons.headset,
  },
  {
    id: "razer-huntsman-v3",
    name: "Razer Huntsman V3 Pro — Analógico",
    description:
      "Primeiro teclado com switches analógicos ópticos. Actuation point ajustável de 0.1mm a 4.0mm e RGB Chroma.",
    category: "Periféricos",
    price: 1199,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 423,
    sales: 560,
    stock: 8,
    features: ["Switch Analógico", "Actuation 0.1-4mm", "RGB Chroma", "Anti-ghosting", "PBT Keycaps"],
    badges: [{ label: "Novo", tone: "new" }],
    gradient: "from-green-600 via-emerald-500 to-cyan-500",
    brand: "Razer",
    icon: icons.keyboard,
  },
  // ─── SMARTPHONES ──────────────────────────────────────────────
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max — 256GB Titânio",
    description:
      "Chip A18 Pro, câmera de 48MP com zoom óptico 5x, tela Super Retina XDR 6.9\" e gravação em ProRes 4K 120fps.",
    category: "Smartphones",
    price: 9999,
    originalPrice: 11499,
    rating: 4.9,
    reviews: 3240,
    sales: 5800,
    features: ["A18 Pro", "256GB", "6.9\" OLED ProMotion", "4K 120fps ProRes", "5x zoom óptico"],
    badges: [{ label: "Lançamento", tone: "new" }],
    gradient: "from-slate-400 via-gray-300 to-zinc-400",
    brand: "Apple",
    icon: icons.phone,
  },
  {
    id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra — 256GB",
    description:
      "Snapdragon 8 Elite, câmera de 200MP, S Pen integrada, tela Dynamic AMOLED 6.9\" e bateria 5000mAh.",
    category: "Smartphones",
    price: 7499,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 2100,
    sales: 4200,
    features: ["Snapdragon 8 Elite", "200MP câmera", "S Pen", "6.9\" 120Hz AMOLED", "5000mAh"],
    badges: [{ label: "S Pen", tone: "default" }],
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
    brand: "Samsung",
    icon: icons.phone,
  },
  // ─── ARMAZENAMENTO ────────────────────────────────────────────
  {
    id: "samsung-990-pro-2tb",
    name: "Samsung 990 Pro 2TB NVMe PCIe 4.0",
    description:
      "7450/6900 MB/s leitura/gravação, controlador Samsung MJX, otimizado para jogos e criação de conteúdo 4K.",
    category: "Armazenamento",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 2841,
    sales: 8700,
    features: ["7450MB/s leitura", "6900MB/s escrita", "PCIe 4.0 x4", "M.2 2280", "TBW 1200"],
    badges: [
      { label: "Bestseller", tone: "hot" },
      { label: "-20%", tone: "limited" },
    ],
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    brand: "Samsung",
    icon: icons.ssd,
  },
  {
    id: "wd-black-sn850x-4tb",
    name: "WD Black SN850X 4TB NVMe PCIe 4.0",
    description:
      "7300/6600 MB/s, tecnologia Game Mode 2.0, 4TB de espaço para seu arsenal de jogos. Compatível com PS5.",
    category: "Armazenamento",
    price: 1499,
    originalPrice: 1899,
    rating: 4.8,
    reviews: 1240,
    sales: 2400,
    features: ["7300MB/s leitura", "Game Mode 2.0", "4TB", "PS5 compatível", "PCIe 4.0 x4"],
    badges: [{ label: "PS5 Ready", tone: "new" }],
    gradient: "from-slate-700 via-gray-600 to-zinc-700",
    brand: "WD",
    icon: icons.ssd,
  },
  // ─── MEMÓRIA RAM ──────────────────────────────────────────────
  {
    id: "corsair-vengeance-64gb-ddr5",
    name: "Corsair Vengeance 64GB DDR5-6000 CL30",
    description:
      "Kit 2×32GB DDR5 6000MHz CL30, otimizado para Intel XMP 3.0 e AMD EXPO. Dissipador anodizado em alumínio.",
    category: "Memória RAM",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 940,
    sales: 2100,
    features: ["64GB (2×32)", "DDR5 6000MHz", "CL30", "XMP 3.0", "AMD EXPO"],
    badges: [{ label: "Alta Performance", tone: "hot" }],
    gradient: "from-yellow-600 via-amber-500 to-orange-500",
    brand: "Corsair",
    icon: icons.ram,
  },
  {
    id: "kingston-fury-beast-32gb-ddr5",
    name: "Kingston Fury Beast 32GB DDR5-5600",
    description:
      "Kit 2×16GB DDR5 5600MHz, XMP 3.0, perfil baixo para compatibilidade máxima com air coolers grandes.",
    category: "Memória RAM",
    price: 699,
    originalPrice: 899,
    rating: 4.7,
    reviews: 1820,
    sales: 5100,
    features: ["32GB (2×16)", "DDR5 5600MHz", "XMP 3.0", "Perfil baixo", "Plug & Play"],
    badges: [{ label: "Custo-Benefício", tone: "new" }],
    gradient: "from-red-600 via-rose-500 to-orange-500",
    brand: "Kingston",
    icon: icons.ram,
  },
];

export const categories: Array<ProductCategory | "Todos"> = [
  "Todos",
  "Notebooks",
  "Processadores",
  "Placas de Vídeo",
  "Monitores",
  "Periféricos",
  "Smartphones",
  "Armazenamento",
  "Memória RAM",
];
