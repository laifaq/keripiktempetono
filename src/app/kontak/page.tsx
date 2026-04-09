"use client";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Header Banner */}
      <div className="bg-amber-900 py-16 md:py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-700 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
            <p className="text-amber-100/90 text-lg">Punya pertanyaan, pesanan massal, atau masukan? Kami siap melayani Anda dengan senang hati.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <a href="https://wa.me/6285733325250" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp</h3>
              <p className="text-gray-500 mb-3">Respon cepat untuk pertanyaan & pesanan langsung.</p>
              <p className="font-semibold text-lg text-green-600">085733325250</p>
            </a>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Lokasi Toko</h3>
              <p className="text-gray-500 mb-3">Kunjungi kami langsung untuk membeli atau melihat produksi (dengan janji temu).</p>
              <p className="font-medium text-gray-900">
                Jl. Pisang Agung III No.14C,<br />
                Pisang Candi, Kec. Sukun,<br />
                Kota Malang, Jawa Timur 65146
              </p>
            </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">Social & Marketplace</h3>
              <div className="flex flex-col gap-3">
                 <a href="https://s.shopee.co.id/2BAo62R1jO" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-amber-600 font-medium">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">S</span>
                    Shopee Official
                 </a>
                 <a href="https://www.instagram.com/keripiktempetono" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-amber-600 font-medium">
                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center">I</span>
                    Instagram
                 </a>
                 <a href="https://www.tiktok.com/@keripiktempetono" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-amber-600 font-medium">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center">T</span>
                    TikTok
                 </a>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.311545648589!2d112.6078718!3d-7.9863456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883da47e8533f%3A0xf817f13a3bfa1f1!2skeripik%20tempe%20tono!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
