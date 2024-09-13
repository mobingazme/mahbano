'use client';
import React from 'react';

const OrdersProfilePage: React.FC = () => {
  return (
    <div className='w-full p-10 animate__animated animate__fadeInUp'>
      <h2 className='text-2xl font-bold text-black mb-6'>سفارشات</h2>
      <div className='border border-B overflow-x-auto'>
        <table className='min-w-full table-fixed divide-y divide-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5'>سفارش</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5'>تاریخ</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5'>وضع</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5'>جمع</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5'>اقدامات</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            <tr>
              <td className='px-6 py-4 text-sm font-medium text-gray-900'>1</td>
              <td className='px-6 py-4 text-sm text-gray-500'>13 مرداد 1400</td>
              <td className='px-6 py-4 text-sm text-gray-500'>تکمیل شده</td>
              <td className='px-6 py-4 text-sm text-gray-500'>2500 تومان برای 1 مورد</td>
              <td className='px-6 py-4 text-sm text-gray-500'>چشم انداز</td>
            </tr>
            {/* اضافه کردن ردیف‌های دیگر در اینجا */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersProfilePage;
