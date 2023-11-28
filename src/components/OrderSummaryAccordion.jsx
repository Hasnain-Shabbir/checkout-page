import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Container, OrderSummary } from '.';

const OrderSummaryAccordion = ({ cartItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div className="relative bg-c-gray-100 lg:hidden">
      <div>
        <Container>
          <div
            className="flex cursor-pointer items-center justify-between py-6"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="flex items-center text-sm text-primary-300">
              {isExpanded ? 'Hide order summary' : 'Show order summary'}
              <span className="ml-3 mt-1">
                {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h3>
            <span className="font-semibold">$20.00</span>
          </div>
        </Container>
      </div>
      <Container>
        <div
          className={
            isExpanded
              ? 'border-t-2 border-gray-200 py-4 opacity-100 transition-all duration-300 ease-in-out'
              : 'h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out'
          }
        >
          <OrderSummary cartItems={cartItems} />
        </div>
      </Container>
    </div>
  );
};

export default OrderSummaryAccordion;
