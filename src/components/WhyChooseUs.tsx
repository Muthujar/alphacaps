"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "One-Stop Solution",
    description: "One-stop solution for multiple construction materials",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Strong Network",
    description: "Strong network of approved manufacturers and suppliers",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Proven Experience",
    description: "Experience in supporting large-scale and time-bound projects",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ethical Operations",
    description: "Transparent, ethical, and professional operations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Reliable Logistics",
    description: "Reliable logistics planning and on-time delivery",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Coordination",
    description: "Dedicated coordination for builders and EPC clients",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container relative overflow-hidden bg-slate-100/10 backdrop-blur-sm" ref={ref}>
      {/* Precision grid detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-flex flex-col items-center gap-2 mb-4">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-construction-orange">Core Competencies</span>
          <div className="w-16 h-1 bg-construction-orange/20 rounded-full"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-construction-dark mb-6">
          Why Choose <span className="text-construction-orange">AlphaCap</span>
        </h2>
        <p className="text-xl md:text-2xl text-construction-gray max-w-3xl mx-auto font-medium leading-relaxed italic">
          Delivering excellence through reliability, transparency, and a strong network
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col bg-slate-50/80 backdrop-blur-md rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden"
          >
            {/* Background technical pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                 style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-construction-orange transition-colors"></div>
            
            {/* Icon - Floating Circle */}
            <div className="relative mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg group-hover:bg-construction-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <div className="scale-125">{benefit.icon}</div>
              {/* Glass shine */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-2xl"></div>
            </div>

            <h3 className="text-2xl font-black text-construction-dark mb-4 group-hover:text-construction-orange transition-colors">
              {benefit.title}
            </h3>
            <p className="text-construction-gray text-lg font-medium leading-relaxed border-l-4 border-slate-50 pl-4 group-hover:border-construction-orange/30 transition-all">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


