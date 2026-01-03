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

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Talk to AlphaCap</h3>
          <p className="mt-2 text-sm text-gray-600">
            Need help choosing materials from the {category.name} range? Our specialists can
            recommend optimal specs, sourcing timelines, and pricing.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href="tel:+919629124777"
              className="block w-full rounded-lg border border-construction-orange bg-white py-2 text-center text-sm font-semibold text-construction-orange hover:bg-construction-orange hover:text-white transition-colors"
            >
              Call +91 96291 24777
            </a>
            <a
              href="mailto:tradeplatform@alphacaps.in"
              className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Email tradeplatform@alphacaps.in
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Other Categories</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
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
                      className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 hover:border-construction-orange/50 hover:bg-construction-orange/5 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{otherCategory.icon}</span>
                        <span>{otherCategory.name}</span>
                      </span>
                      <span className="text-xs text-construction-orange">View</span>
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

