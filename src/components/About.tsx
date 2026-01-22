"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "TrustSEAL Verified",
      description: "Verified by IndiaMART",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Expert Leadership",
      description: "Led by Mr. Prasanth S",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "Moral business policies",
    },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden bg-slate-100/10 backdrop-blur-sm" ref={ref}>
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Architectural Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-construction-orange/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-construction-accent/20 to-transparent"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-col items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-construction-orange mb-2">Technical Profile</span>
            <div className="flex items-center">
              <div className="w-12 h-px bg-construction-orange/40"></div>
              <div className="w-2 h-2 rounded-full bg-construction-orange mx-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              <div className="w-12 h-px bg-construction-orange/40"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-construction-dark mb-8 tracking-tight">
            About <span className="text-construction-orange relative inline-block">
              AlphaCap
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-construction-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-construction-dark leading-relaxed font-medium">
              Established in <span className="px-2 py-1 bg-construction-orange text-white rounded skew-x-[-12deg] inline-block font-bold">2022</span> as a proprietorship and incorporated as a Private Limited Company in <span className="px-2 py-1 bg-construction-accent text-white rounded skew-x-[-12deg] inline-block font-bold">2024</span>.
            </p>
            <p className="text-lg md:text-xl text-construction-gray leading-relaxed font-light italic text-center">
              &ldquo;Rapidly evolved into a reliable, process-driven, and quality-focused supply chain partner for the construction industry.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-slate-50/80 backdrop-blur-md rounded-tr-[3rem] rounded-bl-[3rem] p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden"
            >
              {/* Background blueprint lines */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity" 
                   style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
              </div>
              
              {/* Corner Code Label */}
              <div className="absolute top-4 right-8 text-[10px] font-mono font-bold text-slate-300 group-hover:text-construction-orange transition-colors">
                REF: AC-00{index + 1}
              </div>
              
              {/* Icon container */}
              <div className="relative mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-construction-dark text-white shadow-lg group-hover:bg-construction-orange group-hover:scale-110 transition-all duration-500">
                <div className="relative z-10 scale-110">
                  {highlight.icon}
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-2xl font-black text-construction-dark mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {highlight.title}
              </h3>
              <p className="text-construction-gray text-base leading-relaxed font-medium border-l-2 border-slate-100 pl-4 group-hover:border-construction-orange transition-colors">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Mission Pillar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative flex overflow-hidden bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-2xl hover:bg-white transition-all duration-500"
          >
            <div className="w-24 bg-construction-orange flex items-center justify-center relative overflow-hidden shrink-0">
              <span className="text-white font-black text-4xl -rotate-90 whitespace-nowrap opacity-20 tracking-[0.2em]">MISSION</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 p-8 md:p-10 relative">
              {/* Subtle background icon */}
              <div className="absolute bottom-4 right-4 text-slate-100 group-hover:text-construction-orange/5 transition-colors">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2z" opacity="0.1" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-construction-dark mb-4 relative z-10">Our Mission</h3>
              <p className="text-construction-gray text-base md:text-lg leading-relaxed font-medium italic relative z-10">
                &ldquo;To deliver quality construction materials with professionalism, transparency, and reliability—becoming a trusted long-term partner for builders and corporate clients across Tamil Nadu.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Vision Pillar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative flex overflow-hidden bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-2xl hover:bg-white transition-all duration-500"
          >
            <div className="w-24 bg-construction-dark flex items-center justify-center relative overflow-hidden shrink-0">
              <span className="text-white font-black text-4xl -rotate-90 whitespace-nowrap opacity-20 tracking-[0.2em]">VISION</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 p-8 md:p-10 relative">
               {/* Subtle background icon */}
               <div className="absolute bottom-4 right-4 text-slate-100 group-hover:text-construction-dark/5 transition-colors">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2z" opacity="0.1" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-construction-dark mb-4 relative z-10">Our Vision</h3>
              <p className="text-construction-gray text-base md:text-lg leading-relaxed font-medium italic relative z-10">
                &ldquo;To emerge as a leading construction material supply platform by setting benchmarks in quality, service excellence, and supply chain efficiency.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

