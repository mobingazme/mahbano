// src/stores/useBrandStore.ts

import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { BrandStoreState } from '@/types/brandStoreTypes';

const useBrandStore = create<BrandStoreState>()(
  devtools(
    persist(
      (set) => ({
        brands: [],
        isLoading: false,
        isError: false,
        fetchBrands: async () => {
          set({ isLoading: true });
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/brands`, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            set({ brands: data.result, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching brands:', error);
          }
        },
      }),
      {
        name: 'brand-store',
        storage: createJSONStorage(() => localStorage), // استفاده از localStorage برای ذخیره‌سازی
        partialize: (state) => ({
          brands: state.brands,
          isLoading: state.isLoading,
          isError: state.isError,
        }),
      }
    )
  )
);

export default useBrandStore;
