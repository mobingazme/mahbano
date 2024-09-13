// types/ProductStoreTypes.ts
export interface Product {
  id: number;
  sale_price: number;
  old_price: number;
  inventory: number;
  variety: Variety[];
  sale_type: string;
  is_favourite: boolean;
  product_id: number;
  type: string;
  title: string;
  cover: string;
}

export interface Variety {
  variety_value_color_code: string;
  variety_id: number;
  variety_value_id: number;
}

export interface ProductState {
  products: Product[] | null;  // Changed from Product to Product[]
  isLoading: boolean;
  isError: boolean;
  fetchProducts: (id: number) => Promise<void>;  // Changed from (id: string) to (id: number)
}

