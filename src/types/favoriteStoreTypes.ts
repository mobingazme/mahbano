export interface Favorite {
    id: number;
    // سایر ویژگی‌های مربوط به محصولات محبوب
  }
  
  export interface FavoriteStoreState {
    favorites: { result: Favorite[] };
    isLoading: boolean;
    isError: boolean;
    userMessage: string;
    fetchFavorites: () => Promise<void>;
    toggleFavorite: (productId: number) => Promise<string>;
  }
  