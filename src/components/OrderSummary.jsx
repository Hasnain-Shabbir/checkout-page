import React, { useEffect, useState } from 'react';
import { CartItem, LabelInput } from '.';

const OrderSummary = ({ title = '', cartItems }) => {
  const [isApplyActive, setIsApplyActive] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    if (discountCode.length) {
      return setIsApplyActive(true);
    } else {
      setIsApplyActive(false);
    }
  }, [discountCode]);

  return (
    <div className="relative">
      <div className="py-6 pt-1">
        {title.length > 0 && (
          <h2 className="mb-6 text-2xl font-semibold lg:hidden">
            Order Summary
          </h2>
        )}
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="mt-6 flex flex-row gap-3.5">
          <LabelInput
            id="giftCard"
            label="Discount code or gift card"
            onChange={setDiscountCode}
            value={discountCode}
            placeholder="Gift card or discount code"
            // styles="py-3.5"
            type="text"
          />
          <button
            className={
              isApplyActive
                ? 'cursor-pointer rounded-md border border-primary-300 bg-primary-300 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-primary-400 hover:text-white focus:bg-primary-400 focus:ring-4 focus:ring-primary-100 active:bg-primary-300'
                : 'cursor-auto rounded-md border border-gray-300 bg-c-gray-200 px-4 py-3 text-sm font-medium text-c-gray-400 transition-all'
            }
            disabled={isApplyActive}
          >
            Apply
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm">Subtotal</h4>
            <p className="text-sm font-medium">$20.00</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-sm">Shipping</h4>
            <p className="text-xs text-c-gray-400">Enter shipping address</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">Total</h4>
            <p className="text-xs text-c-gray-400">
              CAD
              <span className="ml-2 text-lg font-medium text-black">
                $20.00
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
