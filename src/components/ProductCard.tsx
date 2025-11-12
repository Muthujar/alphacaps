"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { isExternalImage } from "@/lib/isExternalImage";
import { makeProductSlug, type ProductInfo } from "@/data/productCatalog";

type ProductCardProps = {
  product: ProductInfo;
  fallbackImage: string;
};

const PREVIEW_LIMIT = 4;

export default function ProductCard({ product, fallbackImage }: ProductCardProps) {
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

  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      className="rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="grid gap-6 p-6 lg:grid-cols-[2fr,3fr] lg:items-center">
        <div className="space-y-4">
          <div className="relative h-56 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            {activeImage ? (
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${product.name} image`}
                fill
                className="object-cover transition-opacity duration-200"
                unoptimized={isExternalImage(activeImage)}
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-500">
                Image coming soon
              </div>
            )}
          </div>

          {previewImages.length > 1 && (
            <div className="flex gap-3">
              {previewImages.map((imageUrl) => {
                const index = galleryImages.indexOf(imageUrl);
                const isActive = index === activeImageIndex;

                return (
                  <button
                    type="button"
                    key={`${product.slug}-preview-${index}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-14 w-14 overflow-hidden rounded-xl border transition ring-offset-2 ${
                      isActive
                        ? 'border-construction-orange ring-2 ring-construction-orange/40'
                        : 'border-gray-200 hover:border-construction-orange/60'
                    }`}
                    aria-label={`View ${product.name} image ${index + 1}`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized={isExternalImage(imageUrl)}
                      sizes="56px"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              {product.price && (
                <p className="mt-1 text-sm font-medium text-construction-orange">{product.price}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/#enquiry" className="btn-primary text-xs sm:text-sm">
                Request quote
              </Link>
              <a href="tel:+919876543210" className="btn-secondary text-xs sm:text-sm">
                Call trade desk
              </a>
            </div>
          </div>

          {product.description && (
            <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
          )}

          {product.specifications && (
            <p className="text-xs uppercase tracking-wide text-gray-500">{product.specifications}</p>
          )}

          {product.details && product.details.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {product.details.map((detail) => (
                <div
                  key={`${product.slug}-${makeProductSlug(detail.label)}`}
                  className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-800">{detail.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {product.video && (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
              <div className="font-semibold text-gray-900">Product video</div>
              <p className="mt-1">
                <a
                  href={product.video}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-construction-orange hover:text-construction-orange/80"
                >
                  Watch now →
                </a>
              </p>
            </div>
          )}

          {galleryImages.length > 1 && (
            <div className="rounded-2xl border border-gray-100 bg-white px-4 py-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Media gallery
              </div>
              <div className="flex flex-wrap gap-3">
                {galleryImages.map((imageUrl, index) => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      type="button"
                      key={`${product.slug}-gallery-${index}`}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative h-14 w-14 overflow-hidden rounded-xl border transition ${
                        isActive
                          ? 'border-construction-orange ring-2 ring-construction-orange/40 ring-offset-1'
                          : 'border-gray-200 hover:border-construction-orange/60'
                      }`}
                      aria-label={`View ${product.name} gallery image ${index + 1}`}
                    >
                      <Image
                        src={imageUrl}
                        alt={`${product.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized={isExternalImage(imageUrl)}
                        sizes="56px"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

