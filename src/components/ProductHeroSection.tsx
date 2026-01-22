"use client";

import Image from "next/image";
import Link from "next/link";
import { isExternalImage } from "@/lib/isExternalImage";
import ProductPriceDisplay from "./ProductPriceDisplay";
import ProductActionButtons from "./ProductActionButtons";

type ProductHeroSectionProps = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  backLink?: {
    href: string;
    label: string;
  };
  badge?: {
    icon: string;
    label: string;
  };
  price?: any;
  badges?: Array<{ label: string; value: string }>;
  showButtons?: boolean;
};

export default function ProductHeroSection({
  title,
  description,
  image,
  imageAlt,
  backLink,
  badge,
  price,
  badges,
  showButtons = false,
}: ProductHeroSectionProps) {
  return (
    <section className="relative isolate min-h-[60vh] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          unoptimized={isExternalImage(image)}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
          <div className="max-w-4xl space-y-8">
            {/* Navigation & Badges */}
            <div className="flex flex-wrap items-center gap-4">
              {backLink && (
                <Link
                  href={backLink.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-construction-orange backdrop-blur-md text-xs font-black uppercase tracking-widest text-white transition-all border border-white/10 hover:border-white/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {backLink.label}
                </Link>
              )}
              
              {badge && (
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-construction-orange"></span>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-construction-orange">
                    {badge.label}
                  </span>
                </div>
              )}
            </div>

            {/* Title & Price */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] text-white tracking-tighter drop-shadow-2xl">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={word.toLowerCase() === 'material' || word.toLowerCase() === 'marketplace' ? 'text-construction-orange' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              {price && (
                <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  <ProductPriceDisplay price={price} textColor="text-white" className="text-2xl md:text-3xl font-black" />
                </div>
              )}
            </div>

            {/* Product Badges/Specs */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-construction-dark/50 text-white backdrop-blur-md border border-white/10"
                  >
                    <span className="text-construction-orange mr-2 opacity-100">{badge.label}:</span>
                    {badge.value}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl font-medium italic border-l-4 border-construction-orange/40 pl-6">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            {showButtons && (
              <div className="pt-4">
                <ProductActionButtons variant="large" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
