import LogoutButton from '@/elements/LogoutButton'
import AccountDetailsProfilePage from '@/models/AccountDetailsProfilePage'
import AddressProfilePage from '@/models/AddressProfilePage'
import OrdersProfilePage from '@/models/OrdersProfilePage'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'
function ProfilePage() {

    const [activeSection, setActiveSection] = useState('accountDetails');

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };


    return (
        <div className=''>
            <div className='bg-white w-full h-full '>
                <div className='w-full bg-A h-80 flex justify-center items-center'>
                    <div>
                        <h2 className='text-black font-bold text-5xl mb-5'>اکانت من</h2>
                        <div className='flex'>
                            <Link href='/'>
                                <div className='flex justify-stretch items-stretch text-black hover:text-B duration-700 px-2'>
                                    <h3 className='ml-1 cursor-pointer font-bold'>خانه</h3>
                                    <Icon className='mt-1' icon="mingcute:left-line" />
                                </div>
                            </Link>
                            <Link href='/store'>
                                <div className='flex justify-stretch items-stretch text-black hover:text-B duration-700 px-2'>
                                    <h3 className='ml-1 cursor-pointer font-bold'>فروشگاه</h3>
                                    <Icon className='mt-1' icon="mingcute:left-line" />
                                </div>
                            </Link>
                            <div >
                                <h3 className=' text-gray-700'>اکانت من</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 w-full h-80 md-20'>
                    <div className='col-span-1  p-8 mt-5'>
                        <button
                            className={`${activeSection === 'accountDetails' ? 'bg-B':('bg-gr')} font-bold w-full h-10 flex justify-start items-center p-3 rounded-sm hover:bg-B duration-700 `}
                            onClick={() => handleButtonClick('accountDetails')}
                        >
                            جزئیات حساب
                        </button>
                        <button
                            className={`${activeSection === 'OrdersProfilePage' ? 'bg-B':('bg-gr')} font-bold w-full h-10 flex justify-start items-center p-3 rounded-sm hover:bg-B duration-700 my-2 `}
                            onClick={() => handleButtonClick('OrdersProfilePage')}
                        >
                            سفارشات
                        </button>
                        <button
                            className={`${activeSection === 'AddressProfilePage' ? 'bg-B':('bg-gr')} font-bold w-full h-10 flex justify-start items-center p-3 rounded-sm hover:bg-B duration-700 my-2 `}
                            onClick={() => handleButtonClick('AddressProfilePage')}
                        >
                            آدرس‌ها
                        </button>
                        <LogoutButton />
                    </div>
                    <div className='col-span-3  h-fit '>
                        {activeSection === 'AddressProfilePage' && <AddressProfilePage />}
                        {activeSection === 'accountDetails' && <AccountDetailsProfilePage />}
                        {activeSection === 'OrdersProfilePage' && <OrdersProfilePage />}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfilePage