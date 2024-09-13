'use client';

import React, { useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import * as yup from 'yup';
import { phoneSchema, otpSchema } from '@/validation/schemas';
import { useRouter } from 'next/navigation';
import 'animate.css';
import { ThreeDots } from 'react-loader-spinner';
import Cookies from 'js-cookie';
import FormInput from '@/elements/customInput';
import Alerts from '@/elements/alerts'; // مسیر صحیح به فایل Alerts را قرار دهید
import NavLinks from '../module/navLink';


export interface FormValues {
    phone: string;
    code: string;
}

export interface ApiResponse<T> {
    result?: T;
    user_message: string;
}
const SignupPage: React.FC = () => {
    const alerts = Alerts(); // مقداردهی Alerts
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<number>(0);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const router = useRouter();

    const { values, handleBlur, touched, errors, isSubmitting, handleChange, handleSubmit } = useFormik<FormValues>({
        initialValues: {
            phone: '',
            code: '',
        },
        validationSchema: step === 0 ? phoneSchema : otpSchema,
        onSubmit: async (values: FormValues, action: FormikHelpers<FormValues>) => {
            try {
                if (step === 0) {
                    const requestBody = {
                        exists: 2,
                        type: 'phone',
                        minutes: 10,
                        phone: values.phone,
                    };
                    setLoading(true);
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/otp`, {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        cache: 'force-cache',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                    });
                    const data: ApiResponse<undefined> = await response.json();
                    console.log(data);
                    const user_message = data.user_message;
                    setLoading(false);
                    alerts.success(user_message); // استفاده از Alerts
                    setPhoneNumber(values.phone);
                    setStep(1);
                } else {
                    const requestBody = {
                        phone: phoneNumber,
                        code: values.code,
                    };
                    setLoading(true);
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login_register`, {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        cache: 'force-cache',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                    });
                    const data: ApiResponse<{ token: string }> = await response.json();
                    const token = data.result?.token;
                    if (token) {
                        Cookies.set('authToken', token, { expires: 1 });
                    } else {
                        alerts.error('Token is undefined');
                    }
                    const user_message = data.user_message;
                    setLoading(false);
                    alerts.success(user_message || 'عملیات ورود با موفقیت انجام شد'); // استفاده از Alerts
                    router.replace('/profile');
                }
            } catch (error) {
                console.error('Error:', error);
                alerts.error((error as Error).message); // استفاده از Alerts
                setLoading(false);
            }
            action.resetForm();
        },
    });

    const handleButton = () => {
        setStep(0);
    };

    return (
        <div>
            <div className='bg-white w-full h-full'>
                <NavLinks title="ثبت نام" />
            </div>
            <div className='flex flex-col justify-center items-center p-10 bg-white'>
                <h2 className='text-black font-bold text-2xl p-2'>ورود/ثبت نام</h2>
                <div className='border border-gray-300 w-full lg:w-1/2 h-fit rounded-sm md:p-6 p-3'>
                    <form onSubmit={handleSubmit}>
                        {step === 0 ? (
                            <div className='flex flex-col justify-center md:justify-start md:items-start items-center mb-5 animate__animated animate__fadeInUp animate__delay-2s'>
                                <label className='text-gray-800 font-bold text-sm py-5'>شماره تماس را وارد کنید</label>
                                <FormInput
                                    id='phone'
                                    type='text'
                                    value={values.phone}
                                    placeholder='09123456789'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    name="phone"
                                    className={errors.phone && touched.phone
                                        ? "text-gr border border-red-500 outline-none w-full md:w-2/3 h-10 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce shadow"
                                        : "border border-gray-300 w-full md:w-2/3 h-10 rounded-md text-gr bg-none bg-transparent font-bold outline-none p-2 focus:border-B shadow"
                                    }
                                />
                                {errors.phone && touched.phone && <p className='text-red-500 text-sm mt-2'>{errors.phone}</p>}
                            </div>
                        ) : (
                            <div className='flex flex-col mb-5 animate__animated animate__fadeInUp animate__delay-2s'>
                                <label className='text-gray-800 font-bold text-sm py-2'>شماره تماس</label>
                                <FormInput
                                    id='phoneNumber'
                                    type='text'
                                    value={phoneNumber} // استفاده از value به جای defaultValue
                                    placeholder='شماره تماس' // استفاده از مقدار مناسب برای placeholder
                                    onBlur={handleBlur} // تابع onBlur را اضافه کنید (ممکن است نیاز به مدیریت آن داشته باشید)
                                    onChange={(e) => setPhoneNumber(e.target.value)} // تابع onChange را اضافه کنید
                                    name='phoneNumber'
                                    className="border border-gray-300 w-full md:w-2/3 h-10 rounded-lg text-gr bg-none bg-transparent font-bold shadow outline-none p-2"
                                    disabled={false} // مقدار پیش‌فرض یا مدیریتی برای disabled
                                />
                                <label className='text-gray-800 font-bold text-sm py-2 mt-3'>کد را وارد کنید</label>
                                <FormInput
                                    id='code'
                                    type='password'
                                    value={values.code}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    name='code'
                                    className={errors.code && touched.code
                                        ? "text-gr border border-red-500 outline-none w-full shadow md:w-2/3 h-10 rounded-lg bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                                        : "border border-gray-300 w-full md:w-2/3 h-10 rounded-lg shadow text-gr bg-none bg-transparent font-bold outline-none p-2 focus:border-B"
                                    }
                                />
                                {errors.code && touched.code && <p className='text-red-500 text-sm mt-2'>{errors.code}</p>}
                            </div>
                        )}
                        {loading ? (
                            <div className='flex flex-col bg-gr p-2 w-20 rounded-lg h-10 justify-center items-center'>
                                <ThreeDots
                                    color="#b19361"
                                    height={12}
                                    width={30}
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                    wrapperStyle={{ margin: '20' }}
                                />
                            </div>
                        ) : (
                            <div className='flex flex-col md:justify-start justify-center md:items-start items-center'>
                                {step === 1 && (
                                    <button
                                        type="button"
                                        onClick={handleButton}
                                        className='text-gr hover:text-B font-bold text-sm duration-300 mb-3'
                                    >
                                        ویرایش شماره
                                    </button>
                                )}
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className="text-white bg-gr hover:bg-B font-bold rounded-lg w-20 h-10 p-2 transition duration-300 shadow"
                                >
                                    {step === 0 ? 'ارسال کد' : 'ورود'}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;