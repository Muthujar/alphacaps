"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const heroStats = [
  { label: "TrustSEAL Verified", value: "by IndiaMART" },
  { label: "Dispatch SLA", value: "24-48 Hrs" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Customer Support", value: "24/7" },
];

const tradeFeatures = [
  "Curated catalog of 200+ materials",
  "Live pricing assistance & logistics",
  "Quality audits before dispatch",
];

const infraFeatures = [
  "Design-to-delivery project teams",
  "Transparent progress dashboards",
  "Specialists for civil & interiors",
];

const heroBackgrounds = [
  {
    src: "/images/hero/mat6.jpg",
    alt: "Bulk cement, sand, aggregates, and bricks for delivery",
    priority: false,
    y: "-4%",
    scale: 1.08,
    duration: 26,
  },
  {
    src: "/images/hero/mat5.avif",
    alt: "Construction crew assembling rebar framework",
    priority: false,
    y: "-6%",
    scale: 1.1,
    duration: 28,
  },
  {
    src: "/images/hero/mat2.png",
    alt: "Steel reinforcement bars ready for dispatch",
    priority: true,
    y: "-5%",
    scale: 1.07,
    duration: 24,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
          <div className="absolute inset-0 opacity-80">
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
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-black/60" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-construction-orange/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="section-container text-white py-10 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-md text-sm font-medium text-white/80">
                <span className="w-2.5 h-2.5 rounded-full bg-construction-orange animate-pulse" />
                <span>Materials • Construction • Interiors</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.65, ease: "easeOut" }}
                >
                  AlphaCap supplies trusted building materials and builds infrastructure projects
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto md:mx-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
                >
                  From sourcing steel and cement to running on-site execution, we deliver clear prices, steady updates, and dependable quality on every project.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              >
                <a href="#enquiry" className="btn-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform">
                  Request a Quote
                </a>
                {/* <a href="#services" className="btn-secondary hover:-translate-y-0.5 transition-transform">
                  Explore InfraCons
                </a> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                className="mt-10 md:mt-12"
              >
                <div className="bg-white/10 border border-white/15 rounded-3xl backdrop-blur-xl p-6 md:p-8 shadow-2xl">
                  <div className="grid gap-6 lg:grid-cols-[1.1fr,1.1fr] xl:grid-cols-[1.1fr,1.1fr]">
                    <motion.article
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/15 via-transparent to-transparent" />
                      <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                      <div className="relative flex items-start justify-between">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Trade Platform
                          </div>
                          <h2 className="text-2xl font-semibold text-white drop-shadow">
                            Building materials delivered when your site needs them
                          </h2>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-black/40 text-construction-orange shadow-inner">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <ul className="relative mt-6 space-y-3 text-sm text-gray-100">
                        {tradeFeatures.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-construction-orange shadow-[0_0_0_6px_rgba(255,130,0,0.08)]" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="relative mt-8 flex flex-wrap gap-3">
                        <a href="/products" className="inline-flex items-center gap-2 rounded-full bg-construction-orange/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-construction-orange/40 transition-transform hover:-translate-y-0.5 hover:bg-construction-orange">
                          Explore materials
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <a href="#products" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                          Featured catalog →
                        </a>
                      </div>
                    </motion.article>

                    <motion.article
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-transparent" />
                      <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                      <div className="relative flex items-start justify-between">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            InfraCons
                          </div>
                          <h2 className="text-2xl font-semibold text-white drop-shadow">
                            Execution partners with total accountability
                          </h2>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-black/40 text-sky-300 shadow-inner">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <ul className="relative mt-6 space-y-3 text-sm text-gray-100">
                        {infraFeatures.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-300 shadow-[0_0_0_6px_rgba(56,189,248,0.08)]" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="relative mt-8 flex flex-wrap gap-3">
                        <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-[#1E2761] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1E2761]/40 transition-transform hover:-translate-y-0.5 hover:bg-[#273276]">
                          Explore InfraCons
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                        <a href="#enquiry" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                          Book a consultation →
                        </a>
                      </div>
                    </motion.article>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
                    className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left text-sm text-gray-300"
                  >
                    {heroStats.map((item) => (
                      <div key={item.label} className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
                        <div className="text-xs uppercase tracking-wide text-gray-400">{item.label}</div>
                        <div className="text-lg font-semibold text-white mt-1">{item.value}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
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
    </section>
  );
}


