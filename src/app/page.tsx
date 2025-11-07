import Hero from "@/components/Hero";
import BusinessVerticals from "@/components/BusinessVerticals";
import InfraConsServices from "@/components/InfraConsServices";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphacaps.in - Complete Construction Solutions | Trade Platform & InfraCons Services",
  description: "TrustSEAL verified company offering premium building materials (Trade Platform) and expert construction & interior services (InfraCons) in Chennai. Quality materials, expert execution, moral business policies with crystal pure transparency.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height banner with dual business verticals */}
      <Hero />
      
      {/* Business Verticals Section - Trade Platform & InfraCons overview */}
      <BusinessVerticals />
      
      {/* InfraCons Services Section - Construction, Interior, RMC services */}
      <InfraConsServices />
      
      {/* About/Services Section - Company info and products */}
      <About />
      
      {/* Why Choose Us Section - Benefits and features */}
      <WhyChooseUs />
      
      {/* Enquiry Form Section - Contact form */}
      <EnquiryForm />
      
      {/* Footer Section - Contact info and social links */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}


