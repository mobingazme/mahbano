import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useProductsStore = create(
  persist(
    devtools(
      (set, get) => ({
        products: [],
        can_filter: {},
        paginate: {},
        isLoading: false,
        isError: false,
        query: {}, // شرایط query
        setQuery: (newQuery) => set({ query: newQuery }), // تابع تغییر شرایط query
        fetchProducts: async () => {
          // تغییر اینجا: تابع fetchProducts باید مستقیما از set به عنوان پارامتر استفاده کند
          set({ isLoading: true });

          try {
            const { query } = get(); // دسترسی به وضعیت جاری با استفاده از get()
            const response = await fetch(`https://admin.mynikai.ir/api/v1/products`, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            const data = await response.json();
            //console.log(data.result)
            set((state) => ({
              ...state,
              products: data.result.products,
              can_filter: data.result.can_filter,
              paginate: data.paginate,
              isLoading: false,
            }));
           
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching products:', error);
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

export default useProductsStore;