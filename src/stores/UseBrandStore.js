import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const UseBrandStore = create(
  persist(
    devtools(
      (set) => ({
        brands: [],
        isLoading: false,
        isError: false,
        fetchBrands: async () => {
          set((state) => ({
            ...state,
            isLoading: true,
          }));
          try {
            const response = await fetch('https://admin.mynikai.ir/api/v1/brands', {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            const data = await response.json();
            set((state) => ({
              ...state,
              brands: data.result,
              isLoading: false,
            }));
           console.log(data)
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error fetching brands:', error);
          }
        },
      })
    ),
    {
      name: 'brand-store',
      storage: typeof window !== 'undefined' ? localStorage : undefined,
    }
  )
);

export default UseBrandStore;