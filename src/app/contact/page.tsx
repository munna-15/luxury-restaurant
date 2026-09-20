import Navbar from "@/components/layouts/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocation from "@/components/contact/ContactLocation";
import ReservationSection from "@/components/contact/ReservationSection";
import Footer from "@/components/layouts/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      <ContactHero />

      <ContactLocation />

      <ReservationSection />

      <Footer />
    </main>
  );
}
