import { create } from "zustand";
import { Product } from "@/types";

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  isInitialized: boolean;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (slug: string, product: Product) => Promise<void>;
  deleteProduct: (slug: string) => Promise<void>;
  toggleArchive: (slug: string) => Promise<void>;
  getProductBySlug: (slug: string) => Product | undefined;
  getActiveProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,
  isInitialized: false,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        set({ products: data, isInitialized: true });
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  addProduct: async (product: Product) => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      if (res.ok) {
        const newProduct = await res.json();
        set((state) => ({ products: [newProduct, ...state.products] }));
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  },

  updateProduct: async (slug: string, updatedProduct: Product) => {
    try {
      const res = await fetch(`/api/products/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });
      if (res.ok) {
        const data = await res.json();
        set((state) => ({
          products: state.products.map((p) => p.slug === slug ? data : p),
        }));
      }
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  },

  deleteProduct: async (slug: string) => {
    try {
      const res = await fetch(`/api/products/${slug}`, { method: 'DELETE' });
      if (res.ok) {
        set((state) => ({
          products: state.products.filter((p) => p.slug !== slug),
        }));
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  },

  toggleArchive: async (slug: string) => {
    const product = get().products.find(p => p.slug === slug);
    if (!product) return;
    
    try {
      const res = await fetch(`/api/products/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product, archived: !product.archived })
      });
      if (res.ok) {
        const data = await res.json();
        set((state) => ({
          products: state.products.map((p) => p.slug === slug ? data : p),
        }));
      }
    } catch (error) {
      console.error("Failed to toggle archive:", error);
    }
  },

  getProductBySlug: (slug: string) => {
    return get().products.find((p) => p.slug === slug);
  },

  getActiveProducts: () => {
    return get().products.filter((p) => !p.archived);
  },
}));
