/**
 * Convert a string to a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Format a number as Indonesian Rupiah currency.
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate discounted price.
 */
export function getDiscountedPrice(price: number, discount: number): number {
  return Math.round(price - (price * discount) / 100);
}

/**
 * Generate a WhatsApp message link for a product.
 */
export function getWhatsAppLink(productName: string): string {
  const message = encodeURIComponent(
    `Halo, saya ingin membeli ${productName}`
  );
  return `https://wa.me/6285733325250?text=${message}`;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
