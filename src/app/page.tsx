import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import LimitedTimeOffers from "@/components/LimitedTimeOffers";
import Marquee from "@/components/Marquee";
import NewArrivals from "@/components/NewArrivals";
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
      <NewArrivals></NewArrivals>
      <Footer></Footer>
    </div>
  );
}
