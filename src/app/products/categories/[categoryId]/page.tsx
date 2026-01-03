import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { findCategoryById, getAllCategoryIds } from "@/data/productCatalog";
import ProductHeroSection from "@/components/ProductHeroSection";
import CategoryPageClient from "@/components/CategoryPageClient";

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

  return (
    <main className="bg-gray-50 min-h-screen">
      <ProductHeroSection
        title={category.name}
        description={category.description}
        image={category.image}
        imageAlt={category.name}
        backLink={{
          href: "/products",
          label: "Back to all products",
        }}
        badge={{
          icon: category.icon,
          label: "Product Category",
        }}
        showButtons={true}
      />

      <section className="section-container py-12 lg:py-16">
        <CategoryPageClient category={category} />
      </section>

      <Footer />
    </main>
  );
}
