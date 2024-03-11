import React, { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from 'formik';
import { ThreeDots } from 'react-loader-spinner';
import { updateUserSchema } from '@/validation/Schemas';
import useUserStore from '@/stores/UseUserStore';
import { useRouter } from 'next/navigation';
import 'animate.css';
import FormInput from '@/elements/CustomInput';
function AccountDetails() {

  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const { user, getUserFromApi, updateUserInApi } = useUserStore();

  const [userValues, setUserValues] = useState({
    first_name: user?.result?.first_name || "",
    last_name: user?.result?.last_name || "",
    username: user?.result?.username || "",
    phone: user?.result?.phone || "",
  });
  //console.log('1', userValues)


  useEffect(() => {
    getUserFromApi()
  }, [user]);

  const { values, handleBlur, touched, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      first_name: userValues.first_name,
      last_name: userValues.last_name,
      username: userValues.username,
    },
    validationSchema: updateUserSchema,
    onSubmit: async (values, action) => {
      try {
        setLoading(true);
        await updateUserInApi({
          first_name: values.first_name,
          last_name: values.last_name,
          username: values.username
        });
        await getUserFromApi();
        toast.success("اطلاعات کاربر با موفقیت به‌روزرسانی شد");
        //router.replace('/')
      } catch (error) {
        toast.error("خطا در به‌روزرسانی اطلاعات کاربر");
        console.error('Error updating user data:', error);
      }
      setLoading(false);
      action.resetForm();
    },
  });

  useEffect(() => {
    setUserValues({
      first_name: user?.result?.first_name || "",
      last_name: user?.result?.last_name || "",
      username: user?.result?.username || "",
      phone: user?.result?.phone || "",
    });
  }, [user]);

  return (
    <div className='w-full p-10 animate__animated animate__fadeInUp'>
      <div>
        <h2 className='text-black font-bold text-2xl my-2'>جزئیات حساب</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <FormInput
              id='first_name'
              type='text'
              name='first_name'
              defaultValue={values.first_name}
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={userValues.first_name || 'نام'}
              className={errors.first_name && touched.first_name
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B "}
            />
            {errors.first_name && touched.first_name && <p className='text-red-500 text-sm mt-2'>{errors.first_name}</p>}
          </div>

          <div className='flex flex-col'>
            <FormInput
              id='last_name'
              type='text'
              name='last_name'
              defaultValue={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={userValues.last_name || 'نام خانوادگی'}
              className={errors.last_name && touched.last_name
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B "}
            />
            {errors.last_name && touched.last_name && <p className='text-red-500 text-sm mt-2'>{errors.last_name}</p>}
          </div>

          <div className='flex flex-col'>
            <FormInput
              id='username'
              type='text'
              name='username'
              defaultValue={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={userValues.username || 'نام کاربری'}
              className={errors.username && touched.username
                ? "text-red-500 border border-red-500 outline-none h-12 rounded-md bg-none bg-transparent font-bold p-2 animate__animated animate__bounce"
                : "border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B "}
            />
            {errors.username && touched.username && <p className='text-red-500 text-sm mt-2'>{errors.username}</p>}
          </div>

          <div className='flex flex-col'>
          <FormInput
        id='phone'
        type='text'
        name='phone'
        defaultValue={userValues.phone}
        onBlur={handleBlur}
        placeholder={userValues.phone || 'شماره تماس'}
        className="border border-gray-400 h-12 rounded-md text-gray-600 bg-none bg-transparent font-bold outline-none p-2 focus:border-B "
      />
          </div>
        </div>

        <div className='mt-'>
          {loading ? (
            <ThreeDots
              color="#b19361"
              height={20}
              ariaLabel="three-dost-loading"
              visible={true}
              wrapperStyle={{ margin: '20' }}
            />
          ) : (
            <button
              className='text-white bg-gr hover:bg-B duration-700 w-16 h-8 my-3 rounded-md'
              type='submit'
              disabled={isSubmitting}
            >
              ذخیره
            </button>
          )}
        </div>
      </form>

      <Toaster />
    </div>
  );
}

export default AccountDetails;