import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BusinessVerticalsCards from "@/components/BusinessVerticalsCards";
import InfraConsServices from "@/components/InfraConsServices";
import ServiceCapabilities from "@/components/ServiceCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurClients from "@/components/OurClients";
import About from "@/components/About";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeaturedProductCategories from "@/components/FeaturedProductCategories";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "AlphaCap | alphacaps.in - Complete Construction Solutions",
  description: "TrustSEAL verified (by IndiaMART) company offering premium building materials (Trade Platform) and expert construction & interior services (InfraCons) in Chennai. Quality materials, expert execution, moral business policies with crystal pure transparency.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height banner with dual business verticals */}
      <Hero />
      
      {/* Business Verticals Cards Section */}
      {/* <BusinessVerticalsCards /> */}
      
      <FeaturedProductCategories />
      
      {/* Infracons Services Section - Construction, Interior, RMC services */}
      <InfraConsServices />
      
      {/* Service Capabilities Section - Our service capabilities */}
      <ServiceCapabilities />
      
      {/* About Section - Company information */}
      <About />
      
      {/* Why Choose Us Section - Benefits and features */}
      <WhyChooseUs />
      
      {/* Our Clients Section - Client list */}
      <OurClients />
      
      {/* Testimonials Section - Trusted by industry leaders */}
      <Testimonials />
      
      {/* Enquiry Form Section - Contact form */}
      <EnquiryForm />
      
      {/* Footer Section - Contact info and social links */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}


