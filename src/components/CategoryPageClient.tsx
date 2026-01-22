"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ProductCategory, getCategoryBrands, getCategoryGrades, getAllCategoryIds, findCategoryById } from "@/data/productCatalog";
import CategoryProductList from "./CategoryProductList";
import BrandMarquee from "./BrandMarquee";
import GradeMarquee from "./GradeMarquee";

type CategoryPageClientProps = {
  category: ProductCategory;
};

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const brandSelectHandlerRef = useRef<((brand: string) => void) | null>(null);
  const gradeSelectHandlerRef = useRef<((grade: string) => void) | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const [selectedGrade, setSelectedGrade] = useState<string | undefined>(undefined);
  const availableBrands = getCategoryBrands(category.products);
  const availableGrades = getCategoryGrades(category.products);
  const isCementCategory = category.id === "construction-cement";

  const handleBrandClick = (brand: string) => {
    // Toggle selection: if same brand clicked, deselect it
    const newBrand = selectedBrand === brand ? undefined : brand;
    setSelectedBrand(newBrand);
    if (brandSelectHandlerRef.current) {
      brandSelectHandlerRef.current(newBrand || "");
    }
  };

  const handleGradeClick = (grade: string) => {
    // Toggle selection: if same grade clicked, deselect it
    const newGrade = selectedGrade === grade ? undefined : grade;
    setSelectedGrade(newGrade);
    if (gradeSelectHandlerRef.current) {
      gradeSelectHandlerRef.current(newGrade || "");
    }
  };

  const handleBrandSelectReady = (handler: (brand: string) => void) => {
    brandSelectHandlerRef.current = handler;
  };

  const handleGradeSelectReady = (handler: (grade: string) => void) => {
    gradeSelectHandlerRef.current = handler;
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[3fr,1fr]">
      <div className="min-w-0 overflow-hidden">
        {/* Client component for filtering and sorting */}
        <CategoryProductList 
          category={category} 
          onBrandSelectReady={handleBrandSelectReady}
          onGradeSelectReady={isCementCategory ? handleGradeSelectReady : undefined}
          initialGrade={isCementCategory ? selectedGrade : undefined}
        />
      </div>

      <aside className="space-y-6 min-w-0 max-w-full">
        {/* Brand Marquee */}
        {availableBrands.length > 0 && (
          <BrandMarquee 
            brands={availableBrands} 
            onBrandClick={handleBrandClick}
            selectedBrand={selectedBrand}
          />
        )}

        {/* Grade Marquee - Only for cement category */}
        {isCementCategory && availableGrades.length > 0 && (
          <GradeMarquee 
            grades={availableGrades} 
            onGradeClick={handleGradeClick}
            selectedGrade={selectedGrade}
          />
        )}

        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-8 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-construction-orange"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black text-construction-dark uppercase tracking-tight mb-4">Talk to AlphaCap</h3>
            <p className="text-sm text-construction-gray font-medium italic leading-relaxed">
              Need help choosing materials from the {category.name} range? Our specialists can
              recommend optimal specs, sourcing timelines, and pricing.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="tel:+919629124777"
                className="flex items-center justify-center gap-3 w-full rounded-xl bg-construction-dark py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl hover:bg-construction-orange hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.17 6.59 6.59l2.2-2.2c.27-.22.67-.27.91-.27.79 0 1.58.13 2.3.39.27.1.48.34.48.62v3.19c0 .28-.22.5-.5.5C11.13 20 4 12.87 4 4.5c0-.28.22-.5.5-.5H7.69c.28 0 .52.21.62.48.26.72.39 1.51.39 2.3 0 .24-.05.64-.27.91l-2.2 2.2z" />
                </svg>
                Call Trade Desk
              </a>
              <a
                href="mailto:tradeplatform@alphacaps.in"
                className="flex items-center justify-center gap-3 w-full rounded-xl bg-white border-2 border-slate-100 py-4 text-xs font-black uppercase tracking-widest text-construction-dark hover:border-construction-orange hover:text-construction-orange transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-construction-orange"></div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Other Categories</h3>
          </div>
          <ul className="space-y-3">
            {getAllCategoryIds()
              .filter((id) => id !== category.id)
              .slice(0, 6)
              .map((otherId) => {
                const otherCategory = findCategoryById(otherId);
                if (!otherCategory) return null;
                return (
                  <li key={otherId}>
                    <Link
                      href={`/products/categories/${otherId}`}
                      className="group flex items-center justify-between rounded-xl border-2 border-slate-100 bg-white px-4 py-3 hover:border-construction-orange/30 hover:shadow-md transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{otherCategory.icon}</span>
                        <span className="text-xs font-black text-construction-dark uppercase tracking-tight">{otherCategory.name}</span>
                      </span>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-construction-orange group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

