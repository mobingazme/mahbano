'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Alerts from '@/elements/alerts';

interface Item {
  product_id: number;
  cover: string;
  title: string;
  qty_basket: number;
  sale_price: number;
}

interface CartItemsTableProps {
  items: Item[];
  removeItemFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

const CartItemsTable: React.FC<CartItemsTableProps> = ({ items, removeItemFromCart, updateQuantity }) => {
  const currentPage = usePathname();
  const alerts = Alerts();
  const [removeLoading, setRemoveLoading] = useState<Record<number, boolean>>({});
  const [quantityLoading, setQuantityLoading] = useState<Record<number, boolean>>({});

  const handleRemoveItem = async (productId: number) => {
    setRemoveLoading((prev) => ({ ...prev, [productId]: true }));
    try {
      await removeItemFromCart(productId);
      alerts.success('محصول از سبد خرید شما حذف شد');
    } catch (error) {
      alerts.error('خطا در حذف محصول');
    }
    setRemoveLoading((prev) => ({ ...prev, [productId]: false }));
  };

  const handleUpdateQuantity = async (productId: number, quantity: number) => {
    setQuantityLoading((prev) => ({ ...prev, [productId]: true }));
    try {
      await updateQuantity(productId, quantity);
    } catch (error) {
      alerts.error('خطا در به روزرسانی تعداد');
    }
    setQuantityLoading((prev) => ({ ...prev, [productId]: false }));
  };

  return (
    <div className="overflow-x-auto lg:overflow-x-visible">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr className="border-b-2 border-B bg-gray-100">
            <th className="py-2 text-black border border-gray-300 hidden md:table-cell">عکس</th>
            <th className="py-2 text-black border border-gray-300">نام</th>
            <th className="py-2 text-black border border-gray-300">تعداد</th>
            <th className="py-2 text-black border border-gray-300 hidden md:table-cell">قیمت واحد</th>
            <th className="py-2 text-black border border-gray-300 hidden md:table-cell">جمع کل</th>
            <th className="py-2 text-black border border-gray-300">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product_id} className="text-center">
              <td className="py-2 border border-gray-300 hidden md:table-cell">
                <img src={item.cover} alt={item.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 text-black border text-sm min-w-60 border-gray-300">
                <span className="block truncate w-full">{item.title}</span>
              </td>
              <td className="py-2 text-black border border-gray-300">
              <div className="md:flex items-center justify-center">
                  <button
                    onClick={() => handleUpdateQuantity(item.product_id, item.qty_basket - 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    disabled={item.qty_basket <= 1 || quantityLoading[item.product_id]}
                  >
                    -
                  </button>
                  <span className="mx-2 my-2 md:my-0">
                    {quantityLoading[item.product_id] ? (
                      <Icon
                        className={`${
                          currentPage === '/' ? 'text-Turquoise' : 'text-B'
                        } w-7 h-7`}
                        icon="svg-spinners:6-dots-scale"
                      />
                    ) : (
                      item.qty_basket
                    )}
                  </span>
                  <button
                    onClick={() => handleUpdateQuantity(item.product_id, item.qty_basket + 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded"
                    disabled={quantityLoading[item.product_id]}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-2 text-black border hidden md:table-cell border-gray-300">
                {item.sale_price.toLocaleString()} تومان
              </td>
              <td className="py-2 text-black border hidden md:table-cell border-gray-300">
                {(item.qty_basket * item.sale_price).toLocaleString()} تومان
              </td>
              <td className="py-2 border border-gray-300">
                <button
                  onClick={() => handleRemoveItem(item.product_id)}
                  className="text-red-600"
                  disabled={removeLoading[item.product_id]}
                >
                  {removeLoading[item.product_id] ? (
                    <Icon
                      className={`${currentPage === '/' ? 'text-Turquoise' : 'text-B'
                        } w-7 h-7`}
                      icon="svg-spinners:6-dots-scale"
                    />
                  ) : (
                    <Icon
                      className="text-B w-10 h-8 hover:text-red-500 cursor-pointer transition duration-300"
                      icon="solar:trash-bin-trash-linear"
                    />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemsTable;
