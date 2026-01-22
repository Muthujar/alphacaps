"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "End-to-End Project Material Sourcing",
    description: "End-to-end project material sourcing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Bulk and Contract-Based Supply",
    description: "Bulk and contract-based supply",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Multi-Site Delivery Coordination",
    description: "Multi-site and phased delivery coordination",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Vendor Management",
    description: "Manufacturer and vendor management",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Procurement Support",
    description: "Rate finalization and procurement support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Quality assurance and compliance assistance",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServiceCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service-capabilities" className="section-container relative overflow-hidden bg-slate-100/10 backdrop-blur-sm" ref={ref}>
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
          <span className="text-xs font-black uppercase tracking-[0.4em] text-construction-orange">Operational Excellence</span>
          <div className="w-16 h-1 bg-construction-orange rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-construction-dark mb-6 tracking-tight">
          Our <span className="text-construction-orange">Service Capabilities</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:bg-white hover:border-construction-orange/30"
          >
            {/* Background technical pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
            </div>

            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-construction-dark text-white shadow-lg group-hover:bg-construction-orange group-hover:scale-110 transition-all duration-500">
                <div className="scale-90">{capability.icon}</div>
                {/* Glass shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-xl"></div>
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-sm font-black text-construction-dark uppercase tracking-tight mb-1 group-hover:text-construction-orange transition-colors">
                  {capability.title}
                </h4>
                <p className="text-xs text-construction-gray leading-relaxed font-bold italic border-l-2 border-slate-100 pl-2 group-hover:border-construction-orange/30 transition-all">
                  {capability.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

