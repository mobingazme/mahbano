'use client';
import React from 'react';

// Define the type for the `factor` prop
interface Factor {
  total_discount_amount?: number;
  transport_amount?: number;
  payable_price?: number;
  total_price_items_payable?: number;
}

interface CartSummaryProps {
  factor?: Factor;
}

const CartSummary: React.FC<CartSummaryProps> = ({ factor = {} }) => {
  // Destructure with default values to avoid potential undefined issues
  const {
    total_discount_amount = 0,
    transport_amount = 0,
    payable_price = 0,
    total_price_items_payable = 0
  } = factor;

  return (
    <div className='w-full md:max-w-[600px] md:px-5 py-5'>
      <table className='w-full border border-gray-300'>
        <thead>
          <tr className='border-b-2 border-B bg-gray-100'>
            {/* Ensure colSpan is a number */}
            <th className="py-2 text-black border font-bold border-gray-300" colSpan={2}>
              کل سبد خرید
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-gray-300'>
            <td className='font-bold text-gray-500 p-2 border-r text-sm border-gray-300'>تخفیف</td>
            <td className='font-bold text-gray-500 text-sm p-2'>تومان: {total_discount_amount.toLocaleString()}</td>
          </tr>
          <tr className='border-b border-gray-300'>
            <td className='font-bold text-gray-500 p-2 border-r text-sm border-gray-300'>هزینه حمل و نقل</td>
            <td className='font-bold text-gray-500 text-sm p-2'>تومان: {transport_amount.toLocaleString()}</td>
          </tr>
          <tr className='border-b border-gray-300'>
            <td className='font-bold text-gray-500 p-2 border-r text-sm border-gray-300'>قابل پرداخت</td>
            <td className='font-bold text-gray-500 text-sm p-2'>تومان: {payable_price.toLocaleString()}</td>
          </tr>
          <tr>
            <td className='font-bold text-gray-500 text-sm p-2 border-r border-gray-300'>مجموع</td>
            <td className='font-bold text-gray-500 text-sm p-2'>تومان: {total_price_items_payable.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartSummary;
