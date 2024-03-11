"use client"
import useProductStore from '@/stores/UseProductStore';
import CardDetails from '@/template/CardDetails';
import React, { useEffect } from 'react'

function PageDetails({params}) {
  const { products, fetchProducts } = useProductStore();
 // console.log(params)
 // console.log(products)

  useEffect(() => {
    const id = parseInt(params.cardId, 10);
    fetchProducts(id); // استفاده از id برای فراخوانی fetchProducts با آن
  }, [fetchProducts, params.cardId]);

  return <CardDetails data={products}/>
}

export default PageDetails