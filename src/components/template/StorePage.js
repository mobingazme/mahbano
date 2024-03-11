"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Card from '@/module/Card'


function StorePage({ data, filters, paginate }) {
    const Products = data;
    const [filter, setFilter] = useState({
        minPrice: filters.min_price || 0,
        maxPrice: filters.max_price || Infinity,
        brand: filters.brands || [],
        attribute: filters.attribute || [],
        variety: filters.variety || [],
      })
      const [paginates, setPaginates] = useState({
        currentPage: paginate.current_page || 1,
        perPage: paginate.per_page || 5,
      });
    

    return (
        <div className='bg-white'>
            <div className='w-full bg-A h-80 flex justify-center items-center'>
                <div>
                    <h2 className='text-black font-bold text-5xl mb-5'> فروشگاه</h2>
                    <div className='flex'>
                        <Link href='/'>
                            <div className='flex justify-stretch items-stretch text-black hover:text-B duration-700 px-2'>
                                <h3 className='ml-1 cursor-pointer font-bold'>خانه</h3>
                                <Icon className='mt-1' icon="mingcute:left-line" />
                            </div>
                        </Link>
                        
                        <div >
                            <h3 className=' text-gray-700'>فروشگاه</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 p-5'>
                <div className='col-span-1 bg-white border border-B'>

                </div>
                <div className='grid grid-cols-3  p-10 gap-5 col-span-3'>
                    {Products.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default StorePage