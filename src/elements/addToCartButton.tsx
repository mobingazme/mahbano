'use client'
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { AddToCartButtonProps } from '@/types/buttonTypes';

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick, isLoading, disabled }) => {
    return (
        <button 
            onClick={onClick} 
            className='text-white bg-gr hover:bg-B h-10 font-bold text-sm duration-300 p-2 rounded-md'
        >
            {isLoading ? (
                
                <ThreeDots
                    color="#b19361"
                    height={18}
                    width={30}
                    ariaLabel="loading"
                />
            ) : (
                'اضافه به سبد خرید'
            )}
        </button>
    );
};

export default AddToCartButton;
