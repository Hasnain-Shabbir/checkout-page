import React from 'react';

const Input = ({
  styles = '',
  type = 'text',
  placeholder = 'Placeholder...',
  handleOnChange,
  value,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-md border px-3 py-3 text-sm transition-all duration-100 ease-in-out placeholder:text-c-gray-400 focus:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-100 ${styles}`}
    />
  );
};

export default Input;
