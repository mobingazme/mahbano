'use client';
import React, { useEffect } from 'react';
import useProductsStore, { QueryParams } from '@/stores/useProductsStore';
import StorePage from '@/template/storePage';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const { products, fetchProducts, paginate, setQuery } = useProductsStore();
  const router = useRouter();

  useEffect(() => {
    fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
  }, [fetchProducts]);

  // تابع برای به‌روزرسانی مقادیر query بر اساس فیلترهای کاربر
  const updateQuery = (newQuery: Partial<QueryParams>) => {
    setQuery(newQuery);
  }

  return <StorePage data={products} paginate={paginate} updateQuery={updateQuery} />;
}


export default Page;
