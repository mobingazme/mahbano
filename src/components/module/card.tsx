// Card.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Alerts from '@/elements/alerts';
import useShoppingCartStore from '@/stores/useShoppingCartStore';
import UseFavoriteStore from '@/stores/useFavoriteStore';
import Image from 'next/image';

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

interface CardProps {
  id: number;
  cover: string;
  sale_price: number;
  title: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  sale_type: 'simple' | 'variable'; // تعریف درست نوع
  selectedProduct?: {
    variety_id: number;
    variety_value_id: number;
  };
  productCount: number; // این ویژگی لازم است
}


const Card: React.FC<CardProps> = (props) => {
  const currentPage = usePathname();
  const { id, cover, sale_price, title, sale_type, selectedProduct, productCount } = props;
  const { toggleFavorite } = UseFavoriteStore((state) => state);
  const { addItemToCart } = useShoppingCartStore((state) => state);
  const alert = Alerts();
  const [loadingFavorites, setLoadingFavorites] = useState<Record<number, boolean>>({});
  const [loadingCart, setLoadingCart] = useState<Record<number, boolean>>({});

  const addToFavoritesHandler = async (productId: number) => {
    setLoadingFavorites((prevState) => ({ ...prevState, [productId]: true }));
    try {
      const userMessage = await toggleFavorite(productId);
      alert.success(userMessage);
    } catch (error) {
      alert.error('An error occurred while toggling favorite.');
      console.error(error);
    } finally {
      setLoadingFavorites((prevState) => ({ ...prevState, [productId]: false }));
    }
  };

  const addItemToCartHandler = async () => {
    setLoadingCart((prevState) => ({ ...prevState, [id]: true }));
    console.log(typeof id)
    try {
      let cartItem: CartItem;

      if (sale_type === 'simple') {
        cartItem = {
          product_id: id,
          quantity: productCount,
          type: 'simple',
        };
      } else if (selectedProduct) {
        const { variety_id, variety_value_id } = selectedProduct;
        cartItem = {
          product_id: id,
          quantity: productCount,
          type: 'variable',
          variety_id,
          variety_value_id,
        };
      } else {
        console.error('selectedProduct is null');
        alert.error('تنوع محصول انتخاب نشده است');
        return;
      }

      await addItemToCart(cartItem);
      alert.success('محصول به سبد خرید اضافه شد');
    } catch (error) {
      console.error('Error adding to cart', error);
      alert.error('خطا در افزودن به سبد خرید');
    } finally {
      setLoadingCart((prevState) => ({ ...prevState, [id]: false }));
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className='w-fit relative shadow-md max-w-80'>
      <div className="relative group">
        <Link href={`/store/${id}`}>
          <Image
            width={1000}
            height={1000}
            className='w-[270px] h-80 md:h-64 rounded-sm cursor-pointer transition duration-300 hover:scale-110'
            src={cover}
            alt="محصول"
          />
        </Link>
        <div className='absolute inset-0 flex items-center justify-center hover:bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-700'>
          <div className='bg-gr text-white absolute bottom-0 flex items-center justify-around w-full p-4'>
            <>
              <Link href={`/store/${id}`}>
                <h5 className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} duration-700 font-bold text-sm`}>نمایش بیشتر...</h5>
              </Link>
              <div className='flex items-center'>
                {loadingFavorites[id]
                  ? <Icon className={` ${currentPage === '/' ? ' text-Turquoise' : 'text-B'} w-7 h-7`} icon="svg-spinners:6-dots-scale" />
                  : <Icon onClick={() => addToFavoritesHandler(id)} className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-white mx-2 duration-700 w-7 h-7 cursor-pointer`} icon="mdi-light:heart" />
                }
                {loadingCart[id]
                  ? <Icon className={` ${currentPage === '/' ? ' text-Turquoise' : 'text-B'} w-7 h-7`} icon="svg-spinners:6-dots-scale" />
                  : <Icon onClick={() => addItemToCartHandler()} className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-white mx-2 duration-700 w-7 h-7 cursor-pointer`} icon="mdi-light:cart" />
                }
              </div>
            </>
          </div>
        </div>
      </div>
      <div className='mt-2 px-2 flex flex-col'>
        <div className='flex justify-between p-2 w-fit'>
          <h2 className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} cursor-pointer text-black duration-700 font-bold text-sm`}>{title}</h2>
          <h3 className='text-gray-600'>تومان : {sale_price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
