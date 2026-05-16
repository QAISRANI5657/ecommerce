import type { Testimonial } from "@/types";
import { avatarImages } from "@/lib/productImages";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Product Designer, San Francisco",
    avatar: avatarImages.sarah,
    rating: 5,
    text: "NovaCart feels like shopping at a flagship store online. The AuraPods Pro X exceeded every expectation — crystal-clear audio and the build quality is exceptional.",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Software Engineer, Austin",
    avatar: avatarImages.james,
    rating: 5,
    text: "Ordered the ZenBoard on Tuesday, had it by Thursday. Packaging was premium, setup took five minutes. This is how eCommerce should work.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Content Creator, Miami",
    avatar: avatarImages.emily,
    rating: 5,
    text: "My NovaWatch Ultra is the centerpiece of my daily workflow. Heart-rate tracking is spot-on, and the battery genuinely lasts a full week.",
  },
  {
    id: "4",
    name: "Marcus Thompson",
    role: "Esports Coach, Seattle",
    avatar: avatarImages.marcus,
    rating: 4,
    text: "The GlideMouse Pro is tournament-ready. Lightweight, responsive, and the customer support team resolved a sizing question within an hour.",
  },
];

export const stats = [
  { id: "customers", value: 50000, suffix: "+", label: "Happy Customers" },
  { id: "rating", value: 4.9, suffix: "", label: "Average Rating" },
  { id: "products", value: 120, suffix: "+", label: "Premium Products" },
  { id: "support", value: 24, suffix: "h", label: "Expert Support" },
];
