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
    <section id="products" className="section-container py-16 lg:py-20 relative overflow-hidden bg-slate-100/10 backdrop-blur-sm scroll-mt-24">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="mx-auto max-w-3xl text-center mb-16 relative z-10">
        <div className="inline-flex flex-col items-center gap-2 mb-6">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-construction-orange">Materials Portfolio</span>
          <div className="w-16 h-1 bg-construction-orange rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-construction-dark mb-6 tracking-tight">
          Explore Our <span className="text-construction-orange">Materials Portfolio</span>
        </h2>
        <p className="text-lg text-construction-gray max-w-2xl mx-auto font-medium leading-relaxed italic">
          Browse a curated snapshot of AlphaCap&apos;s supply lineup. Discover spotlight categories and connect with us to
          access the full catalog.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 relative z-10">
        {featuredCategories.map((category) => {
          const deck = previewDecks[category.id];
          const activeIndex = activeImages[category.id] ?? 0;
          const activeImage = deck?.[activeIndex] ?? category.image;

          return (
            <article
              key={category.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-construction-orange/30"
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
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase">{category.name}</h3>
                  <p className="text-sm text-slate-300 font-medium line-clamp-2 italic">&ldquo;{category.description}&rdquo;</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8 relative">
                {/* Internal decorative line */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100/30 rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <p className="text-construction-gray text-base leading-relaxed font-medium border-l-4 border-slate-100 pl-4 group-hover:border-construction-orange transition-all">
                  Discover curated media, specifications, and procurement-ready details for{" "}
                  {category.name.toLowerCase()}.
                </p>

                <Link
                  href={`/products/categories/${category.id}`}
                  className="mt-auto inline-flex w-full items-center justify-center rounded-2xl bg-construction-dark px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all duration-500 hover:bg-construction-orange hover:-translate-y-1"
                >
                  Explore Category
                </Link>
              </div>
            </article>
          );
        })}

        <article className="flex flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-construction-orange/40 bg-slate-50/50 backdrop-blur-sm p-10 text-center shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-white group/all">
          <div className="relative mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-construction-dark text-4xl text-construction-orange shadow-xl group-hover/all:bg-construction-orange group-hover/all:text-white group-hover/all:scale-110 transition-all duration-500">
            📦
            {/* Glass shine */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-3xl"></div>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-construction-dark mb-4 tracking-tight uppercase">Full Catalog</h3>
          <p className="text-base text-construction-gray font-medium leading-relaxed italic mb-8">
            Tap below to browse every AlphaCap product category in detail with full specifications.
          </p>
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-construction-dark px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all duration-500 hover:bg-construction-orange hover:-translate-y-1"
          >
            View All Categories
          </Link>
        </article>
      </div>
    </section>
  );
}