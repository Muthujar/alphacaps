import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { findCategoryById, getAllCategoryIds } from "@/data/productCatalog";
import { isExternalImage } from "@/lib/isExternalImage";
import ProductCard from "@/components/ProductCard";

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
};

export async function generateStaticParams(): Promise<CategoryPageProps["params"][]> {
  return getAllCategoryIds().map((categoryId) => ({ categoryId }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = findCategoryById(params.categoryId);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} | AlphaCap`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      images: [category.image],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = findCategoryById(params.categoryId);

  if (!category) {
    notFound();
  }

  const heroImage = category.image;

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-black via-black/90 to-black/80 text-white">
        <Image
          src={heroImage}
          alt={category.name}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          unoptimized={isExternalImage(heroImage)}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="section-container relative py-20 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              ← Back to all products
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
              <span>{category.icon}</span>
              Product Category
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              {category.name}
            </h1>
            <p className="text-lg text-white/80">{category.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#enquiry" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                Call Trade Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[3fr,1fr]">
          <div className="space-y-8">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Products in {category.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Every listing includes specifications, pricing guidance, and high-resolution media
                  we curate from our AlphaCap Trade partners.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-construction-orange hover:text-construction-orange/80"
              >
                Browse all categories →
              </Link>
            </header>

            <div className="space-y-6">
              {category.products.map((product) => (
                <ProductCard key={product.slug} product={product} fallbackImage={category.image} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Talk to AlphaCap</h3>
              <p className="mt-2 text-sm text-gray-600">
                Need help choosing materials from the {category.name} range? Our specialists can
                recommend optimal specs, sourcing timelines, and pricing.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="tel:+919876543210"
                  className="block w-full rounded-lg border border-construction-orange bg-white py-2 text-center text-sm font-semibold text-construction-orange hover:bg-construction-orange hover:text-white transition-colors"
                >
                  Call +91 98765 43210
                </a>
                <a
                  href="mailto:hello@alphacaps.in"
                  className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Email hello@alphacaps.in
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Other Categories</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                {getAllCategoryIds()
                  .filter((id) => id !== category.id)
                  .slice(0, 6)
                  .map((otherId) => {
                    const otherCategory = findCategoryById(otherId);
                    if (!otherCategory) return null;
                    return (
                      <li key={otherId}>
                        <Link
                          href={`/products/categories/${otherId}`}
                          className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 hover:border-construction-orange/50 hover:bg-construction-orange/5 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span>{otherCategory.icon}</span>
                            <span>{otherCategory.name}</span>
                          </span>
                          <span className="text-xs text-construction-orange">View</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

