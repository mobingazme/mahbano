import 'animate.css';
import React from 'react';

const CustomInput = ({ id, type, name, value, onChange, onBlur, placeholder, className }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CustomInput;