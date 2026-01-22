"use client";

type BrandMarqueeProps = {
  brands: string[];
  onBrandClick?: (brand: string) => void;
  selectedBrand?: string;
  className?: string;
};

export default function BrandMarquee({
  brands,
  onBrandClick,
  selectedBrand,
  className = "",
}: BrandMarqueeProps) {
  if (brands.length === 0) {
    return null;
  }

  return (
    <div className={`rounded-3xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-construction-orange"></div>
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Partner Brands</h3>
      </div>
      <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
        {brands.map((brand) => {
          const isSelected = selectedBrand === brand;
          return (
            <button
              key={brand}
              onClick={() => onBrandClick?.(brand)}
              className={`w-full px-4 py-3 rounded-xl border-2 text-xs font-black uppercase tracking-widest transition-all duration-300 text-left ${
                isSelected
                  ? "border-construction-orange bg-construction-orange text-white shadow-lg shadow-orange-500/20"
                  : "border-slate-100 bg-white text-construction-gray hover:border-construction-orange/30 hover:text-construction-orange"
              }`}
              disabled={!onBrandClick}
            >
              {brand}
            </button>
          );
        })}
      </div>
    </div>
  );
}

