import create from 'zustand';
import Cookies from 'js-cookie';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import {Product,CartDetails,ShoppingCartState,CartItem} from '@/types/shoppingCartStoreTypes'
const token = Cookies.get('authToken');



const useShoppingCartStore = create<ShoppingCartState>()(
  persist(
    devtools(
      (set, get) => ({
        cart: [],
        cartDetails: null,
        discountCode: null,

        // تابع برای اضافه کردن آیتم به سبد خرید
        addItemToCart: async (cartItem: CartItem) => {
          set((state) => {
            const productId = cartItem.product_id;
            const existingProduct = state.cart.find(item => item.product_id === productId);
        
            if (existingProduct) {
              const updatedCart = state.cart.map(item =>
                item.product_id === productId ? { ...item, quantity: item.quantity + cartItem.quantity } : item
              );
              return { cart: updatedCart };
            } else {
              const updatedCart = [...state.cart, cartItem];
              return { cart: updatedCart };
            }
          });
          await get().fetchCartDetails();
        },

        // تابع برای حذف آیتم از سبد خرید
        removeItemFromCart: async (productId: number) => {
          set((state) => {
            const updatedCart = state.cart.filter(item => item.product_id !== productId);
            return { cart: updatedCart };
          });
          await get().fetchCartDetails(); // به‌روزرسانی جزئیات سبد خرید به صورت محلی
        },

        // تابع برای به روزرسانی تعداد آیتم
        updateQuantity: async (productId: number, quantity: number): Promise<void> => {
          set((state) => {
            const updatedCart = state.cart.map(item =>
              item.product_id === productId ? { ...item, quantity } : item
            );
            return { cart: updatedCart };
          });
          await get().fetchCartDetails();
        },

        // تابع برای خالی کردن سبد خرید
        clearCart: () => {
          set({ cart: [], cartDetails: null });
        },

        // تابع برای تنظیم کد تخفیف
        setDiscountCode: async (code: string | null) => {
          set({ discountCode: code });
          await get().fetchCartDetails();
        },

        // تابع برای بارگیری جزئیات سبد خرید
        fetchCartDetails: async () => {
          const cart = get().cart.map(item => ({ ...item }));

          if (cart.length === 0) {
            set({ cartDetails: null });
            return;
          }

          try {
            const payload: any = { products: cart };

            if (get().discountCode) {
              payload.coupon_code = get().discountCode;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders/basket/details`, {
              method: 'POST',
              cache: 'no-store',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(payload),
            });

            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            set({ cartDetails: data });
          } catch (error) {
            set({ cartDetails: null });
            console.error('Error fetching cart details:', error);
          }
        }
      })
    ),
    {
      name: 'shopping-cart',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        cart: state.cart,
        cartDetails: state.cartDetails,
        discountCode: state.discountCode,
      }),
    }
  )
);

export default useShoppingCartStore;
