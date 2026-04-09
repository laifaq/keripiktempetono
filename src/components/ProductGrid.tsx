import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({
  products,
  title,
  subtitle,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-amber-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-600">
          Belum ada produk
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          Produk akan segera tersedia
        </p>
      </div>
    );
  }

  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-8 md:mb-12">
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
