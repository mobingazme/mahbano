'use client';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { ThreeDots } from 'react-loader-spinner';
import { updateUserSchema } from '@/validation/schemas';
import useUserStore from '@/stores/useUserStore';
import { useRouter } from 'next/navigation';
import 'animate.css';
import FormInput from '@/elements/customInput';
import Alerts from '@/elements/alerts';
import { UserResult } from '@/types/userStoreTypes'; // Import UserResult instead

// Define the shape of the user values
interface UserValues {
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
}

const AccountDetails: React.FC = () => {
  const alerts = Alerts();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, getUserFromApi, updateUserInApi } = useUserStore();

  // Set the initial user values
  const [userValues, setUserValues] = useState<UserValues>({
    first_name: user?.result?.first_name || "",
    last_name: user?.result?.last_name || "",
    username: user?.result?.username || "",
    phone: user?.result?.phone || "",
  });

  useEffect(() => {
    getUserFromApi();
  }, [getUserFromApi]);

  useEffect(() => {
    if (user?.result) {
      setUserValues({
        first_name: user.result.first_name,
        last_name: user.result.last_name,
        username: user.result.username,
        phone: user.result.phone,
      });
    }
  }, [user]);

  const formik = useFormik({
    initialValues: userValues,
    enableReinitialize: true,
    validationSchema: updateUserSchema,
    onSubmit: async (values, actions) => {
      try {
        setLoading(true);
        await updateUserInApi({
          first_name: values.first_name,
          last_name: values.last_name,
          username: values.username,
          phone: values.phone
        });
        await getUserFromApi();
        alerts.success("اطلاعات کاربر با موفقیت به‌روزرسانی شد");
      } catch (error) {
        alerts.error("خطا در به‌روزرسانی اطلاعات کاربر");
        console.error('Error updating user data:', error);
      }
      setLoading(false);
      actions.resetForm();
    },
  });

  return (
    <div className='w-full p-10 animate__animated animate__fadeInUp'>
      <div>
        <h2 className='text-black font-bold text-2xl my-2'>جزئیات حساب</h2>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <FormInput
              id='first_name'
              type='text'
              name='first_name'
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={userValues.first_name || 'نام'}
              className={formik.errors.first_name && formik.touched.first_name
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce shadow shadow-red-500"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B shadow "}
            />
            {formik.errors.first_name && formik.touched.first_name && <p className='text-red-500 text-sm mt-2'>{formik.errors.first_name}</p>}
          </div>

          <div className='flex flex-col'>
            <FormInput
              id='last_name'
              type='text'
              name='last_name'
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={userValues.last_name || 'نام خانوادگی'}
              className={formik.errors.last_name && formik.touched.last_name
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce shadow shadow-red-500"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B shadow"}
            />
            {formik.errors.last_name && formik.touched.last_name && <p className='text-red-500 text-sm mt-2'>{formik.errors.last_name}</p>}
          </div>

          <div className='flex flex-col'>
            <FormInput
              id='username'
              type='text'
              name='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={userValues.username || 'نام کاربری'}
              className={formik.errors.username && formik.touched.username
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce shadow shadow-red-500"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B shadow"}
            />
            {formik.errors.username && formik.touched.username && <p className='text-red-500 text-sm mt-2'>{formik.errors.username}</p>}
          </div>

          <div className='flex flex-col'>
            <FormInput
              id='phone'
              type='text'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={userValues.phone || 'شماره تماس'}
              className="border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B shadow"
            />
          </div>
        </div>

        <div className='mt-4 w-20 '>
          {loading ? (
            <div className=' h-8 flex justify-center items-center  bg-gr rounded-md '>
              <ThreeDots
                color="#b19361"
                width={30}
                height={12}
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          ) : (
            <button
              className='text-white bg-gr hover:bg-B duration-700 w-20 h-8  rounded-md'
              type='submit'
              disabled={formik.isSubmitting}
            >
              ذخیره
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
