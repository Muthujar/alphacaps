"use client";

import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getProductCatalog } from "@/data/productCatalog";
import Hero3DVehicle from "./Hero3DVehicle";

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
    { path: "/#our-clients", label: "Our Clients", hasDropdown: false },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white shadow-lg border-b border-slate-200" : "bg-white/95 backdrop-blur-md border-b border-slate-100"
    }`}>
      {/* Top Bar - High Contrast Professional */}
      <div className="bg-construction-dark text-white py-1.5 relative overflow-hidden" style={{ zIndex: 10 }}>
        {/* Subtle background detail */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100%' }}>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-construction-orange">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Premium Quality</span>
              </div>
              <span className="hidden sm:block w-px h-3 bg-white/20"></span>
              <span className="hidden sm:block text-white/60">India&apos;s Construction Partner</span>
            </div>
            
            {/* Right Side Info */}
            <div className="flex items-center gap-4 sm:gap-6 text-white/60">
              <a 
                href="/Documents/Alphacap-profile.pdf" 
                download
                className="hover:text-construction-orange transition-colors flex items-center gap-2 group"
              >
                <svg className="w-3.5 h-3.5 fill-current group-hover:animate-bounce" viewBox="0 0 24 24">
                  <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm9 4H3v-2h18v2z" />
                </svg>
                <span>Company Profile</span>
              </a>
              <span className="hidden md:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current text-construction-orange" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-9-3.59-9-8s4.59-8 9-8 9 3.59 9 8-4.59 8-9 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                MON - SAT: 9AM - 8PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className={`w-full px-4 sm:px-6 lg:px-12 transition-all duration-500 relative ${
        isScrolled ? "py-2" : "py-3 md:py-3"
      }`} style={{ zIndex: 20 }}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group relative z-20 shrink-0">
            <div className="relative">
              <Image
                src="/images/hero/alphacap_logo_header.png"
                alt="AlphaCap Logo"
                width={220}
                height={70}
                priority
                className={`relative w-auto object-contain transition-all duration-500 ${
                  isScrolled ? "h-10" : "h-12 md:h-14"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Industrial Precision */}
          <nav className="hidden lg:flex items-center gap-1.5">
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
                    className={`relative px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1 group/link ${
                      isActive 
                        ? "text-construction-orange" 
                        : "text-construction-dark hover:text-construction-orange"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className={`w-3 h-3 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* Active Underline Indicator */}
                    <div className={`absolute -bottom-1 left-5 right-5 h-0.5 bg-construction-orange transition-all duration-300 transform origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"}`}></div>
                  </Link>

                  {/* Dropdown Menu - Industrial Tech Style */}
                  {item.hasDropdown && isHovered && (
                    <div className="absolute top-full left-0 w-72 pt-4 z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
                        {/* Industrial top accent */}
                        <div className="h-1.5 bg-construction-orange w-full"></div>
                        
                        <div className="py-2">
                          <div className="px-6 py-3 border-b border-slate-50 flex items-center justify-between">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                              {item.dropdownType === "products" ? "Catalog Specs" : "Service Stream"}
                            </h3>
                            <div className="w-8 h-px bg-slate-100"></div>
                          </div>
                          
                          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {(item.dropdownType === "products" ? productCategories : servicesMenuItems).map((subItem, index) => (
                              <Link
                                key={item.dropdownType === "products" ? (subItem as any).id : (subItem as any).label}
                                href={item.dropdownType === "products" ? `/products/categories/${(subItem as any).id}` : (subItem as any).href}
                                className="group flex flex-col px-6 py-4 hover:bg-slate-50 transition-all duration-200 border-l-4 border-transparent hover:border-construction-orange relative"
                                onClick={() => setHoveredNavItem(null)}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-black text-construction-dark uppercase tracking-wider group-hover:text-construction-orange transition-colors">
                                    {item.dropdownType === "products" ? (subItem as any).name : (subItem as any).label}
                                  </span>
                                  <svg className="w-3 h-3 text-slate-300 group-hover:text-construction-orange group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                {/* <p className="text-[10px] text-slate-400 font-bold italic line-clamp-1 group-hover:text-slate-500">
                                  {item.dropdownType === "products" ? `View technical range for ${(subItem as any).name}` : (subItem as any).description}
                                </p> */}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header 3D Vehicle - Placed between Contact and Trade Desk */}
          {/* <div className={`hidden lg:flex items-center justify-center transition-all duration-500 relative mx-4 mt-1 overflow-visible z-30 ${
            isScrolled ? "w-24 h-12" : "w-32 h-16"
          }`} style={{ minWidth: '100px' }}>
            <Hero3DVehicle isHeader={true} />
          </div> */}

          {/* Desktop CTA - Industrial Button */}
          <div className="hidden lg:flex items-center gap-4 z-20">
            <a
              href="tel:+919629124777"
              className="flex items-center gap-4 group"
            >
              <div className="flex flex-col items-end leading-none">
                <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black">Trade Desk</span>
                <span className="text-sm font-black text-construction-dark tracking-tighter">96291 24777</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-construction-dark flex items-center justify-center text-white shadow-xl group-hover:bg-construction-orange group-hover:-rotate-12 transition-all duration-500">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.17 6.59 6.59l2.2-2.2c.27-.22.67-.27.91-.27.79 0 1.58.13 2.3.39.27.1.48.34.48.62v3.19c0 .28-.22.5-.5.5C11.13 20 4 12.87 4 4.5c0-.28.22-.5.5-.5H7.69c.28 0 .52.21.62.48.26.72.39 1.51.39 2.3 0 .24-.05.64-.27.91l-2.2 2.2z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-construction-dark hover:text-construction-orange transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-all duration-500 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} style={{ height: '100vh', zIndex: 10000 }}>
          {/* Decorative side accent */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-construction-orange"></div>
          
          {/* Close Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setExpandedMobileItem(null);
            }}
            className="absolute top-6 left-6 z-50 p-2 text-construction-dark hover:text-construction-orange transition-all"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
            <div className="mb-10">
              <Image
                src="/images/hero/alphacap_logo_header.png"
                alt="AlphaCap Logo"
                width={180}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.path);
                const isExpanded = expandedMobileItem === item.path;
                
                return (
                  <div key={item.path} className="border-b border-slate-50 last:border-0">
                    {item.hasDropdown ? (
                      <div className="py-2">
                        <button
                          onClick={() => setExpandedMobileItem(isExpanded ? null : item.path)}
                          className={`w-full flex items-center justify-between py-4 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                            isActive || isExpanded ? "text-construction-orange" : "text-construction-dark"
                          }`}
                        >
                          <span>{item.label}</span>
                          <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isExpanded && (
                          <div className="mt-2 mb-4 space-y-1 bg-slate-50 rounded-2xl p-2">
                            {(item.dropdownType === "products" ? productCategories : servicesMenuItems).map((subItem: any) => (
                              <Link
                                key={item.dropdownType === "products" ? subItem.id : subItem.label}
                                href={item.dropdownType === "products" ? `/products/categories/${subItem.id}` : subItem.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setExpandedMobileItem(null);
                                }}
                                className="block px-4 py-3 text-[11px] font-black uppercase tracking-wider text-slate-500 hover:text-construction-orange hover:bg-white rounded-xl transition-all"
                              >
                                {item.dropdownType === "products" ? subItem.name : subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-6 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                          isActive ? "text-construction-orange translate-x-2" : "text-construction-dark hover:translate-x-2"
                        }`}
                      >
                        {item.label}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-construction-orange"></div>}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Footer Area */}
            <div className="mt-auto pt-10">
              <a
                href="tel:+919629124777"
                className="flex items-center justify-center gap-3 w-full bg-construction-dark text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.17 6.59 6.59l2.2-2.2c.27-.22.67-.27.91-.27.79 0 1.58.13 2.3.39.27.1.48.34.48.62v3.19c0 .28-.22.5-.5.5C11.13 20 4 12.87 4 4.5c0-.28.22-.5.5-.5H7.69c.28 0 .52.21.62.48.26.72.39 1.51.39 2.3 0 .24-.05.64-.27.91l-2.2 2.2z" />
                </svg>
                Call Trade Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}