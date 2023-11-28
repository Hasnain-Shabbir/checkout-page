import React from 'react';
import Image from 'next/image';

const PaymentIcon = ({ icon }) => {
  return (
    <span className="flex h-[26px] w-[42px] items-center justify-center rounded-sm border border-gray-300 bg-white">
      <Image
        width="100"
        height="100"
        src={icon}
        className="h-full w-full object-cover object-center"
      />
    </span>
  );
};

export default PaymentIcon;
