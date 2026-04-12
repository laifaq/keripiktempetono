<<<<<<< HEAD
import Link from "next/link";

export default function HeroBanner() {
=======
"use client";

import Link from "next/link";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function HeroBanner() {
  const getSetting = useSettingsStore(state => state.getSetting);
  
  const brandName = getSetting('brand_name', 'Keripik Tempe Tono');
  const heroTagline = getSetting('hero_tagline', 'Camilan khas Malang, kriuknya nendang!');
  const heroImage = getSetting('hero_image', '/images/hero-banner.png');
  const socialWa = getSetting('social_wa', '085733325250');

>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
  return (
    <section
      id="hero-banner"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
<<<<<<< HEAD
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-banner.png')" }}
=======
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none"
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9B0F06]/90 via-[#9B0F06]/75 to-[#9B0F06]/50" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-amber-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-yellow-400/10 blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white text-xs md:text-sm font-medium">
              Oleh-oleh Khas Malang
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
<<<<<<< HEAD
            Keripik Tempe{" "}
            <span className="text-white">
              Tono
            </span>
=======
            {brandName.includes(' ') ? (
              <>
                {brandName.split(' ').slice(0, -1).join(' ')}{" "}
                <span className="text-white">
                  {brandName.split(' ').slice(-1)}
                </span>
              </>
            ) : brandName}
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed max-w-lg">
<<<<<<< HEAD
            Camilan khas Malang,{" "}
            <span className="font-semibold text-white">
              kriuknya nendang!
            </span>
=======
            {heroTagline.includes(',') ? (
              <>
                {heroTagline.split(',')[0]},{" "}
                <span className="font-semibold text-white">
                  {heroTagline.split(',')[1]}
                </span>
              </>
            ) : heroTagline}
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/katalog"
              id="cta-katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-800 to-amber-900 text-white font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:from-amber-900 hover:to-amber-950 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Lihat Produk
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
<<<<<<< HEAD
              href="https://wa.me/6285733325250?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Keripik%20Tempe%20Tono"
=======
              href={`https://wa.me/62${socialWa.replace(/^0/, '')}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20${brandName}`}
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-amber-400/40 text-white font-semibold text-base md:text-lg hover:bg-amber-400/10 hover:border-amber-400/60 transform hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.125 1.52 5.862L.06 23.734l5.99-1.572A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              Hubungi Kami
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                1000+
              </p>
              <p className="text-xs md:text-sm text-white">
                Pelanggan Puas
              </p>
            </div>
            <div className="w-px bg-amber-600/40" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                20+
              </p>
              <p className="text-xs md:text-sm text-white">
                Varian Rasa
              </p>
            </div>
            <div className="w-px bg-amber-600/40" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                ⭐ 5.0
              </p>
              <p className="text-xs md:text-sm text-white">
                Rating Shopee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 58.3C672 62.7 768 56.3 864 50C960 43.7 1056 37.3 1152 39.2C1248 41 1344 51 1392 56L1440 61V101H1392C1344 101 1248 101 1152 101C1056 101 960 101 864 101C768 101 672 101 576 101C480 101 384 101 288 101C192 101 96 101 48 101H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
