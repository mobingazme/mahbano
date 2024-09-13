// types/productsTypes.ts
export interface QueryParams {
  page: number;
  search: string;
  categories: number[];
  brands: number[];
  just_exist: number;
  attributes: number[];
  price_range: [number | null, number | null];
  variety: number[];
  only_in_discount: boolean;
  sort: 
    | 'asc_price_products'
    | 'desc_price_products'
    | 'discount_products'
    | 'favourite_products'
    | 'best_seller_products'
    | 'random_products'
    | 'new_products';
}

export interface Product {
  id: number;
  title: string;
  cover: string;
  inventory: number;
  is_discount: number;
  old_price: number | null;
  sale_price: number;
  sale_type: 'simple' | 'variable';
  seo_title: string | null;
  sku: string;
  brief: string | null;
  type_discount: string | null;
  value_discount: number | null;
  productCount?: number;
}

export interface FetchProductsResponse {
  result: {
    products: Product[];
  };
  paginate: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export interface ProductsState {
  products: Product[];
  paginate: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
  isLoading: boolean;
  isError: boolean;
  query: QueryParams;
  setQuery: (newQuery: Partial<QueryParams>) => void;
  fetchProducts: () => Promise<void>;
}
  