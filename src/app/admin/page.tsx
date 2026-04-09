"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminTable from "@/components/AdminTable";
import { useProductStore } from "@/store/useProductStore";

export default function AdminDashboard() {
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

  const activeCount = products.filter(p => !p.archived).length;
  const archivedCount = products.filter(p => p.archived).length;

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Admin</h1>
          <p className="text-gray-500 mt-1">Kelola semua produk keripik tempe dalam satu tempat</p>
        </div>
        <Link 
          href="/admin/tambah" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md w-full sm:w-auto justify-center flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Tambah Produk
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <div>
               <p className="text-gray-500 text-sm font-medium">Total Produk</p>
               <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
               <p className="text-gray-500 text-sm font-medium">Produk Aktif</p>
               <p className="text-2xl font-bold text-gray-900">{activeCount}</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            </div>
            <div>
               <p className="text-gray-500 text-sm font-medium">Produk Diarsipkan</p>
               <p className="text-2xl font-bold text-gray-900">{archivedCount}</p>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
         <h2 className="text-xl font-bold text-gray-900 mb-6">Daftar Produk</h2>
         <AdminTable 
            products={products} 
            onDelete={deleteProduct} 
            onToggleArchive={toggleArchive} 
         />
      </div>

    </div>
  );
}
