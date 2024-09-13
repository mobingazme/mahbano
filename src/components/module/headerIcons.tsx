'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import AuthButton from '@/elements/authButton';
import { CartDetails } from '@/types/shoppingCartStoreTypes';

interface HeaderIconsProps {
  handleIconClick: (iconName: 'cart' | 'menu' | 'search' | 'interest') => void;
  favorites: { result: { length: number } } | any[]; // Update type if necessary
  cartDetails?: CartDetails | null; // Ensure this matches your data structure
  currentPage: string;
}

const HeaderIcons: React.FC<HeaderIconsProps> = ({ handleIconClick, favorites, cartDetails, currentPage }) => {
    // Handle the `null` or `undefined` case for `cartDetails`
    const itemsInCart = cartDetails?.result?.items ?? []; // Adjust based on actual data structure

    // Handle the `favorites` type and get the count of favorites
    const favoritesCount = Array.isArray(favorites) ? favorites.length : favorites.result?.length ?? 0;
    
   
    
    return (
        <div className='flex animate__animated animate__fadeInRight'>
            <div onClick={() => handleIconClick('interest')} className='flex cursor-pointer'>
                {favoritesCount ? (
                    <h5 className={`${currentPage === '/' ? 'bg-Turquoise' : 'bg-B'} w-5 px-1 h-5 rounded-full -ml-4 mt-4 text-white`}>
                        {favoritesCount}
                    </h5>
                ) : null}
                <Icon className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-gray-900 duration-700 w-6 h-6`} icon="mdi-light:heart" />
            </div>
            <div onClick={() => handleIconClick('cart')} className='flex cursor-pointer relative px-3'>
                {itemsInCart.length ? (
                    <h5 className={`${currentPage === '/' ? 'bg-Turquoise' : 'bg-B'} w-5 pr-1 h-5 rounded-full -ml-4 mt-4 text-white`}>
                        {itemsInCart.length}
                    </h5>
                ) : null}
                <Icon className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-gray-900 duration-700 w-5 h-5`} icon="teenyicons:basket-outline" />
            </div>
            <div onClick={() => handleIconClick('search')} className='flex cursor-pointer'>
                <Icon className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-gray-900 duration-700 w-6 h-6`} icon="basil:search-outline" />
            </div>
            <div onClick={() => handleIconClick('menu')} className='flex cursor-pointer px-3'>
                <Icon className={`${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} text-gray-900 duration-700 w-8 h-8`} icon="material-symbols-light:menu" />
            </div>
            <div className='hidden md:flex'>
                <AuthButton />
            </div>
        </div>
    );
};

export default HeaderIcons;
