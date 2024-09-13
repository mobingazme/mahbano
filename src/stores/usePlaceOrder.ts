// stores/usePlaceOrder.ts
import { create } from 'zustand';
import Cookies from 'js-cookie';
import useShoppingCartStore from './useShoppingCartStore';
import { PlaceOrderState, CartItem } from '@/types/placeOrderStoreTypes';

const usePlaceOrder = create<PlaceOrderState>((set, get) => ({
  isLoading: false,
  placeOrder: async () => {
    set({ isLoading: true });
    const { cartDetails } = useShoppingCartStore.getState();
    let token = Cookies.get('authToken') || '';

    // چون می‌دانیم که کاربر توکن دارد، دیگر نیازی به شرط نیست. در اینجا فقط ارور TypeScript را رفع می‌کنیم.
    if (!cartDetails || !cartDetails.result || !cartDetails.result.items.length) {
      set({ isLoading: false });
      return { success: false, user_message: 'No cart details available for placing the order' };
    }

    const orderData = {
      transport_id: 1,
      address_id: 1,
      coupon_code: cartDetails.result.coupon_code || '',
      description: "",
      products: cartDetails.result.items.map((item: CartItem) => ({
        product_id: Number(item.product_id),
        quantity: item.qty_basket,
        type: item.type,
        variety_id: Number(item.variety_id),
        variety_value_id: Number(item.variety_value_id)
      }))
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders/insert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      if (response.status === 401) {
        const newToken = await refreshToken();
        token = newToken || ''; // اطمینان از اینکه token یک string است
        Cookies.set('authToken', token);
      
        const retryResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders/insert`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(orderData)
        });

        if (!retryResponse.ok) {
          const errorData = await retryResponse.json();
          set({ isLoading: false });
          return { success: false, user_message: `Error placing order after retry: ${errorData.user_message || errorData}` };
        }

        const data = await retryResponse.json();
        useShoppingCartStore.getState().clearCart();
        set({ isLoading: false });
        return { success: true, user_message: data.user_message || 'Order placed successfully after retry', data };
      } else if (!response.ok) {
        const errorData = await response.json();
        set({ isLoading: false });
        return { success: false, user_message: `Error placing order: ${errorData.user_message || errorData}` };
      } else {
        const data = await response.json();
        useShoppingCartStore.getState().clearCart();
        set({ isLoading: false });
        return { success: true, user_message: data.user_message || 'Order placed successfully', data };
      }
    } catch (error) {
      set({ isLoading: false });
      if (error instanceof Error) {
        return { success: false, user_message: `Error placing order: ${error.message}` };
      } else {
        return { success: false, user_message: 'An unknown error occurred' };
      }
    }
  }
}));

export default usePlaceOrder;

async function refreshToken(): Promise<string | undefined> {
  // پیاده‌سازی برای دریافت توکن جدید
  return undefined; // پیاده‌سازی نهایی شما بستگی به ساختار API دارد.
}
