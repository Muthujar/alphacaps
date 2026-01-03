import { scrapedProducts } from "./scrapedProducts";
import localImageManifest from "./localImageManifest.json";

type LocalImageManifest = {
  generatedAt: string;
  images: Record<string, string>;
};

export type ProductAttribute = {
  label: string;
  value: string;
};

// Enhanced price structure to support multiple units
export type ProductPrice = {
  cft?: string;      // Price per cubic feet
  tonnage?: string;  // Price per ton
  perKg?: string;    // Price per kg (for Flyash)
  unit?: string;     // Display unit
} | string;          // Support old string format for backward compatibility

export type ProductInfo = {
  name: string;
  slug: string;
  description: string;
  specifications?: string;
  image?: string;
  hiRes?: string;
  gallery?: string[];
  price?: ProductPrice;  // Updated to support new price structure
  details?: ProductAttribute[];
  video?: string;
  // Filterable attributes
  grade?: string;           // FE500, FE550, FE550D, CRS, HCRM
  brand?: string;           // Brand name (Tata, JSW, Vizag, etc.)
  brandType?: "Primary" | "Secondary";  // For TMT bars
  size?: string;            // 8mm, 12mm, 20mm, etc.
  materialType?: "Aggregate" | "Sand" | "Specialty";  // For bulk materials
  productType?: "Tubes" | "Sheets" | "Profiles";  // For structural steel
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  products: ProductInfo[];
};

type BaseProduct = Omit<ProductInfo, "slug">;

type BaseProductCategory = Omit<ProductCategory, "products"> & {
  products: BaseProduct[];
};

const baseProductCategories: BaseProductCategory[] = [
  {
    id: "bulk-materials",
    name: "Bulk Materials",
    description: "Aggregates, sand, and specialty materials for construction with competitive pricing in CFT and tonnage units",
    icon: "🪨",
    image: "/images/products/bulkhero.jpg",
    products: [
      // Aggregates
      {
        name: "6mm Aggregate",
        description: "Fine aggregates for plastering work and concrete mixing",
        specifications: "6mm size, IS 383 certified",
        size: "6mm",
        materialType: "Aggregate",
        image: "/images/products/aggregates.jpg",
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Size", value: "6mm" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Plastering, Concrete mixing" },
        ],
      },
      {
        name: "12mm Aggregate",
        description: "Fine aggregates for concrete mixing and construction applications",
        specifications: "12mm size, IS 383 certified",
        size: "12mm",
        materialType: "Aggregate",
        image: "/images/products/aggregates.jpg",
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Size", value: "12mm" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Concrete mixing, Construction" },
        ],
      },
      {
        name: "20mm Aggregate",
        description: "Standard aggregates for general concrete and construction work",
        specifications: "20mm size, IS 383 certified",
        size: "20mm",
        materialType: "Aggregate",
        image: "/images/products/aggregates.jpg",
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Size", value: "20mm" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "General concrete, Construction" },
        ],
      },
      {
        name: "30mm Aggregate",
        description: "Coarse aggregates for heavy construction and infrastructure projects",
        specifications: "30mm size, IS 383 certified",
        size: "30mm",
        materialType: "Aggregate",
        image: "/images/products/aggregates.jpg",
        price: { cft: "₹55/cft", tonnage: "₹1,050/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Size", value: "30mm" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Heavy construction, Infrastructure" },
        ],
      },
      {
        name: "40mm Aggregate",
        description: "Coarse aggregates for heavy construction and infrastructure projects",
        specifications: "40mm size, IS 383 certified",
        size: "40mm",
        materialType: "Aggregate",
        image: "/images/products/aggregates.jpg",
        price: { cft: "₹55/cft", tonnage: "₹1,050/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Size", value: "40mm" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Heavy construction, Infrastructure" },
        ],
      },
      // Sand Materials
      {
        name: "M Sand",
        description: "Manufactured sand for sustainable concrete and construction applications",
        specifications: "M-sand, crushed granite fines, IS 383 certified",
        materialType: "Sand",
        image: "/images/products/m-sand.jpg",
        price: { cft: "₹60/cft", tonnage: "₹1,200/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Manufactured Sand" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Concrete mixing, Construction" },
        ],
      },
      {
        name: "P Sand",
        description: "Premium plastering sand with controlled gradation for high-finish applications",
        specifications: "P-sand, screened fine aggregate, IS 383 certified",
        materialType: "Sand",
        image: "/images/products/construction-sand.jpg",
        price: { cft: "₹70/cft", tonnage: "₹1,300/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Plastering Sand" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Plastering, High-finish construction" },
        ],
      },
      {
        name: "River Sand",
        description: "Natural river sand for high-quality concrete and construction applications",
        specifications: "Natural river sand, IS 383 certified",
        materialType: "Sand",
        image: "/images/products/construction-sand.jpg",
        price: { cft: "₹90/cft", tonnage: "₹2,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "River Sand" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "High-quality concrete, Construction" },
        ],
      },
      // Specialty Materials
      {
        name: "Wet Mix (WMM)",
        description: "Ready-mix wet mix macadam for road construction and base preparation",
        specifications: "Ready-mix application, IS 2386 certified",
        materialType: "Specialty",
        image: "/images/products/WMM.jpg",
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Wet Mix Macadam" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 2386" },
          { label: "Usage", value: "Road construction, Base preparation" },
        ],
      },
      {
        name: "Road Granulated Subbase (GSB)",
        description: "Granulated subbase material for road construction and infrastructure projects",
        specifications: "Road construction grade, IS 2386 certified",
        materialType: "Specialty",
        image: "/images/products/gsb1.jpg",
        gallery: [
          "/images/products/gsb1.jpg",
          "/images/products/gsb2.jpg",
          "/images/products/gsb3.jpeg",
        ],
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Granulated Subbase" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 2386" },
          { label: "Usage", value: "Road construction, Infrastructure" },
        ],
      },
      {
        name: "Filling Granulated Subbase (Filling GSB)",
        description: "Granulated subbase material for filling and foundation work",
        specifications: "Filling grade, suitable for foundation work",
        materialType: "Specialty",
        image: "/images/products/GSB0.jpg",
        details: [
          { label: "Type", value: "Filling Granulated Subbase" },
          { label: "Usage", value: "Foundation filling, Earthwork" },
        ],
      },
      {
        name: "Dust",
        description: "Fine aggregate dust for construction and filling applications",
        specifications: "Fine aggregate, IS 383 certified",
        materialType: "Specialty",
        image: "/images/products/dust1.jpg",
        gallery: [
          "/images/products/dust1.jpg",
          "/images/products/Dust2.jpg",
        ],
        price: { cft: "₹50/cft", tonnage: "₹1,000/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Fine Aggregate Dust" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 383" },
          { label: "Usage", value: "Construction, Filling work" },
        ],
      },
      {
        name: "Flyash",
        description: "Eco-friendly fly ash for construction and cement manufacturing applications",
        specifications: "Fly ash grade, IS 3812 certified",
        materialType: "Specialty",
        image: "/images/products/flyash1.webp",
        price: { perKg: "₹1.2/kg", tonnage: "₹1,200/ton", unit: "Per Kg or Tonnage" },
        details: [
          { label: "Type", value: "Fly Ash" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Certification", value: "IS 3812" },
          { label: "Usage", value: "Cement manufacturing, Construction" },
        ],
      },
      {
        name: "Hill Earth",
        description: "Economical hill earth material for filling and earthwork projects",
        specifications: "Hill earth grade, natural material",
        materialType: "Specialty",
        image: "/images/products/Hillearth1.jpg",
        price: { cft: "₹30/cft", tonnage: "₹800/ton", unit: "CFT or Tonnage" },
        details: [
          { label: "Type", value: "Hill Earth" },
          { label: "Minimum Order Quantity", value: "1 ton" },
          { label: "Usage", value: "Filling work, Earthwork projects" },
        ],
      },
    ],
  },
  {
    id: "tmt-bars",
    name: "TMT Bars",
    description: "High-quality TMT bars from Primary and Secondary brands in various grades (FE500, FE550, FE550D, CRS, HCRM) and sizes (8mm-32mm) for all construction needs",
    icon: "🔩",
    image: "/images/products/tmtbarshero.jpg",
    products: [
      // Primary Brands
      {
        name: "Tata Steel TMT Bars",
        description: "Premium grade TMT bars from Tata Steel, one of India's leading steel manufacturers, available in multiple grades and sizes for all construction applications",
        specifications: "IS 1786 certified, Primary brand",
        brand: "Tata Steel",
        brandType: "Primary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527388836/PC/RX/IY/213683241/8mm-tata-tiscon-sd-tmt-bar-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "Tata Steel" },
          { label: "Brand Type", value: "Primary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial, Industrial construction" },
        ],
      },
      {
        name: "JSW Steel TMT Bars",
        description: "Premium grade TMT bars from JSW Steel, a major integrated steel producer, available in multiple grades and sizes for structural reinforcement",
        specifications: "IS 1786 certified, Primary brand",
        brand: "JSW Steel",
        brandType: "Primary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "JSW Steel" },
          { label: "Brand Type", value: "Primary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial, Industrial construction" },
        ],
      },
      {
        name: "Jindal Panther TMT Bars",
        description: "Premium grade TMT bars from Jindal Panther, part of the Jindal Steel Group, available in multiple grades and sizes for quality construction",
        specifications: "IS 1786 certified, Primary brand",
        brand: "Jindal Panther",
        brandType: "Primary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Jindal Panther" },
          { label: "Brand Type", value: "Primary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial, Industrial construction" },
        ],
      },
      {
        name: "Vizag Steel TMT Bars",
        description: "Premium grade TMT bars from Vizag Steel (RINL), a government-owned enterprise, available in multiple grades and sizes for reliable construction",
        specifications: "IS 1786 certified, Primary brand",
        brand: "Vizag Steel",
        brandType: "Primary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438258895/ZH/DG/QB/213683241/25mm-vizag-tmt-bars-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438265486/ZZ/CU/QO/213683241/8mm-vizag-steel-tmt-bars-1000x1000.jpg",
        ],
        details: [
          { label: "Brand", value: "Vizag Steel (RINL)" },
          { label: "Brand Type", value: "Primary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial, Industrial construction" },
        ],
      },
      {
        name: "SAIL TMT Bars",
        description: "Premium grade TMT bars from SAIL (Steel Authority of India Limited), a leading public sector steel producer, available in multiple grades and sizes",
        specifications: "IS 1786 certified, Primary brand",
        brand: "SAIL",
        brandType: "Primary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/7/527389092/XN/PV/XA/213683241/12mm-sail-tmt-bars-1000x1000.png",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2025/7/527389092/XN/PV/XA/213683241/12mm-sail-tmt-bars-1000x1000.png",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527389092/XN/PV/XA/213683241/12mm-sail-tmt-bars-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527389093/FH/IL/XP/213683241/12mm-sail-tmt-bars-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "SAIL" },
          { label: "Brand Type", value: "Primary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial, Industrial construction" },
        ],
      },
      // Secondary Brands
      {
        name: "Shyam Steel TMT Bars",
        description: "Quality TMT bars from Shyam Steel, a trusted secondary brand, available in multiple grades and sizes for cost-effective construction",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Shyam Steel",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Shyam Steel" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Suryadev TMT Bars",
        description: "Quality TMT bars from Suryadev, a reliable secondary brand, available in multiple grades and sizes for general construction needs",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Suryadev",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527389297/GG/MF/EI/213683241/25mm-suryadev-tmt-bars-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "Suryadev" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Pulkit TMT Bars",
        description: "Quality TMT bars from Pulkit, a trusted secondary brand, available in multiple grades and sizes for quality construction at competitive prices",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Pulkit",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-1000x1000.jpg",
        ],
        details: [
          { label: "Brand", value: "Pulkit" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Tulsyan TMT Bars",
        description: "Quality TMT bars from Tulsyan, a reliable secondary brand, available in multiple grades and sizes for construction projects",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Tulsyan",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-500x500.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-500x500.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438664246/ES/YY/AD/213683241/12mm-tulsyan-tmt-steel-bars-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438660356/MX/AQ/WC/213683241/prod-20220307-142147786665-jpg-1000x1000.jpg",
        ],
        details: [
          { label: "Brand", value: "Tulsyan" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Jeppiar TMT Bars",
        description: "Quality TMT bars from Jeppiar, a trusted secondary brand, available in multiple grades and sizes for construction applications",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Jeppiar",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Jeppiar" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Thirumala TMT Bars",
        description: "Quality TMT bars from Thirumala, a reliable secondary brand, available in multiple grades and sizes for construction needs",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Thirumala",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Thirumala" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Sumangala TMT Bars",
        description: "Quality TMT bars from Sumangala, a trusted secondary brand, available in multiple grades and sizes for quality construction",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Sumangala",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Sumangala" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "GBR TMT Bars",
        description: "Quality TMT bars from GBR, a reliable secondary brand, available in multiple grades and sizes for construction projects",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "GBR",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "GBR" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
      {
        name: "Vikky TMT Bars",
        description: "Quality TMT bars from Vikky, a trusted secondary brand, available in multiple grades and sizes for construction applications",
        specifications: "IS 1786 certified, Secondary brand",
        brand: "Vikky",
        brandType: "Secondary",
        grade: "FE500, FE550, FE550D, CRS, HCRM",
        size: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        details: [
          { label: "Brand", value: "Vikky" },
          { label: "Brand Type", value: "Secondary" },
          { label: "Available Grades", value: "FE500, FE550, FE550D, CRS, HCRM" },
          { label: "Available Sizes", value: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm" },
          { label: "Certification", value: "IS 1786" },
          { label: "Application", value: "Residential, Commercial construction" },
        ],
      },
    ],
  },
  {
    id: "structural-steel",
    name: "Structural Steel",
    description: "Structural steel products including MS angles, bars, plates, sheets, beams, coils, channels, binding wires, and nails for industrial construction and infrastructure projects. Prices exclude 18% tax.",
    icon: "🔧",
    image: "/images/products/steelplates1.jpg",
    products: [
      // Commented out old products
      /*
      {
        name: "Square Tube",
        description: "Structural hollow sections (square profile) for construction and fabrication",
        specifications: "Square profile, structural grade",
        productType: "Tubes",
        image: "/images/products/Squaretube1.jpg",
        gallery: [
          "/images/products/Squaretube1.jpg",
          "/images/products/squaretube2.jpg",
        ],
        details: [
          { label: "Type", value: "Structural Hollow Section" },
          { label: "Profile", value: "Square" },
          { label: "Usage", value: "Industrial construction, Fabrication" },
        ],
      },
      {
        name: "Round Tube",
        description: "Circular hollow sections for construction and infrastructure projects",
        specifications: "Round profile, structural grade",
        productType: "Tubes",
        image: "/images/products/roundtube1.jpg",
        gallery: [
          "/images/products/roundtube1.jpg",
          "/images/products/roundtube2.jpg",
        ],
        details: [
          { label: "Type", value: "Structural Hollow Section" },
          { label: "Profile", value: "Round" },
          { label: "Usage", value: "Infrastructure projects, Fabrication" },
        ],
      },
      {
        name: "HR Sheet (Hot Rolled Sheet)",
        description: "Hot rolled sheet metal for construction and fabrication applications",
        specifications: "Hot rolled grade, standard thickness",
        productType: "Sheets",
        image: "/images/products/hrsheet1.jpg",
        gallery: [
          "/images/products/hrsheet1.jpg",
          "/images/products/Hrsheet2.jpg",
        ],
        details: [
          { label: "Type", value: "Hot Rolled Sheet" },
          { label: "Grade", value: "Structural Grade" },
          { label: "Usage", value: "Construction, Fabrication works" },
        ],
      },
      {
        name: "CR Sheet (Cold Rolled Sheet)",
        description: "Cold rolled sheet metal for high-precision fabrication and architectural applications",
        specifications: "Cold rolled grade, standard thickness",
        productType: "Sheets",
        image: "/images/products/cr sheet1.jpg",
        gallery: [
          "/images/products/cr sheet1.jpg",
          "/images/products/Crsheet2.jpg",
        ],
        details: [
          { label: "Type", value: "Cold Rolled Sheet" },
          { label: "Grade", value: "Precision Grade" },
          { label: "Usage", value: "Architectural applications, Precision fabrication" },
        ],
      },
      {
        name: "Steel Plates",
        description: "Thick steel plates for heavy construction, infrastructure, and industrial applications",
        specifications: "Thick plates, structural grade",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        details: [
          { label: "Type", value: "Steel Plates" },
          { label: "Grade", value: "Structural Grade" },
          { label: "Usage", value: "Heavy construction, Infrastructure projects" },
        ],
      },
      {
        name: "L Angle",
        description: "L-shaped angle sections for structural framing and architectural applications",
        specifications: "L-shaped profile, structural grade",
        productType: "Profiles",
        image: "/images/products/Langle1.jpg",
        gallery: [
          "/images/products/Langle1.jpg",
          "/images/products/langle2.jpg",
        ],
        details: [
          { label: "Type", value: "Angle Section" },
          { label: "Profile", value: "L-Shaped" },
          { label: "Usage", value: "Structural framing, Architectural applications" },
        ],
      },
      */
      // New products
      {
        name: "Binding Wires (MS & GI)",
        description: "Mild steel and galvanized iron binding wires for construction and reinforcement work",
        specifications: "MS and GI binding wires, various gauges",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "Binding Wires" },
          { label: "Material", value: "MS & GI" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Construction, Reinforcement work" },
    ],
  },
  {
        name: "Nails",
        description: "Construction nails for various building and fabrication applications",
        specifications: "Standard construction nails, various sizes",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "Nails" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Construction, Fabrication" },
        ],
      },
      {
        name: "MS Angles",
        description: "Mild steel angle sections for structural framing and construction applications",
        specifications: "MS angles, structural grade",
        productType: "Profiles",
        image: "/images/products/Langle1.jpg",
        gallery: [
          "/images/products/Langle1.jpg",
          "/images/products/langle2.jpg",
        ],
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "MS Angles" },
          { label: "Material", value: "Mild Steel" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Structural framing, Construction" },
        ],
      },
      {
        name: "Bars",
        description: "Steel bars for construction and structural applications",
        specifications: "Steel bars, structural grade",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "Bars" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Construction, Structural applications" },
        ],
      },
      {
        name: "MS Plate",
        description: "Mild steel plates for heavy construction, infrastructure, and industrial applications",
        specifications: "MS plates, structural grade",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "MS Plate" },
          { label: "Material", value: "Mild Steel" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Heavy construction, Infrastructure projects" },
        ],
      },
      {
        name: "MS Sheet",
        description: "Mild steel sheets for construction and fabrication applications",
        specifications: "MS sheets, structural grade",
        productType: "Sheets",
        image: "/images/products/hrsheet1.jpg",
        gallery: [
          "/images/products/hrsheet1.jpg",
          "/images/products/Hrsheet2.jpg",
        ],
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "MS Sheet" },
          { label: "Material", value: "Mild Steel" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Construction, Fabrication works" },
        ],
      },
      {
        name: "MS Beams",
        description: "Mild steel beams for structural support and construction applications",
        specifications: "MS beams, structural grade",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "MS Beams" },
          { label: "Material", value: "Mild Steel" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Structural support, Construction" },
        ],
      },
      {
        name: "HR Coil",
        description: "Hot rolled coils for manufacturing and fabrication applications",
        specifications: "HR coils, hot rolled grade",
        productType: "Sheets",
        image: "/images/products/hrsheet1.jpg",
        gallery: [
          "/images/products/hrsheet1.jpg",
          "/images/products/Hrsheet2.jpg",
        ],
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "HR Coil" },
          { label: "Material", value: "Hot Rolled" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Manufacturing, Fabrication" },
        ],
      },
      {
        name: "CR Sheet",
        description: "Cold rolled sheets for high-precision fabrication and architectural applications",
        specifications: "CR sheets, cold rolled grade",
        productType: "Sheets",
        image: "/images/products/cr sheet1.jpg",
        gallery: [
          "/images/products/cr sheet1.jpg",
          "/images/products/Crsheet2.jpg",
        ],
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "CR Sheet" },
          { label: "Material", value: "Cold Rolled" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Architectural applications, Precision fabrication" },
        ],
      },
      {
        name: "MS Steel Channels",
        description: "Mild steel channel sections for structural framing and construction applications",
        specifications: "MS channels, structural grade",
        productType: "Profiles",
        image: "/images/products/steelplates1.jpg",
        price: "Price on request +TAX",
        details: [
          { label: "Type", value: "MS Steel Channels" },
          { label: "Material", value: "Mild Steel" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Structural framing, Construction" },
        ],
      },
    ],
  },
  {
    id: "aac-blocks",
    name: "AAC Blocks",
    description: "Autoclaved Aerated Concrete blocks from leading brands including Birla, Mepcrete, Fusion, Kamcrete, Ekocon, Cubecrete, and NCL. All prices inclusive of 12% tax.",
    icon: "🧱",
    image: "/images/products/aac-blockhero.jpeg",
    products: [
      {
        name: "4 Inch AAC Block",
        description: "Standard AAC blocks for partition walls from leading brands including Birla, Mepcrete, Fusion, Kamcrete, Ekocon, Cubecrete, and NCL",
        specifications: "4 inch thickness, 600x200x100mm, available from multiple brands",
        size: "4 INCH",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        ],
        video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI",
        price: "₹46 (Inclusive of Tax)",
        details: [
          { label: "Size", value: "4 Inch" },
          { label: "Available Brands", value: "BIRLA, MEPCRETE, FUSION, KAMCRETE, EKOCON, CUBECRETE, NCL" },
          { label: "Tax", value: "12% (Inclusive)" },
          { label: "Usage", value: "Partition walls, Non-load bearing walls" },
        ],
      },
      {
        name: "6 Inch AAC Block",
        description: "Standard AAC blocks for load-bearing walls from leading brands including Birla, Mepcrete, Fusion, Kamcrete, Ekocon, Cubecrete, and NCL",
        specifications: "6 inch thickness, 600x200x150mm, available from multiple brands",
        size: "6 INCH",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        ],
        video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI",
        price: "₹68 (Inclusive of Tax)",
        details: [
          { label: "Size", value: "6 Inch" },
          { label: "Available Brands", value: "BIRLA, MEPCRETE, FUSION, KAMCRETE, EKOCON, CUBECRETE, NCL" },
          { label: "Tax", value: "12% (Inclusive)" },
          { label: "Usage", value: "Load-bearing walls, Structural construction" },
        ],
      },
      {
        name: "8 Inch AAC Block",
        description: "Standard AAC blocks for heavy construction from leading brands including Birla, Mepcrete, Fusion, Kamcrete, Ekocon, Cubecrete, and NCL",
        specifications: "8 inch thickness, 600x200x200mm, available from multiple brands",
        size: "8 INCH",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        ],
        video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI",
        price: "₹90 (Inclusive of Tax)",
        details: [
          { label: "Size", value: "8 Inch" },
          { label: "Available Brands", value: "BIRLA, MEPCRETE, FUSION, KAMCRETE, EKOCON, CUBECRETE, NCL" },
          { label: "Tax", value: "12% (Inclusive)" },
          { label: "Usage", value: "Heavy construction, Load-bearing walls" },
        ],
      },
      {
        name: "9 Inch AAC Block",
        description: "Standard AAC blocks for extra heavy construction from leading brands including Birla, Mepcrete, Fusion, Kamcrete, Ekocon, Cubecrete, and NCL",
        specifications: "9 inch thickness, 600x200x225mm, available from multiple brands",
        size: "9 INCH",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        ],
        video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI",
        price: "₹104 (Inclusive of Tax)",
        details: [
          { label: "Size", value: "9 Inch" },
          { label: "Available Brands", value: "BIRLA, MEPCRETE, FUSION, KAMCRETE, EKOCON, CUBECRETE, NCL" },
          { label: "Tax", value: "12% (Inclusive)" },
          { label: "Usage", value: "Extra heavy construction, Commercial buildings" },
        ],
      },
      {
        name: "AAC Block Joint Mortar Bag",
        description: "Specialized joint mortar for AAC block installation and bonding",
        specifications: "Ready-mix joint mortar, 25kg bag",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        ],
        video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI",
        price: "₹500 (Inclusive of Tax)",
        details: [
          { label: "Type", value: "Joint Mortar" },
          { label: "Weight", value: "25kg bag" },
          { label: "Tax", value: "12% (Inclusive)" },
          { label: "Usage", value: "AAC block installation, Bonding" },
        ],
      },
    ],
  },
  {
    id: "solid-blocks",
    name: "Solid Blocks",
    description: "Heavy-duty concrete solid blocks for load-bearing walls and structural construction. Prices exclude 18% tax.",
    icon: "🧱",
    image: "/images/products/soliblockhero.jpg",
    products: [
      {
        name: "4 Inch Solid Block",
        description: "Light concrete solid blocks for partition walls",
        specifications: "4 inch thickness, solid design, standard dimensions",
        size: "4 INCH",
        image: "/images/products/concrete-blocks.jpg",
        price: "₹42 +TAX",
        details: [
          { label: "Size", value: "4 Inch" },
          { label: "Type", value: "Solid Block" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Partition walls, Non-load bearing walls" },
        ],
      },
      {
        name: "6 Inch Solid Block",
        description: "Standard concrete solid blocks for general construction",
        specifications: "6 inch thickness, solid design, standard dimensions",
        size: "6 INCH",
        image: "/images/products/concrete-blocks.jpg",
        price: "₹52 +TAX",
        details: [
          { label: "Size", value: "6 Inch" },
          { label: "Type", value: "Solid Block" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "General construction, Load-bearing walls" },
        ],
      },
      {
        name: "8 Inch Solid Block",
        description: "Heavy-duty concrete solid blocks for load-bearing walls",
        specifications: "8 inch thickness, solid design, standard dimensions",
        size: "8 INCH",
        image: "/images/products/concrete-blocks.jpg",
        price: "₹62 +TAX",
        details: [
          { label: "Size", value: "8 Inch" },
          { label: "Type", value: "Solid Block" },
          { label: "Tax", value: "18% (Additional)" },
          { label: "Usage", value: "Load-bearing walls, Heavy construction" },
        ],
      },
    ],
  },
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    description: "Interlocking paver blocks in various shapes and patterns including Bricks, I Shape, Zigzag, Triangle, Hexagon, Pentagon, Basil, Square, and Oxford. Available in 60mm, 80mm, and 100mm thicknesses.",
    icon: "🧱",
    image: "/images/products/Paver-Blocks-hero.jpg",
    products: [
      {
        name: "Bricks Type Paver Block",
        description: "Brick-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for decorative flooring and pathways",
        specifications: "Brick shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Bricks" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Decorative flooring, Pathways, Patios" },
        ],
      },
      {
        name: "I Shape Paver Block",
        description: "I-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for driveways and plazas",
        specifications: "I shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "I Shape" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Driveways, Plazas, Heavy-duty flooring" },
        ],
      },
      {
        name: "Zigzag Paver Block",
        description: "Zigzag interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for decorative flooring layouts",
        specifications: "Zigzag pattern, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Zigzag" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Decorative flooring, Pathways, Patios" },
        ],
      },
      {
        name: "Triangle Paver Block",
        description: "Triangle-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for geometric flooring patterns",
        specifications: "Triangle shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Triangle" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Geometric patterns, Decorative flooring" },
        ],
      },
      {
        name: "Hexagon Paver Block",
        description: "Hexagon-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for modern flooring designs",
        specifications: "Hexagon shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Hexagon" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Modern designs, Decorative flooring" },
        ],
      },
      {
        name: "Pentagon Paver Block",
        description: "Pentagon-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for unique flooring patterns",
        specifications: "Pentagon shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Pentagon" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Unique patterns, Decorative flooring" },
        ],
      },
      {
        name: "Basil Paver Block",
        description: "Basil-shaped interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for decorative flooring applications",
        specifications: "Basil shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Basil" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Decorative flooring, Pathways" },
        ],
      },
      {
        name: "Square Paver Block",
        description: "Square interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for classic flooring patterns",
        specifications: "Square shape, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Square" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Classic patterns, Decorative flooring" },
        ],
      },
      {
        name: "Oxford Paver Block",
        description: "Oxford-pattern interlocking paver blocks available in 60mm, 80mm, and 100mm thicknesses for elegant flooring designs",
        specifications: "Oxford pattern, interlocking design, multiple thickness options",
        grade: "60MM, 80MM, 100MM",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
        hiRes: "/images/products/Paver-Blocks-hero.jpg",
        gallery: [
          "/images/products/Paver-Blocks-hero.jpg"
        ],
        details: [
          { label: "Type", value: "Oxford" },
          { label: "Available Grades", value: "60MM, 80MM, 100MM" },
          { label: "Usage", value: "Elegant designs, Decorative flooring" },
        ],
      },
    ],
  },
  {
    id: "construction-cement",
    name: "Construction Cement",
    description: "Premium grade PPC, OPC 53, and PSC cement from leading manufacturers including UltraTech, Ramco, Dalmia, Coromandel, ACC, KCP, Chettinad, Maha, Zuari, Priya, Nagarjuna, and Penna. Available in 50KG bags or bulkers (loose cement). Prices exclude 18% tax.",
    icon: "🏗️",
    image: "/images/products/cement- hero.png",
    products: [
      {
        name: "Ramco Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "RAMCO",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390416/JN/YT/JZ/213683241/50kg-ramco-super-grade-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390417/EK/TM/FW/213683241/50kg-ramco-super-grade-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "RAMCO" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "UltraTech Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "ULTRATECH",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390165/HY/HB/QI/213683241/50kg-ultratech-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390166/NZ/LZ/PU/213683241/50kg-ultratech-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "ULTRATECH" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Dalmia Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "DALMIA",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390503/GI/YY/SH/213683241/50kg-dalmia-dsp-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390508/JL/BM/BW/213683241/50kg-dalmia-dsp-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "DALMIA" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Coromandel Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "COROMANDEL",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "/images/products/cement.jpg",
        hiRes: "/images/products/cement.jpg",
        gallery: ["/images/products/cement.jpg"],
        details: [
          { label: "Brand", value: "COROMANDEL" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "ACC Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "ACC",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527391577/FV/FL/AS/213683241/50kg-acc-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527391578/RC/ZG/VS/213683241/50kg-acc-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "ACC" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "KCP Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "KCP",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "/images/products/cement.jpg",
        hiRes: "/images/products/cement.jpg",
        gallery: ["/images/products/cement.jpg"],
        details: [
          { label: "Brand", value: "KCP" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Chettinad Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "CHETTINAD",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390909/PP/FJ/YD/213683241/50kg-chettinad-super-grade-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527390911/VQ/KV/RY/213683241/50kg-chettinad-super-grade-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "CHETTINAD" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Maha Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "MAHA",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "/images/products/cement.jpg",
        hiRes: "/images/products/cement.jpg",
        gallery: ["/images/products/cement.jpg"],
        details: [
          { label: "Brand", value: "MAHA" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Zuari Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "ZUARI",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-1000x1000.jpg",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527392009/AS/HK/VK/213683241/zuari-ppc-cement-1000x1000.png",
          "https://5.imimg.com/data5/SELLER/Default/2025/7/527392010/UN/YY/TZ/213683241/zuari-ppc-cement-1000x1000.png",
        ],
        details: [
          { label: "Brand", value: "ZUARI" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Priya Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "PRIYA",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "/images/products/cement.jpg",
        hiRes: "/images/products/cement.jpg",
        gallery: ["/images/products/cement.jpg"],
        details: [
          { label: "Brand", value: "PRIYA" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Nagarjuna Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "NAGARJUNA",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "/images/products/cement.jpg",
        hiRes: "/images/products/cement.jpg",
        gallery: ["/images/products/cement.jpg"],
        details: [
          { label: "Brand", value: "NAGARJUNA" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
      {
        name: "Penna Cement",
        description: "Premium cement available in PPC, OPC 53, and PSC grades for construction",
        specifications: "50kg bag or bulker",
        brand: "PENNA",
        grade: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-250x250.jpg",
        hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-1000x1000.jpg",
        gallery: [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-1000x1000.jpg",
        ],
        details: [
          { label: "Brand", value: "PENNA" },
          { label: "Available Grades", value: "PPC (PORTLAND POZZOLONA CEMENT), OPC 53 (ORDINARY PORTLAND CEMENT), PSC (PORTLAND SLAG CEMENT)" },
          { label: "Packaging Type", value: "50KG BAGS OR BULKERS (LOOSE CEMENT)" },
          { label: "Tax", value: "18% (Additional)" },
        ],
      },
    ],
  },
  {
    id: "shuttering-plywood",
    name: "Shuttering Plywood",
    description: "High-quality film-faced plywood for concrete shuttering",
    icon: "🪵",
    image: "/images/products/shuttering-plywood-hero.jpg",
    products: [
      {
        name: "Mine Gold Film Faced Shuttering Plywood",
        description:
          "Film-faced Mine Gold panels hold fresh concrete securely in place, resisting weather while stripping clean without bonding to the pour.",
        specifications: "12mm thickness, ISI marked",
        price: "Approx. Rs 68 / sq ft",
        brand: "Mine Gold",
        size: "8x4",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438681115/CM/JB/VL/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527392195/SO/TG/YR/213683241/mine-gold-film-faced-shuttering-plywood-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-250x250.jpg",
        ],
        details: [
          { label: "Minimum Order Quantity", value: "50 sq ft" },
          { label: "Thickness", value: "12 mm" },
          { label: "Size (sq ft)", value: "8x4" },
          { label: "Core Material", value: "Gurjan" },
          { label: "Usage/Application", value: "Shuttering / Concrete formwork" },
          { label: "Is It ISI Marked", value: "ISI Marked" },
          { label: "Brand", value: "Mine Gold" },
          { label: "Product Wood Type", value: "Plywood Board" },
        ],
      },
      {
        name: "Continental Film Faced Shuttering Plywood Board",
        description:
          "Gurjan-core Continental panels use WBP bonding to deliver a reusable, dimensionally stable formwork face for structural pours and paneling.",
        specifications: "12mm thickness, ISI marked",
        price: "Approx. Rs 46 / sq ft",
        brand: "Continental",
        size: "8x4",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438683762/BD/HW/JI/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438684338/TB/IW/XN/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-250x250.jpg",
        ],
        details: [
          { label: "Minimum Order Quantity", value: "50 sq ft" },
          { label: "Thickness", value: "12 mm" },
          { label: "Size (sq ft)", value: "8x4" },
          { label: "Usage/Application", value: "Shuttering / Concrete formwork" },
          { label: "Core Material", value: "Gurjan" },
          { label: "Is It ISI Marked", value: "ISI Marked" },
          { label: "Brand", value: "Continental" },
          { label: "Product Wood Type", value: "Plywood Board" },
        ],
      },
      {
        name: "Potential Film Faced Shuttering Plywood Board",
        description:
          "Potential film-faced sheets stack multiple hot-pressed veneers with WBP glue, boosting elasticity and hardness for wet-site shuttering.",
        specifications: "12mm thickness, ISI marked",
        price: "Approx. Rs 40 / sq ft",
        brand: "Potential",
        size: "8x4",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527392299/RE/HE/SJ/213683241/potential-film-faced-shuttering-plywood-board-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527392300/NS/AD/UL/213683241/potential-film-faced-shuttering-plywood-board-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-250x250.jpg",
        ],
        details: [
          { label: "Minimum Order Quantity", value: "50 sq ft" },
          { label: "Thickness", value: "12 mm" },
          { label: "Size (sq ft)", value: "8x4" },
          { label: "Core Material", value: "Gurjan" },
          { label: "Usage/Application", value: "Shuttering / Concrete formwork" },
          { label: "Is It ISI Marked", value: "ISI Marked" },
          { label: "Brand", value: "Potential" },
          { label: "Product Wood Type", value: "Plywood Board" },
        ],
      },
    ],
  },
  // Commented out - already covered in bulk-materials category
  /*
  {
    id: "construction-sand",
    name: "Construction Sand",
    description: "Washed and graded sand for quality concrete",
    icon: "🏖️",
    image: "/images/products/construction-sand.jpg",
    products: [
      {
        name: "Grey River Construction Sand",
        description: "Premium washed river sand for concrete",
        specifications: "Fine grade, IS 383 certified",
      },
      {
        name: "Rough Construction Sand",
        description: "Coarse sand for masonry and plastering",
        specifications: "Medium grade, IS 383 certified",
      },
      {
        name: "Brown Rubbish Construction Sand",
        description: "Economical sand for general construction",
        specifications: "Standard grade, IS 383 certified",
      },
      {
        name: "Gray Construction P Sand",
        description: "Plaster sand with controlled gradation",
        specifications: "P-sand, screened fine aggregate",
      },
      {
        name: "Gray Construction M Sand",
        description: "Manufactured sand for sustainable concrete",
        specifications: "M-sand, crushed granite fines",
      },
    ],
  },
  */
  {
    id: "ready-mix-concrete",
    name: "Ready Mix Concrete",
    description: "Fresh concrete delivered to your construction site",
    icon: "🚛",
    image: "/images/products/rmc-hero.jpg",
    products: [
      {
        name: "M5 Ready Mix Concrete",
        description: "Low-grade concrete for non-structural applications",
        specifications: "M5 grade, 5 N/mm² strength",
        grade: "M5",
      },
      {
        name: "M10 Ready Mix Concrete",
        description: "Lean mix concrete for blinding and levelling",
        specifications: "M10 grade, 10 N/mm² strength",
        grade: "M10",
      },
      {
        name: "M15 Ready Mixed Concrete",
        description: "Standard grade concrete for general construction",
        specifications: "M15 grade, 7.5 N/mm² strength",
        grade: "M15",
      },
      {
        name: "M20 Ready Mix Concrete",
        description: "High-strength concrete for structural elements",
        specifications: "M20 grade, 20 N/mm² strength",
        grade: "M20",
      },
      {
        name: "M25 Ready Mix Concrete",
        description: "Structural grade concrete for columns and slabs",
        specifications: "M25 grade, 25 N/mm² strength",
        grade: "M25",
      },
      {
        name: "M30 Ready Mix Concrete",
        description: "Premium grade concrete for heavy construction",
        specifications: "M30 grade, 30 N/mm² strength",
        grade: "M30",
      },
      {
        name: "M35 Ready Mix Concrete",
        description: "High-performance concrete for demanding structures",
        specifications: "M35 grade, 35 N/mm² strength",
        grade: "M35",
      },
      {
        name: "M40 Ready Mix Concrete",
        description: "High-strength concrete for critical structural elements",
        specifications: "M40 grade, 40 N/mm² strength",
        grade: "M40",
      },
      {
        name: "M45 Ready Mix Concrete",
        description: "Ultra-high-strength concrete for specialized applications",
        specifications: "M45 grade, 45 N/mm² strength",
        grade: "M45",
      },
      {
        name: "M50 Ready Mix Concrete",
        description: "Premium high-strength concrete for heavy-duty construction",
        specifications: "M50 grade, 50 N/mm² strength",
        grade: "M50",
      },
      {
        name: "M55 Ready Mix Concrete",
        description: "Super high-strength concrete for specialized infrastructure",
        specifications: "M55 grade, 55 N/mm² strength",
        grade: "M55",
      },
      {
        name: "M60 Ready Mix Concrete",
        description: "Ultra-premium high-strength concrete for critical infrastructure projects",
        specifications: "M60 grade, 60 N/mm² strength",
        grade: "M60",
      },
    ],
  },
  // Commented out - already covered in bulk-materials category
  /*
  {
    id: "construction-aggregates",
    name: "Construction Aggregates",
    description: "Crushed stone aggregates for concrete and construction",
    icon: "🪨",
    image: "/images/products/aggregates.jpg",
    products: [
      {
        name: "12mm Crushed Stone Aggregate",
        description: "Fine aggregates for concrete mixing",
        specifications: "12mm size, IS 383 certified",
      },
      {
        name: "20mm Crushed Stone Aggregate",
        description: "Standard aggregates for general concrete",
        specifications: "20mm size, IS 383 certified",
      },
      {
        name: "40mm Crushed Stone Aggregate",
        description: "Coarse aggregates for heavy construction",
        specifications: "40mm size, IS 383 certified",
      },
      {
        name: "6mm Crushed Stone Aggregate",
        description: "Fine aggregates for plastering work",
        specifications: "6mm size, IS 383 certified",
      },
    ],
  },
  */
  {
    id: "bricks",
    name: "Bricks",
    description: "Complete range of bricks including flyash bricks, chamber bricks, and wirecut bricks. All prices are subject to 12% tax. Minimum order 3000 nos.",
    icon: "🧱",
    image: "/images/products/brick-hero.jpg",
    products: [
      // Flyash Bricks
      {
        name: "Flyash Bricks",
        description: "Grey fly ash bricks with heat, water, and fire resistance.",
        price: "₹8.8 +TAX",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-250x250.jpg"
      },
      // Chamber Bricks
      {
        name: "Chamber Bricks",
        description: "High-quality chamber-fired clay bricks with consistent size and finish.",
        price: "₹11 +TAX",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-250x250.jpg"
      },
      // Wirecut Bricks
      {
        name: "Wirecut Bricks",
        description: "Precision wire-cut red bricks for quality construction",
        specifications: "Red color, wire cut finish",
        price: "₹12.5 +TAX",
        image: "/images/products/wirecut-bricks.jpg",
      },
      // Commented out - keeping only 3 products as per requirements
      // {
      //   name: "Red Clay Brick",
      //   description: "Standard red clay bricks formed from natural clay and kiln-fired.",
      //   image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-250x250.jpg"
      // },
    ],
  },
  {
    id: "hume-pipes",
    name: "Hume Pipes",
    description:
      "Reinforced concrete Hume pipes available in NP2, NP3, and NP4 grades across 150mm, 300mm, 600mm, 900mm, and 1200mm sizes for drainage, sewerage, culverts, and irrigation networks.",
    icon: "🔧",
    image: "/images/products/rcc-hume-pipe-hero.jpg",
    products: [
      {
        name: "150MM RCC Hume Pipes",
        description: "150mm diameter RCC Hume pipes available in NP2, NP3, and NP4 grades.",
        grade: "NP2,NP3,NP4",
        size: "150MM",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
        ]
      },
      {
        name: "300MM RCC Hume Pipes",
        description: "300mm diameter RCC Hume pipes available in NP2, NP3, and NP4 grades.",
        grade: "NP2,NP3,NP4",
        size: "300MM",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
        ]
      },
      {
        name: "600MM RCC Hume Pipes",
        description: "600mm diameter RCC Hume pipes available in NP2, NP3, and NP4 grades.",
        grade: "NP2,NP3,NP4",
        size: "600MM",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
        ]
      },
      {
        name: "900MM RCC Hume Pipes",
        description: "900mm diameter RCC Hume pipes available in NP2, NP3, and NP4 grades.",
        grade: "NP2,NP3,NP4",
        size: "900MM",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
        ]
      },
      {
        name: "1200MM RCC Hume Pipes",
        description: "1200mm diameter RCC Hume pipes available in NP2, NP3, and NP4 grades.",
        grade: "NP2,NP3,NP4",
        size: "1200MM",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
        ]
      },
    ],
  },
  {
    id: "ready-mix-plaster",
    name: "Ready Mix Plaster",
    description:
      "Ready-mix plaster admixtures that enhance workability, durability, and finish quality on site.",
    icon: "🏗️",
    image: "/images/hero/plaster-site.jpg",
    products: [
      {
        name: "Preplast Cement Plaster Admixture",
        description:
          "Preplast cement plaster admixture improves workability, durability, and strength in construction mixes, supplied in 25 kg packets.",
        price: "Approx. Rs 800 / Kg",
        brand: "Preplast",
        size: "25 Kg",
        image: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-250x250.jpeg",
        hiRes: "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-1000x1000.jpeg",
        gallery: [
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438879720/BG/WT/UD/213683241/whatsapp-image-2024-07-30-at-11-52-10-am-1000x1000.jpeg",
          "/images/scraped/5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-250x250.jpeg",
        ],
        details: [
          { label: "Minimum Order Quantity", value: "10 Kg" },
          { label: "Packaging Size", value: "25 Kg" },
          { label: "Usage/Application", value: "Construction" },
          { label: "Color", value: "Grey" },
          { label: "Packaging Type", value: "Packet" },
          { label: "Shelf Life", value: "3 Months" },
          { label: "Product Packaging Size", value: "250g" },
        ],
      },
    ],
  },
  // Commented out - already covered in bulk-materials category (M Sand product)
  /*
  {
    id: "m-sand",
    name: "M Sand",
    description:
      "Double-washed manufactured sand tailored for plastering and high-finish construction work.",
    icon: "🏖️",
    image: "/images/hero/m-sand-pile.jpg",
    products: [
      {
        name: "Plastering M Sand",
        description: "Loose packaged, A-grade, double-washed M-sand ideal for plaster coats.",
        image: "https://5.imimg.com/data5/ANDROID/Default/2025/1/482444460/MO/QH/ZB/213683241/product-jpeg-250x250.jpg"
      },
    ],
  },
  */
];

const manifestImages: Record<string, string> = (localImageManifest as LocalImageManifest).images ?? {};
const toLocalAsset = (url?: string) => {
  if (!url) return undefined;
  const manifestMatch = manifestImages[url];
  if (manifestMatch) {
    return manifestMatch;
  }
  return url;
};

const mapGalleryToLocal = (urls?: string[]) => {
  if (!urls) return undefined;

  const mapped = urls
    .map((url) => toLocalAsset(url))
    .filter((item): item is string => Boolean(item));

  return mapped.length > 0 ? Array.from(new Set(mapped)) : undefined;
};

const normalizeProductName = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

export const makeProductSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Helper function to extract grade from product name or details
const extractGrade = (product: BaseProduct, match?: any, categoryId?: string): string | undefined => {
  // If grade is already set, use it
  if (product.grade) {
    return product.grade;
  }
  
  // For ready-mix-concrete, extract from product name (e.g., "M15 Ready Mix Concrete")
  if (categoryId === "ready-mix-concrete") {
    const nameMatch = product.name.match(/M\d+/);
    if (nameMatch) {
      return nameMatch[0];
    }
    // Also check details
    if (match?.details) {
      const gradeDetail = match.details.find((d: any) => 
        d.label === "Grade" || d.label === "Concrete Grade"
      );
      if (gradeDetail?.value) {
        const gradeMatch = gradeDetail.value.trim().match(/^M\d+$/);
        if (gradeMatch) {
          return gradeMatch[0];
        }
      }
    }
  }
  
  return undefined;
};

const buildProductCatalog = (): ProductCategory[] => {
  return baseProductCategories.map((category) => {
    const scrapedForCategory = scrapedProducts[category.id as keyof typeof scrapedProducts];

    if (!scrapedForCategory) {
      return {
        ...category,
        products: category.products.map((product) => ({
          ...product,
          slug: makeProductSlug(product.name),
          image: toLocalAsset(product.image ?? category.image),
          gallery: mapGalleryToLocal(product.gallery ?? (product.image ? [product.image] : undefined)),
            // Preserve filterable attributes
            grade: product.grade,
            brand: product.brand,
            brandType: product.brandType,
            size: product.size,
            materialType: product.materialType,
            productType: product.productType,
        })),
      };
    }

    const enrichedProducts = category.products.map((product) => {
      const match = scrapedForCategory.find(
        (scrapedProduct) => normalizeProductName(scrapedProduct.name) === normalizeProductName(product.name)
      );

      const remoteImage = match?.image ?? product.image ?? category.image;
      const remoteHiRes = match?.hiRes ?? product.hiRes;
      const remoteGallery =
        match?.gallery ??
        product.gallery ??
        [
          remoteHiRes ?? remoteImage,
          ...(remoteHiRes && remoteImage && remoteHiRes !== remoteImage ? [remoteImage] : []),
        ].filter(Boolean);

      // Extract grade for ready-mix-concrete products
      const extractedGrade = extractGrade(product, match, category.id);

      return {
        ...product,
        slug: makeProductSlug(product.name),
        image: toLocalAsset(remoteImage) ?? category.image,
        hiRes: toLocalAsset(remoteHiRes),
        gallery: mapGalleryToLocal(remoteGallery as string[]),
        price: match?.price ?? product.price,
        details: match?.details ?? product.details,
        video: match?.video ?? product.video,
        description: match?.description ?? product.description,
        // Preserve filterable attributes, with extracted grade for ready-mix-concrete
        grade: extractedGrade ?? product.grade,
        brand: product.brand,
        brandType: product.brandType,
        size: product.size,
        materialType: product.materialType,
        productType: product.productType,
      };
    });

    const additionalScrapedProducts = scrapedForCategory
      .filter(
        (scrapedProduct) =>
          !category.products.some(
            (product) => normalizeProductName(product.name) === normalizeProductName(scrapedProduct.name)
          )
      )
      .map((scrapedProduct) => {
        const remoteImage = scrapedProduct.image ?? category.image;
        const remoteHiRes = scrapedProduct.hiRes;
        const remoteGallery =
          scrapedProduct.gallery ??
          [
            remoteHiRes ?? remoteImage,
            ...(remoteHiRes && remoteImage && remoteHiRes !== remoteImage ? [remoteImage] : []),
          ].filter(Boolean);

        // Extract grade for ready-mix-concrete products from scraped data
        let extractedGrade: string | undefined;
        if (category.id === "ready-mix-concrete") {
          const nameMatch = scrapedProduct.name.match(/M\d+/);
          if (nameMatch) {
            extractedGrade = nameMatch[0];
          } else if (scrapedProduct.details) {
            const gradeDetail = scrapedProduct.details.find((d: any) => 
              d.label === "Grade" || d.label === "Concrete Grade"
            );
            if (gradeDetail?.value) {
              const gradeMatch = gradeDetail.value.trim().match(/^M\d+$/);
              if (gradeMatch) {
                extractedGrade = gradeMatch[0];
              }
            }
          }
        }

        return {
          name: scrapedProduct.name,
          slug: makeProductSlug(scrapedProduct.name),
          description: scrapedProduct.description,
          image: toLocalAsset(remoteImage) ?? category.image,
          hiRes: toLocalAsset(remoteHiRes),
          gallery: mapGalleryToLocal(remoteGallery as string[]),
          price: scrapedProduct.price,
          details: scrapedProduct.details,
          video: scrapedProduct.video,
          // Extract grade for ready-mix-concrete
          grade: extractedGrade,
        };
      });

    // For TMT Bars, don't add additional scraped products since base products already cover all brands
    // The scraped products are size-specific variants that shouldn't be separate products
    const shouldIncludeAdditionalScraped = category.id !== "tmt-bars";

    return {
      ...category,
      products: shouldIncludeAdditionalScraped 
        ? [...enrichedProducts, ...additionalScrapedProducts]
        : enrichedProducts,
    };
  });
};

let catalogCache: ProductCategory[] | null = null;

export const getProductCatalog = (): ProductCategory[] => {
  if (!catalogCache) {
    catalogCache = buildProductCatalog();
  }
  return catalogCache;
};

export const findProductBySlug = (slug: string) => {
  const catalog = getProductCatalog();

  for (const category of catalog) {
    const product = category.products.find((item) => item.slug === slug);
    if (product) {
      return { product, category };
    }
  }

  return null;
};

export const getAllProductSlugs = () =>
  getProductCatalog()
    .flatMap((category) => category.products.map((product) => product.slug))
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index);

export const findCategoryById = (id: string) => {
  const catalog = getProductCatalog();
  return catalog.find((category) => category.id === id) ?? null;
};

export const getAllCategoryIds = () =>
  getProductCatalog()
    .map((category) => category.id)
    .filter((id, index, ids) => ids.indexOf(id) === index);

// Helper function to extract all unique brands from a category's products
export const getCategoryBrands = (products: ProductInfo[]): string[] => {
  const brands = new Set<string>();
  products.forEach((p) => {
    // First, check if product has explicit brand field
    if (p.brand) {
      brands.add(p.brand.toUpperCase());
    }
    // For AAC blocks, extract brands from "Available Brands" detail field
    // For cement and other products, also check "Brand" detail field
    if (p.details) {
      const availableBrandsDetail = p.details.find((d) => d.label === "Available Brands");
      if (availableBrandsDetail?.value) {
        // Parse comma-separated brands
        const brandList = availableBrandsDetail.value
          .split(",")
          .map((b) => b.trim())
          .filter(Boolean);
        brandList.forEach((brand) => brands.add(brand.toUpperCase()));
      }
      // Also check for "Brand" detail field (for cement and other products)
      const brandDetail = p.details.find((d) => d.label === "Brand");
      if (brandDetail?.value) {
        brands.add(brandDetail.value.toUpperCase());
      }
    }
  });
  return Array.from(brands).sort();
};

// Helper function to extract unique product types from a category's products
export const getCategoryProductTypes = (products: ProductInfo[]): string[] => {
  const types = new Set<string>();
  products.forEach((p) => {
    // Extract types from size field (for AAC blocks, solid blocks, etc.)
    if (p.size) {
      types.add(p.size);
    }
    // For products without size but with type in name/details, extract from name
    if (!p.size && p.name) {
      // Check for common patterns like "Joint Mortar" or other type indicators
      const nameLower = p.name.toLowerCase();
      if (nameLower.includes("joint mortar")) {
        // Use the exact spelling from the data: "JOINT MORTOR BAG"
        types.add("JOINT MORTOR BAG");
      }
    }
  });
  return Array.from(types).sort();
};

// Helper function to extract all unique grades from a category's products
export const getCategoryGrades = (products: ProductInfo[]): string[] => {
  const grades = new Set<string>();
  const allowedCementGrades = [
    "PPC (PORTLAND POZZOLONA CEMENT)",
    "OPC 53 (ORDINARY PORTLAND CEMENT)",
    "PSC (PORTLAND SLAG CEMENT)"
  ];
  
  products.forEach((p) => {
    // First, check if product has explicit grade field (may be comma-separated)
    if (p.grade) {
      // Check if it's a ready-mix-concrete grade (M5, M10, M15, etc.)
      const mGradeMatch = p.grade.match(/^M\d+$/);
      if (mGradeMatch) {
        grades.add(p.grade);
      } else {
        // For cement, handle comma-separated grades
        const gradeList = p.grade.split(",").map(g => g.trim()).filter(Boolean);
        gradeList.forEach(grade => {
          const normalizedGrade = normalizeCementGrade(grade);
          if (normalizedGrade && allowedCementGrades.includes(normalizedGrade)) {
            grades.add(normalizedGrade);
          }
        });
      }
    }
    // Also check product name for ready-mix-concrete grades (e.g., "M15 Ready Mix Concrete")
    if (p.name) {
      const nameMatch = p.name.match(/M\d+/);
      if (nameMatch) {
        grades.add(nameMatch[0]);
      }
    }
    // Also check details for grade information
    if (p.details) {
      // Check "Available Grades" detail field (for cement with all grades)
      const availableGradesDetail = p.details.find((d) => d.label === "Available Grades");
      if (availableGradesDetail?.value) {
        const gradeList = availableGradesDetail.value.split(",").map(g => g.trim()).filter(Boolean);
        gradeList.forEach(grade => {
          const normalizedGrade = normalizeCementGrade(grade);
          if (normalizedGrade && allowedCementGrades.includes(normalizedGrade)) {
            grades.add(normalizedGrade);
          }
        });
      }
      // Also check other grade detail fields
      const gradeDetail = p.details.find((d) => 
        d.label === "Grade" || 
        d.label === "Cement Grade" ||
        d.label === "Concrete Grade" ||
        d.label === "Type"
      );
      if (gradeDetail?.value) {
        const gradeValue = gradeDetail.value.trim();
        // Check if it's a ready-mix-concrete grade
        const mGradeMatch = gradeValue.match(/^M\d+$/);
        if (mGradeMatch) {
          grades.add(gradeValue);
        } else {
          // For cement, normalize grade to full form
          const normalizedGrade = normalizeCementGrade(gradeValue);
          if (normalizedGrade && allowedCementGrades.includes(normalizedGrade)) {
            grades.add(normalizedGrade);
          }
        }
      }
    }
  });
  
  const gradeArray = Array.from(grades);
  // Sort ready-mix-concrete grades numerically (M5, M10, M15, etc.)
  const mGrades = gradeArray.filter(g => /^M\d+$/.test(g));
  const otherGrades = gradeArray.filter(g => !/^M\d+$/.test(g));
  
  const sortedMGrades = mGrades.sort((a, b) => {
    const aNum = parseInt(a.replace("M", "")) || 0;
    const bNum = parseInt(b.replace("M", "")) || 0;
    return aNum - bNum;
  });
  
  // For cement, filter to only allowed grades
  const filteredOtherGrades = otherGrades.filter(grade => allowedCementGrades.includes(grade)).sort();
  
  return [...sortedMGrades, ...filteredOtherGrades];
};

// Helper function to normalize cement grade to full form
function normalizeCementGrade(grade: string): string | null {
  const upperGrade = grade.toUpperCase();
  if (upperGrade.includes("PPC") || upperGrade.includes("PORTLAND POZZOLONA")) {
    return "PPC (PORTLAND POZZOLONA CEMENT)";
  } else if (upperGrade.includes("OPC 53") || upperGrade.includes("OPC53") || (upperGrade.includes("OPC") && upperGrade.includes("53"))) {
    return "OPC 53 (ORDINARY PORTLAND CEMENT)";
  } else if (upperGrade.includes("PSC") || upperGrade.includes("PORTLAND SLAG")) {
    return "PSC (PORTLAND SLAG CEMENT)";
  }
  return null;
}

