"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminTable from "@/components/AdminTable";
import { useProductStore } from "@/store/useProductStore";
import { Plus } from "lucide-react";

export default function ProdukManagementPage() {
  const products = useProductStore((state) => state.products);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const toggleArchive = useProductStore((state) => state.toggleArchive);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Manajemen Produk</h1>
          <p className="text-gray-500 mt-1">Tambah, edit, hapus atau arsipkan produk keripik tempe Anda.</p>
        </div>
        <Link 
          href="/admin/tambah" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-sm w-full sm:w-auto justify-center"
        >
          <Plus size={20} />
          Tambah Produk
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
         <AdminTable 
            products={products} 
            onDelete={deleteProduct} 
            onToggleArchive={toggleArchive} 
         />
      </div>
    </div>
  );
}
