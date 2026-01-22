"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BuildingIcon, StoneIcon, ToolIcon, BlockIcon, OfficeIcon, HomeIcon, TruckIcon } from "./icons";

const tradePlatformProducts = [
  {
    category: "Cement",
    items: ["OPC (Ordinary Portland Cement)", "PPC (Portland Pozzolana Cement)"],
    icon: <BuildingIcon />,
  },
  {
    category: "Aggregate",
    items: ["12mm & 20mm Aggregates", "M-Sand", "Sand", "P-Sand"],
    icon: <StoneIcon />,
  },
  {
    category: "TMT Bars",
    items: ["Fe 500 Grade", "Fe 550T Grade"],
    icon: <ToolIcon />,
  },
  {
    category: "Bricks & Blocks",
    items: ["Flyash Brick", "Wirecut Bricks", "AAC Blocks", "Solid Blocks"],
    icon: <BlockIcon />,
  },
];

const infraConsServices = [
  {
    category: "RMC Services",
    items: ["Temperature Resistant", "Beads Concrete", "Color Concrete"],
    icon: <TruckIcon />,
  },
  {
    category: "Construction",
    items: ["Commercial", "Residential", "Infrastructure"],
    icon: <OfficeIcon />,
  },
  {
    category: "Interior",
    items: ["Residential Interior", "Commercial Interior"],
    icon: <HomeIcon />,
  },
];

export default function BusinessVerticals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="business-verticals" className="section-container bg-slate-100/30 backdrop-blur-md scroll-mt-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 py-2 bg-construction-orange/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-construction-orange uppercase tracking-wide">Our Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-construction-dark mb-4">
          Our Business <span className="text-construction-orange">Verticals</span>
        </h2>
        <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed">
          AlphaCap operates through two complementary business units, providing comprehensive solutions 
          from material supply to complete construction and interior services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Trade Platform */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
        >
          {/* Gradient Header */}
          <div className="bg-construction-dark p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-construction-orange/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-construction-orange border border-construction-orange/20">
                <BuildingIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Trade Platform
                </h3>
                <p className="text-white/90 text-sm md:text-base font-light">Premium Building Materials Supply</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="space-y-4 mb-8">
              {tradePlatformProducts.map((product, index) => (
                <motion.div
                  key={product.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item"
                >
                  <div className="w-10 h-10 rounded-lg bg-construction-orange/10 flex items-center justify-center text-construction-orange flex-shrink-0 group-hover/item:bg-construction-orange group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-construction-orange/20 transition-all">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-construction-dark mb-1">
                      {product.category}
                    </h4>
                    <ul className="text-sm text-construction-gray space-y-1">
                      {product.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-construction-orange mt-1">•</span>
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-construction-orange text-white font-bold rounded-xl hover:bg-orange-600 hover:shadow-xl hover:shadow-construction-orange/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Infracons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
        >
          {/* Gradient Header */}
          <div className="bg-construction-dark p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-construction-orange/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-construction-orange border border-construction-orange/20">
                <OfficeIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  InfraCons
                </h3>
                <p className="text-white/90 text-sm md:text-base font-light">Construction & Interior Services</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="space-y-4 mb-8">
              {infraConsServices.map((service, index) => (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item"
                >
                  <div className="w-10 h-10 rounded-lg bg-construction-orange/10 flex items-center justify-center text-construction-orange flex-shrink-0 group-hover/item:bg-construction-orange group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-construction-orange/20 transition-all">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-construction-dark mb-1">
                      {service.category}
                    </h4>
                    <ul className="text-sm text-construction-gray space-y-1">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-construction-orange mt-1">•</span>
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-construction-dark text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Unified Value Proposition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative bg-white rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-slate-200 shadow-xl"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-construction-orange/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-construction-orange/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-construction-orange">Integrated Approach</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            One Company, Complete Solutions
          </h3>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed">
            From sourcing the finest building materials to executing complete construction projects, 
            AlphaCap is your partner for all construction needs. Our integrated approach 
            ensures quality, consistency, and cost-effectiveness throughout your project lifecycle.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

