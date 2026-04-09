"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProductStore } from "@/store/useProductStore";
import { formatRupiah, getDiscountedPrice, getWhatsAppLink } from "@/lib/utils";
import TestimonialSection from "@/components/TestimonialSection";
import ProductGrid from "@/components/ProductGrid";

export default function ProdukDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const getProductBySlug = useProductStore((state) => state.getProductBySlug);
  const getActiveProducts = useProductStore((state) => state.getActiveProducts);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const product = getProductBySlug(slug as string);

  if (!product || product.archived) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-8 max-w-md">Maaf, produk yang Anda cari mungkin sudah dihapus atau tidak tersedia saat ini.</p>
        <button
          onClick={() => router.push("/katalog")}
          className="px-8 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  
  // Get other products for recommendation
  const otherProducts = getActiveProducts()
    .filter(p => p.slug !== product.slug)
    .sort(() => 0.5 - Math.random()) // Simple shuffle
    .slice(0, 4);

  return (
    <div className="py-10 md:py-16">
      {/* Product Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="text-sm breadcrumbs mb-8 text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">Beranda</Link>
          <span>/</span>
          <Link href="/katalog" className="hover:text-amber-600">Katalog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Image Galery */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-amber-50/50 group border border-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-red-500 text-white text-sm font-bold shadow-lg">
                    Diskon {product.discount}%
                  </div>
                )}
                {product.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-amber-500 text-white text-sm font-bold shadow-lg">
                    ⭐ Populer
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="font-semibold text-amber-700">4.9 / 5</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 font-medium">Banyak Ulasan</span>
                  <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 font-medium">{product.sold} Terjual</span>
                </div>

                <div className="p-6 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex items-end gap-3 flex-wrap">
                    <span className="text-4xl md:text-5xl font-black text-amber-600">{formatRupiah(discountedPrice)}</span>
                    {product.discount > 0 && (
                      <span className="text-lg md:text-xl text-gray-400 line-through mb-1">{formatRupiah(product.price)}</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                  Deskripsi Produk
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-sm md:text-base">
                   <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-gray-500 block mb-1">Berat Bersih:</span>
                      <span className="font-bold text-gray-900">{product.weight}</span>
                   </div>
                   <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-gray-500 block mb-1">Kondisi:</span>
                      <span className="font-bold text-gray-900">Baru</span>
                   </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-orange-500/30"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.248 18.348c-.088.087-.203.131-.318.131s-.23-.044-.318-.131l-2.612-2.612-2.612 2.612a.449.449 0 01-.636 0 .449.449 0 010-.636l2.612-2.612-2.612-2.612a.449.449 0 010-.636.449.449 0 01.636 0L12 14.464l2.612-2.612a.449.449 0 01.636 0 .449.449 0 010 .636l-2.612 2.612 2.612 2.612a.449.449 0 010 .636zM16 10H8a1 1 0 110-2h8a1 1 0 110 2zm0-4H8a1 1 0 110-2h8a1 1 0 110 2z"/></svg>
                  Beli via Shopee
                </a>
                
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transform hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-green-500/30"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  Beli via WA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommend Section */}
      {otherProducts.length > 0 && (
        <section className="bg-white border-t border-gray-100 py-16 md:py-20 mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProductGrid 
                products={otherProducts} 
                title="Produk Pilihan Lainnya" 
                subtitle="Jelajahi varian rasa menarik lainnya dari Keripik Tempe Tono"
              />
            </div>
        </section>
      )}

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  );
}
