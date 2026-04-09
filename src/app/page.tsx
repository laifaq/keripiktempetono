"use client";

import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import TestimonialSection from "@/components/TestimonialSection";
import { useProductStore } from "@/store/useProductStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const getActiveProducts = useProductStore((state) => state.getActiveProducts);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeProducts = getActiveProducts();
  const topProducts = activeProducts
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />

      {/* Top Products Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {mounted ? (
          <>
            <ProductGrid
              products={topProducts}
              title="Produk Terlaris"
              subtitle="Pilihan favorit pelanggan Keripik Tempe Tono yang wajib kamu coba!"
            />
            
            <div className="mt-12 text-center">
              <Link
                href="/katalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-50 transition-colors"
              >
                Lihat Semua Varian
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="h-96 flex items-center justify-center">
             <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
      </section>

      {/* Short About Section */}
      <section className="py-16 md:py-24 bg-amber-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex px-3 py-1 bg-amber-800 rounded-full text-amber-300 text-sm font-medium">
                Kisah Kami
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Tradisi Rasa Khas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Malang</span>
              </h2>
              <p className="text-lg text-amber-100/90 leading-relaxed">
                Dimulai dari resep keluarga turun-temurun, Keripik Tempe Tono berkomitmen menghadirkan 
                camilan autentik yang tidak hanya lezat tapi juga berkualitas. Kami menggunakan kedelai 
                pilihan dan bumbu rempah alami untuk menciptakan "kriuk" yang sempurna.
              </p>
              
              <Link
                href="/tentang"
                className="inline-flex items-center text-amber-300 hover:text-amber-400 font-semibold gap-1 transition-colors"
              >
                Baca selengkapnya 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://wa.me/6285733325250" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-xs text-amber-200">Chat & Order</p>
                </div>
              </a>
              
               <a href="https://s.shopee.co.id/2BAo62R1jO" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.248 18.348c-.088.087-.203.131-.318.131s-.23-.044-.318-.131l-2.612-2.612-2.612 2.612a.449.449 0 01-.636 0 .449.449 0 010-.636l2.612-2.612-2.612-2.612a.449.449 0 010-.636.449.449 0 01.636 0L12 14.464l2.612-2.612a.449.449 0 01.636 0 .449.449 0 010 .636l-2.612 2.612 2.612 2.612a.449.449 0 010 .636zM16 10H8a1 1 0 110-2h8a1 1 0 110 2zm0-4H8a1 1 0 110-2h8a1 1 0 110 2z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shopee</h3>
                  <p className="text-xs text-amber-200">Beli Mudah</p>
                </div>
              </a>

              <a href="https://www.instagram.com/keripiktempetono" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Instagram</h3>
                  <p className="text-xs text-amber-200">@keripiktempetono</p>
                </div>
              </a>

              <a href="https://www.google.com/maps/place/keripik+tempe+tono/" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Google Maps</h3>
                  <p className="text-xs text-amber-200">Kunjungi Toko</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </div>
  );
}
