"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/98 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b-2 border-gray-200">
      {/* Top Bar - Trust Badge */}
      {/* <div className="bg-black text-white py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">
                TrustSEAL Verified <span className="text-white/70 text-xs font-medium uppercase tracking-[0.2em]">by IndiaMART</span>
              </span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 bg-white/60 rounded-full"></div>
            <div className="hidden md:flex items-center gap-2.5">
              <span className="font-semibold">Established 2024</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-construction-orange/10 opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-300"></div>
              <Image
                src="/images/hero/alphacap_logo_header.png"
                alt="AlphaCap logo"
                priority
                width={200}
                height={80}
                className="relative h-12 md:h-16 lg:h-[70px] w-auto object-contain drop-shadow-sm"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/" className="px-5 py-3 text-base font-semibold text-black hover:text-construction-orange hover:bg-gray-100 rounded-xl transition-all duration-300">
              Home
            </Link>
            <Link href="/products" className="px-5 py-3 text-base font-semibold text-black hover:text-construction-orange hover:bg-gray-100 rounded-xl transition-all duration-300">
              Products
            </Link>
            <Link href="/#services" className="px-5 py-3 text-base font-semibold text-black hover:text-construction-orange hover:bg-gray-100 rounded-xl transition-all duration-300">
              Services
            </Link>
            <Link href="/#about" className="px-5 py-3 text-base font-semibold text-black hover:text-construction-orange hover:bg-gray-100 rounded-xl transition-all duration-300">
              About
            </Link>
            <Link href="/#enquiry" className="px-5 py-3 text-base font-semibold text-black hover:text-construction-orange hover:bg-gray-100 rounded-xl transition-all duration-300">
              Contact
            </Link>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917949324478"
              className="flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#1E2761] to-construction-orange hover:from-construction-orange hover:to-[#1E2761] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call 07949 324 478</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
        <div className="px-4 py-4 space-y-2">
          {/* Mobile Navigation Links */}
          <Link
            href="/"
            className="block text-lg font-medium text-black hover:text-construction-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="block text-lg font-medium text-construction-dark hover:text-construction-primary hover:bg-construction-light px-3 py-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/#services"
            className="block text-lg font-medium text-construction-dark hover:text-construction-primary hover:bg-construction-light px-3 py-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="block text-lg font-medium text-construction-dark hover:text-construction-primary hover:bg-construction-light px-3 py-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#enquiry"
            className="block text-lg font-medium text-construction-dark hover:text-construction-primary hover:bg-construction-light px-3 py-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Contact Info */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="tel:+917949324478"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1E2761] to-construction-orange hover:from-construction-orange hover:to-[#1E2761] rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call 07949 324 478</span>
            </a>
          </div>
        </div>
        </div>
      )}
    </header>
  );
}
