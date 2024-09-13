import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import {QueryParams,Product,FetchProductsResponse,ProductsState} from '@/types/productsStoreTypes'


const useProductsStore = create<ProductsState>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        paginate: {
          total: 0,
          per_page: 0,
          current_page: 0,
          last_page: 0,
        },
        isLoading: false,
        isError: false,
        query: {
          page: 1,
          search: "",
          categories: [],
          brands: [],
          just_exist: 0,
          attributes: [],
          price_range: [null, null],
          variety: [],
          only_in_discount: false,
          sort: 'asc_price_products'
        },
        setQuery: (newQuery: Partial<QueryParams>) => set((state) => ({
          query: { ...state.query, ...newQuery }
        })),
        fetchProducts: async () => {
          set({ isLoading: true });
        
          try {
            const { query } = get();
            const filteredQuery: Record<string, string> = {};
        
            // فیلتر کردن فقط پارامتر page
            if (query.page) {
              filteredQuery.page = query.page.toString();
            }
        
            // تبدیل پارامترهای فیلتر به query string
            const queryString = new URLSearchParams(filteredQuery).toString();
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products${queryString ? `?${queryString}` : ''}`;
        
            console.log('Fetching URL:', url);
        
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              cache: 'no-store',
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data: FetchProductsResponse = await response.json();
            console.log('Fetched Data:', data);
            set({
              products: data.result.products,
              paginate: {
                total: data.paginate.total,
                per_page: data.paginate.per_page,
                current_page: data.paginate.current_page,
                last_page: data.paginate.last_page,
              },
              isLoading: false,
              isError: false,
            });
          } catch (error) {
            console.error('Failed to fetch products:', error);
            set({ isLoading: false, isError: true });
          }
         
        },
        
      }),
      {
        name: 'products-storage', // نام استوریج
        storage: createJSONStorage(() => sessionStorage), // استفاده از sessionStorage برای ذخیره‌سازی
      }
    )
  )
);

export default useProductsStore;
