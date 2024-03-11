import * as yup from "yup"

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/


export const phoneSchema = yup.object().shape({
    phone: yup.string().required('لطفاً شماره تلفن را وارد کنید').min(11, 'شماره تلفن باید  11 رقم باشد').matches(phoneRegExp, 'فرمت وارد شده نادرست است'),
})

export const otpSchema = yup.object().shape({
    code: yup.string().required('لطفاً کد را وارد کنید').matches(/^[0-9]+$/, 'کد وارد شده نادرست است').length(5, 'کد باید 5 رقمی باشد'),
})

export const updateUserSchema = yup.object().shape({
    first_name: yup.string().required('نام خودرا وارد کنید'),
    username: yup.string().required('نام کاربری خودرا وارد کنید'),
    last_name: yup.string().required('نام خانوادگی خودرا وارد کنید'),
})