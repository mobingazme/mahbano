import React from 'react'
import 'animate.css';
function GuaranteeHomePage() {
    return (
        <div className='flex justify-center items-center py-3 animate__animated animate__fadeInUp animate__delay-2s'>
            <div className='w-80 flex flex-col items-center justify-center px-5'>
                <img src='/images/service-promo-5.png' />
                <h4 className='text-gr font-bold text-lg py-3'>ارسال رایگان</h4>
                <p className='text-gray-600 text-sm text-center'>دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر! </p>
            </div>
            <div >
                <div className='w-80 flex flex-col items-center justify-center  px-5'>
                    <img src='/images/service-promo-6.png' />
                    <h4 className='text-gr font-bold text-lg py-3'>30 روزبرگشت پول</h4>
                    <p className='text-gray-600 text-sm text-center'>دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر! </p>
                </div>
            </div>
            <div >
                <div className='w-80 flex flex-col items-center justify-center  px-5'>
                    <img src='/images/service-promo-7.png' />
                    <h4 className='text-gr font-bold text-lg py-3'>پرداخت مطمئن</h4>
                    <p className='text-gray-600 text-sm text-center'>دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر! </p>
                </div>
            </div>
            <div >
                <div className='w-80 flex flex-col items-center justify-center  px-5'>
                    <img src='/images/service-promo-8.png' />
                    <h4 className='text-gr font-bold text-lg py-3'>مشتری وفادار</h4>
                    <p className='text-gray-600 text-sm text-center'>دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر! </p>
                </div>
            </div>
        </div>
    )
}

export default GuaranteeHomePage