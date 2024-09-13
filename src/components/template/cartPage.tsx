'use client';

import React, { useEffect, useState } from 'react';
import NavLinks from '../module/navLink';
import CartItemsTable from '@/module/cartItemsTable';
import CartSummary from '@/module/cartSummary';
import Alerts from '@/elements/alerts';
import useShoppingCartStore from '@/stores/useShoppingCartStore';
import usePlaceOrder from '@/stores/usePlaceOrder';
import LottieNoData from '../lottie/noData';
import CouponCodeInput from '@/elements/couponCodeInput';
import PlaceOrderButton from '@/elements/placeOrderButton';
// حذف CartItem اگر استفاده نمی‌شود
import { CartDetails } from '@/types/shoppingCartStoreTypes';


const CartPage: React.FC = () => {
    const alert = Alerts();
    const { cart, cartDetails, fetchCartDetails, removeItemFromCart, updateQuantity, setDiscountCode } = useShoppingCartStore();
    const { placeOrder, isLoading } = usePlaceOrder();
    const [inputCode, setInputCode] = useState<string>('');

    useEffect(() => {
        if (cart.length > 0 && !cartDetails) {
            fetchCartDetails().catch((error: any) => { 
                console.error("Failed to fetch cart details:", error);
            });
        }
    }, [cart, cartDetails, fetchCartDetails]);

    const handleApplyCoupon = async (code: string): Promise<void> => {
        setDiscountCode(code);
        setInputCode('');
        try {
            await fetchCartDetails();
            alert.success('کد تخفیف با موفقیت اعمال شد');
        } catch (error) {
            alert.error('خطا در اعمال کد تخفیف');
        }
    };

    const handlePlaceOrder = async () => {
        try {
            await placeOrder();
            alert.success('سفارش با موفقیت ثبت شد');
        } catch (error) {
            alert.error('خطا در ثبت سفارش');
        }
    };

    const handleRemoveItem = async (productId: number) => {
        try {
            await removeItemFromCart(productId); // اطمینان از اینکه removeItemFromCart به صورت async تعریف شده است
            alert.success('محصول از سبد خرید شما حذف شد');
        } catch (error) {
            alert.error('خطا در حذف محصول');
        }
    };
    

    return (
        <div id='1' className='mx-auto w-full h-full bg-white'>
            <NavLinks title="سبد خرید" />
            <div className="p-10">
                <h1 className="text-2xl font-bold mb-4">سبد خرید</h1>
                {cartDetails && cartDetails.result && cartDetails.result.items && cartDetails.result.items.length > 0 ? (
                    <CartItemsTable
                        items={cartDetails.result.items}
                        removeItemFromCart={handleRemoveItem}
                        updateQuantity={updateQuantity}
                    />
                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='font-bold text-B'>هیچ محصولی در سبد خرید شما وجود ندارد!</h2>
                        <LottieNoData />
                    </div>
                )}

                {cartDetails?.result?.factor ? (
                    <div className='md:flex justify-around my-10'>
                        <CartSummary factor={cartDetails.result.factor} />

                        <CouponCodeInput handleApplyCoupon={handleApplyCoupon} /> {/* استفاده از کامپوننت CouponCodeInput */}
                    </div>
                ) : null}

                {cartDetails && cartDetails.result && cartDetails.result.items && cartDetails.result.items.length > 0 ? (
                    <PlaceOrderButton isLoading={isLoading} handlePlaceOrder={handlePlaceOrder} />
                ) : null}
            </div>
        </div>
    );
}

export default CartPage;
