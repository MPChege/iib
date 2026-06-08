import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FourWays from "@/components/FourWays";
import OnePlatform from "@/components/OnePlatform";
import Industries from "@/components/Industries";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FourWays />
      <OnePlatform />
      <Industries />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
