'use client';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Icon } from '@iconify/react';
import { FavoriteButtonProps } from '@/types/buttonTypes';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isLoading, isFavorite, onClick }) => {
  return (
    <div className='px-4'>
      {isLoading ? (
        <div className='flex flex-col m-4 justify-center items-center'>
          <ThreeDots
            color="#b19361"
            height={12}
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className={`text-gray-800 cursor-pointer flex items-center duration-700 py-3 ${isFavorite ? 'hover:text-red-500' : 'hover:text-B'}`}>
          <Icon className='w-5 h-fit' icon={isFavorite ? "material-symbols-light:heart-broken-outline-rounded" : "mdi-light:heart"} />
          <h4 className='text-sm font-bold cursor-pointer' onClick={onClick}>
            {isFavorite ? 'حذف از علاقه مندی ها' : 'افزودن به علاقه مندی ها'}
          </h4>
        </div>
      )}
    </div>
  );
};

export default FavoriteButton;
