import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InfraConsServices from "@/components/InfraConsServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeaturedProductCategories from "@/components/FeaturedProductCategories";

export const metadata: Metadata = {
  title: "AlphaCap | alphacaps.in - Complete Construction Solutions",
  description: "TrustSEAL verified (by IndiaMART) company offering premium building materials (Trade Platform) and expert construction & interior services (InfraCons) in Chennai. Quality materials, expert execution, moral business policies with crystal pure transparency.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height banner with dual business verticals */}
      <Hero />
      
      <FeaturedProductCategories />
      
      {/* InfraCons Services Section - Construction, Interior, RMC services */}
      <InfraConsServices />
      
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


