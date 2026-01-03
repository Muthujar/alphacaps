"use client";

import { ProductPrice } from "@/data/productCatalog";

type PriceDisplayProps = {
  price?: ProductPrice;
  className?: string;
};

export default function PriceDisplay({ price, className = "" }: PriceDisplayProps) {
  if (!price) {
    return (
      <span className={`text-sm font-medium text-gray-600 ${className}`}>
        Price on request
      </span>
    );
  }

  // Extract color class from className or use default
  const colorClass = className.includes("text-") 
    ? className.match(/text-\S+/)?.[0] || "text-construction-orange"
    : "text-construction-orange";
  const baseClasses = className.replace(/text-\S+/g, "").trim();

  // Handle old string format
  if (typeof price === "string") {
    return (
      <span className={`text-sm font-medium ${colorClass} ${baseClasses}`}>
        {price}
      </span>
    );
  }

  // Handle new price structure
  const { cft, tonnage, perKg, unit } = price;

  if (perKg) {
    // Flyash or similar per-kg pricing
    const parts = [perKg];
    if (tonnage && tonnage !== perKg) {
      parts.push(`or ${tonnage}/ton`);
    }
    return (
      <span className={`text-sm font-medium ${colorClass} ${baseClasses}`}>
        {parts.join(" ")}
      </span>
    );
  }

  if (cft && tonnage) {
    // Both CFT and tonnage pricing
    return (
      <div className={`flex flex-col gap-1 ${baseClasses}`}>
        <span className={`text-sm font-medium ${colorClass}`}>
          {cft} or {tonnage}
        </span>
        {unit && (
          <span className="text-xs text-gray-500">Price per {unit}</span>
        )}
      </div>
    );
  }

  if (cft) {
    // Only CFT pricing
    return (
      <div className={`flex flex-col gap-1 ${baseClasses}`}>
        <span className={`text-sm font-medium ${colorClass}`}>{cft}</span>
        {unit && (
          <span className="text-xs text-gray-500">Price per {unit}</span>
        )}
      </div>
    );
  }

  if (tonnage) {
    // Only tonnage pricing
    return (
      <div className={`flex flex-col gap-1 ${baseClasses}`}>
        <span className={`text-sm font-medium ${colorClass}`}>{tonnage}</span>
        {unit && (
          <span className="text-xs text-gray-500">Price per {unit}</span>
        )}
      </div>
    );
  }

  return (
    <span className={`text-sm font-medium text-gray-600 ${className}`}>
      Price on request
    </span>
  );
}

