"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "TMT Bars",
    description: "Vizag Steel & ARS TMT Bars (25mm, 10mm, 8mm)",
    image: "/images/products/tmt-bars.jpg",
  },
  {
    name: "AAC Blocks",
    description: "Fusion, NCL & Kamcrete AAC Blocks (4\", 6\")",
    image: "/images/products/aac-blocks.jpg",
  },
  {
    name: "Construction Cement",
    description: "Ramco, UltraTech, Dalmia, JSW brands (PPC, OPC, PSC - 50Kg)",
    image: "/images/products/cement.jpg",
  },
  {
    name: "Concrete Blocks",
    description: "Solid & Hollow Concrete Blocks (4\", 6\", 8\", 10\")",
    image: "/images/products/concrete-blocks.jpg",
  },
  {
    name: "Paver Blocks",
    description: "Red & Grey Zig Zag, I-Shape Paver Blocks",
    image: "/images/products/paver-blocks.jpg",
  },
  {
    name: "Clay & Ash Bricks",
    description: "Red Chamber Clay, Fly Ash, Wire Cut Bricks",
    image: "/images/products/clay-bricks.jpg",
  },
  {
    name: "Ready Mix Concrete",
    description: "M10, M15, M20, M25, M30 grades delivered",
    image: "/images/products/ready-mix-concrete.jpg",
  },
  {
    name: "Construction Materials",
    description: "Sand, Aggregates, M Sand, Hume Pipes & More",
    image: "/images/products/aggregates.jpg",
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
          About <span className="text-construction-orange">AlphaCap</span>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Established in 2024, <strong>AlphaCap Trade Platform Private Limited</strong> has grown into one of the
          leading suppliers of construction building materials in our region. We operate with moral business
          policies and crystal-clear transparency in every transaction to nurture long-term relationships with our
          customers.
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
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Our Commitment
              </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every order is handled with integrity, transparency, and the sense of responsibility that comes
                  from being a trusted local supplier. Our customers rely on AlphaCap for a complete mix of steel,
                  cement, aggregates, and finishing materials delivered with consistency and clear communication.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-construction-orange/30 bg-construction-orange/5 p-5 text-left">
                <h4 className="text-lg font-semibold text-black mb-2">Guided Leadership</h4>
                <p className="text-gray-700">
                  Our growth story is anchored by the continual backing of <strong>Mr. Prasanth S</strong>, whose direction
                  propels us towards exponential development in today&apos;s competitive market.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-300/40 bg-emerald-50/40 p-5 text-left">
                <h4 className="text-lg font-semibold text-black mb-2">TrustSEAL Verification</h4>
                <p className="text-gray-700">
                  Being <strong>TrustSEAL verified by IndiaMART</strong> reinforces our pledge to quality and dependable service,
                  giving customers the assurance they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

