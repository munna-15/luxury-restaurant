import Navbar from "@/components/layouts/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import OurChefs from "@/components/about/OurChefs";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import Footer from "@/components/layouts/Footer";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      <AboutHero />

      <AboutStory />

      <OurChefs />

      <AboutTestimonial />

      <Footer />
    </main>
  );
}
