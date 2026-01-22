"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "@/components/Footer";
import ProductHeroSection from "@/components/ProductHeroSection";
import { getProductCatalog, ProductCategory } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";
import PriceDisplay from "@/components/PriceDisplay";

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
    <main className="min-h-screen bg-slate-100/10">
      <ProductHeroSection
        title="Source every building material in one marketplace"
        description="Browse curated categories with rich media, specifications, and ready-to-go enquiry funnels. Each listing is synced with AlphaCap Trade's latest catalog."
        image="/images/hero/mat6.jpg"
        imageAlt="Construction materials"
        badge={{
          icon: "🛒",
          label: "Trade Platform",
        }}
        showButtons={true}
      />

      <section className="section-container py-16 md:py-24 relative overflow-hidden">
        {/* Background Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <header className="max-w-3xl mb-16 relative z-10">
          <div className="inline-flex flex-col items-start gap-2 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-construction-orange">Technical Portfolio</span>
            <div className="w-16 h-1 bg-construction-orange rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-construction-dark mb-6 tracking-tight">
            Browse Our <span className="text-construction-orange">Materials Portfolio</span>
          </h2>
          <p className="text-lg text-construction-gray font-medium leading-relaxed italic border-l-4 border-slate-100 pl-6">
            Explore highlighted categories from AlphaCap&apos;s current supply roster. Reach out to tailor availability, specifications, and pricing to your project.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 relative z-10">
          {categories.map((category) => {
            const deck = previewDecks[category.id];
            const activeIndex = activeImages[category.id] ?? 0;
            const activeImage = deck?.[activeIndex] ?? category.image;

            return (
              <article
                key={category.id}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-construction-orange/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${category.id}-${activeIndex}`}
                      initial={{ opacity: 0.2, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeImage}
                        alt={`${category.name} preview`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 33vw"
                        unoptimized={isExternalImage(activeImage)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-construction-orange flex items-center justify-center text-sm shadow-lg">
                        {category.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md">
                        {category.products.length} Products
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">{category.name}</h3>
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-8 relative flex-1">
                  {/* Decorative internal detail */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100/30 rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="grid gap-4 text-sm text-construction-gray flex-1">
                    {category.products.slice(0, 3).map((product) => (
                      <div key={`${category.id}-${product.slug}`} className="flex items-center gap-4 group/item">
                        <div className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-construction-dark font-black text-xs shadow-inner group-hover/item:bg-construction-orange group-hover/item:text-white transition-all duration-300">
                          {product.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-construction-dark uppercase tracking-tight truncate text-xs">{product.name}</p>
                          {product.price && (
                            <div className="mt-0.5">
                              <PriceDisplay price={product.price} className="text-[10px] font-bold text-construction-orange uppercase tracking-wider" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {category.products.length > 3 && (
                      <div className="flex items-center gap-2 pt-2">
                        <div className="h-px flex-1 bg-slate-100"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          +{category.products.length - 3} More Series
                        </p>
                        <div className="h-px flex-1 bg-slate-100"></div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={`/products/categories/${category.id}`}
                      className="flex-1 inline-flex items-center justify-center rounded-xl bg-construction-dark px-6 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all duration-500 hover:bg-construction-orange hover:-translate-y-1"
                    >
                      Explore Series
                    </Link>
                    <Link 
                      href="/#enquiry" 
                      className="flex-1 inline-flex items-center justify-center rounded-xl bg-white border-2 border-slate-100 px-6 py-4 text-xs font-black uppercase tracking-widest text-construction-dark shadow-sm transition-all duration-500 hover:border-construction-orange hover:text-construction-orange hover:-translate-y-1"
                    >
                      RFQ Request
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



