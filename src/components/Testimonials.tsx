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
    <section id="testimonials" className="relative overflow-hidden bg-slate-900 w-full" ref={ref}>
      {/* Abstract Industrial Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-construction-orange/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-construction-accent/20 to-transparent"></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-construction-orange rounded-full"></div>
            <div className="mx-4 text-white font-black uppercase tracking-[0.4em] text-sm">Feedback Loop</div>
            <div className="w-12 h-1 bg-construction-orange rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Client <span className="text-construction-orange">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Validation from the industry leaders who trust us with their most critical project supplies.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Navigation Buttons - Industrial Style */}
          <div className="hidden lg:block">
            <button
              onClick={goToPrevious}
              className="absolute left-[-4rem] top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-construction-orange hover:border-construction-orange transition-all duration-300 rounded-xl group shadow-2xl backdrop-blur-md"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-[-4rem] top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-construction-orange hover:border-construction-orange transition-all duration-300 rounded-xl group shadow-2xl backdrop-blur-md"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-visible py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.company}-${currentIndex}-${index}`}
                    className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col border-l-[10px] border-construction-orange hover:shadow-construction-orange/40 hover:-translate-y-2 transition-all duration-500 min-h-[380px]"
                  >
                    {/* Small Elegant Quote Icon - High contrast, non-overlapping header style */}
                    <div className="mb-6 relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-construction-orange shadow-inner group-hover:bg-construction-orange group-hover:text-white transition-colors duration-500">
                        <svg className="w-6 h-6 fill-currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-grow">
                        <p className="text-construction-dark text-xl leading-relaxed mb-10 font-bold italic tracking-tight">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-5 border-t border-slate-100 pt-8 mt-auto">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-xl border-2 border-white group-hover:bg-construction-orange transition-colors">
                          {testimonial.company.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-black text-construction-dark uppercase tracking-tight truncate leading-tight">
                            {testimonial.company}
                          </h3>
                          <p className="text-sm font-black text-construction-orange uppercase tracking-[0.2em] mt-1">
                            {testimonial.person}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator - Progress Bar Style */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative h-2 transition-all duration-500 rounded-full overflow-hidden ${
                  index === currentIndex ? "w-16 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute inset-0 bg-construction-orange"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
