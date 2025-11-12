import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { findProductBySlug, getAllProductSlugs, makeProductSlug } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";

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

  const detailPairs = product.details ?? [];

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-black via-black to-black/80 text-white">
        <Image
          src={heroImage}
          alt={product.name}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          unoptimized={isExternalImage(heroImage)}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

        <div className="section-container relative py-20 lg:py-24">
          <div className="max-w-4xl">
            <Link
              href={`/products?category=${category.id}`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              ← Back to {category.name}
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
              <span>{category.icon}</span>
              {category.name}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
              {product.name}
            </h1>
            {product.price && (
              <p className="mt-4 text-2xl font-semibold text-construction-orange">
                {product.price}
              </p>
            )}
            {product.description && (
              <p className="mt-4 text-lg text-white/80">{product.description}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#enquiry" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                Talk to Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-6">
            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
              <Image
                src={heroImage}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized={isExternalImage(heroImage)}
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>

            {galleryImages.length > 1 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Media Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((imageUrl, index) => {
                    const key = `${product.slug}-gallery-${index}`;
                    return (
                      <div key={key} className="relative h-32 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <Image
                          src={imageUrl}
                          alt={`${product.name} gallery ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized={isExternalImage(imageUrl)}
                          sizes="(max-width: 1024px) 50vw, 320px"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {product.video && (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Product Video</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Explore the product in action to understand its performance and application.
                </p>
                <a
                  href={product.video}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-construction-orange px-4 py-2 text-sm font-medium text-white hover:bg-construction-orange/90 transition-colors"
                >
                  ▶ Watch Video
                </a>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>
              {product.specifications && (
                <p className="mt-2 text-sm text-gray-600">{product.specifications}</p>
              )}
              {detailPairs.length > 0 ? (
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {detailPairs.map((detail) => (
                    <div key={`${product.slug}-${makeProductSlug(detail.label)}`} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-800">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-4 text-sm text-gray-500">
                  Detailed specifications for this product will be updated soon. Reach out to our
                  team for specifics.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Why Choose This Product</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-construction-orange">●</span>
                  Certified quality sourced from trusted brands and manufacturers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-construction-orange">●</span>
                  Competitive wholesale pricing with reliable delivery timelines.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-construction-orange">●</span>
                  Technical guidance from AlphaCap experts for seamless implementation.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Need a Custom Proposal?</h2>
              <p className="mt-2 text-sm text-gray-600">
                Share your project requirements and we&apos;ll prepare a tailored plan covering
                pricing, logistics, and technical specs.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/#enquiry" className="btn-primary">
                  Submit Requirements
                </Link>
                <a href="mailto:hello@alphacaps.in" className="btn-secondary">
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

