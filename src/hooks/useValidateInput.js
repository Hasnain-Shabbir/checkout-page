import { useState } from 'react';

const useValidateInput = ({ value, type, errorMessage }) => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    const isEmailInput = type === 'email';
    const isTextInput = type === 'text';
    const isTelInput = type === 'tel';

    if (isEmailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError(errorMessage);
      } else {
        setError('');
      }
    } else if (isTextInput) {
      const trimmedValue = value.trim();
      if (trimmedValue.length < 1) {
        setError(errorMessage);
      } else {
        setError('');
      }
    } else if (isTelInput) {
      if (value.length < 1) {
        setError(errorMessage);
      }
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validate();
  };

  return { error, touched, handleBlur, setError };
};

export default useValidateInput;
