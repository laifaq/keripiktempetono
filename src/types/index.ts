export interface Product {
  slug: string;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
  description: string;
  weight: string;
  shopeeUrl: string;
  popular: boolean;
<<<<<<< HEAD
=======
  bestSeller: boolean;
>>>>>>> 88cb45f (initial commit: full admin dashboard and dynamic settings)
  sold: number;
  archived: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export type SortOption = "populer" | "terlaris" | "termurah";
