"use client";
import useCategoriesStore from '@/stores/useCategoriesStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Category } from '@/types/categoriesStoreTypes';

const Categorys: React.FC = () => {
  const { categories, fetchCategories, isLoading, isError } = useCategoriesStore();
  const currentPage = usePathname();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const renderChildCategories = (children: Category[]) => {
    if (!children || children.length === 0) {
      return null;
    }

    return (
      <ul>
        {children.map(child => (
          <li key={child.id} className={`${currentPage === '/'
            ? "text-gray-600 text-sm hover:text-Turquoise cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit"
            : "text-gray-600 text-sm hover:text-B cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit"}`}>
            <Link href={`/`}>
              {child.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderCategories = () => {
    const mid = Math.ceil(categories.length / 2);
    const categoriesColumn1 = categories.slice(0, mid);
    const categoriesColumn2 = categories.slice(mid);

    return (
      <div className={`${currentPage === "/"
        ? "bg-white p-4 w-auto rounded-lg flex justify-center items-center animate__animated animate__backInUp border-b-4 border-Turquoise"
        : "bg-white p-4 w-auto rounded-lg flex justify-center items-center animate__animated animate__backInUp border-b-4 border-B"}`}>
        <div className='flex-col justify-center p-1'>
          <ul className='pb-3 px-3'>
            {categoriesColumn1.map(category => (
              <li key={category.id} className={`${currentPage === '/'
                ? "font-bold text-Turquoise cursor-pointer py-2"
                : "font-bold text-B cursor-pointer py-2"}`}>
                <Link href={`/`}>
                  {category.title}
                </Link>
                {renderChildCategories(category.children)}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-col justify-center p-1'>
          <ul className='pb-3 px-3'>
            {categoriesColumn2.map(category => (
              <li key={category.id} className={`${currentPage === '/'
                ? "font-bold text-Turquoise cursor-pointer py-2"
                : "font-bold text-B cursor-pointer py-2"}`}>
                <Link href={`/`}>
                  {category.title}
                </Link>
                {renderChildCategories(category.children)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderCategories()}
    </div>
  );
}

export default Categorys;
