'use client';

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import UseFavoriteStore from '@/stores/useFavoriteStore';
import LottieNoData from '../lottie/noData'; // Replace with correct path to Lottie animation file
import NavLinks from '../module/navLink';

// تایپ مورد نیاز برای هر محصول در لیست علاقه مندی
interface FavoriteProduct {
  id: number;
  cover: string;
  title: string;
  sale_price: number;
}

// تایپ وضعیت استور
interface FavoriteState {
  favorites: {
    result: FavoriteProduct[];
  };
  fetchFavorites: () => Promise<void>;
  toggleFavorite: (productId: number) => Promise<string>;
}

function InterestListPage() {
  const { favorites, fetchFavorites, toggleFavorite } = UseFavoriteStore(
    (state: FavoriteState) => state
  );

  useEffect(() => {
    fetchFavorites(); // Fetch favorites on component mount
  }, [fetchFavorites]);

  const removeFromFavoritesHandler = async (productId: number) => {
    try {
      const userMessage = await toggleFavorite(productId); // Toggle favorite status
      // Optionally show success message or handle UI update
      console.log(userMessage); // For debugging purposes
    } catch (error) {
      console.error('Error removing from favorites:', error);
      // Handle error or show error message
    }
  };

  return (
    <div id='1' className='mx-auto w-full h-full bg-white'>
      {/* Header Section */}
      <NavLinks title="لیست علاقه مندی ها" />

      {/* Main Content */}
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">لیست علاقه مندی</h1>
        {favorites && favorites.result && favorites.result.length > 0 ? (
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className='border-b-2 border-B bg-gray-100'>
                <th className="py-2 text-black border border-gray-300">عکس</th>
                <th className="py-2 text-black border border-gray-300">نام محصول</th>
                <th className="py-2 text-black border border-gray-300">قیمت</th>
                <th className="py-2 text-black border border-gray-300">حذف</th>
              </tr>
            </thead>
            <tbody>
              {favorites.result.map((favorite) => (
                <tr key={favorite.id} className="text-center">
                  <td className="py-2 border border-gray-300">
                    <img src={favorite.cover} alt={favorite.title} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-2 text-black border border-gray-300">{favorite.title}</td>
                  <td className="py-2 text-black border border-gray-300">تومان {favorite.sale_price}</td>
                  <td className="py-2 border border-gray-300">
                    <div className='flex justify-center'>
                      <div onClick={() => removeFromFavoritesHandler(favorite.id)} className='cursor-pointer'>
                        <Icon className='text-B w-10 h-8 hover:text-red-500 transition duration-300' icon="solar:trash-bin-trash-linear" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-B'>هیچ محصولی در لیست علاقه مندی های شما وجود ندارد!</h2>
            <LottieNoData />
          </div>
        )}
      </div>
    </div>
  );
}

export default InterestListPage;
