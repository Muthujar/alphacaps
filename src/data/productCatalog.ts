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

export type ProductInfo = {
  name: string;
  slug: string;
  description: string;
  specifications?: string;
  image?: string;
  hiRes?: string;
  gallery?: string[];
  price?: string;
  details?: ProductAttribute[];
  video?: string;
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
    id: "tmt-bars",
    name: "TMT Bars",
    description: "High-quality TMT bars for structural reinforcement from leading brands",
    icon: "🔩",
    image: "/images/products/tmt-bars.jpg",
    products: [
      {
        name: "25mm Vizag Steel TMT Bars",
        description: "Premium grade TMT bars for heavy construction",
        specifications: "25mm diameter, IS 1786 certified",
      },
      {
        name: "10mm Vizag Steel TMT Bars",
        description: "Standard grade TMT bars for general construction",
        specifications: "10mm diameter, IS 1786 certified",
      },
      {
        name: "8mm Vizag Steel TMT Bars",
        description: "Light grade TMT bars for residential construction",
        specifications: "8mm diameter, IS 1786 certified",
      },
      {
        name: "10mm ARS TMT Bars",
        description: "ARS brand TMT bars for quality construction",
        specifications: "10mm diameter, IS 1786 certified",
      },
      {
        name: "8mm ARS TMT Bars",
        description: "ARS brand TMT bars for residential projects",
        specifications: "8mm diameter, IS 1786 certified",
      },
    ],
  },
  {
    id: "aac-blocks",
    name: "AAC Blocks",
    description: "Lightweight and energy-efficient autoclaved aerated concrete blocks",
    icon: "🧱",
    image: "/images/products/aac-blocks.jpg",
    products: [
      {
        name: "6 Inch Fusion Concrete AAC Block",
        description: "High-strength AAC blocks for load-bearing walls",
        specifications: "6 inch thickness, 600x200x150mm",
      },
      {
        name: "4 Inch Fusion Concrete AAC Block",
        description: "Standard AAC blocks for partition walls",
        specifications: "4 inch thickness, 600x200x100mm",
      },
      {
        name: "4 Inch NCL Concrete AAC Block",
        description: "Premium NCL brand AAC blocks",
        specifications: "4 inch thickness, 600x200x100mm",
      },
      {
        name: "6 Inch NCL Concrete AAC Block",
        description: "NCL brand AAC blocks for heavy construction",
        specifications: "6 inch thickness, 600x200x150mm",
      },
      {
        name: "4 Inch Kamcrete Light Weight AAC Blocks",
        description: "Kamcrete brand lightweight AAC blocks",
        specifications: "4 inch thickness, lightweight construction",
      },
    ],
  },
  {
    id: "construction-cement",
    name: "Construction Cement",
    description: "Premium grade cement from leading manufacturers",
    icon: "🏗️",
    image: "/images/products/cement.jpg",
    products: [
      {
        name: "50Kg Ramco Super Grade Cement",
        description: "High-performance cement for all construction needs",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg UltraTech Cement",
        description: "India's leading cement brand",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg Ramco Supercrete Cement",
        description: "Specialized cement for high-strength applications",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "50Kg Dalmia DSP Cement",
        description: "Dalmia brand cement for quality construction",
        specifications: "50kg bag, IS 12269 certified",
      },
      {
        name: "JSW Concreel HD Cement",
        description: "JSW brand high-density cement",
        specifications: "50kg bag, premium grade",
      },
    ],
  },
  {
    id: "concrete-blocks",
    name: "Concrete Blocks",
    description: "Durable solid concrete blocks for construction",
    icon: "🧱",
    image: "/images/products/concrete-blocks.jpg",
    products: [
      {
        name: "8 Inch Solid Concrete Block",
        description: "Heavy-duty concrete blocks for load-bearing walls",
        specifications: "8 inch thickness, standard dimensions",
      },
      {
        name: "6 Inch Solid Concrete Block",
        description: "Standard concrete blocks for general construction",
        specifications: "6 inch thickness, standard dimensions",
      },
      {
        name: "4 Inch Solid Concrete Block",
        description: "Light concrete blocks for partition walls",
        specifications: "4 inch thickness, standard dimensions",
      },
      {
        name: "10 Inch Solid Concrete Block",
        description: "Extra heavy-duty blocks for commercial construction",
        specifications: "10 inch thickness, standard dimensions",
      },
      {
        name: "9 Inch Solid Concrete Block",
        description: "Mid-weight concrete block for robust wall assemblies",
        specifications: "9 inch thickness, 12x6x9 in profile",
      },
    ],
  },
  {
    id: "shuttering-plywood",
    name: "Shuttering Plywood",
    description: "High-quality film-faced plywood for concrete shuttering",
    icon: "🪵",
    image: "/images/products/shuttering-plywood.jpg",
    products: [
      {
        name: "Mine Gold Film Faced Shuttering Plywood",
        description: "Premium grade film-faced plywood",
        specifications: "18mm thickness, marine grade",
      },
      {
        name: "Continental Film Faced Shuttering Plywood Board",
        description: "Durable shuttering plywood for multiple uses",
        specifications: "18mm thickness, IS 303 certified",
      },
      {
        name: "Potential Film Faced Shuttering Plywood Board",
        description: "Cost-effective shuttering solution",
        specifications: "18mm thickness, IS 303 certified",
      },
    ],
  },
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
  {
    id: "ready-mix-concrete",
    name: "Ready Mix Concrete",
    description: "Fresh concrete delivered to your construction site",
    icon: "🚛",
    image: "/images/products/ready-mix-concrete.jpg",
    products: [
      {
        name: "M15 Ready Mixed Concrete",
        description: "Standard grade concrete for general construction",
        specifications: "M15 grade, 7.5 N/mm² strength",
      },
      {
        name: "M20 Ready Mix Concrete",
        description: "High-strength concrete for structural elements",
        specifications: "M20 grade, 20 N/mm² strength",
      },
      {
        name: "M30 Ready Mix Concrete",
        description: "Premium grade concrete for heavy construction",
        specifications: "M30 grade, 30 N/mm² strength",
      },
      {
        name: "M10 Ready Mix Concrete",
        description: "Lean mix concrete for blinding and levelling",
        specifications: "M10 grade, 10 N/mm² strength",
      },
      {
        name: "M25 Ready Mix Concrete",
        description: "Structural grade concrete for columns and slabs",
        specifications: "M25 grade, 25 N/mm² strength",
      },
    ],
  },
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
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    description:
      "Interlocking cement and concrete paver blocks in zig-zag and I-shape profiles for durable outdoor surfaces.",
    icon: "pavers",
    image: "/images/hero/supply-yard.jpg",
    products: [
      {
        name: "Red Zig Zag Cement Paver Blocks",
        description:
          "Red zig-zag interlocking pavers crafted in cement for decorative flooring layouts.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg"
      },
      {
        name: "Red I Shape Concrete Paver Block",
        description:
          "Red I-shaped concrete pavers offering 60 mm thickness for driveways and plazas.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-250x250.jpg"
      },
      {
        name: "I Shape Grey Concrete Paver Block",
        description:
          "Grey I-shaped interlocking pavers with matte finish for heavy-duty flooring.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438732206/XD/CF/YV/213683241/i-shape-grey-concrete-paver-block-250x250.jpg"
      },
      {
        name: "Grey Zig Zag Concrete Paver Block",
        description:
          "Neutral-toned zig-zag concrete pavers delivering a precise modular pattern.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438731143/JP/KU/XW/213683241/grey-zig-zag-concrete-paver-block-250x250.jpg"
      }
    ]
  },
  {
    id: "concrete-hollow-blocks",
    name: "Concrete Hollow Blocks",
    description: "Lightweight hollow concrete blocks for construction",
    icon: "🧱",
    image: "/images/products/concrete-hollow-blocks.jpg",
    products: [
      {
        name: "4 Inch Concrete Hollow Block",
        description: "Lightweight hollow blocks for partition walls",
        specifications: "4 inch thickness, hollow design",
      },
      {
        name: "8 Inch Concrete Hollow Block",
        description: "Standard hollow blocks for general construction",
        specifications: "8 inch thickness, hollow design",
      },
      {
        name: "6 Inch Concrete Hollow Block",
        description: "Medium hollow blocks for construction",
        specifications: "6 inch thickness, hollow design",
      },
    ],
  },
  {
    id: "clay-bricks",
    name: "Clay Bricks",
    description:
      "Traditional chamber-fired and box-moulded clay bricks for load-bearing and partition walls.",
    icon: "🧱",
    image: "/images/hero/brick-yard.jpg",
    products: [
      {
        name: "Red Chamber Clay Bricks",
        description: "High-quality chamber-fired clay bricks with consistent size and finish.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-250x250.jpg"
      },
      {
        name: "Red Clay Brick",
        description: "Standard red clay bricks formed from natural clay and kiln-fired.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-250x250.jpg"
      },
    ],
  },
  {
    id: "ash-bricks",
    name: "Ash Bricks",
    description: "Eco-friendly fly ash bricks for partition and load-bearing walls.",
    icon: "🧱",
    image: "/images/hero/fly-ash-bricks.jpg",
    products: [
      {
        name: "Grey Fly Ash Bricks",
        description: "Grey fly ash bricks with heat, water, and fire resistance.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-250x250.jpg"
      },
    ],
  },
  {
    id: "wire-cut-bricks",
    name: "Wire Cut Red Bricks",
    description: "Precision-cut red bricks for quality construction",
    icon: "🧱",
    image: "/images/products/wirecut-bricks.jpg",
    products: [
      {
        name: "Wire Cut Red Bricks",
        description: "Precision wire-cut red bricks",
        specifications: "Red color, wire cut finish",
      },
    ],
  },
  {
    id: "hume-pipes",
    name: "Hume Pipes",
    description:
      "NP3 class reinforced concrete Hume pipes designed for drainage, sewerage, culverts, and irrigation networks.",
    icon: "🔧",
    image: "/images/hero/hume-pipes-yard.jpg",
    products: [
      {
        name: "1200mm RCC Hume Pipes",
        description:
          "1200 mm diameter, 2.5 m long NP3 RCC Hume pipes suitable for large-scale water infrastructure.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
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
        description: "Preplast admixture supplied in 25 kg packets for high-performance plaster mixes.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-250x250.jpeg"
      },
    ],
  },
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
        };
      });

    return {
      ...category,
      products: [...enrichedProducts, ...additionalScrapedProducts],
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

