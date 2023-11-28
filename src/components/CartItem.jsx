import React from 'react';
import Image from 'next/image';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between gap-3" key={item.id}>
      <div className="flex items-center">
        <div className="relative h-[64px] w-[64px] min-w-[64px] rounded-md border border-gray-300 bg-white px-3 py-2">
          <Image
            src={item.image}
            width="100"
            height="100"
            className="h-full w-full object-cover"
          />
          <span className="absolute -right-3 -top-3 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-c-gray-400 text-sm text-white">
            {item.quantity}
          </span>
        </div>
        <div className="ml-4">
          <h4 className="text-sm">{item.name}</h4>
          <p className="mt-1 text-xs text-gray-500">
            {item.description ? item.description : ''}
          </p>
        </div>
      </div>
      <span className="text-sm">${item.price}</span>
    </div>
  );
};

export default CartItem;
