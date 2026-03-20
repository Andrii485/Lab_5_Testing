export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
