import { create } from 'zustand';
import Cookies from 'js-cookie';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { FavoriteProduct,FavoriteState } from '@/types/favoriteStoreTypes'



const UseFavoriteStore = create<FavoriteState>()(
  persist(
    devtools(
      (set) => ({
        favorites: { result: [] },
        isLoading: false,
        isError: false,
        userMessage: "",
        fetchFavorites: async () => {
          const token = Cookies.get('authToken');
          try {
            set({ isLoading: true });
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/favourite?type=products`, {
              method: 'GET',
              cache: 'no-store',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set({ favorites: data, isLoading: false });
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching favorites:', error);
          }
        },
        toggleFavorite: async (productId: number) => {
          const token = Cookies.get('authToken');
          try {
            set({ isLoading: true });
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/favourite`, {
              method: 'POST',
              cache: 'no-store',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify({
                id: productId,
                type: 'products',
              }),
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set((state) => {
              const updatedFavorites = state.favorites.result.filter((item) => item.id !== productId);
              const newFavorites = Array.isArray(data.result) ? data.result : [];
              return { 
                favorites: { ...state.favorites, result: [...updatedFavorites, ...newFavorites] }, 
                isLoading: false, 
                userMessage: data.user_message 
              };
            });
            await UseFavoriteStore.getState().fetchFavorites();
            return data.user_message;
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error toggling product in favorites:', error);
            throw error;
          }
        },
      }),
      { name: 'favorite-store' }
    ),
    {
      name: 'favorite-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// Fetch the favorites initially when the store is created
UseFavoriteStore.getState().fetchFavorites();

export default UseFavoriteStore;
