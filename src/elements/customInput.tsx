// CustomInput.tsx
import React from 'react';

export interface CustomInputProps {
  id: string;
  type: string;
  value: string;
  placeholder?: string; // placeholder را به عنوان optional تعریف کنید
  defaultValue?: string; // defaultValue را به عنوان optional تعریف کنید
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className: string;
  disabled?: boolean; // اضافه کردن disabled به عنوان optional
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  type,
  value,
  placeholder,
  defaultValue,
  onBlur,
  onChange,
  name,
  className,
  disabled
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      className={className}
      disabled={disabled} // استفاده از disabled
    />
  );
};

export default CustomInput;
