'use client'
import React, { useState, useEffect } from 'react';
import NavLinks from '../module/navLink';
import ProductInfo from '@/module/productInfo';
import ProductOptions from '@/module/productOptions';
import AddToCartButton from '@/elements/addToCartButton';
import FavoriteButton from '@/elements/favoriteButton';
import SliderProductDetails from '@/module/slider/sliderProductDetails';
import ShowDetails from '@/models/showDetails';
import useProductStore from '@/stores/useProductStore';
import useShoppingCartStore from '@/stores/useShoppingCartStore';
import UseFavoriteStore from '@/stores/useFavoriteStore';
import Alerts from '@/elements/alerts';
import { Product } from '@/types/productStoreTypes';

interface SimpleCartItem {
  product_id: number;
  quantity: number;
  type: 'simple';
}

interface VariableCartItem {
  product_id: number;
  quantity: number;
  type: 'variable';
  variety_id: number;
  variety_value_id: number;
}

type CartItem = SimpleCartItem | VariableCartItem;

const defaultProduct: Product = {
  id: 0,
  sale_price: 0,
  old_price: 0,
  inventory: 0,
  variety: [],
  sale_type: '',
  is_favourite: false,
  product_id: 0,
  type: '',
  title: '',
  cover: ''
};

interface Variety {
  variety_value_color_code: string;
  variety_id: number;
  variety_value_id: number;
}

interface CardDetailsProps {
  cardId: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({ cardId }) => {
  const { fetchProducts, products } = useProductStore((state) => state);
  const { addItemToCart } = useShoppingCartStore((state) => state);
  const { toggleFavorite } = UseFavoriteStore((state) => state);
  const alert = Alerts();

  const product: Product = products && products.length > 0 ? products[0] : defaultProduct;
  const { title = '', sale_price, old_price, inventory, variety = [], sale_type, is_favourite, cover } = product;
  const [productCount, setProductCount] = useState<number>(1);
  const defaultColor = variety.length > 0 ? variety[0].variety_value_color_code : '#fc0345';
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [selectedProduct, setSelectedProduct] = useState<Variety | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [cartLoading, setCartLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts(cardId);
  }, [fetchProducts, cardId]);

  useEffect(() => {
    if (!selectedProduct && variety.length > 0) {
      const defaultProduct = variety[0];
      setSelectedProduct(defaultProduct);
      setSelectedColor(defaultProduct.variety_value_color_code);
    }
  }, [selectedProduct, variety]);

  const handleIncrement = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 1) {
      setProductCount((prevCount) => prevCount - 1);
    }
  };

  const handleColorChange = (color: string, product: Variety) => {
    setSelectedColor(color);
    setSelectedProduct(product);
  };

  const addToFavoritesHandler = async (productId: number) => {
    setLoading(true);
    try {
      const userMessage = await toggleFavorite(productId);
      alert.success(userMessage);
    } catch (error) {
      alert.error('خطا در افزودن به لیست علاقه‌مندی‌ها');
    } finally {
      setLoading(false);
    }
  };

  const addItemToCartHandler = async () => {
    setCartLoading(true);

    try {
      let cartItem: CartItem;

      if (sale_type === 'simple') {
        cartItem = {
          product_id: cardId,
          quantity: productCount,
          type: 'simple'
        };
      } else if (selectedProduct) {
        const { variety_id, variety_value_id } = selectedProduct;
        cartItem = {
          product_id: cardId,
          quantity: productCount,
          type: 'variable',
          variety_id,
          variety_value_id
        };
      } else {
        console.error('selectedProduct is null');
        return;
      }

      await addItemToCart(cartItem);
      alert.success('محصول به سبد خرید اضافه شد');
      setProductCount(1);
    } catch (error) {
      console.error('Error adding to cart', error);
      alert.error('خطا در افزودن به سبد خرید');
    } finally {
      setCartLoading(false);
    }
  };

  const imageUrls = cover ? [cover, cover, cover] : [];
  const validSaleType: 'simple' | 'variable' = sale_type as 'simple' | 'variable';

  return (
    <div id='1' className='bg-white'>
      <NavLinks title="جزئیات محصول " />
      <div className='grid grid-cols-1 md:grid-cols-5 md:p-10'>
        <div className='col-span-2 lg:px-20 px-5'>
          <SliderProductDetails images={imageUrls} />
        </div>
        <div className='col-span-3'>
          <ProductInfo
            title={title}
            sale_price={sale_price}
            old_price={old_price}
            inventory={inventory}
            sale_type={validSaleType}
          />

          <div className='flex justify-between items-center w-fit border-t border-gray-200'>
            <ProductOptions
              sale_type={validSaleType}
              variety={variety}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
              inventory={inventory}
              productCount={productCount}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <AddToCartButton
              onClick={addItemToCartHandler}
              isLoading={cartLoading}
              disabled={inventory <= 0}
            />
            <FavoriteButton
              onClick={() => addToFavoritesHandler(product.id)}
              isLoading={loading}
              isFavorite={is_favourite}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <ShowDetails Data={product} />
      </div>
    </div>
  );
};

export default CardDetails;
