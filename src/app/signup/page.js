"use client"
import SignupPage from '@/template/SignupPage'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


function Page() {
  const token = Cookies.get('authToken')
  console.log(token)
  const router = useRouter()
  useEffect(() => {
    if (token) {
      router.replace('/');
    }
  }, []);
  return <SignupPage />
}

export default Page

