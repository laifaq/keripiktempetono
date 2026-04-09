"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";
import { useProductStore } from "@/store/useProductStore";
import { Product } from "@/types";

export default function EditProdukPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  const getProductBySlug = useProductStore((state) => state.getProductBySlug);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const product = getProductBySlug(slug as string);

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900">Produk tidak ditemukan</h2>
        <Link href="/admin" className="text-amber-600 hover:underline mt-4 inline-block">Kembali ke Dashboard</Link>
      </div>
    );
  }

  const handleSubmit = (updatedProduct: Product) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      updateProduct(slug as string, updatedProduct);
      setIsLoading(false);
      router.push("/admin");
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin"
          className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-500 hover:text-amber-600 hover:bg-amber-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Edit Produk</h1>
          <p className="text-gray-500 mt-1">Ubah detail produk: <span className="font-semibold">{product.name}</span></p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
        <ProductForm initialData={product} onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
