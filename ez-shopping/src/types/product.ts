import { Category } from "./category";

export interface Product {
  id: string;
  description: string;
  title: string;
  price: number;
  category: Category;
  images: string[];
}

export interface fetchProductsParams {
  offset: number;
  limit: number;
}
