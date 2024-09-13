// types/ProductTypes.ts
export interface ProductOptionsProps {
    varieties: Variety[];
    selectedColor: string;
    onColorChange: (color: string, product: Variety) => void;
    inventory: number;
    productCount: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }
  
  export interface SliderProductDetailsProps {
    Data: {
        cover: string;
      };
    
  }
  
export interface Variety {
    variety_value_color_code: string;
    variety_id: number;
    variety_value_id: number;
  }