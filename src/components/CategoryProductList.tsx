"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ProductInfo, ProductCategory, getCategoryProductTypes } from "@/data/productCatalog";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import TypeSelector from "./TypeSelector";

type CategoryProductListProps = {
  category: ProductCategory;
  onBrandSelectReady?: (handler: (brand: string) => void) => void;
  onGradeSelectReady?: (handler: (grade: string) => void) => void;
  initialGrade?: string | undefined;
};

export default function CategoryProductList({ category, onBrandSelectReady, onGradeSelectReady, initialGrade }: CategoryProductListProps) {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const [selectedGrade, setSelectedGrade] = useState<string | undefined>(initialGrade);
  const [filteredProducts, setFilteredProducts] = useState<ProductInfo[]>(category.products);

  // Extract product types (currently empty since type field was removed)
  const productTypes = useMemo(() => {
    return getCategoryProductTypes(category.products);
  }, [category.products]);

  // Since type field was removed, show all products
  const typeFilteredProducts = useMemo(() => {
    return category.products;
  }, [category.products]);

  // Handle brand selection from marquee (via parent callback)
  const handleBrandSelect = (brand: string) => {
    // If empty string, clear selection
    setSelectedBrand(brand || undefined);
  };

  // Handle grade selection from marquee (via parent callback)
  const handleGradeSelect = (grade: string) => {
    // If empty string, clear selection
    setSelectedGrade(grade || undefined);
  };

  // Update selected grade when initialGrade prop changes
  useEffect(() => {
    setSelectedGrade(initialGrade);
  }, [initialGrade]);

  // Expose handler to parent via callback
  useEffect(() => {
    if (onBrandSelectReady) {
      onBrandSelectReady(handleBrandSelect);
    }
  }, [onBrandSelectReady]);

  useEffect(() => {
    if (onGradeSelectReady) {
      onGradeSelectReady(handleGradeSelect);
    }
  }, [onGradeSelectReady]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-construction-orange"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-construction-orange">Catalog Index</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-construction-dark uppercase tracking-tight">
            Products in {category.name}
          </h2>
          <p className="text-sm text-construction-gray mt-2 font-medium italic">
            &ldquo;Curated specifications and high-resolution media for professional procurement.&rdquo;
          </p>
        </div>

        {/* Browse all categories link */}
        <Link
          href="/products"
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-construction-dark hover:text-construction-orange transition-all whitespace-nowrap"
        >
          All Portfolio
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </header>

      {/* Type Selector - Hidden since type field was removed */}
      {false && productTypes.length > 0 && (
        <TypeSelector
          types={productTypes}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      )}

      {/* Filters */}
      <ProductFilters
        products={typeFilteredProducts}
        categoryId={category.id}
        onFilterChange={setFilteredProducts}
        initialBrand={selectedBrand}
        initialGrade={selectedGrade}
      />

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-construction-gray">
        <span>
          Showing <strong className="text-construction-dark">{filteredProducts.length}</strong> of{" "}
          <strong className="text-construction-dark">{category.products.length}</strong> products
        </span>
        {filteredProducts.length !== category.products.length && (
          <span className="text-construction-orange">
            {category.products.length - filteredProducts.length} filtered out
          </span>
        )}
      </div>

      {/* Filtered Products */}
      <div className="space-y-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              fallbackImage={category.image}
              initialImageIndex={index}
            />
          ))
        ) : (
          <div className="text-center py-16 bg-slate-100/30 backdrop-blur-md rounded-2xl border-2 border-dashed border-slate-300/50">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">No products found</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm mx-auto">
              Try adjusting your filters or search query to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

