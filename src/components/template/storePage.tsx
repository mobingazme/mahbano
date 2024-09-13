import React, { useEffect, useState } from 'react';
import Card from '../module/card';
import { Product, QueryParams } from '@/types/productsStoreTypes';
import NavLinks from '../module/navLink';
import queryString from 'query-string';

interface StorePageProps {
  data: Product[];
  paginate: {
    current_page: number;
    last_page: number;
  };
  updateQuery: (newQuery: Partial<QueryParams>) => void;
}

const StorePage: React.FC<StorePageProps> = ({ data, paginate, updateQuery }) => {
  const Products = data;

  const [paginates, setPaginates] = useState({
    currentPage: paginate.current_page || 1,
    perPage: 5,
    lastPage: paginate.last_page || 7,
  });

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      updateURL({ page: paginates.currentPage });
    } else {
      setIsInitialLoad(false);
    }
  }, [paginates.currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setPaginates((prevPaginates) => ({ ...prevPaginates, currentPage: pageNumber }));
    updateQuery({ page: pageNumber });
  };

  const updateURL = (newFilters: Partial<QueryParams>) => {
    const queryParams: Partial<QueryParams> = {};

    if (newFilters.page) {
      queryParams.page = newFilters.page;
    }

    const query = queryString.stringify(queryParams);

    if (query) {
      window.history.replaceState({}, '', `${window.location.pathname}?${query}`);
    } else {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const startIndex = (paginates.currentPage - 1) * paginates.perPage;
  const endIndex = startIndex + paginates.perPage;
  const displayedProducts = Products.slice(startIndex, endIndex);

  return (
    <div id='1' className='bg-white'>
      <NavLinks title="فروشگاه" />

      <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
        <div className='grid md:grid-cols-3 md:p-10 md:gap-5 gap-3 md:col-span-4'>
          {displayedProducts.map((product: any) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center p-5'>
        {[...Array(paginates.lastPage)].map((_, index) => (
          <button
            key={index + 1}
            className={`text-gr border border-B w-10 m-2 h-10 
            ${paginates.currentPage === index + 1 ? 'font-bold text-white bg-B' : ''} 
            transition-all duration-300 transform hover:translate-y-2 hover:bg-B hover:text-white`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
