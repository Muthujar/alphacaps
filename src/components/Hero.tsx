"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const heroBackgrounds = [
  {
    src: "/images/hero/mat2.png",
    alt: "Steel reinforcement bars ready for dispatch",
    priority: true,
    y: "0%",
    scale: 1.05,
    duration: 24,
  },
  {
    src: "/images/hero/mat6.jpg",
    alt: "Bulk cement, sand, aggregates, and bricks for delivery",
    priority: false,
    y: "0%",
    scale: 1.06,
    duration: 26,
  },
  {
    src: "/images/hero/mat7.jpg",
    alt: "Construction crew assembling rebar framework",
    priority: false,
    y: "0%",
    scale: 1.08,
    duration: 28,
  },

];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40">
          <div className="absolute inset-0 opacity-90">
            <div className="relative w-[300%] h-full flex animate-hero-carousel">
              {heroBackgrounds.map(({ src, alt, priority, y, scale, duration }, index) => (
                <motion.div
                  key={src}
                  className="relative w-1/3 h-full"
                  initial={{ scale: 1, y: "0%" }}
                  animate={{ scale, y }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={priority}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/20" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-white py-16 md:py-24">
          {/* AlphaCap Groups - Full Width Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 w-full pt-4 sm:pt-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                <span className="text-construction-orange">AlphaCap</span> Groups
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/20 to-transparent hidden sm:block max-w-md"></div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center md:justify-start flex-1">
                {[
                  { 
                    name: 'Trade Platform', 
                    id: 'products',
                    baseColor: 'orange',
                    gradient: 'from-amber-500 via-orange-500 to-orange-600',
                    borderColor: 'border-orange-400/50',
                    shadowColor: 'shadow-orange-500/30',
                    pattern: 'bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.2)_1px,transparent_0)]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Infracons', 
                    id: 'services',
                    baseColor: 'blue',
                    gradient: 'from-blue-600 via-indigo-600 to-blue-700',
                    borderColor: 'border-blue-400/50',
                    shadowColor: 'shadow-blue-500/30',
                    pattern: 'bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.2)_1px,transparent_0)]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Insurance', 
                    id: null,
                    baseColor: 'emerald',
                    gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
                    borderColor: 'border-emerald-400/50',
                    shadowColor: 'shadow-emerald-500/30',
                    pattern: 'bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.2)_1px,transparent_0)]',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )
                  }
                ].map((group, index) => (
                  <motion.div
                    key={group.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    onClick={() => {
                      if (group.id) {
                        const element = document.getElementById(group.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`bg-gradient-to-br ${group.gradient} ${group.borderColor} border-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white ${group.shadowColor} shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 relative overflow-hidden group`}
                  >
                    {/* Pattern Overlay */}
                    <div className={`absolute inset-0 ${group.pattern} bg-[length:16px_16px] opacity-40`}></div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {/* Content */}
                    <span className="relative z-10 flex-shrink-0">{group.icon}</span>
                    <span className="relative z-10">{group.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <div className="max-w-4xl">
            <div className="space-y-10 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.65, ease: "easeOut" }}
                >
                  <span className="block mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">YOUR RELIABLE PARTNER FOR</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-white animate-gradient drop-shadow-[0_4px_20px_rgba(255,140,0,0.4)]">
                    PREMIUM CONSTRUCTION
                  </span>
                  <span className="block mt-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">MATERIAL SUPPLY</span>
                  {/* Decorative underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "75%", opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.h1>
                <motion.p
                  className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto md:mx-0 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
                >
                  We deliver clear prices, steady updates, and dependable quality on every project.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              >
                <a href="#enquiry" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 rounded-xl">
                  Request a Quote
                </a>
                {/* <a href="#services" className="btn-secondary hover:-translate-y-0.5 transition-transform">
                  Explore InfraCons
                </a> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden lg:block">
        <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs uppercase tracking-widest font-medium text-white">Scroll</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
