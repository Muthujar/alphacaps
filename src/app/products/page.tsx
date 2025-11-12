"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "@/components/Footer";
import { getProductCatalog, ProductCategory } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";

const ROTATION_INTERVAL_MS = 3500;

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

export default function ProductsPage() {
  const categories = useMemo(() => getProductCatalog(), []);

  const previewDecks = useMemo(
    () =>
      categories.reduce<Record<string, string[]>>((deckMap, category) => {
        deckMap[category.id] = buildPreviewDeck(category);
        return deckMap;
      }, {}),
    [categories]
  );

  const [activeImages, setActiveImages] = useState<ActiveImageState>(() =>
    categories.reduce<ActiveImageState>((acc, category) => {
      acc[category.id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const timers = categories.map((category) => {
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
  }, [categories, previewDecks]);

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-black via-black/90 to-black/80 text-white">
        <Image
          src="/images/hero/mat6.jpg"
          alt="Construction materials"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="section-container relative py-20 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
              🛒 Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Source every building material in one trusted marketplace
            </h1>
            <p className="text-lg text-white/80">
              Browse curated categories with rich media, specifications, and ready-to-go enquiry funnels.
              Each listing is synced with AlphaCap Trade’s latest catalog so you always see real product
              photography and details.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#enquiry" className="btn-primary">
                Request a quote
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                Call trade desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-14 lg:py-18">
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">Shop by category</h2>
          <p className="text-gray-600">
            Preview real product imagery curated for AlphaCap on alphacaps.in. Tap into a category to view the full
            range with specifications, pricing guidance, and media for every SKU.
          </p>
        </header>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const deck = previewDecks[category.id];
            const activeIndex = activeImages[category.id] ?? 0;
            const activeImage = deck?.[activeIndex] ?? category.image;

            return (
              <article
                key={category.id}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${category.id}-${activeIndex}`}
                      initial={{ opacity: 0.2, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeImage}
                        alt={`${category.name} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw"
                        unoptimized={isExternalImage(activeImage)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
                      {category.icon} {category.products.length} products
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold leading-snug">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/80">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-6">
                  <div className="grid gap-3 text-sm text-gray-600">
                    {category.products.slice(0, 3).map((product) => (
                      <div key={`${category.id}-${product.slug}`} className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700">
                          {product.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          {product.price && (
                            <p className="text-xs uppercase tracking-wide text-construction-orange">
                              {product.price}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    {category.products.length > 3 && (
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        +{category.products.length - 3} more products inside
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/products/categories/${category.id}`}
                      className="btn-primary flex-1 min-w-[150px] text-center"
                    >
                      Explore category
                    </Link>
                    <Link href="/#enquiry" className="btn-secondary flex-1 min-w-[150px] text-center">
                      Request quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}



