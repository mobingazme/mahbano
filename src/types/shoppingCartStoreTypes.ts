export interface Product {
  product_id: number;
  quantity: number;
  type: string;
  variety_id?: number;
  variety_value_id?: number;
  sale_price: number;
  title: string;
  cover: string;
}


export interface CartDetails {
  total_price: number;
  items: Product[];
  coupon_code?: string;
  [key: string]: any; // Allow for additional properties
}

export interface ShoppingCartState {
  cart: CartItem[];
  cartDetails: CartDetails | null;
  discountCode: string | null;
  fetchCartDetails: () => Promise<void>;
  removeItemFromCart: (productId: number) => Promise<void>;
  setDiscountCode: (code: string | null) => void;
  addItemToCart: (product: CartItem) => Promise<void>; // تغییر به CartItem
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export type CartItem = {
  product_id: number;
  quantity: number;
  type: 'simple' | 'variable';
  variety_id?: number;
  variety_value_id?: number;
};