"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";
import { useProductStore } from "@/store/useProductStore";
import { Product } from "@/types";

export default function TambahProdukPage() {
  const router = useRouter();
  const addProduct = useProductStore((state) => state.addProduct);
  const getProductBySlug = useProductStore((state) => state.getProductBySlug);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (product: Product) => {
    setIsLoading(true);
    
    // Check if slug already exists
    if (getProductBySlug(product.slug)) {
       alert("Gagal: Slug/Nama produk sudah digunakan. Silakan gunakan nama lain.");
       setIsLoading(false);
       return;
    }

    try {
      await addProduct(product);
      setIsLoading(false);
      alert("Produk berhasil ditambahkan!");
      router.push("/admin/produk");
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan produk. Pastikan koneksi internet stabil dan database sudah di-push.");
      setIsLoading(false);
    }
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tambah Produk Baru</h1>
          <p className="text-gray-500 mt-1">Masukkan detail produk dengan lengkap</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
        <ProductForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
