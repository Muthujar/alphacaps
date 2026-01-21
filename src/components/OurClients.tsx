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
    <section id="our-clients" className="section-container bg-gray-50 scroll-mt-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="section-title">
          Our <span className="text-construction-orange">Clients</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {clients.map((client, index) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-construction-orange/50 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-construction-orange/5 via-transparent to-[#1E2761]/5" />
            </div>
            <p className="relative text-center text-sm md:text-base font-semibold text-gray-800 group-hover:text-construction-orange transition-colors duration-300">
              {client}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

