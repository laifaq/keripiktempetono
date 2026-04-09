import Link from "next/link";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">T</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">
                  Keripik Tempe Tono
                </h3>
                <p className="text-xs text-amber-300 tracking-wider uppercase">
                  Khas Malang
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
                Jl. Pisang Agung III No.14C, Pisang Candi, Kota Malang
              </p>
              <a
                href="https://wa.me/6285733325250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 text-green-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.125 1.52 5.862L.06 23.734l5.99-1.572A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.99 0-3.87-.527-5.49-1.45l-.394-.236-3.556.934.948-3.468-.257-.41A9.85 9.85 0 012.18 12C2.18 6.58 6.58 2.18 12 2.18S21.82 6.58 21.82 12 17.42 21.82 12 21.82z" />
                </svg>
                085733325250
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/keripiktempetono"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-800/50 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@keripiktempetono"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-800/50 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.58-1.42V6.69h3.58z" />
                </svg>
              </a>
              <a
                href="https://s.shopee.co.id/2BAo62R1jO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-800/50 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Shopee"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.248 18.348c-.088.087-.203.131-.318.131s-.23-.044-.318-.131l-2.612-2.612-2.612 2.612a.449.449 0 01-.636 0 .449.449 0 010-.636l2.612-2.612-2.612-2.612a.449.449 0 010-.636.449.449 0 01.636 0L12 14.464l2.612-2.612a.449.449 0 01.636 0 .449.449 0 010 .636l-2.612 2.612 2.612 2.612a.449.449 0 010 .636zM16 10H8a1 1 0 110-2h8a1 1 0 110 2zm0-4H8a1 1 0 110-2h8a1 1 0 110 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-amber-800/50 text-center">
          <p className="text-sm text-amber-300/60">
            &copy; {new Date().getFullYear()} Keripik Tempe Tono. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
