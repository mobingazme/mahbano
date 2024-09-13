// stores/useProductStore.ts
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { ProductState, Product } from '@/types/productStoreTypes'; // Importing types

const useProductStore = create<ProductState>()(
  persist(
    devtools(
      (set) => ({
        products: null,
        isLoading: false,
        isError: false,
        fetchProducts: async (id: number) => {
          set({ isLoading: true });
          try {
            const token = Cookies.get('authToken');
            if (!token) {
              throw new Error('No auth token found');
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
              method: 'GET',
              cache: 'force-cache',
              headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });

            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            set({ products: data.result ? [data.result] : null, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching products:', error);
          }
        },
      }),
    ),
    {
      name: 'product-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useProductStore;
