import HeroBanner from "@/components/HeroBanner";
import LimitedTimeOffers from "@/components/LimitedTimeOffers";
import Marquee from "@/components/Marquee";
import ShopByCategory from "@/components/ShopByCategory";
import TrendingProducts from "@/components/TrendingProducts";


export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Marquee></Marquee>
      <ShopByCategory></ShopByCategory>
      <TrendingProducts></TrendingProducts>
      <LimitedTimeOffers></LimitedTimeOffers>
    </div>
  );
}
