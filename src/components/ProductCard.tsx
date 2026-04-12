import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatRupiah, getDiscountedPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <Link
      href={`/produk/${product.slug}`}
      id={`product-card-${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-amber-50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

<<<<<<< HEAD
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-red-500 text-white text-xs font-bold shadow-md">
            -{product.discount}%
          </div>
        )}

        {/* Popular Badge */}
        {product.popular && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-amber-500 text-white text-xs font-bold shadow-md">
            ⭐ Populer
          </div>
        )}
=======
        {/* Badges Container - Single Badge Display */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-start pointer-events-none">
          <div className="flex flex-col gap-2">
            {product.bestSeller ? (
              <div className="px-3 py-1.5 rounded-xl bg-orange-600 text-white text-[10px] md:text-xs font-bold shadow-lg w-fit animate-in fade-in zoom-in duration-300">
                🔥 Terlaris
              </div>
            ) : product.popular ? (
              <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-white text-[10px] md:text-xs font-bold shadow-lg w-fit animate-in fade-in zoom-in duration-300">
                ⭐ Populer
              </div>
            ) : product.discount > 0 ? (
              <div className="px-3 py-1.5 rounded-xl bg-red-500 text-white text-[10px] md:text-xs font-bold shadow-lg w-fit animate-in fade-in zoom-in duration-300">
                -{product.discount}%
              </div>
            ) : null}
          </div>
        </div>
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium">
            Lihat Detail →
          </span>
        </div>
      </div>

      {/* Content */}
<<<<<<< HEAD
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-amber-700 transition-colors">
=======
      <div className="p-4 space-y-4">
        <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-amber-700 transition-colors h-10 md:h-12 flex items-center">
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
          {product.name}
        </h3>

        <div className="space-y-1">
          <p className="text-lg md:text-xl font-bold text-amber-600">
            {formatRupiah(discountedPrice)}
          </p>
          {product.discount > 0 && (
            <p className="text-xs md:text-sm text-gray-400 line-through">
              {formatRupiah(product.price)}
            </p>
          )}
        </div>

<<<<<<< HEAD
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{product.sold} terjual</span>
          <span>•</span>
          <span>{product.weight}</span>
=======
        <div className="flex items-center justify-between gap-2 text-[10px] md:text-xs text-gray-400 pt-1 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-gray-600 italic">{product.sold} terjual</span>
            <span>•</span>
            <span>{product.weight}</span>
          </div>
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
        </div>
      </div>
    </Link>
  );
}
