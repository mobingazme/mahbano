// src/components/Brands.tsx

"use client";
import useBrandStore from '@/stores/useBrandStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const Brands: React.FC = () => {
  const { brands, fetchBrands } = useBrandStore();
  const currentPage = usePathname();

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);
 console.log(brands)
  return (
    <div className={`${currentPage === '/' 
      ? "bg-white p-4 py-8 w-auto rounded-lg flex items-center animate__animated animate__backInUp border-b-4 border-Turquoise" 
      : "bg-white p-4 py-8 w-auto rounded-lg flex items-center animate__animated animate__backInUp border-b-4 border-B"}`}>
      <ul>
        {brands && brands.map(brand => (
          <li className={`${currentPage === '/' 
            ? 'text-sm text-gr hover:text-Turquoise py-1 cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit' 
            : 'text-sm text-gr hover:text-B py-1 cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'}`} key={brand.id}>
            <Link href={"/"}>{brand.title}</Link> {/* تغییر نام به `name` */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brands;
