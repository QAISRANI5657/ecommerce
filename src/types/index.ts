export type CategorySlug =
  | "smart-watches"
  | "headphones"
  | "gaming"
  | "keyboards"
  | "smart-home"
  | "mobile";

export type ProductBadge = "sale" | "new" | "bestseller" | "limited" | null;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: CategorySlug;
  categoryLabel: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge: ProductBadge;
  badgeLabel?: string;
}

export interface Category {
  id: CategorySlug;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
