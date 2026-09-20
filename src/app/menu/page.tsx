import Navbar from "@/components/layouts/Navbar";
import MenuHero from "@/components/menu/MenuHero";
import PastaSection from "@/components/menu/PastaSection";
import PizzaSection from "@/components/menu/PizzaSection";
import PlatterSection from "@/components/menu/PlatterSection";
import LunchSection from "@/components/menu/LunchSection";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      <MenuHero />

      <PastaSection />

      <PizzaSection />

      <PlatterSection />

      <LunchSection />

      <Footer />
    </main>
  );
}
