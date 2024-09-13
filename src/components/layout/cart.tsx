'use client';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useShoppingCartStore from '@/stores/useShoppingCartStore';
import LottieNoData from '../lottie/noData';
import LottieNoDataTwo from '../lottie/noDataTwo';
import Alerts from '@/elements/alerts';

// تعریف نوع Props برای کامپوننت Cart
interface CartProps {
  onClose: () => void;
}

// تعریف نوع Product برای item
interface Product {
  product_id: number;
  quantity: number;
  type: string;
  variety_id?: number;
  variety_value_id?: number;
  sale_price: number;  // اضافه کردن sale_price
  title: string;       // اضافه کردن title
  cover: string;       // اضافه کردن cover
}

interface CartDetails {
  result: {
    factor: {
      total_discount_amount: number;
      discount_amount: number;
      discount_code_amount: number;
      // Add other properties if needed
    };
    items: Product[];
  };
  [key: string]: any;
}

function Cart({ onClose }: CartProps) {
  const currentPage = usePathname();
  const alerts = Alerts();
  const [isOpen, setIsOpen] = useState(true);
  const [loadingItems, setLoadingItems] = useState<{ [key: number]: boolean }>({});
  const { cart, cartDetails, fetchCartDetails, removeItemFromCart, setDiscountCode } = useShoppingCartStore();

  useEffect(() => {
    if (cart.length > 0 && !cartDetails) {
      fetchCartDetails().catch((error) => {
        console.error("Failed to fetch cart details:", error);
      });
    }
    console.log('cartDetails:', cartDetails); // بررسی محتوای cartDetails
  }, [cart, cartDetails, fetchCartDetails]);

  const handleClose = () => {
    setIsOpen(false);
    animateOut();
    setTimeout(onClose, 500);
  };

  const animateIn = () => {
    const element = document.querySelector('.cart-container');
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }
  };

  const animateOut = () => {
    const element = document.querySelector('.cart-container');
    if (element) {
      element.classList.remove('animate__fadeInRight');
      element.classList.add('animate__animated', 'animate__fadeOutRight');
    }
  };

  useEffect(() => {
    if (isOpen) {
      animateIn();
    }
  }, [isOpen]);

  const handleRemoveItem = async (productId: number) => {
    setLoadingItems((prev) => ({ ...prev, [productId]: true }));
    await removeItemFromCart(productId);
    alerts.success('محصول از سبد خرید شما حذف شد');
    setLoadingItems((prev) => ({ ...prev, [productId]: false }));
  };

  const items = cartDetails?.result?.items || [];

  return (
    <div className={`fixed top-0 right-0 w-3/4 md:w-2/5 lg:max-w-[400px] h-full bg-white z-50 flex flex-col items-center animate__animated animate__fadeInRight cart-container shadow-2xl`}>
      <Icon onClick={handleClose} className={`${currentPage === '/' ? 'hover:text-Turquoise text-black w-8 h-fit absolute top-0 left-0 cursor-pointer duration-300 m-4' : 'hover:text-B text-black w-8 h-fit absolute top-0 left-0 cursor-pointer duration-300 m-4'}`} icon="iconamoon:close-bold" />
      <h4 className='text-gray-900 font-bold text-lg md:text-2xl items-start mt-10'>سبد خرید</h4>
      {items.length > 0 ? (
        <>
          {items.slice(0, 3).map((item: Product) => (
            <div key={item.product_id} className='flex justify-between items-center w-full px-5 py-2 shadow'>
              <img className='w-16 md:w-24 border border-gray-300' src={item.cover} alt={item.title} />
              <div className='flex flex-col mx-2'>
                <h4 className='font-bold text-sm text-gray-500'>{item.title}</h4>
                <span className='text-sm mt-1 text-gray-500'>قیمت: {item.sale_price}</span>
              </div>
              <div className='flex items-center'>
                {loadingItems[item.product_id] ? (
                  <Icon className={`${currentPage === '/' ? ' text-Turquoise ' : ' text-B'} w-7 h-7 animate-spin`} icon="svg-spinners:6-dots-scale" />
                ) : (
                  <Icon onClick={() => handleRemoveItem(item.product_id)} className={`${currentPage === '/' ? 'text-Turquoise' : 'text-B'} hover:text-red-500 duration-300 w-8 h-fit cursor-pointer`} icon="solar:trash-bin-trash-linear" />
                )}
              </div>
            </div>
          ))}
          <div className='my-3 w-full flex justify-center items-center'>
            <h4 className={`${currentPage === '/' ? 'text-Turquoise' : 'text-B'}`}>
              <span className={`${currentPage === '/' ? ' bg-Turquoise ' : ' bg-B '} text-white font-bold text-xl px-2 mx-1 transform w-5 h-5 rounded-full animate__animated animate__flash animate__infinite animate__slower`}>{items.length}</span>
              مورد در سبد شما قرار دارد
            </h4>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <h5 className='text-gray-500 my-4'>سبد خرید شما خالی است.</h5>
          {currentPage === '/' ? <LottieNoDataTwo /> : <LottieNoData />}
        </div>
      )}

      {/* Buttons at the bottom of the cart */}
      <div className='w-full py-3 px-5 mt-auto'>
        <Link href='/cart'>
          <button className={`${currentPage === '/' ? 'hover:text-Turquoise bg-Turquoise border-Turquoise border' : ' border hover:text-B bg-B border-B'} text-white hover:bg-white transition-all delay-100 font-bold w-full h-9 shadow-lg rounded-sm my-3`}>
            نمایش سبد خرید
          </button>
        </Link>
        <Link href='/'>
          <button className={`${currentPage === '/' ? 'hover:text-Turquoise bg-Turquoise border-Turquoise border' : ' border hover:text-B bg-B border-B'} text-white hover:bg-white transition-all delay-100 font-bold w-full h-9 shadow-lg rounded-sm`}>
            صورت حساب
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;


