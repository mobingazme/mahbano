import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useCategoriesStore = create(
  persist(
    devtools(
      (set) => ({
        categories: [],
        isLoading: false,
        isError: false,
        fetchCategories: async () => {
          set((state) => ({
            ...state,
            isLoading: true,
          }));
          try {
            const response = await fetch('https://admin.mynikai.ir/api/v1/categories', {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              next: { revalidate: 7 * 24 * 60 * 1000 },
            });
            const data = await response.json();
            set((state) => ({
              ...state,
              categories: data.result,
              isLoading: false,
            }));
            console.log(data)
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error fetching categories:', error);
          }
        },
      })
    ),
    {
      name: 'categories-store',
      storage: typeof window !== 'undefined' ? localStorage : undefined,
    }
  )
);

export default useCategoriesStore;