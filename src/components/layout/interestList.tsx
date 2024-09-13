'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UseFavoriteStore from '@/stores/useFavoriteStore';
import { ThreeDots } from 'react-loader-spinner';
import Alerts from '@/elements/alerts';
import LottieNoData from '../lottie/noData';
import LottieNoDataTwo from '../lottie/noDataTwo';

// نوع پراپرتی‌های کامپوننت
interface InterestProps {
  onClose: () => void;
}

const Interest: React.FC<InterestProps> = ({ onClose }) => {
  const alerts = Alerts();
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const { favorites, fetchFavorites, toggleFavorite, isLoading, userMessage } = UseFavoriteStore(state => state);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const data = favorites.result;

  const handleClose = () => {
    setIsOpen(false);
    animateOut();
    setTimeout(onClose, 500);
  };

  const animateIn = () => {
    const element = document.querySelector('.interest-container') as HTMLElement;
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }
  };

  const animateOut = () => {
    const element = document.querySelector('.interest-container') as HTMLElement;
    if (element) {
      element.classList.remove('animate__fadeInRight');
      element.classList.add('animate__animated', 'animate__fadeOutRight');
    }
  };

  if (isOpen) {
    animateIn();
  }

  const deleteToFavoritesHandler = async (productId: number) => {
    if (productId) {
      setLoadingId(productId);
      try {
        const userMessage = await toggleFavorite(productId);
        setLoadingId(null);
        if (userMessage) {
          alerts.success(userMessage);
        } else {
          alerts.error("Operation failed.");
        }
      } catch (error) {
        setLoadingId(null);
        alerts.error("An error occurred while toggling favorite.");
        console.error(error);
      }
    }
  };

  return (
    <div className={`${currentPage === '/' ? 'bg-Turquoise' : 'bg-B'} fixed top-0 right-0 w-3/4 md:w-2/5 lg:max-w-[400px] h-full z-50 flex shadow-2xl flex-col items-center animate__animated animate__fadeInRight interest-container`}>
      <Icon onClick={handleClose} className={`${currentPage === '/' ? 'hover:text-white text-black w-8 h-fit absolute top-0 left-0 cursor-pointer duration-300 m-4' : 'hover:text-white text-black w-8 h-fit absolute top-0 left-0 cursor-pointer duration-300 m-4'}`} icon="iconamoon:close-bold" />
      <h4 className='text-white font-bold text-lg md:text-2xl  items-start my-10'>لیست علاقه مندی ها</h4>

      {data.length === 0 ? (
        <div className='flex flex-col items-center'>
          <h5 className='text-white my-4'>لیست علاقه مندی شما خالی است.</h5>
          <LottieNoData />
        </div>
      ) : (
        <>
          {Array.isArray(data) && data.slice(0, 3).map((favorite, index) => (
            <div key={index} className='flex justify-between items-center w-full px-2 py-1 shadow'>
              {favorite.cover ? (
                <img className='w-16 md:w-24 border border-gray-300' src={favorite.cover} alt={favorite.title} />
              ) : (
                <div className='w-24 h-24 flex items-center justify-center border border-gray-300 bg-gray-200'>
                  <span className='text-gray-500'>بدون تصویر</span>
                </div>
              )}
              <div className='flex flex-col mx-2'>
                <h4 className='font-bold text-sm text-white'>{favorite.title}</h4>
                <span className='text-sm mt-1 text-white'>تومان: {favorite.sale_price}</span>
              </div>
              <div onClick={() => { deleteToFavoritesHandler(favorite.id) }}>
                {loadingId === favorite.id ? (
                  <div className='flex flex-col m-4 justify-center items-center'>
                    <Icon className="w-7 h-7 text-white" icon="svg-spinners:6-dots-scale" />
                  </div>
                ) : (
                  <Icon className='text-white hover:text-red-500 duration-300 w-8 h-fit cursor-pointer' icon="solar:trash-bin-trash-linear" />
                )}
              </div>
            </div>
          ))}
          <div className='my-3 w-full flex justify-center items-center'>
            <h4><span className={`${currentPage === '/' ? 'text-Turquoise' : 'text-B'} ' font-bold  bg-white text-xl px-2 mx-1 transform w-5 h-5 rounded-full animate__animated animate__flash animate__infinite animate__slower '`}>{data.length}</span> مورد در لیست شما قرار دارد</h4>
          </div>
        </>
      )}

      <div className='w-full px-5 md:px-20 py-4  mt-auto'>
        <Link href='/interestList'>
          <button className={`${currentPage === '/' ? 'hover:text-Turquoise bg-Turquoise border-Turquoise border max-w-64' : 'border hover:text-B bg-B border-B max-w-64'} text-white shadow-lg hover:bg-white border-2 border-white rounded-sm duration-300 transition-all delay-100 font-bold w-full h-10`}>
            مشاهده همه
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Interest;
