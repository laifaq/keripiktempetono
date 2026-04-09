"use client";

import Image from "next/image";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 py-16 md:py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Tentang Kami</h1>
            <p className="text-amber-50 text-lg">Mengenal lebih dekat legenda camilan khas Kota Malang</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Kisah Keripik Tempe Tono</h2>
                    <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify mb-4">
                        "Keripik Tempe TONO telah hadir sebagai camilan khas Kota Malang dengan kualitas terbaik dan rasa yang konsisten."
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        Berawal dari resep rumahan yang sederhana namun kaya akan rasa, kami berkomitmen untuk mempertahankan keaslian cita rasa keripik tempe khas Malang. Setiap lembar keripik kami diproses dengan dedikasi tinggi, menggunakan kedelai pilihan berkualitas, dan digoreng dengan teknik khusus untuk menghasilkan "kriuk" yang sempurna.
                    </p>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Profil Usaha</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-amber-200 p-2 rounded-lg text-amber-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Pemilik & Pendiri</p>
                                <p className="font-bold text-gray-900">Ibu Wiwik Srilaningsih</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <div className="mt-1 bg-amber-200 p-2 rounded-lg text-amber-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Pusat Produksi</p>
                                <p className="font-semibold text-gray-900">Jl. Pisang Agung III No.14C, Pisang Candi, Kota Malang</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                        src="/images/hero-banner.png" 
                        alt="Produksi Keripik Tempe Tono" 
                        fill 
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <p className="font-bold text-2xl mb-2">Kualitas Premium</p>
                        <p className="text-white/80">Renyah, Tipis, Spesial.</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Visi Misi */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center pt-16 border-t border-gray-100">
            <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kualitas Terjamin</h3>
                <p className="text-gray-600">Selalu menggunakan bahan baku pilihan terbaik dan menjaga kebersihan dapur produksi kami.</p>
            </div>
             <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rasa Autentik</h3>
                <p className="text-gray-600">Terus mempertahankan bumbu rempah tradisional untuk menjaga kekhasan Kota Malang.</p>
            </div>
             <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pelanggan Puas</h3>
                <p className="text-gray-600">Prioritas utama kami adalah kepuasan pelanggan dalam setiap gigitan Keripik Tempe Tono.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
