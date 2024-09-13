// src/types/brandStoreTypes.ts

export interface Brand {
    id: number;
    title: string;  // مطابقت با نامی که در کامپوننت استفاده می‌شود
    [key: string]: any;
  }
  
  export interface BrandStoreState {
    brands: Brand[];
    isLoading: boolean;
    isError: boolean;
    fetchBrands: () => Promise<void>;
  }
  