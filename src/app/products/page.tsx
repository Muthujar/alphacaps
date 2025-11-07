"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const productCategories = [
  {
    id: "tmt-bars",
    name: "TMT Bars",
    description: "High-quality TMT bars for structural reinforcement from leading brands",
    icon: "🔩",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "25mm Vizag Steel TMT Bars",
        description: "Premium grade TMT bars for heavy construction",
        specifications: "25mm diameter, IS 1786 certified",
      },
      {
        name: "10mm Vizag Steel TMT Bars", 
        description: "Standard grade TMT bars for general construction",
        specifications: "10mm diameter, IS 1786 certified",
      },
      {
        name: "8mm Vizag Steel TMT Bars",
        description: "Light grade TMT bars for residential construction", 
        specifications: "8mm diameter, IS 1786 certified",
      },
      {
        name: "10mm ARS TMT Bars",
        description: "ARS brand TMT bars for quality construction",
        specifications: "10mm diameter, IS 1786 certified",
      },
      {
        name: "8mm ARS TMT Bars",
        description: "ARS brand TMT bars for residential projects",
        specifications: "8mm diameter, IS 1786 certified",
      },
    ],
  },
  {
    id: "aac-blocks",
    name: "AAC Blocks",
    description: "Lightweight and energy-efficient autoclaved aerated concrete blocks",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "6 Inch Fusion Concrete AAC Block",
        description: "High-strength AAC blocks for load-bearing walls",
        specifications: "6 inch thickness, 600x200x150mm",
      },
      {
        name: "4 Inch Fusion Concrete AAC Block",
        description: "Standard AAC blocks for partition walls",
        specifications: "4 inch thickness, 600x200x100mm",
      },
      {
        name: "4 Inch NCL Concrete AAC Block",
        description: "Premium NCL brand AAC blocks",
        specifications: "4 inch thickness, 600x200x100mm",
      },
      {
        name: "6 Inch NCL Concrete AAC Block",
        description: "NCL brand AAC blocks for heavy construction",
        specifications: "6 inch thickness, 600x200x150mm",
      },
      {
        name: "4 Inch Kamcrete Light Weight AAC Blocks",
        description: "Kamcrete brand lightweight AAC blocks",
        specifications: "4 inch thickness, lightweight construction",
      },
    ],
  },
  {
    id: "construction-cement",
    name: "Construction Cement",
    description: "Premium grade cement from leading manufacturers",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "50Kg Ramco Super Grade Cement",
        description: "High-performance cement for all construction needs",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg UltraTech Cement",
        description: "India's leading cement brand",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg Ramco Supercrete Cement",
        description: "Specialized cement for high-strength applications",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg Dalmia DSP Cement",
        description: "Dalmia brand cement for quality construction",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "JSW Concreel HD Cement",
        description: "JSW brand high-density cement",
        specifications: "50kg bag, premium grade",
      },
    ],
  },
  {
    id: "concrete-blocks",
    name: "Concrete Blocks",
    description: "Durable solid concrete blocks for construction",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "8 Inch Solid Concrete Block",
        description: "Heavy-duty concrete blocks for load-bearing walls",
        specifications: "8 inch thickness, standard dimensions",
      },
      {
        name: "6 Inch Solid Concrete Block",
        description: "Standard concrete blocks for general construction",
        specifications: "6 inch thickness, standard dimensions",
      },
      {
        name: "4 Inch Solid Concrete Block",
        description: "Light concrete blocks for partition walls",
        specifications: "4 inch thickness, standard dimensions",
      },
      {
        name: "10 Inch Solid Concrete Block",
        description: "Extra heavy-duty blocks for commercial construction",
        specifications: "10 inch thickness, standard dimensions",
      },
    ],
  },
  {
    id: "shuttering-plywood",
    name: "Shuttering Plywood",
    description: "High-quality film-faced plywood for concrete shuttering",
    icon: "🪵",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    products: [
      {
        name: "Mine Gold Film Faced Shuttering Plywood",
        description: "Premium grade film-faced plywood",
        specifications: "18mm thickness, marine grade",
      },
      {
        name: "Continental Film Faced Shuttering Plywood Board",
        description: "Durable shuttering plywood for multiple uses",
        specifications: "18mm thickness, IS 303 certified",
      },
      {
        name: "Potential Film Faced Shuttering Plywood Board",
        description: "Cost-effective shuttering solution",
        specifications: "18mm thickness, IS 303 certified",
      },
    ],
  },
  {
    id: "construction-sand",
    name: "Construction Sand",
    description: "Washed and graded sand for quality concrete",
    icon: "🏖️",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "Grey River Construction Sand",
        description: "Premium washed river sand for concrete",
        specifications: "Fine grade, IS 383 certified",
      },
      {
        name: "Rough Construction Sand",
        description: "Coarse sand for masonry and plastering",
        specifications: "Medium grade, IS 383 certified",
      },
      {
        name: "Brown Rubbish Construction Sand",
        description: "Economical sand for general construction",
        specifications: "Standard grade, IS 383 certified",
      },
    ],
  },
  {
    id: "ready-mix-concrete",
    name: "Ready Mix Concrete",
    description: "Fresh concrete delivered to your construction site",
    icon: "🚛",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    products: [
      {
        name: "M15 Ready Mixed Concrete",
        description: "Standard grade concrete for general construction",
        specifications: "M15 grade, 7.5 N/mm² strength",
      },
      {
        name: "M20 Ready Mix Concrete",
        description: "High-strength concrete for structural elements",
        specifications: "M20 grade, 20 N/mm² strength",
      },
      {
        name: "M30 Ready Mix Concrete",
        description: "Premium grade concrete for heavy construction",
        specifications: "M30 grade, 30 N/mm² strength",
      },
    ],
  },
  {
    id: "construction-aggregates",
    name: "Construction Aggregates",
    description: "Crushed stone aggregates for concrete and construction",
    icon: "🪨",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "12mm Crushed Stone Aggregate",
        description: "Fine aggregates for concrete mixing",
        specifications: "12mm size, IS 383 certified",
      },
      {
        name: "20mm Crushed Stone Aggregate",
        description: "Standard aggregates for general concrete",
        specifications: "20mm size, IS 383 certified",
      },
      {
        name: "40mm Crushed Stone Aggregate",
        description: "Coarse aggregates for heavy construction",
        specifications: "40mm size, IS 383 certified",
      },
      {
        name: "6mm Crushed Stone Aggregate",
        description: "Fine aggregates for plastering work",
        specifications: "6mm size, IS 383 certified",
      },
    ],
  },
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    description: "Decorative and durable paver blocks for landscaping",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    products: [
      {
        name: "Red Zig Zag Cement Paver Blocks",
        description: "Decorative zig zag pattern paver blocks",
        specifications: "Red color, zig zag pattern",
      },
      {
        name: "Red I Shape Concrete Paver Block",
        description: "I-shaped concrete paver blocks in red",
        specifications: "Red color, I-shape design",
      },
      {
        name: "I Shape Grey Concrete Paver Block",
        description: "Grey I-shaped concrete paver blocks",
        specifications: "Grey color, I-shape design",
      },
      {
        name: "Grey Zig Zag Concrete Paver Block",
        description: "Grey zig zag pattern paver blocks",
        specifications: "Grey color, zig zag pattern",
      },
    ],
  },
  {
    id: "concrete-hollow-blocks",
    name: "Concrete Hollow Blocks",
    description: "Lightweight hollow concrete blocks for construction",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "4 Inch Concrete Hollow Block",
        description: "Lightweight hollow blocks for partition walls",
        specifications: "4 inch thickness, hollow design",
      },
      {
        name: "8 Inch Concrete Hollow Block",
        description: "Standard hollow blocks for general construction",
        specifications: "8 inch thickness, hollow design",
      },
      {
        name: "6 Inch Concrete Hollow Block",
        description: "Medium hollow blocks for construction",
        specifications: "6 inch thickness, hollow design",
      },
    ],
  },
  {
    id: "clay-bricks",
    name: "Clay Bricks",
    description: "Traditional clay bricks for construction",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "Red Chamber Clay Bricks",
        description: "High-quality chamber-fired clay bricks",
        specifications: "Red color, chamber fired",
      },
      {
        name: "Red Clay Brick",
        description: "Standard red clay bricks",
        specifications: "Red color, traditional clay",
      },
    ],
  },
  {
    id: "ash-bricks",
    name: "Ash Bricks",
    description: "Eco-friendly fly ash bricks",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "Grey Fly Ash Bricks",
        description: "Eco-friendly fly ash bricks",
        specifications: "Grey color, fly ash composition",
      },
    ],
  },
  {
    id: "wire-cut-bricks",
    name: "Wire Cut Red Bricks",
    description: "Precision-cut red bricks for quality construction",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "Wire Cut Red Bricks",
        description: "Precision wire-cut red bricks",
        specifications: "Red color, wire cut finish",
      },
    ],
  },
  {
    id: "hume-pipes",
    name: "Hume Pipes",
    description: "RCC Hume pipes for drainage and water management",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    products: [
      {
        name: "1200mm RCC Hume Pipes",
        description: "Large diameter RCC Hume pipes",
        specifications: "1200mm diameter, RCC construction",
      },
    ],
  },
  {
    id: "ready-mix-plaster",
    name: "Ready Mix Plaster",
    description: "Specialized plaster admixtures for construction",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    products: [
      {
        name: "Preplast Cement Plaster Admixture",
        description: "Cement plaster admixture for better workability",
        specifications: "Plaster admixture, improved workability",
      },
    ],
  },
  {
    id: "m-sand",
    name: "M Sand",
    description: "Manufactured sand for construction",
    icon: "🏖️",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    products: [
      {
        name: "Plastering M Sand",
        description: "Fine manufactured sand for plastering work",
        specifications: "Fine grade, suitable for plastering",
      },
    ],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory 
    ? productCategories.filter(category => category.id === selectedCategory)
    : productCategories;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-black text-white py-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-construction-orange">Products</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Comprehensive range of construction building materials from trusted brands. 
              Quality assured with TrustSEAL verification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-container py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              selectedCategory === null
                ? "bg-construction-orange text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-construction-orange text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Category Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: productIndex * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-construction-orange hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-black mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.description}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {product.specifications}
                      </p>
                      <button className="w-full bg-construction-orange text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-construction-orange/90 transition-colors">
                        Get Quote
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Contact us for competitive pricing on bulk orders and specialized requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#enquiry"
                className="btn-primary"
              >
                Get Quote Now
              </a>
              <a
                href="tel:+919876543210"
                className="btn-secondary"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
