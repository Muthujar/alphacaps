"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax/Moving Background Container */}
      <div className="absolute inset-0 bg-construction-dark">
          {/* Moving Background Images - Construction materials */}
          <div className="absolute inset-0 animate-pan-right">
            <div className="relative w-[200%] h-full flex">
              {/* First set of images */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
                    alt="Construction materials"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 opacity-30 translate-x-[33.33%]">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
                    alt="Building materials"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 opacity-35 translate-x-[66.66%]">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
                    alt="Construction site"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              {/* <div className="relative w-full h-full">
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
                    alt="Construction materials"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 opacity-30 translate-x-[33.33%]">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
                    alt="Building materials"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 opacity-35 translate-x-[66.66%]">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
                    alt="Construction site"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 section-container text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-construction-orange block mb-2">
              Alphacaps.in
            </span>
            <span className="block text-white text-2xl md:text-3xl lg:text-4xl font-normal mt-3">
              Your Complete Construction Partner
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 mb-10 max-w-5xl mx-auto">
            {/* Trade Platform Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 flex-1 max-w-md hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 mb-3 mx-auto text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Trade Platform
              </h2>
              <p className="text-gray-200 mb-4 text-sm md:text-base">
                Premium Building Materials Supply
              </p>
              <a
                href="/products"
                className="inline-block px-6 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 hover:border-white/50 transition-all"
              >
                Explore Materials
              </a>
            </div>

            {/* InfraCons Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 flex-1 max-w-md hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 mb-3 mx-auto text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                InfraCons
              </h2>
              <p className="text-gray-200 mb-4 text-sm md:text-base">
                Construction & Interior Services
              </p>
              <a
                href="#services"
                className="inline-block px-6 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 hover:border-white/50 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            TrustSEAL verified company offering quality building materials and expert construction services. 
            Moral business policies with crystal pure transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#enquiry"
              className="btn-primary hover:scale-105 transition-transform shadow-lg"
            >
              Get a Quote
            </a>
            
            <a
              href="#business-verticals"
              className="btn-secondary hover:scale-105 transition-transform"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
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


