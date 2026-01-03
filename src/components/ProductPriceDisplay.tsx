"use client";

import { ProductPrice } from "@/data/productCatalog";
import PriceDisplay from "./PriceDisplay";

type ProductPriceDisplayProps = {
  price?: ProductPrice;
  className?: string;
  textColor?: string;
};

export default function ProductPriceDisplay({ 
  price, 
  className = "",
  textColor = "text-construction-orange"
}: ProductPriceDisplayProps) {
  return (
    <div className={className}>
      <PriceDisplay price={price} className={`text-2xl font-semibold ${textColor}`} />
    </div>
  );
}

