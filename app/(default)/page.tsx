export const metadata = {
  title: "JTEC Store — Tecnologia & Informática",
  description:
    "A melhor loja de informática: notebooks, processadores, placas de vídeo, monitores, periféricos, smartphones e muito mais. Pagamento via PIX com entrega garantida.",
};

import HeroBanner from "@/components/home/hero-banner";
import StatsBar from "@/components/home/stats-bar";
import BrandsMarquee from "@/components/home/brands-marquee";
import CategoryGrid from "@/components/home/category-grid";
import FlashSale from "@/components/home/flash-sale";
import FeaturedSection from "@/components/home/featured-section";
import TrustBar from "@/components/home/trust-bar";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StatsBar />
      <BrandsMarquee />
      <CategoryGrid />
      <FlashSale />
      <FeaturedSection />
      <TrustBar />
    </>
  );
}
