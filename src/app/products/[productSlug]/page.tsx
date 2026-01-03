import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { findProductBySlug, getAllProductSlugs, makeProductSlug } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";
import ProductPriceDisplay from "@/components/ProductPriceDisplay";
import ProductHeroSection from "@/components/ProductHeroSection";
import ProductActionButtons from "@/components/ProductActionButtons";

type ProductDetailPageProps = {
  params: {
    productSlug: string;
  };
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((productSlug) => ({ productSlug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const match = findProductBySlug(params.productSlug);

  if (!match) {
    return {};
  }

  const { product, category } = match;

  return {
    title: `${product.name} | ${category.name} | AlphaCap`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.hiRes ? [product.hiRes] : product.image ? [product.image] : undefined,
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const match = findProductBySlug(params.productSlug);

  if (!match) {
    notFound();
  }

  const { product, category } = match;

  const heroImage = product.hiRes ?? product.image ?? category.image;
  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : heroImage
      ? [heroImage]
      : [category.image];

  const detailPairs = (product.details ?? []).filter((detail) => detail.label !== "Available Brands" && detail.label !== "Available Grades" && detail.label !== "Cement Grade");
  
  // Prepare badges for hero section
  const heroBadges = [];
  if (product.brand) heroBadges.push({ label: "Brand", value: product.brand });
  if (product.grade) heroBadges.push({ label: "Grade", value: product.grade });
  if (product.size) heroBadges.push({ label: "Size", value: product.size });

  return (
    <main className="bg-gray-50 min-h-screen">
      <ProductHeroSection
        title={product.name}
        description={product.description}
        image={heroImage}
        imageAlt={product.name}
        backLink={{
          href: `/products/categories/${category.id}`,
          label: `Back to ${category.name}`,
        }}
        badge={{
          icon: category.icon,
          label: category.name,
        }}
        price={product.price}
        badges={heroBadges.length > 0 ? heroBadges : undefined}
      />

      <section className="section-container py-12 lg:py-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[2fr,3fr]">
          {/* Left Column: Images and Media */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm bg-gray-50">
              <Image
                src={heroImage}
                alt={product.name}
                fill
                className={product.name.toLowerCase().includes("paver block") ? "object-contain" : "object-cover"}
                unoptimized={isExternalImage(heroImage)}
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
              />
            </div>

            {/* Media Gallery */}
            {galleryImages.length > 1 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Media Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {galleryImages.map((imageUrl, index) => {
                    const key = `${product.slug}-gallery-${index}`;
                    const isPaverBlock = product.name.toLowerCase().includes("paver block");
                    return (
                      <div key={key} className="relative h-28 md:h-32 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <Image
                          src={imageUrl}
                          alt={`${product.name} gallery ${index + 1}`}
                          fill
                          className={isPaverBlock ? "object-contain bg-gray-50" : "object-cover"}
                          unoptimized={isExternalImage(imageUrl)}
                          sizes="(max-width: 1024px) 50vw, 320px"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Product Video */}
            {product.video && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Product Video</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the product in action to understand its performance and application.
                </p>
                <a
                  href={product.video}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-construction-orange px-4 py-2 text-sm font-medium text-white hover:bg-construction-orange/90 transition-colors"
                >
                  ▶ Watch Video
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Product Information */}
          <div className="space-y-6">
            {/* Product Details Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Product Details</h2>
              
              {/* Price Section */}
              {product.price && (
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Pricing</h3>
                  <ProductPriceDisplay price={product.price} />
                </div>
              )}

              {/* Action Buttons - Common placement for all product pages */}
              <div className="mb-6">
                <ProductActionButtons />
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Specifications</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.specifications}</p>
                </div>
              )}

              {/* Product Attributes */}
              {detailPairs.length > 0 ? (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Details</h3>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {detailPairs.map((detail) => (
                      <div 
                        key={`${product.slug}-${makeProductSlug(detail.label)}`} 
                        className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                          {detail.label}
                        </dt>
                        <dd className="text-sm font-medium text-gray-800">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  Detailed specifications for this product will be updated soon. Reach out to our
                  team for specifics.
                </p>
              )}
            </div>

            {/* Why Choose This Product */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose This Product</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-construction-orange text-lg">●</span>
                  <span>Certified quality sourced from trusted brands and manufacturers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-construction-orange text-lg">●</span>
                  <span>Competitive wholesale pricing with reliable delivery timelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-construction-orange text-lg">●</span>
                  <span>Technical guidance from AlphaCap experts for seamless implementation.</span>
                </li>
              </ul>
            </div>

            {/* Custom Proposal */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Need a Custom Proposal?</h2>
              <p className="text-sm text-gray-600 mb-4">
                Share your project requirements and we&apos;ll prepare a tailored plan covering
                pricing, logistics, and technical specs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#enquiry" className="btn-primary inline-flex items-center justify-center">
                  Submit Requirements
                </Link>
                <a href="mailto:tradeplatform@alphacaps.in" className="btn-secondary inline-flex items-center justify-center">
                  Email Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

