"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import { phoneSchema, otpSchema } from '@/validation/Schemas';
import { useRouter } from 'next/navigation';
import 'animate.css';
import { ThreeDots } from 'react-loader-spinner';
import Cookies from 'js-cookie';
import FormInput from '@/elements/CustomInput';
import 'animate.css';


function SignupPage() {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter()
    const { values, handleBlur, touched, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            phone: '',
            code: '',
        },
        validationSchema: step === 0 ? phoneSchema : otpSchema,
        onSubmit: async (values, action) => {
            try {
                if (step === 0) {
                    const requestBody = {
                        exists: 2,
                        type: 'phone',
                        minutes: 10,
                        phone: values.phone,
                    };
                    setLoading(true);
                    const response = await fetch(`https://best-cms.ir/api/v1/otp`, {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        cache: 'force-cache',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                    });
                    const data = await response.json();
                    console.log(data);
                    const user_message = data.user_message;
                    setLoading(false);
                    toast.success(user_message);
                    setPhoneNumber(values.phone)
                    setStep(1);
                } else {
                    const requestBody = {
                        phone: phoneNumber,
                        code: values.code,
                    };
                    setLoading(true);
                    const response = await fetch(`https://best-cms.ir/api/v1/login_register`, {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        cache: 'force-cache',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                    });
                    const data = await response.json();
                    const token = data.result.token;
                    const user_message = data.user_message;
                    Cookies.set('authToken', token, { expires: 1 });
                    setLoading(false);
                    toast.success(user_message || 'عملیات ورود با موفقیت انجام شد');
                    router.replace('/profile')
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error(error.message);
                setLoading(false);
            }
            action.resetForm();
        },
    });

    const handleButton = () => {
        setStep(0)
    }

    return (
        <div>
            <div className='bg-white w-full h-full'>
                <div className='w-full bg-A h-80 flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-black font-bold text-5xl mb-5'>ورود</h2>
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
                            <div>
                                <h3 className='text-gray-700'>ورود</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-10 bg-white'>
                <Toaster position="top-center" />
                <h2 className='text-black font-bold text-2xl p-2'>ورود/ثبت نام</h2>
                <div className='border border-gray-300 w-1/2 h-fit rounded-sm p-6 '>
                    <form onSubmit={handleSubmit}>
                        {step === 0 ? (
                            <div className='flex flex-col mb-5 animate__animated animate__fadeInUp animate__delay-2s'>
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
                                        ? "text-gr border border-red-500 outline-none w-2/3 h-10 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                                        : "border border-gray-300 w-2/3 h-10 rounded-md text-gr bg-none bg-transparent font-bold outline-none p-2 focus:border-B"
                                    }
                                />
                                {errors.phone && touched.phone && <p className='text-red-500 text-sm mt-2'>{errors.phone}</p>}
                            </div>
                        ) : (
                            <div className='flex flex-col mb-5 animate__animated animate__fadeInUp animate__delay-2s'>
                                <label className='text-gray-800 font-bold text-sm py-2'>شماره تماس</label>
                                <FormInput
                                    name="phoneNumber"
                                    type='text'
                                    defaultValue={phoneNumber}
                                    placeholder={phoneNumber}
                                    className="border border-gray-300 w-2/3 h-10 rounded-lg text-gr bg-none bg-transparent font-bold outline-none p-2"
                                />
                                <label className='text-gray-800 font-bold text-sm py-5 mt-3'>کد را وارد کنید</label>
                                <FormInput
                                    id='code'
                                    type='password'
                                    value={values.code}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    name='code'
                                    className={errors.code && touched.code
                                        ? "text-gr border border-red-500 outline-none w-2/3 h-10 rounded-lg bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                                        : "border border-gray-300 w-2/3 h-10 rounded-lg text-gr bg-none bg-transparent font-bold outline-none p-2 focus:border-B"
                                    }
                                />
                                {errors.code && touched.code && <p className='text-red-500 text-sm mt-2'>{errors.code}</p>}
                            </div>
                        )}
                        {loading ?
                            (<ThreeDots
                                color="#b19361"
                                height={20}
                                ariaLabel="three-dost-loading"
                                visible={true}
                                wrapperStyle={{ margin: '20' }}
                            />
                            ) : (
                                <button
                                    className="text-white bg-gr hover:bg-B font-bold rounded-lg w-fit h-fit p-2 transition duration-300"
                                    type='submit'
                                    disabled={isSubmitting}
                                >
                                    {step === 0 ? 'ارسال کد' : 'ورود'}
                                </button>
                            )}
                    </form>
                    {step === 1 ? (<button onClick={handleButton} className='text-gr hover:text-B font-bold text-sm duration-300 mt-3'>ویرایش شماره</button>) : null}
                </div>
            </div>
        </div>
    );
}

export default SignupPage;