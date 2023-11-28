import React from 'react';

const IconInput = ({
  styles = '',
  type = 'text',
  placeholder = 'Placeholder',
  icon,
  iconPosition = 'left',
}) => {
  return (
    <div
      className={`flex w-full ${
        iconPosition === 'right' ? 'flex-row-reverse gap-2' : ''
      } items-center rounded-md border bg-white px-3 text-sm transition-all duration-100 ease-in-out focus-within:border-primary-300 focus-within:outline-none focus-within:ring-4 focus-within:ring-primary-100 ${styles}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="mr-4 w-full py-3 placeholder:text-c-gray-400 focus:outline-none"
      />
      <span>{icon}</span>
    </div>
  );
};

export default IconInput;
