import type { Metadata } from "next";

import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/home/Hero";
import WelcomeSection from "@/components/home/WelcomeSection";
import MenuPreview from "@/components/home/MenuPreview";
import OfferSection from "@/components/home/OfferSection";
import HappyCustomers from "@/components/home/HappyCustomers";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Home | Maison.",
};

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <MenuPreview />
      <OfferSection />
      <HappyCustomers />
      <Footer />
    </main>
  );
}
