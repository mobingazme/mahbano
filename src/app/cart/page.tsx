'use client'
import CartPage from '@/template/cartPage'
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const token = Cookies.get('authToken')

function Page() {
  const router = useRouter()
  useEffect(() => {
    if (!token) {
      router.replace('/signup');
    }
  }, []);
  return <CartPage />
}

export default Page