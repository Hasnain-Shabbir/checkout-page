import React from 'react';
import { PayButton } from '.';

const ExpressCheckout = () => {
  return (
    <div className="relative mt-6 grid grid-cols-1 gap-4 rounded-md border border-gray-200 p-6 xs:grid-cols-3 md:grid-cols-3">
      <h2 className="text-md absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 font-normal text-c-gray-400">
        Express Checkout
      </h2>
      <PayButton
        icon="/shop-pay.svg"
        iconStyles="brightness-0 invert"
        styles="hover:bg-[#390ced]"
      />
      <PayButton icon="/paypal.svg" styles="bg-[#ffc439] hover:bg-[#ffb639]" />
      <PayButton
        icon="/google-pay.svg"
        styles="bg-black hover:bg-gray-800"
        iconStyles="h-6"
      />
    </div>
  );
};

export default ExpressCheckout;
