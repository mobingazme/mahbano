import Cookies from 'js-cookie';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useProductStore = create(
  persist(
    devtools(
      (set) => ({
        products: [],
        isLoading: false,
        isError: false,
        fetchProducts: async (id) => {
          set((state) => ({ ...state, isLoading: true }));
          try {
            const token = Cookies.get('authToken');
            const response = await fetch(`https://admin.mynikai.ir/api/v1/products/${id}`, {
              method: 'GET',
              cache: 'force-cache',
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`, // استفاده از توکن احراز هویت
              },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set((state) => ({ ...state, products: data.result }));
            console.log(data.result);
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching products:', error);
          } finally {
            set((state) => ({ ...state, isLoading: false }));
          }
        },
      })
    ),
    {
      name: 'product-store',
      storage: typeof window !== 'undefined' ? sessionStorage : undefined,
    }
  )
);

export default useProductStore;