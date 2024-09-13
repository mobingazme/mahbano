// src/stores/useCategoriesStore.ts

import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { CategoriesState } from '@/types/categoriesStoreTypes';

const useCategoriesStore = create<CategoriesState>()(
  persist(
    devtools(
      (set) => ({
        categories: [],
        isLoading: false,
        isError: false,
        fetchCategories: async () => {
          set({ isLoading: true });
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              next: { revalidate: 7 * 24 * 60 * 1000 }, // Revalidation for one week
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ categories: data.result, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching categories:', error);
          }
        },
      }),
      { name: 'categories-store' }
    ),
    {
      name: 'categories-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCategoriesStore;
