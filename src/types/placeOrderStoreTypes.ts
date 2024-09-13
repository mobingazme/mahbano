// types/placeOrderStoreTypes.ts

// تایپ برای جزئیات آیتم‌های سبد خرید
export interface CartItem {
  product_id: number; // تغییر به number
  qty_basket: number;
  type: string;
  variety_id: number; // اگر این هم عدد است، به number تغییر دهید
  variety_value_id: number; // اگر این هم عدد است، به number تغییر دهید
}

// تایپ برای جزئیات سبد خرید
export interface CartDetails {
  result: {
    items: CartItem[];
    coupon_code?: string;
  } | null;
}

// تایپ برای وضعیت استور
export interface PlaceOrderState {
  isLoading: boolean;
  placeOrder: () => Promise<{ success: boolean; user_message: string; data?: any }>;
}
