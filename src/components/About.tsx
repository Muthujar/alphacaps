"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "TMT Bars",
    description: "Vizag Steel & ARS TMT Bars (25mm, 10mm, 8mm)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    name: "AAC Blocks",
    description: "Fusion, NCL & Kamcrete AAC Blocks (4\", 6\")",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    name: "Construction Cement",
    description: "Ramco, UltraTech, Dalmia, JSW brands (50Kg)",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    name: "Concrete Blocks",
    description: "Solid & Hollow Concrete Blocks (4\", 6\", 8\", 10\")",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    name: "Paver Blocks",
    description: "Red & Grey Zig Zag, I-Shape Paver Blocks",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    name: "Clay & Ash Bricks",
    description: "Red Chamber Clay, Fly Ash, Wire Cut Bricks",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    name: "Ready Mix Concrete",
    description: "M10, M15, M20, M25, M30 grades delivered",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    name: "Construction Materials",
    description: "Sand, Aggregates, M Sand, Hume Pipes & More",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">
          About <span className="text-construction-orange">Alphacaps.in</span>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Established in 2024, Alphacaps.in is a leading construction company in Chennai operating through two key verticals: 
          <strong> Trade Platform</strong> for premium building materials and <strong>InfraCons</strong> for construction and interior services. 
          We follow moral business policies and crystal pure transparency in all our transactions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600">
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">
            Our Commitment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At Alphacaps.in, we understand that quality materials and expert execution are the foundation of every successful project. 
            Under the guidance of our founder Mr. Prasanth S, we are building a company with strong values and a commitment to excellence. 
            Our integrated approach allows us to provide end-to-end solutions - from sourcing premium materials through our Trade Platform 
            to executing complete construction and interior projects through InfraCons. We are committed to building lasting partnerships 
            with our customers through moral business policies and crystal pure transparency in all transactions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

