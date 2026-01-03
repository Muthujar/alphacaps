"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "AlphaCap has been our trusted partner for construction materials. Their quality products and reliable service have been instrumental in our project success.",
    company: "PRISM JOHNSON LIMITED",
    person: "Director",
  },
  {
    quote: "Exceptional service and transparent pricing. AlphaCap understands our requirements and delivers on time, every time. Highly recommended!",
    company: "HELLA INFRAMARKET LIMITED",
    person: "Project Manager",
  },
  {
    quote: "Quality materials and professional service. AlphaCap has been our go-to supplier for all concrete and construction material needs.",
    company: "RDC CONCRETE INDIA LIMITED",
    person: "Operations Head",
  },
  {
    quote: "Reliable partner with excellent customer support. Their team is knowledgeable and always ready to help with material selection and technical guidance.",
    company: "Pushkar Properties Private Limited",
    person: "Founder",
  },
  {
    quote: "AlphaCap's commitment to quality and ethical business practices is commendable. They have been a valuable partner in our construction projects.",
    company: "S & P FOUNDATION PRIVATE LIMITED",
    person: "CEO",
  },
  {
    quote: "Outstanding service and competitive pricing. AlphaCap delivers quality construction materials consistently, making them our preferred supplier.",
    company: "SATHLOKHAR SYNERGY PRIVATE LIMITED",
    person: "Managing Director",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Calculate items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonials.slice(start, end);
  };

  return (
    <section id="testimonials" className="section-container bg-gradient-to-br from-gray-50 via-white to-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-16 h-1 bg-construction-orange rounded-full mr-4"></div>
          <svg 
            className="w-10 h-10 text-construction-orange" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
          <div className="w-16 h-1 bg-construction-orange rounded-full ml-4"></div>
        </div>
        <h2 className="section-title">
          <span className="text-construction-orange">Client Testimonials</span>
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Hear from our valued clients about their experience working with AlphaCap.
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-construction-orange hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-construction-orange group"
          aria-label="Previous testimonials"
        >
          <svg 
            className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-construction-orange hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-construction-orange group"
          aria-label="Next testimonials"
        >
          <svg 
            className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden mx-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.company}-${currentIndex}`}
                  className="group relative overflow-hidden bg-white rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-construction-orange/50 transition-all duration-300 flex flex-col"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/5 via-transparent to-[#1E2761]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-construction-orange via-construction-orange/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col flex-grow min-h-[240px]">
                    {/* Quote icon */}
                    <div className="mb-4">
                      <svg 
                        className="w-10 h-10 text-construction-orange/30" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial quote */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    {/* Company info */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <h3 className="text-lg font-semibold text-[#1E2761] mb-1">
                        {testimonial.company}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.person}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-10 h-3 bg-construction-orange"
                  : "w-3 h-3 bg-gray-300 hover:bg-construction-orange/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
