"use client";

import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import TestimonialSection from "@/components/TestimonialSection";
import { useProductStore } from "@/store/useProductStore";
import Link from "next/link";
import Script from "next/script";
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

            {/* Home Instagram Section */}
            <div className="mt-20 border-t border-gray-100 pt-16">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Momen di Instagram</h3>
                <p className="text-gray-500 text-sm">Ikuti keseruan kami di @keripiktempetono</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div 
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden p-1 flex justify-center"
                  dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKej3HjyVcn/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKej3HjyVcn/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>` }}
                />
                <div 
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden p-1 flex justify-center"
                  dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKWrX9ozYYV/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKWrX9ozYYV/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>` }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="h-96 flex items-center justify-center">
             <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
        <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />
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
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm overflow-hidden p-2">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/3840px-WhatsApp.svg.png" alt="WhatsApp Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-xs text-amber-200">Chat & Order</p>
                </div>
              </a>
              
               <a href="https://s.shopee.co.id/2BAo62R1jO" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm overflow-hidden p-2">
                  <img src="https://emping.web.id/wp-content/uploads/Shopee-Logo-1.png" alt="Shopee Icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shopee</h3>
                  <p className="text-xs text-amber-200">Beli Mudah</p>
                </div>
              </a>

              <a href="https://www.instagram.com/keripiktempetono" target="_blank" rel="noreferrer" className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all flex flex-col items-center text-center gap-3 backdrop-blur-sm group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm overflow-hidden p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Icon" className="w-full h-full object-contain" />
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
