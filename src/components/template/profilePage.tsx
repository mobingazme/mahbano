'use client'

import React, { useState } from 'react'
import LogoutButton from '@/elements/logoutButton'
import AccountDetailsProfilePage from '@/models/accountDetailsProfilePage'
import AddressProfilePage from '@/models/addressProfilePage'
import OrdersProfilePage from '@/models/ordersProfilePage'
import NavLinks from '@/module/navLink'

type Section = 'accountDetails' | 'OrdersProfilePage' | 'AddressProfilePage';

const ProfilePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('accountDetails');

    const handleButtonClick = (section: Section) => {
        setActiveSection(section);
    };

    return (
        <div id='1' className=' '>
            <div className='bg-white w-full h-full pb-48 md:pb-0'>
                <NavLinks title="اکانت من" />
                <div className='grid md:grid-cols-4 w-full h-80 '>
                    <div className='md:col-span-1 flex md:flex-col justify-between md:justify-center items-center p-1 md:p-8 mt-5'>
                        <button
                            className={`${activeSection === 'accountDetails' ? 'bg-B' : 'bg-gr'} font-bold w-full h-10 text-sm md:text-md flex justify-center md:justify-start items-center  p-1 md:p-3 rounded-sm hover:bg-B duration-700 `}
                            onClick={() => handleButtonClick('accountDetails')}
                        >
                            جزئیات حساب
                        </button>
                        <button
                            className={`${activeSection === 'OrdersProfilePage' ? 'bg-B' : 'bg-gr'} font-bold w-full h-10 text-sm md:text-md flex justify-center md:justify-start items-center p-1 md:p-3 rounded-sm hover:bg-B duration-700 mx-1 md:mx-0 md:my-2 `}
                            onClick={() => handleButtonClick('OrdersProfilePage')}
                        >
                            سفارشات
                        </button>
                        <button
                            className={`${activeSection === 'AddressProfilePage' ? 'bg-B' : 'bg-gr'} font-bold w-full h-10 text-sm md:text-md flex justify-center md:justify-start items-center p-1 md:p-3 rounded-sm hover:bg-B duration-700 ml-1 md:ml-0  md:mb-2 `}
                            onClick={() => handleButtonClick('AddressProfilePage')}
                        >
                            آدرس‌ها
                        </button>
                        <LogoutButton />
                    </div>
                    <div className='md:col-span-3 h-fit '>
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
