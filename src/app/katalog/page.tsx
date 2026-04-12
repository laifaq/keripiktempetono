"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/components/ProductGrid";
import FilterBar from "@/components/FilterBar";
import { useProductStore } from "@/store/useProductStore";
import { SortOption, Product } from "@/types";
import { getDiscountedPrice } from "@/lib/utils";

export default function KatalogPage() {
  const getActiveProducts = useProductStore((state) => state.getActiveProducts);
  const [mounted, setMounted] = useState(false);
  const [currentSort, setCurrentSort] = useState<SortOption>("populer");
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let result = [...getActiveProducts()];

    switch (currentSort) {
      case "populer":
        // Sort by 'popular' flag first, then by sold count
        result.sort((a, b) => {
          if (a.popular === b.popular) {
            return b.sold - a.sold;
          }
          return a.popular ? -1 : 1;
        });
        break;
      case "terlaris":
        result.sort((a, b) => b.sold - a.sold);
        break;
      case "termurah":
        result.sort((a, b) => {
          const priceA = getDiscountedPrice(a.price, a.discount);
          const priceB = getDiscountedPrice(b.price, b.discount);
          return priceA - priceB;
        });
        break;
    }

    setDisplayProducts(result);
  }, [currentSort, mounted, getActiveProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Katalog Produk <span className="text-amber-500">Tono</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl text-lg">
          Pilihan varian keripik tempe lengkap dengan bumbu pilihan. 
          Pilih favoritmu sekarang juga!
        </p>
      </div>

      {mounted ? (
        <>
          <FilterBar currentSort={currentSort} onSortChange={setCurrentSort} />
          
          <div className="mt-8 transition-opacity duration-500">
            <ProductGrid products={displayProducts} />
          </div>
        </>
      ) : (
        <div className="h-96 flex items-center justify-center">
            <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
