import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';
import { usePathname } from 'next/navigation';


function SearchInput({ onClose }) {
  const currentPage = usePathname()
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`${currentPage === '/'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center animate__animated ${isOpen ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
       <Icon onClick={handleClose} className={` ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'} w-8 text-white h-fit absolute top-40 left-20 cursor-pointer duration-300`} icon="iconamoon:close-bold" />
        <div className='flex flex-col justify-center items-center'>
            <input
            placeholder='جستجو...'
            className={ `${currentPage === '/'? 'border-Turquoise text-Turquoise' : 'text-B border-B'}  text-xl text-center outline-none border-b-2  p-3 w-[60rem]  bg-transparent  font-bold  `}
            />
            <button className={`${currentPage === '/' ?'border-Turquoise bg-Turquoise hover:text-Turquoise':'border-B bg-B hover:text-B'} border hover:bg-transparent text-white  mt-5 font-bold w-32 h-12 transition duration-300 rounded-md`}>جستجو</button>
        </div>
    </div>
  );
}

export default SearchInput;

