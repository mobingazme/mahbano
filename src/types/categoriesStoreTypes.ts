// src/types/categoriesStoreTypes.ts

export interface Category {
    id: number;
    title: string; // تغییر نام از `name` به `title`
    slug: string;
    children: Category[];
  }
  
  export interface CategoriesState {
    categories: Category[];
    isLoading: boolean;
    isError: boolean;
    fetchCategories: () => Promise<void>;
  }
  