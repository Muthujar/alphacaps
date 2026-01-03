"use client";

import { useState, useEffect, useMemo } from "react";
import { ProductInfo } from "@/data/productCatalog";

type FilterState = {
  grade?: string;
  brand?: string;
  brandType?: string;
  size?: string;
  materialType?: string;
  productType?: string;
  searchQuery?: string;
  brickType?: string;
};

type ProductFiltersProps = {
  products: ProductInfo[];
  categoryId: string;
  onFilterChange: (filteredProducts: ProductInfo[]) => void;
  initialBrand?: string;
  initialGrade?: string;
};

export default function ProductFilters({ products, categoryId, onFilterChange, initialBrand, initialGrade }: ProductFiltersProps) {
  const isTMTBars = categoryId === "tmt-bars";
  const isBulkMaterials = categoryId === "bulk-materials";
  const isAACBlocks = categoryId === "aac-blocks";
  const isSolidBlocks = categoryId === "solid-blocks";
  const isPaverBlocks = categoryId === "paver-blocks";
  const isCement = categoryId === "construction-cement";
  const isReadyMixConcrete = categoryId === "ready-mix-concrete";
  const isBricks = categoryId === "bricks";
  const isHumePipes = categoryId === "hume-pipes";
  const isShutteringPlywood = categoryId === "shuttering-plywood";
  const isReadyMixPlaster = categoryId === "ready-mix-plaster";
  // Set default filter to Primary for TMT bars, Aggregate for bulk materials
  const [filters, setFilters] = useState<FilterState>(
    isTMTBars 
      ? { brandType: "Primary", brand: initialBrand } 
      : isBulkMaterials 
      ? { materialType: "Aggregate", brand: initialBrand } 
      : isCement || isReadyMixConcrete
      ? { brand: initialBrand, grade: initialGrade }
      : { brand: initialBrand }
  );

  // Update brand filter when initialBrand changes and clear other filters
  useEffect(() => {
    if (initialBrand) {
      // Clear all other filters except brand when brand is selected
      // Only keep category-specific defaults
      setFilters({
        brand: initialBrand,
        // Keep brandType for TMT bars as it's category-specific default
        ...(isTMTBars ? { brandType: "Primary" } : {}),
        // Keep grade for cement or ready-mix-concrete if it's set
        ...((isCement || isReadyMixConcrete) && initialGrade ? { grade: initialGrade } : {}),
      });
    } else if (initialBrand === "" || initialBrand === undefined) {
      // If empty string or undefined, clear brand filter but restore category defaults
      if (isTMTBars) {
        setFilters({ brandType: "Primary" });
      } else if (isBulkMaterials) {
        setFilters({ materialType: "Aggregate" });
      } else if ((isCement || isReadyMixConcrete) && initialGrade) {
        setFilters({ grade: initialGrade });
      } else {
        setFilters({});
      }
    }
  }, [initialBrand, initialGrade, isTMTBars, isBulkMaterials, isCement, isReadyMixConcrete]);

  // Update grade filter when initialGrade changes (for cement and ready-mix-concrete categories)
  useEffect(() => {
    if (isCement || isReadyMixConcrete) {
      if (initialGrade) {
        setFilters((prev) => ({
          ...prev,
          grade: initialGrade,
          // Keep brand if it's set
          ...(initialBrand ? { brand: initialBrand } : {}),
        }));
      } else if (initialGrade === "" || initialGrade === undefined) {
        setFilters((prev) => {
          const newFilters = { ...prev };
          delete newFilters.grade;
          // If no brand either, clear all filters
          if (!initialBrand) {
            return {};
          }
          return newFilters;
        });
      }
    }
  }, [initialGrade, initialBrand, isCement, isReadyMixConcrete]);
  const [isOpen, setIsOpen] = useState(false);

  // Extract available filter options from products
  const availableGrades = useMemo(() => {
    const gradeSet = new Set<string>();
    products.forEach((p) => {
      if (p.grade) {
        // Handle comma-separated values (new format) or single values (old format)
        const grades = p.grade.split(",").map((g) => g.trim());
        grades.forEach((grade) => gradeSet.add(grade));
      }
      // For ready-mix-concrete, also extract from product name if grade field is missing
      if (isReadyMixConcrete && !p.grade && p.name) {
        const match = p.name.match(/M\d+/);
        if (match) {
          gradeSet.add(match[0]);
        }
      }
      // Also check details for grade information
      if (isReadyMixConcrete && p.details) {
        const gradeDetail = p.details.find((d) => 
          d.label === "Grade" || d.label === "Concrete Grade"
        );
        if (gradeDetail?.value) {
          gradeSet.add(gradeDetail.value.trim());
        }
      }
    });
    const grades = Array.from(gradeSet);
    // Sort numerically for ready-mix-concrete (M5, M10, M15, etc.)
    if (isReadyMixConcrete) {
      return grades.sort((a, b) => {
        const aNum = parseInt(a.replace("M", "")) || 0;
        const bNum = parseInt(b.replace("M", "")) || 0;
        return aNum - bNum;
      });
    }
    return grades.sort();
  }, [products, isReadyMixConcrete]);

  const availableBrands = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.brand).filter(Boolean) as string[])).sort(),
    [products]
  );

  const availableSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    products.forEach((p) => {
      if (p.size) {
        // Handle comma-separated values (new format) or single values (old format)
        const sizes = p.size.split(",").map((s) => s.trim());
        sizes.forEach((size) => sizeSet.add(size));
      }
    });
    // Sort sizes numerically (e.g., 8mm, 10mm, 12mm)
    return Array.from(sizeSet).sort((a, b) => {
      const aNum = parseInt(a.replace("mm", "").replace("MM", "")) || 0;
      const bNum = parseInt(b.replace("mm", "").replace("MM", "")) || 0;
      return aNum - bNum;
    });
  }, [products]);

  const availableMaterialTypes = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.materialType).filter(Boolean) as string[])
      ).sort(),
    [products]
  );

  const availableProductTypes = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.productType).filter(Boolean) as string[])
      ).sort(),
    [products]
  );

  // Apply filters
  useEffect(() => {
    let filtered = products;

    // Search query filter (used for Paver blocks type filtering)
    if (filters.searchQuery) {
      if (isPaverBlocks) {
        // For paver blocks, filter by type name
        filtered = filtered.filter((p) => {
          const name = p.name.toLowerCase();
          const query = filters.searchQuery!.toLowerCase();
          
          if (query === "bricks") return name.includes("bricks");
          if (query === "i shape") return name.includes("i shape");
          if (query === "zigzag") return name.includes("zigzag");
          if (query === "triangle") return name.includes("triangle");
          if (query === "hexagon") return name.includes("hexagon");
          if (query === "pentagon") return name.includes("pentagon");
          if (query === "basil") return name.includes("basil");
          if (query === "square") return name.includes("square");
          if (query === "oxford") return name.includes("oxford");
          
          return false;
        });
      }
    }

    // Grade filter - handle comma-separated values and cement grades
    if (filters.grade) {
      filtered = filtered.filter((p) => {
        // First check explicit grade field (may be comma-separated)
        if (p.grade) {
          // For cement, check if grade matches (supports comma-separated grades)
          if (isCement) {
            const filterGrade = filters.grade!.toUpperCase();
            // Split comma-separated grades and check each
            const gradeList = p.grade.split(",").map(g => g.trim().toUpperCase()).filter(Boolean);
            for (const productGrade of gradeList) {
              // Check exact match
              if (productGrade === filterGrade) return true;
              // Check if filter contains key terms (PPC, OPC 53, PSC)
              if (filterGrade.includes("PPC") && productGrade.includes("PPC")) return true;
              if ((filterGrade.includes("OPC 53") || filterGrade.includes("OPC53")) && 
                  (productGrade.includes("OPC 53") || productGrade.includes("OPC53") || productGrade.includes("ORDINARY PORTLAND"))) return true;
              if (filterGrade.includes("PSC") && productGrade.includes("PSC")) return true;
            }
          } else {
            // For non-cement (including ready-mix-concrete), use exact match or inclusion check
            if (p.grade === filters.grade || p.grade.includes(filters.grade!)) return true;
          }
        }
        // For ready-mix-concrete, also check product name and details
        if (isReadyMixConcrete) {
          // Check product name for grade (e.g., "M15 Ready Mix Concrete")
          if (p.name && p.name.includes(filters.grade!)) return true;
          // Check details for grade information
          if (p.details) {
            const gradeDetail = p.details.find((d) => 
              d.label === "Grade" || d.label === "Concrete Grade"
            );
            if (gradeDetail?.value && gradeDetail.value.trim() === filters.grade!) return true;
          }
        }
        // For cement, also check details for grade information
        if (isCement && p.details) {
          // Check "Available Grades" detail field (comma-separated)
          const availableGradesDetail = p.details.find((d) => d.label === "Available Grades");
          if (availableGradesDetail?.value) {
            const filterGrade = filters.grade!.toUpperCase();
            const gradeList = availableGradesDetail.value.split(",").map(g => g.trim().toUpperCase()).filter(Boolean);
            for (const gradeValue of gradeList) {
              // Check for matches with full forms
              if (filterGrade.includes("PPC") && gradeValue.includes("PPC")) return true;
              if ((filterGrade.includes("OPC 53") || filterGrade.includes("OPC53")) && 
                  (gradeValue.includes("OPC 53") || gradeValue.includes("OPC53") || gradeValue.includes("ORDINARY PORTLAND"))) return true;
              if (filterGrade.includes("PSC") && gradeValue.includes("PSC")) return true;
              // Also check if the full value matches
              if (gradeValue === filterGrade) return true;
            }
          }
          // Also check other grade detail fields
          const gradeDetail = p.details.find((d) => 
            d.label === "Grade" || 
            d.label === "Cement Grade" ||
            d.label === "Type"
          );
          if (gradeDetail?.value) {
            const gradeValue = gradeDetail.value.trim().toUpperCase();
            const filterGrade = filters.grade!.toUpperCase();
            // Check for matches with full forms
            if (filterGrade.includes("PPC") && gradeValue.includes("PPC")) return true;
            if ((filterGrade.includes("OPC 53") || filterGrade.includes("OPC53")) && 
                (gradeValue.includes("OPC 53") || gradeValue.includes("OPC53") || gradeValue.includes("ORDINARY PORTLAND"))) return true;
            if (filterGrade.includes("PSC") && gradeValue.includes("PSC")) return true;
            // Also check if the full value matches
            if (gradeValue.includes(filterGrade)) return true;
          }
        }
        return false;
      });
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter((p) => {
        // For products with explicit brand field
        if (p.brand === filters.brand) return true;
        // For AAC blocks, check "Available Brands" detail field
        if (isAACBlocks && p.details) {
          const availableBrandsDetail = p.details.find((d) => d.label === "Available Brands");
          if (availableBrandsDetail?.value) {
            const brandList = availableBrandsDetail.value
              .split(",")
              .map((b) => b.trim())
              .filter(Boolean);
            return brandList.includes(filters.brand!);
          }
        }
        return false;
      });
    }

    // Brand Type filter
    if (filters.brandType) {
      filtered = filtered.filter((p) => p.brandType === filters.brandType);
    }

    // Size filter - handle comma-separated values
    if (filters.size) {
      filtered = filtered.filter((p) => {
        // For AAC blocks, handle "JOINT MORTOR BAG" case (note: typo in data is "MORTOR")
        if (isAACBlocks && (filters.size === "JOINT MORTOR BAG" || filters.size === "JOINT MORTAR BAG")) {
          return p.name.toLowerCase().includes("joint mortar");
        }
        // For solid blocks, use exact match
        if (isSolidBlocks) {
          return p.size === filters.size;
        }
        if (!p.size) return false;
        // Check if size is comma-separated (new format) or single value (old format)
        return p.size.includes(filters.size!);
      });
    }

    // Material Type filter
    if (filters.materialType) {
      filtered = filtered.filter((p) => p.materialType === filters.materialType);
    }

    // Product Type filter
    if (filters.productType) {
      filtered = filtered.filter((p) => p.productType === filters.productType);
    }

    // Brick Type filter
    if (filters.brickType) {
      filtered = filtered.filter((p) => {
        const name = p.name.toLowerCase();
        if (filters.brickType === "Flyash") {
          return name.includes("flyash") || name.includes("fly ash");
        } else if (filters.brickType === "Chamber") {
          return name.includes("chamber");
        } else if (filters.brickType === "Wirecut") {
          return name.includes("wirecut") || name.includes("wire cut");
        }
        return false;
      });
    }

    onFilterChange(filtered);
  }, [filters, products, onFilterChange, isCement, isReadyMixConcrete, isAACBlocks, isSolidBlocks, isPaverBlocks]);

  const handleFilterChange = (key: keyof FilterState, value: string | undefined) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value || undefined };
      // Clear size filter when switching away from Aggregate
      if (key === "materialType" && value !== "Aggregate") {
        newFilters.size = undefined;
      }
      return newFilters;
    });
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  // Determine which filters to show based on category
  const isStructuralSteel = categoryId === "structural-steel";
  
  // Check if Aggregate is selected to show size filter
  const showSizeFilter = isBulkMaterials && filters.materialType === "Aggregate";
  
  // Extract available types/sizes for AAC blocks
  const availableAACTypes = useMemo(() => {
    if (!isAACBlocks) return [];
    const typeSet = new Set<string>();
    products.forEach((p) => {
      if (p.size) {
        typeSet.add(p.size);
      } else if (p.name.toLowerCase().includes("joint mortar")) {
        typeSet.add("JOINT MORTOR BAG");
      }
    });
    return Array.from(typeSet).sort();
  }, [products, isAACBlocks]);

  // Extract available types/sizes for Solid blocks
  const availableSolidBlockTypes = useMemo(() => {
    if (!isSolidBlocks) return [];
    const typeSet = new Set<string>();
    products.forEach((p) => {
      if (p.size) {
        typeSet.add(p.size);
      }
    });
    return Array.from(typeSet).sort();
  }, [products, isSolidBlocks]);

  // Extract available types for Paver blocks (extract from product names)
  const availablePaverBlockTypes = useMemo(() => {
    if (!isPaverBlocks) return [];
    const typeSet = new Set<string>();
    products.forEach((p) => {
      const name = p.name.toLowerCase();
      // Extract type from product name (e.g., "Bricks Type Paver Block" -> "Bricks")
      if (name.includes("bricks")) {
        typeSet.add("Bricks");
      } else if (name.includes("i shape")) {
        typeSet.add("I Shape");
      } else if (name.includes("zigzag")) {
        typeSet.add("Zigzag");
      } else if (name.includes("triangle")) {
        typeSet.add("Triangle");
      } else if (name.includes("hexagon")) {
        typeSet.add("Hexagon");
      } else if (name.includes("pentagon")) {
        typeSet.add("Pentagon");
      } else if (name.includes("basil")) {
        typeSet.add("Basil");
      } else if (name.includes("square")) {
        typeSet.add("Square");
      } else if (name.includes("oxford")) {
        typeSet.add("Oxford");
      }
    });
    return Array.from(typeSet).sort();
  }, [products, isPaverBlocks]);

  // Extract available types for Bricks (extract from product names)
  const availableBrickTypes = useMemo(() => {
    if (!isBricks) return [];
    const typeSet = new Set<string>();
    products.forEach((p) => {
      const name = p.name.toLowerCase();
      // Extract type from product name
      if (name.includes("flyash") || name.includes("fly ash")) {
        typeSet.add("Flyash");
      } else if (name.includes("chamber")) {
        typeSet.add("Chamber");
      } else if (name.includes("wirecut") || name.includes("wire cut")) {
        typeSet.add("Wirecut");
      }
    });
    return Array.from(typeSet).sort();
  }, [products, isBricks]);

  return (
    <div className="border-b border-gray-200 pb-6 mb-6">

      {/* Filter Toggle Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <span className="font-medium text-gray-900">
          Filters {activeFilterCount > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-construction-orange text-white text-xs rounded-full">
              {activeFilterCount}
            </span>
          )}
        </span>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Filters Panel */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:block space-y-6 mt-6`}
      >
        {/* TMT Bars Specific Filters - Only Brand Type */}
        {isTMTBars && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Brand Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  handleFilterChange("brandType", filters.brandType === "Primary" ? undefined : "Primary")
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filters.brandType === "Primary"
                    ? "bg-construction-orange text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Primary Brands
              </button>
              <button
                onClick={() =>
                  handleFilterChange(
                    "brandType",
                    filters.brandType === "Secondary" ? undefined : "Secondary"
                  )
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filters.brandType === "Secondary"
                    ? "bg-construction-orange text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Secondary Brands
              </button>
            </div>
          </div>
        )}

        {/* Bulk Materials Specific Filters */}
        {isBulkMaterials && (
          <>
            {/* Material Type Filter */}
            {availableMaterialTypes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Material Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableMaterialTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        handleFilterChange(
                          "materialType",
                          filters.materialType === type ? undefined : type
                        )
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filters.materialType === type
                          ? "bg-construction-orange text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Filter for Aggregates Only */}
            {showSizeFilter && availableSizes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size
                </label>
                <select
                  value={filters.size || ""}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Sizes</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Structural Steel Specific Filters */}
        {isStructuralSteel && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Product Type
            </label>
            <select
              value={filters.productType || ""}
              onChange={(e) => handleFilterChange("productType", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Types</option>
              {availableProductTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* AAC Blocks Specific Filters - Type/Size Filter */}
        {isAACBlocks && availableAACTypes.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Type / Size
            </label>
            <select
              value={filters.size || ""}
              onChange={(e) => handleFilterChange("size", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Types</option>
              {availableAACTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Solid Blocks Specific Filters - Type/Size Filter */}
        {isSolidBlocks && availableSolidBlockTypes.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Type / Size
            </label>
            <select
              value={filters.size || ""}
              onChange={(e) => handleFilterChange("size", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Types</option>
              {availableSolidBlockTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Paver Blocks Specific Filters - Type Filter */}
        {isPaverBlocks && availablePaverBlockTypes.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Type
            </label>
            <select
              value={filters.searchQuery || ""}
              onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Types</option>
              {availablePaverBlockTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Bricks Specific Filters - Type Filter */}
        {isBricks && availableBrickTypes.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Brick Type
            </label>
            <select
              value={filters.brickType || ""}
              onChange={(e) => handleFilterChange("brickType", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Types</option>
              {availableBrickTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Hume Pipes Specific Filters - Size */}
        {isHumePipes && availableSizes.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Size
            </label>
            <select
              value={filters.size || ""}
              onChange={(e) => handleFilterChange("size", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Sizes</option>
              {availableSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Shuttering Plywood Filters - Brand & Size */}
        {isShutteringPlywood && (
          <>
            {availableBrands.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Brand
                </label>
                <select
                  value={filters.brand || ""}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Brands</option>
                  {availableBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {availableSizes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Size
                </label>
                <select
                  value={filters.size || ""}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Sizes</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Ready Mix Plaster Filters - Brand & Packaging Size */}
        {isReadyMixPlaster && (
          <>
            {availableBrands.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Brand
                </label>
                <select
                  value={filters.brand || ""}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Brands</option>
                  {availableBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {availableSizes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Packaging Size
                </label>
                <select
                  value={filters.size || ""}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Sizes</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Ready Mix Concrete Specific Filters - Grade Filter */}
        {isReadyMixConcrete && availableGrades.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Grade
            </label>
            <select
              value={filters.grade || ""}
              onChange={(e) => handleFilterChange("grade", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all bg-white"
            >
              <option value="">All Grades</option>
              {availableGrades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
        )}

      </div>
    </div>
  );
}

