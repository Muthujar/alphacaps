"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export default function BusinessVerticalsCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container bg-gray-50 py-16 lg:py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 md:p-8 max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1.1fr,1.1fr] xl:grid-cols-[1.1fr,1.1fr]">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border-2 border-construction-orange/20 bg-gradient-to-br from-construction-orange/5 to-white p-6 backdrop-blur-xl hover:border-construction-orange/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/10 via-transparent to-transparent" />
              <div className="relative flex items-start justify-between mb-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-construction-orange/30 bg-construction-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-construction-orange">
                    Trade Platform
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Building materials delivered when your site needs them
                  </h2>
                </div>
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-construction-orange/20 text-construction-orange">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <ul className="relative space-y-3 text-sm text-gray-700 mb-8">
                {tradeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-construction-orange shadow-[0_0_0_6px_rgba(255,130,0,0.08)]" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-wrap gap-3">
                <a href="/products" className="inline-flex items-center gap-2 rounded-full bg-construction-orange px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-construction-orange/40 transition-transform hover:-translate-y-0.5 hover:bg-construction-orange/90">
                  Explore materials
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#products" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-construction-orange transition-colors">
                  Featured catalog →
                </a>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border-2 border-sky-300/20 bg-gradient-to-br from-sky-50 to-white p-6 backdrop-blur-xl hover:border-sky-300/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
              <div className="relative flex items-start justify-between mb-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-100/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    InfraCons
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Execution partners with total accountability
                  </h2>
                </div>
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-100 text-sky-600">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <ul className="relative space-y-3 text-sm text-gray-700 mb-8">
                {infraFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(56,189,248,0.08)]" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-wrap gap-3">
                <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-[#1E2761] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1E2761]/40 transition-transform hover:-translate-y-0.5 hover:bg-[#273276]">
                  Explore InfraCons
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#enquiry" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-sky-600 transition-colors">
                  Book a consultation →
                </a>
              </div>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {heroStats.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">{item.label}</div>
                <div className="text-lg font-semibold text-gray-900 mt-1">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

