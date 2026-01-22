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
    <main className="min-h-screen bg-slate-100/10">
      <ProductHeroSection
        title={category.name}
        description={category.description}
        image={category.image}
        imageAlt={category.name}
        backLink={{
          href: "/products",
          label: "Back to Portfolio",
        }}
        badge={{
          icon: category.icon,
          label: "Technical Series",
        }}
        showButtons={true}
      />

      <section className="section-container py-16 md:py-24 relative overflow-hidden">
        {/* Background Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="relative z-10">
          <CategoryPageClient category={category} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
