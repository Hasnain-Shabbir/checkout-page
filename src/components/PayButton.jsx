import React from 'react';
import Image from 'next/image';

const PayButton = ({ icon, styles = '', iconStyles = '' }) => {
  return (
    <button
      className={`flex h-14 items-center justify-center rounded-md bg-[#5a31f4] px-6 py-3 text-white transition-all ${styles}`}
    >
      <Image
        className={`${iconStyles}`}
        src={icon}
        width="100"
        height="100"
        color="#fff"
      />
    </button>
  );
};

export default PayButton;
