import React from 'react';
import { useValidateInput } from '@/hooks';

const LabelInput = ({
  id,
  label = 'Label',
  value,
  onChange,
  type,
  placeholder = 'Enter your placeholder',
  styles = '',
  icon,
  iconInput = false,
  iconPosition = 'left',
  errorMessage = '',
  pattern,
  inputMode,
}) => {
  const { error, touched, handleBlur, setError } = useValidateInput({
    value,
    type,
    errorMessage,
  });

  const dataLength = value?.trim().length > 0;

  const handleChange = (inputValue) => {
    onChange(inputValue);
    setError('');

    if (type === 'tel') {
      const numericValue = inputValue.replace(/[^0-9]/g, '');
      onChange(numericValue);
    }
  };

  return (
    <div className={`flex w-full flex-col ${styles}`}>
      <label
        onBlur={handleBlur}
        htmlFor={id}
        className={`flex ${
          iconPosition === 'right' ? 'flex-row-reverse' : ''
        } w-full cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white p-3 py-3 transition-all focus-within:border-primary-300 ${
          error && touched
            ? 'border-red-500 focus-within:border-red-500'
            : 'focus-within:outline-primary-300'
        } ${styles}`}
      >
        <div className="relative w-full">
          <span
            className={
              dataLength
                ? 'absolute -top-2 left-0 text-xs text-gray-500 opacity-100 transition-all'
                : 'absolute top-2 -z-10 overflow-hidden opacity-0 transition-all'
            }
          >
            {label}
          </span>
          <input
            pattern={pattern}
            inputMode={inputMode}
            id={id}
            onChange={(e) => handleChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            type={type}
            className={`w-full text-sm outline-none transition-all placeholder:text-sm placeholder:text-c-gray-400 autofill:bg-red-500`}
          />
        </div>
        {iconInput ? (
          <span className={`${iconPosition === 'right' ? 'mr-2' : 'ml-3'}`}>
            {icon}
          </span>
        ) : (
          ''
        )}
      </label>
      <span className={`${error ? 'mt-2' : 'mt-0'} text-sm text-red-500`}>
        {error.length ? error : ''}
      </span>
    </div>
  );
};

export default LabelInput;