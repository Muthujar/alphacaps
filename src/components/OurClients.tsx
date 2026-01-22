"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Godrej Construction",
  "Tata Projects",
  "LNT Construction Limited",
  "Ultratech Concrete",
  "Prism Johnson Limited",
  "Hella Inframarket Limited",
  "RDC Concrete (India) Limited",
  "S & P Foundation Private Limited",
  "Casagrand Builder Private Limited",
];

export default function OurClients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="our-clients" className="section-container relative overflow-hidden bg-slate-100/10 backdrop-blur-sm scroll-mt-24" ref={ref}>
      {/* Background Architectural Accent */}
      <div className="absolute -right-20 top-0 w-64 h-64 bg-construction-orange/5 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-construction-orange/40"></div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-construction-orange">Strategic Partners</span>
          <div className="h-px w-8 bg-construction-orange/40"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-construction-dark mb-6">
          Our <span className="text-construction-orange">Clients</span>
        </h2>
        <div className="relative inline-block">
          <p className="text-lg md:text-xl text-construction-gray max-w-2xl mx-auto font-medium leading-relaxed">
            Trusted by India&apos;s leading infrastructure and construction giants
          </p>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-construction-orange/20 to-transparent"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {clients.map((client, index) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative flex items-center justify-center min-h-[100px] rounded-2xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-6 shadow-md hover:shadow-2xl hover:border-construction-orange/30 hover:bg-white transition-all duration-500 overflow-hidden"
          >
            {/* Structural grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            {/* Structural corner details */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-100 group-hover:border-construction-orange/40 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-100 group-hover:border-construction-orange/40 transition-colors"></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <p className="relative text-center text-base md:text-lg font-black text-construction-dark group-hover:text-construction-orange transition-colors duration-300 tracking-tight uppercase">
              {client}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

