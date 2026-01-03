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
    <section id="about" className="section-container bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-construction-orange/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E2761]/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative header */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-construction-orange rounded-full mr-4"></div>
            <svg 
              className="w-12 h-12 text-construction-orange" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
              />
            </svg>
            <div className="w-16 h-1 bg-construction-orange rounded-full ml-4"></div>
          </div>
          
          <h2 className="section-title mb-6">
            About <span className="text-construction-orange">AlphaCap</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Established in <strong className="text-construction-orange">2022</strong> as a proprietorship and incorporated as a Private Limited Company in <strong className="text-construction-orange">2024</strong>, <strong>AlphaCap</strong> has rapidly evolved into a reliable, process-driven, and quality-focused supply chain partner for the construction industry.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We act as a single-window solution connecting reputed manufacturers with project owners, ensuring quality materials, commercial transparency, competitive pricing, and on-time delivery.
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-construction-orange/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/5 via-transparent to-[#1E2761]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-construction-orange via-construction-orange/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container */}
              <div className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-construction-orange/10 to-[#1E2761]/10 group-hover:from-construction-orange/20 group-hover:to-[#1E2761]/20 transition-all duration-300 group-hover:scale-110">
                <div className="text-construction-orange">
                  {highlight.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1E2761] mb-3 group-hover:text-construction-orange transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Mission & Vision - Side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-construction-orange/10 to-white rounded-2xl p-6 border-2 border-construction-orange/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-construction-orange flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To deliver quality construction materials with professionalism, transparency, and reliability—becoming a trusted long-term partner for builders and corporate clients across Tamil Nadu.
              </p>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1E2761]/10 to-white rounded-2xl p-6 border-2 border-[#1E2761]/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1E2761] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To emerge as a leading construction material supply platform by setting benchmarks in quality, service excellence, and supply chain efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

