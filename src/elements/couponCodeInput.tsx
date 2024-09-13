'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { couponSchema } from '@/validation/schemas';
import { ThreeDots } from 'react-loader-spinner';
import CustomInput from '@/elements/customInput';

interface CouponCodeInputProps {
    handleApplyCoupon: (code: string) => Promise<void>;
}

const CouponCodeInput: React.FC<CouponCodeInputProps> = ({ handleApplyCoupon }) => {
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            inputCode: '',
        },
        validationSchema: couponSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                await handleApplyCoupon(values.inputCode);
                formik.resetForm();
            } catch (error) {
                console.error('Failed to apply coupon:', error);
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div className="my-4 h-fit relative">
            <form onSubmit={formik.handleSubmit}>
                <table className="border">
                    <thead>
                        <tr className="border-b-2 border-B bg-gray-100">
                            <th className="py-2 text-black border font-bold border-gray-300" colSpan={2}>کوپن تخفیف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="md:p-5">
                                <CustomInput
                                    id="inputCode"
                                    type="text"
                                    name="inputCode"
                                    placeholder="کد تخفیف را وارد کنید"
                                    className={`border ${formik.errors.inputCode ? "border-red-500 text-red-500 animate__animated animate__bounce" : "border-gray-400"} text-black h-10 rounded-md bg-transparent font-bold text-sm p-2 outline-none`}
                                    value={formik.values.inputCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={isLoading}
                                />
                                {formik.touched.inputCode && formik.errors.inputCode && <p className="text-red-500 text-sm mt-2 absolute bottom-0">{formik.errors.inputCode}</p>}
                            </td>
                            <td className="p-5">
                                <button
                                    type="submit"
                                    className="border-B bg-B hover:text-B border hover:bg-transparent text-white p-2 font-bold text-sm transition duration-300 rounded-md"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <ThreeDots
                                            color="#ffff"
                                            height={18}
                                            width={30}
                                            ariaLabel="loading"
                                        />
                                    ) : (
                                        'ارسال'
                                    )}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CouponCodeInput;
