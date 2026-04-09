"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { slugify } from "@/lib/utils";

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (product: Product) => void;
  isLoading?: boolean;
}

export default function ProductForm({ initialData, onSubmit, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    slug: "",
    price: 0,
    discount: 0,
    imageUrl: "",
    description: "",
    weight: "",
    shopeeUrl: "",
    popular: false,
    sold: 0,
    archived: false,
  });

  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (type === "number") {
        newData[name as keyof Product] = Number(value) as never;
      } else if (type === "checkbox") {
        newData[name as keyof Product] = (e.target as HTMLInputElement).checked as never;
      } else {
        newData[name as keyof Product] = value as never;
      }

      // Auto-generate slug when name changes
      if (name === "name" && !initialData) {
        newData.slug = slugify(value);
      }

      return newData;
    });

    if (name === "imageUrl") {
      setPreviewError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Product);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Contoh: Keripik Tempe Balado"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
            <input
              type="text"
              id="slug"
              name="slug"
              required
              value={formData.slug || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-xl text-gray-500"
              readOnly={!!initialData}
              placeholder="auto-generated-slug"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="0"
                value={formData.price || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">Diskon (%)</label>
              <input
                type="number"
                id="discount"
                name="discount"
                min="0"
                max="100"
                value={formData.discount || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Berat</label>
              <input
                type="text"
                id="weight"
                name="weight"
                required
                value={formData.weight || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Contoh: 200g"
              />
            </div>
            <div>
              <label htmlFor="sold" className="block text-sm font-medium text-gray-700 mb-1">Terjual</label>
              <input
                type="number"
                id="sold"
                name="sold"
                min="0"
                value={formData.sold || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              required
              value={formData.imageUrl || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="/images/product-name.png atau https://..."
            />
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center min-h-[160px] bg-gray-50">
            {formData.imageUrl && !previewError ? (
              <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={formData.imageUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onError={() => setPreviewError(true)}
                />
              </div>
            ) : (
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-1 text-sm text-gray-500">Preview Gambar</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="shopeeUrl" className="block text-sm font-medium text-gray-700 mb-1">Link Shopee</label>
            <input
              type="url"
              id="shopeeUrl"
              name="shopeeUrl"
              required
              value={formData.shopeeUrl || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="https://shopee.co.id/..."
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Produk</label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div className="flex items-center gap-2 bg-amber-50 p-4 rounded-xl border border-amber-100">
        <input
          type="checkbox"
          id="popular"
          name="popular"
          checked={formData.popular || false}
          onChange={handleChange}
          className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
        />
        <label htmlFor="popular" className="text-sm font-medium text-amber-900 cursor-pointer">
          Tandai sebagai Produk Populer
        </label>
      </div>

      <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 focus:ring-4 focus:ring-amber-200 transition-all shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isLoading ? "Menyimpan..." : "Simpan Produk"}
        </button>
      </div>
    </form>
  );
}
