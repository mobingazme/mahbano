'use client';

import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

// تعریف نوع‌ها برای props
type PlaceOrderButtonProps = {
  isLoading: boolean;
  handlePlaceOrder: () => void;
};

const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = ({ isLoading, handlePlaceOrder }) => {
  return (
    <div className="flex justify-center w-full md:w-1/5 hover:text-B border-B bg-B border hover:bg-transparent transition duration-300 rounded-md text-white p-2 font-bold">
      {isLoading ? (
        <ThreeDots
          color="#ffff"
          height={18}
          width={30}
          ariaLabel="loading"
        />
      ) : (
        <button onClick={handlePlaceOrder}>
          ثبت سفارش
        </button>
      )}
    </div>
  );
};

export default PlaceOrderButton;
