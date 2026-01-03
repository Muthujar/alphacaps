"use client";

import Link from "next/link";

type ProductActionButtonsProps = {
  variant?: "default" | "small" | "large";
  className?: string;
};

export default function ProductActionButtons({ 
  variant = "default", 
  className = "" 
}: ProductActionButtonsProps) {
  const baseClasses = "inline-flex items-center justify-center";
  const sizeClasses = {
    small: "text-xs sm:text-sm",
    default: "",
    large: "text-base",
  };

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      <Link 
        href="/#enquiry" 
        className={`btn-primary ${baseClasses} ${sizeClasses[variant]}`}
      >
        Request a Quote
      </Link>
      <a 
        href="tel:+919629124777" 
        className={`btn-secondary ${baseClasses} ${sizeClasses[variant]}`}
      >
        Call Trade Desk
      </a>
    </div>
  );
}


