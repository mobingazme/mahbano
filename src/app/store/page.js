'use client'
import Card from '@/module/Card';
import useProductsStore from '@/stores/UseProductsStore';
import StorePage from '@/template/StorePage';
import React, { useEffect } from 'react'

function Page() {
    const {products , fetchProducts ,can_filter,paginate } = useProductsStore()

    useEffect(() => {
        fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
      }, [fetchProducts]);
      //console.log(products)
  return <StorePage data={products} filters={can_filter} paginate={paginate}/>
}

export default Page