// 'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';
import { usePathname } from 'next/navigation';
import useProductsStore from '@/stores/useProductsStore';
import  { QueryParams } from '@/types/productsStoreTypes'

// Define the type for the `onClose` prop
interface SearchInputProps {
  onClose: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onClose }) => {
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term

  const setQuery = useProductsStore((state) => state.setQuery);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  // Handle close event with animation
  const handleClose = () => {
    setIsOpen(false);
    animateOut(); // Call animateOut function on close
    setTimeout(onClose, 500); // Call onClose after animation
  };

  // Animate search input when opening
  const animateIn = () => {
    const element = document.querySelector('.search-container');
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }
  };

  // Animate search input when closing
  const animateOut = () => {
    const element = document.querySelector('.search-container');
    if (element) {
      element.classList.remove('animate__fadeInRight');
      element.classList.add('animate__animated', 'animate__fadeOutRight');
    }
  };

  // Trigger animateIn when opening
  useEffect(() => {
    if (isOpen) {
      animateIn();
    }
  }, [isOpen]);

  // Handle search functionality
  const handleSearch = () => {
    const currentQuery = useProductsStore.getState().query;
    const newQuery: QueryParams = {
      ...currentQuery,
      search: searchTerm.trim() !== '' ? searchTerm : '',
      page: 1, // Reset to first page on search
    };
    setQuery(newQuery); // Pass the new query object directly
    fetchProducts();
  };
  

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center animate__animated animate__fadeInRight items-center search-container`}>
      <Icon onClick={handleClose} className={` ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} w-8 text-white h-fit absolute top-10 left-4 cursor-pointer duration-300`} icon="iconamoon:close-bold" />
      <div className='flex flex-col justify-center items-center'>
        <input
          placeholder='جستجو...'
          className={`${currentPage === '/' ? 'border-Turquoise text-Turquoise' : 'text-B border-B'} text-xl text-center outline-none border-b-2 mx-5 p-3 w-[60rem] bg-transparent font-bold`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button
          className={`${currentPage === '/' ? 'border-Turquoise bg-Turquoise hover:text-Turquoise' : 'border-B bg-B hover:text-B'} border hover:bg-transparent text-white mt-5 font-bold w-32 h-12 transition duration-300 rounded-md`}
          onClick={handleSearch} // Trigger search functionality
        >
          جستجو
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
