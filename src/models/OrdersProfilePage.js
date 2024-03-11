import React from 'react';

function OrdersProfilePage() {
  return (
    <div className='w-full p-10 animate__animated animate__fadeInUp'>
      <h2 className='text-2xl font-bold text-black'>سفارشات</h2>
      <div className='border border-B overflow-x-auto'>
        <div className='grid grid-cols-5 bg-gray-100 p-3'>
          <h4 className='text-gray-900 text-xl font-bold col-span-1'>سفارش</h4>
          <h4 className='text-gray-900 text-xl font-bold col-span-1'>تاریخ</h4>
          <h4 className='text-gray-900 text-xl font-bold col-span-1'>وضع</h4>
          <h4 className='text-gray-900 text-xl font-bold col-span-1'>جمع</h4>
          <h4 className='text-gray-900 text-xl font-bold col-span-1'>اقدامات</h4>
        </div>

        <div className='grid grid-cols-5 bg-white border-t border-B p-2'>
          <h5 className='text-gray-700 col-span-1'>1</h5>
          <h5 className='text-gray-700 col-span-1'>13 مرداد 1400</h5>
          <h5 className='text-gray-700 col-span-1'>تکمیل شده</h5>
          <h5 className='text-gray-700 col-span-1'>2500 تومان برای 1 مورد</h5>
          <h5 className='text-gray-700 col-span-1'>چشم انداز</h5>
        </div>

     
      </div>
    </div>
  );
}

export default OrdersProfilePage;