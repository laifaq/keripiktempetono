"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function Footer() {
  const pathname = usePathname();
  const getSetting = useSettingsStore(state => state.getSetting);

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const brandName = getSetting('brand_name', 'Keripik Tempe Tono');
  const brandLogo = getSetting('brand_logo', 'https://down-id.img.susercontent.com/file/id-11134233-7r98w-lsryht7jdcndec@resize_w160_nl.webp');
  const mapsAddress = getSetting('maps_address', 'Jl. Pisang Agung III No.14C, Pisang Candi, Kota Malang');
  const socialWa = getSetting('social_wa', '085733325250');
  const socialIg = getSetting('social_ig', '@keripiktempetono');
  const socialShopee = getSetting('social_shopee', 'https://s.shopee.co.id/2BAo62R1jO');
  const mapsUrl = getSetting('maps_url', 'https://maps.app.goo.gl/f5z7uL3Kg3EJDR9d9');

  return (
    <footer id="main-footer" className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center overflow-hidden">
                <img src={brandLogo} alt={`${brandName} Logo`} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">
                  {brandName}
                </h3>
                <p className="text-xs text-amber-300 tracking-wider uppercase">
                  {brandName.toLowerCase().includes('tono') ? 'Khas Malang' : ''}
                </p>
              </div>
            </div>
            <p className="text-sm text-amber-200/80 leading-relaxed">
              Camilan khas Kota Malang dengan kualitas terbaik dan rasa yang
              konsisten. Diproses secara higienis dengan bahan pilihan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base">Navigasi</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/katalog", label: "Katalog" },
                { href: "/galeri", label: "Galeri" },
                { href: "/kontak", label: "Kontak" },
                { href: "/tentang", label: "Tentang" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-200/80 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base">
              Hubungi Kami
            </h3>
            <div className="space-y-3 text-sm text-amber-200/80">
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-amber-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {mapsAddress}
                </a>
              </p>
              <a
                href={`https://wa.me/62${socialWa.replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/3840px-WhatsApp.svg.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                {socialWa}
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={`https://www.instagram.com/${socialIg.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-800/50 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a
                href={socialShopee}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-800/50 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Shopee"
              >
                <img src="https://emping.web.id/wp-content/uploads/Shopee-Logo-1.png" alt="Shopee" className="w-5 h-5 object-contain scale-125" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-amber-800/50 text-center">
          <p className="text-sm text-amber-300/60">
            &copy; {new Date().getFullYear()} {brandName}. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
