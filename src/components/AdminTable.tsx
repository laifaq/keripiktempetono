"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatRupiah, getDiscountedPrice } from "@/lib/utils";

interface AdminTableProps {
  products: Product[];
  onDelete: (slug: string) => void;
  onToggleArchive: (slug: string) => void;
}

export default function AdminTable({ products, onDelete, onToggleArchive }: AdminTableProps) {
  const handleDelete = (slug: string, name: string) => {
    if (window.confirm(`Hapus "${name}"?`)) onDelete(slug);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
        <p className="text-gray-400">Belum ada produk</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full" id="admin-product-table">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              {["Produk","Harga","Diskon","Terjual","Status","Aksi"].map(h => (
                <th key={h} className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider last:text-center">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((p) => (
              <tr key={p.slug} className={`hover:bg-amber-50/30 transition-colors ${p.archived ? "opacity-60" : ""}`}>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                      <Image src={p.imageUrl} alt={p.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.weight}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-semibold text-amber-600 text-sm">{formatRupiah(getDiscountedPrice(p.price, p.discount))}</p>
                  {p.discount > 0 && <p className="text-xs text-gray-400 line-through">{formatRupiah(p.price)}</p>}
                </td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-semibold">{p.discount}%</span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{p.sold}</td>
                <td className="py-4 px-6 text-center">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${p.archived ? "bg-gray-100 text-gray-500" : "bg-green-50 text-green-600"}`}>
                    {p.archived ? "Arsip" : "Aktif"}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/admin/edit/${p.slug}`} className="p-2 rounded-xl hover:bg-blue-50 text-blue-500 transition-colors" title="Edit">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                    <button onClick={() => onToggleArchive(p.slug)} className={`p-2 rounded-xl transition-colors ${p.archived ? "hover:bg-green-50 text-green-500" : "hover:bg-yellow-50 text-yellow-500"}`} title={p.archived ? "Aktifkan" : "Arsipkan"}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </button>
                    <button onClick={() => handleDelete(p.slug, p.name)} className="p-2 rounded-xl hover:bg-red-50 text-red-500 transition-colors" title="Hapus">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden divide-y divide-gray-100">
        {products.map((p) => (
          <div key={p.slug} className={`p-4 ${p.archived ? "opacity-60" : ""}`}>
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                <Image src={p.imageUrl} alt={p.name} fill className="object-cover" sizes="64px" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                    <p className="text-sm font-bold text-amber-600 mt-1">{formatRupiah(getDiscountedPrice(p.price, p.discount))}</p>
                  </div>
                  <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${p.archived ? "bg-gray-100 text-gray-500" : "bg-green-50 text-green-600"}`}>
                    {p.archived ? "Arsip" : "Aktif"}
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Link href={`/admin/edit/${p.slug}`} className="flex-1 py-2 text-center rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold">Edit</Link>
                  <button onClick={() => onToggleArchive(p.slug)} className={`flex-1 py-2 rounded-xl text-xs font-semibold ${p.archived ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>
                    {p.archived ? "Aktifkan" : "Arsipkan"}
                  </button>
                  <button onClick={() => handleDelete(p.slug, p.name)} className="flex-1 py-2 text-center rounded-xl bg-red-50 text-red-600 text-xs font-semibold">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
