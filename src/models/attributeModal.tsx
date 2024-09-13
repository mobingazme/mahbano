"use client"
import React from 'react';

// تعریف تایپ‌های ورودی
interface Attribute {
  id: number;
  title: string;
}

interface AttributeModalProps {
  title: string;
  values: Attribute[];
  selectedValues: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
}

const AttributeModal: React.FC<AttributeModalProps> = ({ title, values, selectedValues, handleChange, handleClose }) => {
    if (!values || values.length === 0) {
        return null; // یا هر عملیات دیگری که بهتر می‌دانید
    }
    return (
        <div className='modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='modal-content bg-white p-6 rounded-lg shadow-lg'>
                <span className='close absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer' onClick={handleClose}>&times;</span>
                <h2 className='text-xl font-bold mb-4'>{title}</h2>
                {values.map((val) => (
                    <div key={val.id} className='flex items-center border-b border-gray-300 py-2'>
                        <input
                            className='mx-2'
                            type='checkbox'
                            id={`${title}-${val.id}`}
                            name={`${title}-${val.id}`}
                            value={val.title}
                            checked={selectedValues.includes(val.title)}
                            onChange={handleChange}
                        />
                        <label htmlFor={`${title}-${val.id}`} className='text-gray-700'>
                            {val.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttributeModal;
