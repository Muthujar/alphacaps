"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { isExternalImage } from "@/lib/isExternalImage";
import { makeProductSlug, type ProductInfo } from "@/data/productCatalog";
import PriceDisplay from "./PriceDisplay";
import ProductActionButtons from "./ProductActionButtons";

type ProductCardProps = {
  product: ProductInfo;
  fallbackImage: string;
  initialImageIndex?: number;
};

const PREVIEW_LIMIT = 4;

export default function ProductCard({ product, fallbackImage, initialImageIndex = 0 }: ProductCardProps) {
  const primaryImage = product.hiRes ?? product.image ?? fallbackImage;

  const galleryImages = useMemo(() => {
    const images = (product.gallery && product.gallery.length > 0 ? product.gallery : []).filter(
      (image): image is string => Boolean(image),
    );

    if (primaryImage) {
      images.unshift(primaryImage);
    }

    const deduped: string[] = [];
    const seen = new Set<string>();

    for (const image of images) {
      if (!seen.has(image)) {
        deduped.push(image);
        seen.add(image);
      }
    }

    return deduped;
  }, [primaryImage, product.gallery]);

  // Calculate initial index, rotating through available images
  const calculatedInitialIndex = useMemo(() => {
    if (galleryImages.length === 0) return 0;
    return initialImageIndex % galleryImages.length;
  }, [initialImageIndex, galleryImages.length]);

  const [activeImageIndex, setActiveImageIndex] = useState(calculatedInitialIndex);

  // Update activeImageIndex when calculatedInitialIndex changes
  useEffect(() => {
    setActiveImageIndex(calculatedInitialIndex);
  }, [calculatedInitialIndex]);

  useEffect(() => {
    if (activeImageIndex >= galleryImages.length) {
      setActiveImageIndex(0);
    }
  }, [activeImageIndex, galleryImages.length]);

  const activeImage = galleryImages[activeImageIndex];
  const previewImages =
    galleryImages.length > PREVIEW_LIMIT ? galleryImages.slice(0, PREVIEW_LIMIT) : galleryImages;

  return (
    <article
      key={product.slug}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-construction-orange/30"
    >
      {/* Background technical pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity" 
           style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }}>
      </div>

      <div className="grid gap-8 p-8 lg:grid-cols-[2fr,3fr] lg:items-start relative z-10">
        <div className="space-y-6">
          <div className="relative h-64 md:h-72 overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-inner group/image">
            {activeImage ? (
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${product.name} image`}
                fill
                className={`${product.name.toLowerCase().includes("paver block") ? "object-contain" : "object-cover"} transition-transform duration-1000 group-hover/image:scale-110`}
                unoptimized={isExternalImage(activeImage)}
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-xs font-black uppercase tracking-widest text-slate-300">
                Data Sheet Pending
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="bg-construction-dark/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10">
                Technical View
              </span>
            </div>
          </div>

          {previewImages.length > 1 && (
            <div className="flex flex-wrap gap-3">
              {previewImages.map((imageUrl) => {
                const index = galleryImages.indexOf(imageUrl);
                const isActive = index === activeImageIndex;
                const isPaverBlock = product.name.toLowerCase().includes("paver block");

                return (
                  <button
                    type="button"
                    key={`${product.slug}-preview-${index}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      isActive
                        ? 'border-construction-orange shadow-lg shadow-construction-orange/20 scale-105'
                        : 'border-slate-100 grayscale hover:grayscale-0 hover:border-construction-orange/40'
                    }`}
                    aria-label={`View ${product.name} image ${index + 1}`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className={isPaverBlock ? "object-contain bg-slate-50" : "object-cover"}
                      unoptimized={isExternalImage(imageUrl)}
                      sizes="64px"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-construction-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-construction-orange">Product Spec</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-construction-dark uppercase tracking-tight mb-2">{product.name}</h3>
            <div className="flex items-center gap-4">
              <PriceDisplay price={product.price} className="text-lg font-black text-construction-orange" />
              {product.brand && (
                <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 border border-slate-200">
                  {product.brand}
                </span>
              )}
            </div>
          </div>

          {product.description && (
            <p className="text-base leading-relaxed text-construction-gray font-medium italic border-l-4 border-slate-100 pl-4 group-hover:border-construction-orange transition-all">
              {product.description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="pt-2">
            <ProductActionButtons variant="large" />
          </div>

          {(product.grade || (product.details && product.details.length > 0)) && (
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              {product.grade && (
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 relative group/spec">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover/spec:bg-construction-orange transition-colors"></div>
                  <dt className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    Grades
                  </dt>
                  <dd className="text-sm font-bold text-construction-dark">
                    <ul className="flex flex-wrap gap-2">
                      {product.grade.split(",").map((grade, index) => (
                        <li key={index} className="bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm">{grade.split("(")[0].trim()}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {product.details
                ?.filter((detail) => detail.label !== "Available Brands" && detail.label !== "Available Grades" && detail.label !== "Cement Grade")
                .map((detail) => (
                  <div
                    key={`${product.slug}-${makeProductSlug(detail.label)}`}
                    className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 relative group/spec"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover/spec:bg-construction-orange transition-colors"></div>
                    <dt className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      {detail.label}
                    </dt>
                    <dd className="text-sm font-bold text-construction-dark">{detail.value}</dd>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

