"use client";

import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getProductCatalog } from "@/data/productCatalog";
// import Header3DVehicle from "./Header3DVehicle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState<string>("");
  const pathname = usePathname();
  
  // Get product categories for dropdown
  const productCategories = useMemo(() => getProductCatalog(), []);

  // Set initial hash synchronously on mount
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
    }
  }, []);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track hash changes for navigation
  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== "undefined") {
        const newHash = window.location.hash;
        setCurrentHash(newHash);
      }
    };
    
    // Set initial hash immediately
    updateHash();
    
    // Also check after small delays to catch any delayed hash changes (Next.js Link might delay)
    const timeoutId1 = setTimeout(updateHash, 100);
    const timeoutId2 = setTimeout(updateHash, 300);
    const timeoutId3 = setTimeout(updateHash, 500);
    
    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);
    
    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", updateHash);
    
    // Check hash on scroll (in case of scroll spy or smooth scroll)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateHash, 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Periodic check as fallback (every 500ms)
    const intervalId = setInterval(updateHash, 500);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(scrollTimeout);
      clearInterval(intervalId);
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setExpandedMobileItem(null);
    }
  };

  // Helper function to check if a nav item is active
  const isNavItemActive = (itemPath: string) => {
    // For hash-based routes, check if current hash matches (check this first)
    if (itemPath.startsWith("/#")) {
      const expectedHash = itemPath.substring(1); // Remove "/" to get "#services", "#about", "#enquiry"
      const normalizedCurrentHash = currentHash || "";
      const normalizedExpectedHash = expectedHash || "";
      
      // Special handling for Services menu - should be active for any service-related hash
      if (itemPath === "/#services") {
        const serviceHashes = [
          "#services",
          "#construction-services",
          "#interior-services",
          "#rmc-services"
        ];
        return serviceHashes.includes(normalizedCurrentHash);
      }
      
      // For other hash routes, check exact match
      return normalizedCurrentHash === normalizedExpectedHash;
    }
    
    // For products, check if pathname starts with /products
    if (itemPath === "/products" && pathname?.startsWith("/products")) {
      return true;
    }
    
    // For Home, only active when pathname is "/" AND there's no hash
    if (itemPath === "/") {
      const hasHash = currentHash && currentHash.length > 0;
      return pathname === "/" && !hasHash;
    }
    
    // For exact path matches (fallback)
    return pathname === itemPath;
  };

  const navItems = [
    { path: "/", label: "Home", hasDropdown: false },
    { 
      path: "/products", 
      label: "Products", 
      hasDropdown: true,
      dropdownType: "products" as const
    },
    { 
      path: "/#services", 
      label: "Services", 
      hasDropdown: true,
      dropdownType: "services" as const
    },
    { path: "/#about", label: "About", hasDropdown: false },
    { path: "/#enquiry", label: "Contact", hasDropdown: false },
  ];

  const servicesMenuItems = [
    { 
      label: "Construction Services", 
      href: "/#construction-services",
      description: "Commercial, residential, and infrastructure projects"
    },
    { 
      label: "Interior Services", 
      href: "/#interior-services",
      description: "Residential and commercial interior solutions"
    },
    { 
      label: "RMC Services", 
      href: "/#rmc-services",
      description: "Ready Mix Concrete solutions"
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
    }`}>
      {/* 3D Vehicle Animation - Inside header, above background, below content */}
      {/* <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <Header3DVehicle />
      </div> */}
        {/* Top Bar - Full Width & Attractive */}
      <div className="bg-[#1E2761] text-white py-2 transition-all duration-300 relative" style={{ zIndex: 10 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium tracking-wide">
            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-orange-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="uppercase font-bold tracking-wider">Premium Quality</span>
              </div>
              <span className="hidden sm:block w-px h-3.5 bg-white/20"></span>
              <span className="hidden sm:block text-white/90">India&apos;s Construction Partner</span>
            </div>
            
            {/* Right Side Info */}
            <div className="flex items-center gap-4 sm:gap-6 text-white/90">
              <a 
                href="/documents/Alphacap-profile.pdf" 
                download
                className="hover:text-orange-400 transition-colors flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/20 hover:border-orange-400/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden sm:inline text-xs font-medium">Alphacap PDF</span>
              </a>
              <a href="mailto:tradeplatform@alphacaps.in" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="hidden sm:inline">tradeplatform@alphacaps.in</span>
              </a>
              <span className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Mon - Sat: 9AM - 8PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation - Full Width */}
      <div className={`w-full px-4 sm:px-6 lg:px-12 transition-all duration-300 relative ${
        isScrolled ? "py-2" : "py-4"
      }`} style={{ zIndex: 20 }}>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-20">
            <div className="relative transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 rounded-xl blur-md transition-opacity duration-500"></div>
              <Image
                src="/images/hero/alphacap_logo_header.png"
                alt="AlphaCap Logo"
                width={220}
                height={70}
                priority
                className={`relative w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-14 md:h-16"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered & Floating */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-100/50 shadow-sm">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.path);
              const isHovered = hoveredNavItem === item.path;
              
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setHoveredNavItem(item.path)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  <Link
                    href={item.path}
                    className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-construction-orange text-white shadow-md shadow-orange-200" 
                        : "text-gray-600 hover:text-construction-orange hover:bg-white/80"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && isHovered && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 transition-all duration-200 ease-out">
                      {/* Decorative top border */}
                      <div className="h-1 bg-gradient-to-r from-construction-orange via-orange-400 to-construction-orange"></div>
                      
                      {item.dropdownType === "products" ? (
                        <div className="py-3">
                          <div className="px-4 py-2 mb-1 border-b border-gray-100">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Product Categories</h3>
                          </div>
                          <div className="grid grid-cols-1">
                            {productCategories.map((category, index) => (
                              <Link
                                key={category.id}
                                href={`/products/categories/${category.id}`}
                                className="group flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all duration-200 relative overflow-hidden"
                                onClick={() => setHoveredNavItem(null)}
                                style={{ animationDelay: `${index * 20}ms` }}
                              >
                                {/* Animated left border on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-construction-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"></div>
                                
                                {/* Category name */}
                                <span className="flex-1 text-sm font-semibold text-gray-700 group-hover:text-construction-orange transition-colors duration-200">
                                  {category.name}
                                </span>
                                
                                {/* Product count badge */}
                                <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full group-hover:bg-orange-100 group-hover:text-construction-orange transition-colors duration-200">
                                  {category.products.length}
                                </span>
                                
                                {/* Arrow icon */}
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-construction-orange group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.dropdownType === "services" ? (
                        <div className="py-3">
                          <div className="px-4 py-2 mb-1 border-b border-gray-100">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Our Services</h3>
                          </div>
                          <div className="grid grid-cols-1">
                            {servicesMenuItems.map((service, index) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                className="group flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all duration-200 relative overflow-hidden"
                                onClick={() => setHoveredNavItem(null)}
                                style={{ animationDelay: `${index * 20}ms` }}
                              >
                                {/* Animated left border on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-construction-orange transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"></div>
                                
                                {/* Service icon */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-200">
                                  <svg className="w-4 h-4 text-construction-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                
                                {/* Service name */}
                                <span className="flex-1 text-sm font-semibold text-gray-700 group-hover:text-construction-orange transition-colors duration-200">
                                  {service.label}
                                </span>
                                
                                {/* Arrow icon */}
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-construction-orange group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 z-20">
            <a
              href="tel:+919629124777"
              className="group flex items-center gap-3 pl-4 pr-5 py-2.5 bg-gradient-to-r from-[#1E2761] to-[#2a3680] hover:from-construction-orange hover:to-orange-600 text-white rounded-full transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-orange-500/20 hover:-translate-y-0.5"
            >
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="text-[10px] opacity-80 uppercase tracking-wider font-medium">Support 24/7</span>
                <span className="text-sm font-bold">96291 24777</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2.5 text-gray-700 hover:text-construction-orange transition-colors relative hover:bg-gray-100/80 rounded-lg flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Toggle mobile menu"
            style={{ zIndex: 9998, position: 'relative' }}
          >
            <div className="w-7 h-7 flex flex-col justify-center gap-1.5 pointer-events-none">
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
      }`} style={{ zIndex: 9999 }}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setExpandedMobileItem(null);
          }}
        />

        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-gradient-to-br from-orange-50 via-white to-blue-50 shadow-2xl transition-all duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} style={{ height: '100vh', zIndex: 10000 }}>
          {/* Decorative top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-construction-orange via-orange-400 to-construction-orange"></div>
          
          {/* Close Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setExpandedMobileItem(null);
            }}
            className="absolute top-4 left-4 z-50 p-2.5 text-gray-600 hover:text-construction-orange hover:bg-white/80 rounded-full transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Close menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
          <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.path);
                const isExpanded = expandedMobileItem === item.path;
                
                return (
                  <div key={item.path}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobileItem(isExpanded ? null : item.path)}
                          className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-orange-100 to-orange-50 text-construction-orange shadow-sm"
                              : "hover:bg-white text-gray-900 hover:shadow-sm"
                          }`}
                        >
                          <span>{item.label}</span>
                          <svg 
                            className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isExpanded && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-orange-200 pl-4">
                            {item.dropdownType === "products" ? (
                              <>
                                {productCategories.map((category) => (
                                  <Link
                                    key={category.id}
                                    href={`/products/categories/${category.id}`}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setExpandedMobileItem(null);
                                    }}
                                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50 text-base font-semibold text-gray-900 hover:text-construction-orange transition-all duration-200"
                                  >
                                    <span className="flex-1">{category.name}</span>
                                    <span className="px-2.5 py-1 text-xs font-bold bg-white text-gray-600 rounded-full group-hover:bg-orange-100 group-hover:text-construction-orange transition-colors">
                                      {category.products.length}
                                    </span>
                                  </Link>
                                ))}
                              </>
                            ) : item.dropdownType === "services" ? (
                              <>
                                {servicesMenuItems.map((service) => (
                                  <Link
                                    key={service.label}
                                    href={service.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setExpandedMobileItem(null);
                                    }}
                                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50 text-base font-semibold text-gray-900 hover:text-construction-orange transition-all duration-200"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all">
                                      <svg className="w-5 h-5 text-construction-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                      </svg>
                                    </div>
                                    <span className="flex-1">{service.label}</span>
                                  </Link>
                                ))}
                              </>
                            ) : null}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-orange-100 to-orange-50 text-construction-orange translate-x-2 shadow-sm"
                            : "hover:bg-white text-gray-900 hover:translate-x-2 hover:shadow-sm"
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-construction-orange" />
                        )}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Contact Box */}
            <div className="mt-auto pt-8 border-t border-orange-100/50">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-4 sm:p-6 space-y-3 border border-orange-100">
                <a
                  href="/documents/Alphacap-profile.pdf"
                  download
                  className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-orange-50 rounded-xl border border-orange-200 hover:border-construction-orange transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="bg-construction-orange text-white p-2.5 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-600 font-medium mb-0.5">Download</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-construction-orange">Company Profile (PDF)</p>
                  </div>
                </a>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide pt-2">Need Help?</p>
                <div className="space-y-3">
                  <a
                    href="tel:+919629124777"
                    className="flex items-center gap-3 text-[#1E2761]"
                  >
                    <div className="bg-[#1E2761] text-white p-2.5 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Call Trade Desk</p>
                      <p className="text-base sm:text-lg font-bold break-words">96291 24777</p>
                    </div>
                  </a>
                  <a
                    href="tel:+918925516010"
                    className="flex items-center gap-3 text-[#1E2761]"
                  >
                    <div className="bg-[#1E2761] text-white p-2.5 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Call Trade Desk</p>
                      <p className="text-base sm:text-lg font-bold break-words">89255 16010</p>
                    </div>
                  </a>
                </div>
                <a
                  href="mailto:tradeplatform@alphacaps.in"
                  className="flex items-start gap-3 text-gray-600 hover:text-construction-orange transition-colors pt-1"
                >
                  <div className="bg-gray-200 p-2.5 rounded-full flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-medium text-sm sm:text-base break-words min-w-0">tradeplatform@alphacaps.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}