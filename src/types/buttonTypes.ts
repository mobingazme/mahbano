// types/ButtonTypes.ts
export interface AddToCartButtonProps {
    onClick: () => void;
    isLoading: boolean;
    disabled?: boolean;
  }
  
  export interface FavoriteButtonProps {
    onClick: () => void;
    isLoading: boolean;
    isFavorite: boolean;
  }
  