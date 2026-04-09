import { create } from "zustand";
import { Product } from "@/types";
import { initialProducts } from "@/data/products";

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (slug: string, product: Product) => void;
  deleteProduct: (slug: string) => void;
  toggleArchive: (slug: string) => void;
  getProductBySlug: (slug: string) => Product | undefined;
  getActiveProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: initialProducts,

  addProduct: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  updateProduct: (slug: string, updatedProduct: Product) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.slug === slug ? updatedProduct : p
      ),
    })),

  deleteProduct: (slug: string) =>
    set((state) => ({
      products: state.products.filter((p) => p.slug !== slug),
    })),

  toggleArchive: (slug: string) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.slug === slug ? { ...p, archived: !p.archived } : p
      ),
    })),

  getProductBySlug: (slug: string) => {
    return get().products.find((p) => p.slug === slug);
  },

  getActiveProducts: () => {
    return get().products.filter((p) => !p.archived);
  },
}));
