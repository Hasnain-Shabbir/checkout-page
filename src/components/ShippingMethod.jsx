import React from 'react';

const ShippingMethod = () => {
  return (
    <div className="mt-6">
      <h2 className="mb-3 text-lg font-semibold">Shipping method</h2>
      <div className="rounded-md bg-c-gray-100 p-5">
        <p className="text-sm leading-normal text-c-gray-400">
          Enter your shipping address to view available shipping methods.
        </p>
      </div>
    </div>
  );
};

export default ShippingMethod;
