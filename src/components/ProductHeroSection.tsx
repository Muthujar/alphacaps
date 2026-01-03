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
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-sm font-medium text-white transition-colors border border-white/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {backLink.label}
                </Link>
              )}
              
              {badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-construction-orange/90 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/20">
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              )}
            </div>

            {/* Title & Price */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
                {title}
              </h1>

              {price && (
                <div className="inline-block">
                  <ProductPriceDisplay price={price} textColor="text-white" className="text-2xl md:text-3xl" />
                </div>
              )}
            </div>

            {/* Product Badges/Specs */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10"
                  >
                    <span className="opacity-70 mr-2">{badge.label}:</span>
                    {badge.value}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl font-light">
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
