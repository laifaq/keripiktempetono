import Script from "next/script";

export const metadata = {
  title: "Galeri | Keripik Tempe Tono",
  description: "Lihat keseruan dan momen terbaik kami bersama pelanggan setia Keripik Tempe Tono.",
};

export default function GalleryPage() {
  const instagramEmbeds = [
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKej3HjyVcn/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKej3HjyVcn/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKWrX9ozYYV/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKWrX9ozYYV/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DKMdDbapS8w/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DKMdDbapS8w/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DSShwetEtAS/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DSShwetEtAS/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DOab83JEloG/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DOab83JEloG/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DSSl1TqkhdY/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DSSl1TqkhdY/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">View on Instagram</a></div></blockquote>`,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-900 mb-4">Galeri Instagram</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Kumpulan momen, video, dan aktifitas terbaru dari Keripik Tempe Tono.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instagramEmbeds.map((embed, index) => (
          <div 
            key={index}
            className="w-full flex justify-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow p-1"
            dangerouslySetInnerHTML={{ __html: embed }} 
          />
        ))}
      </div>

      <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />
    </div>
  );
}
