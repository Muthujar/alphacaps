"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BuildingIcon, HomeIcon, TruckIcon } from "./icons";

const services = [
  {
    title: "RMC Services",
    icon: <TruckIcon className="w-16 h-16" />,
    description: "Specialized Ready Mix Concrete solutions for your project requirements.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-1000x1000.jpg",
    categories: [
      {
        name: "Temperature Resistant Concrete",
        details: "High-performance concrete designed to withstand extreme temperature variations.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-1000x1000.jpeg",
      },
      {
        name: "Beads Concrete",
        details: "Premium quality concrete ensuring durability and strength for critical structures.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-1000x1000.jpg",
      },
      {
        name: "Color Concrete",
        details: "Aesthetically appealing colored concrete for decorative and functional applications.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-1000x1000.jpg",
      },
    ],
    color: "from-slate-900 to-slate-800",
    borderColor: "border-construction-orange",
  },
  {
    title: "Construction Services",
    icon: <BuildingIcon className="w-16 h-16" />,
    description: "Expert construction services for commercial, residential, and infrastructure projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    categories: [
      {
        name: "Commercial Construction",
        details: "Office buildings, retail spaces, warehouses, and commercial complexes with modern design and quality execution.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      },
      {
        name: "Residential Construction",
        details: "Homes, apartments, and residential complexes built with precision and attention to detail.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      },
      {
        name: "Infrastructure Projects",
        details: "Roads, bridges, and public infrastructure projects meeting the highest standards.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
    ],
    color: "from-slate-900 to-slate-800",
    borderColor: "border-construction-orange",
  },
  {
    title: "Interior Services",
    icon: <HomeIcon className="w-16 h-16" />,
    description: "Transform your spaces with our expert interior design and execution services.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    categories: [
      {
        name: "Residential Interior",
        details: "Complete interior solutions for homes including design, furniture, and finishing touches.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      },
      {
        name: "Commercial Interior",
        details: "Modern office spaces, retail interiors, and commercial spaces designed for productivity and aesthetics.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
    ],
    color: "from-slate-900 to-slate-800",
    borderColor: "border-construction-orange",
  },
];

export default function InfraConsServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-container relative overflow-hidden bg-slate-100/10 backdrop-blur-sm scroll-mt-24" ref={ref}>
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="inline-flex flex-col items-center gap-2 mb-4">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-construction-orange">Integrated Solutions</span>
          <div className="w-16 h-1 bg-construction-orange rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-construction-dark mb-6 tracking-tight">
          Infracons <span className="text-construction-orange">Services</span>
        </h2>
        <p className="text-lg text-construction-gray max-w-3xl mx-auto font-medium leading-relaxed italic">
          Comprehensive construction and interior services backed by our expertise in building materials. 
          Quality execution from concept to completion.
        </p>
      </motion.div>

      <div className="space-y-10 relative z-10">
        {services.map((service, serviceIndex) => {
          const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
          return (
          <motion.div
            key={service.title}
            id={serviceId}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
            className={`bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-t-[10px] ${service.borderColor} group`}
            style={{ scrollMarginTop: '100px' }}
          >
            {/* Service Header with Image */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10"></div>
              {/* 
                On mobile, the original fixed height (h-48) wasn't sufficient
                for longer titles + descriptions, causing text to be clipped
                inside this overlay. Increase the small-screen height so the
                text can breathe while keeping a strong visual hero feel.
              */}
              <div className="relative h-60 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center gap-5 p-6 md:p-8">
                <div className="text-construction-orange flex-shrink-0 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl group-hover:bg-construction-orange group-hover:text-white transition-all duration-500">
                  <div className="scale-75 md:scale-90">{service.icon}</div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 text-white tracking-tight">{service.title}</h3>
                  <p className="text-slate-300 font-medium text-base md:text-lg italic max-w-2xl leading-relaxed">&ldquo;{service.description}&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 md:p-8 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.categories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.2 + categoryIndex * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-construction-orange/30 transition-all duration-500 group/item"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover/item:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white font-black text-base tracking-tight uppercase">{category.name}</div>
                    </div>
                    <div className="p-4">
                      <p className="text-construction-gray text-sm leading-relaxed font-medium border-l-4 border-slate-100 pl-3 group-hover/item:border-construction-orange transition-all">
                        {category.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-16 max-w-5xl mx-auto border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-3 h-full bg-construction-orange"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-construction-dark mb-6 tracking-tight">
              Ready to Start Your Project?
            </h3>
            <p className="text-construction-gray text-xl mb-10 max-w-3xl mx-auto font-medium leading-relaxed italic">
              Our team of experts is ready to discuss your construction or interior project requirements. 
              Contact us for a free consultation and quote.
            </p>
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center bg-construction-dark hover:bg-construction-orange text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

