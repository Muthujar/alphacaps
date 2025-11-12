"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BuildingIcon, HomeIcon, TruckIcon } from "./icons";

const services = [
  {
    title: "Construction Services",
    icon: <BuildingIcon className="w-16 h-16" />,
    description: "Expert construction services for commercial, residential, and infrastructure projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    categories: [
      {
        name: "Commercial Construction",
        details: "Office buildings, retail spaces, warehouses, and commercial complexes with modern design and quality execution.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      },
      {
        name: "Residential Construction",
        details: "Homes, apartments, and residential complexes built with precision and attention to detail.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      },
      {
        name: "Infrastructure Projects",
        details: "Roads, bridges, and public infrastructure projects meeting the highest standards.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
    ],
    color: "from-black to-gray-900",
    borderColor: "border-construction-orange",
  },
  {
    title: "Interior Services",
    icon: <HomeIcon className="w-16 h-16" />,
    description: "Transform your spaces with our expert interior design and execution services.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    categories: [
      {
        name: "Residential Interior",
        details: "Complete interior solutions for homes including design, furniture, and finishing touches.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      },
      {
        name: "Commercial Interior",
        details: "Modern office spaces, retail interiors, and commercial spaces designed for productivity and aesthetics.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
    ],
    color: "from-black to-gray-900",
    borderColor: "border-construction-orange",
  },
  {
    title: "RMC Services",
    icon: <TruckIcon className="w-16 h-16" />,
    description: "Specialized Ready Mix Concrete solutions for your project requirements.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-1000x1000.jpg",
    categories: [
      {
        name: "Special Concrete",
        details: "Custom concrete mixes for specific project requirements and applications.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893564/LU/YJ/QM/213683241/m30-ready-mix-concrete-1000x1000.jpg",
      },
      {
        name: "Temperature Resistant Concrete",
        details: "High-performance concrete designed to withstand extreme temperature variations.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-1000x1000.jpeg",
      },
      {
        name: "Best Concrete",
        details: "Premium quality concrete ensuring durability and strength for critical structures.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-1000x1000.jpg",
      },
      {
        name: "Color Concrete",
        details: "Aesthetically appealing colored concrete for decorative and functional applications.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-1000x1000.jpg",
      },
    ],
    color: "from-black to-gray-900",
    borderColor: "border-construction-orange",
  },
];

export default function InfraConsServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          InfraCons <span className="text-construction-orange">Services</span>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Comprehensive construction and interior services backed by our expertise in building materials. 
          Quality execution from concept to completion.
        </p>
      </motion.div>

      <div className="space-y-12">
        {services.map((service, serviceIndex) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${service.borderColor}`}
          >
            {/* Service Header with Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="absolute inset-0 z-20 flex items-center gap-4 p-6 md:p-8">
                <div className="text-construction-orange flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.categories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.2 + categoryIndex * 0.1 }}
                    className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-construction-orange hover:shadow-lg transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-5">
                    <h4 className="font-bold text-lg text-black mb-2">
                      {category.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {category.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-construction-dark mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to discuss your construction or interior project requirements. 
            Contact us for a free consultation and quote.
          </p>
          <a
            href="#enquiry"
            className="inline-block px-8 py-3 bg-construction-orange text-white font-semibold rounded-lg hover:bg-construction-orange/90 hover:shadow-lg transition-all transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}

