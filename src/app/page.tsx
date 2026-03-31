import brandData from "@/data/brandData.json";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesGrid from "@/components/ServicesGrid";
import ContactLocation from "@/components/ContactLocation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SchemaMarkup from "@/components/SchemaMarkup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <SchemaMarkup data={brandData} />
      <Header />
      <Hero data={brandData.hero} />
      <FeaturesSection />
      {/* <LiveCrowdStatus /> */}
      <ServicesGrid services={brandData.services} />
      <ContactLocation contact={brandData.contact} location={brandData.location} />
      <Footer />
      <FloatingWhatsApp whatsapp={brandData.contact.whatsapp} />
    </main>
  );
}
