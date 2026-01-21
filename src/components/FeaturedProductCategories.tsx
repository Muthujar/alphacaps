"use client";

import { useEffect, useMemo, useState } from "react";
  import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { getProductCatalog, ProductCategory } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";

const ROTATION_INTERVAL_MS = 3500;

const MAX_FEATURED_DESKTOP = 5;
const MAX_FEATURED_MOBILE = 3;
type ActiveImageState = Record<string, number>;

const buildPreviewDeck = (category: ProductCategory) => {
  const previewPool = category.products
    .flatMap((product) => product.gallery ?? (product.image ? [product.image] : []))
    .filter(Boolean);

  if (previewPool.length === 0) {
    return [category.image];
  }

  return Array.from(new Set(previewPool));
};

export default function FeaturedProductCategories() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const catalog = useMemo(() => getProductCatalog(), []);
  const maxFeatured = isMobile ? MAX_FEATURED_MOBILE : MAX_FEATURED_DESKTOP;
  const featuredCategories = useMemo(() => catalog.slice(0, maxFeatured), [catalog, maxFeatured]);

  const previewDecks = useMemo(
    () =>
      featuredCategories.reduce<Record<string, string[]>>((deckMap, category) => {
        deckMap[category.id] = buildPreviewDeck(category);
        return deckMap;
      }, {}),
    [featuredCategories]
  );

  const [activeImages, setActiveImages] = useState<ActiveImageState>(() =>
    featuredCategories.reduce<ActiveImageState>((acc, category) => {
      acc[category.id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const timers = featuredCategories.map((category) => {
      const deck = previewDecks[category.id] ?? [];
      if (deck.length <= 1) {
        return null;
      }

      return setInterval(() => {
        setActiveImages((current) => {
          const currentIndex = current[category.id] ?? 0;
          const nextIndex = (currentIndex + 1) % deck.length;
          return { ...current, [category.id]: nextIndex };
        });
      }, ROTATION_INTERVAL_MS);
    });

    return () => {
      timers.forEach((timer) => {
        if (timer) {
          clearInterval(timer);
        }
      });
    };
  }, [featuredCategories, previewDecks]);

  return (
    <section id="products" className="section-container py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-construction-orange/10 px-4 py-2 text-sm font-semibold text-construction-orange">
          🔍 Featured catalog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our Materials Portfolio
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Browse a curated snapshot of AlphaCap&apos;s supply lineup. Discover spotlight categories and connect with us to
          access the full catalog and project-specific availability.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredCategories.map((category) => {
          const deck = previewDecks[category.id];
          const activeIndex = activeImages[category.id] ?? 0;
          const activeImage = deck?.[activeIndex] ?? category.image;

          return (
            <article
              key={category.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-60">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${category.id}-${activeIndex}`}
                    initial={{ opacity: 0.2, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage}
                      alt={`${category.name} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw"
                      unoptimized={isExternalImage(activeImage)}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                  {/* <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
                    {category.icon} {category.products.length} products
                  </span> */}
                  <h3 className="text-2xl font-semibold leading-snug">{category.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <p className="text-sm text-gray-600">
                  Discover curated media, specifications, and procurement-ready details for{" "}
                  {category.name.toLowerCase()}.
                </p>

                <Link
                  href={`/products/categories/${category.id}`}
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#1E2761] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#273276] hover:shadow-xl"
                >
                  Explore category
                </Link>
              </div>
            </article>
          );
        })}

        <article className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-construction-orange/40 bg-construction-orange/5 p-8 text-center shadow-sm">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-construction-orange shadow-md">
            📦
          </span>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Explore full catalog</h3>
          <p className="mt-3 text-sm text-gray-700">
            Tap below to browse every AlphaCap product category in detail.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1E2761] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#273276] hover:shadow-xl"
          >
            View all categories
          </Link>
        </article>
      </div>
    </section>
  );
}