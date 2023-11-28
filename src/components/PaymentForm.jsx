import React, { useState } from 'react';
import { Checkbox, LabelInput, PaymentIcon, Tooltip, AddressForm } from '.';
import { GoLock, GoQuestion } from 'react-icons/go';

const PaymentForm = ({ selectedDeliveryMethod }) => {
  const [isShippingChecked, setIsShippingChecked] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardName, setCardName] = useState('');

  return (
    <div className="my-10 mb-6 mt-6">
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-semibold">Payment</h2>
        <p className="text-sm text-c-gray-400">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between rounded-t-md border  border-primary-400 bg-primary-100 p-4">
          <span className="flex items-center justify-center text-sm">
            Credit card
          </span>
          <div className="grid grid-cols-4 gap-2">
            <PaymentIcon icon="/visa.svg" />
            <PaymentIcon icon="/mastercard.svg" />
            <PaymentIcon icon="/amex.svg" />

            <Tooltip
              tooltipStyles=""
              tooltipContent={
                <div className="grid grid-cols-3 gap-2">
                  <PaymentIcon icon="/discover.svg" />
                  <PaymentIcon icon="/jcb.svg" />
                  <PaymentIcon icon="/visa.svg" />
                  <PaymentIcon icon="/unionpay.svg" />
                </div>
              }
            >
              <span className="flex h-[26px] w-[42px] items-center justify-center rounded-sm border border-gray-200 bg-white text-sm text-primary-300">
                +4
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="rounded-b-md border border-t-0 bg-c-gray-100 px-5 py-5">
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LabelInput
              icon={<GoLock size={18} className="text-gray-500" />}
              placeholder="Card number"
              styles="col-span-full"
              type="tel"
              id="cardNumber"
              label="Card Number"
              errorMessage="Enter a valid card number"
              value={cardNumber}
              onChange={setCardNumber}
              iconInput
            />
            <LabelInput
              type="tel"
              placeholder="Expiration date (MM / YY)"
              id="date"
              label="Expiration date (MM / YY)"
              value={date}
              onChange={setDate}
            />
            <LabelInput
              icon={<GoQuestion size={18} className="text-gray-500" />}
              placeholder="Security code"
              id="securityCode"
              type="tel"
              label="Security Code"
              value={securityCode}
              onChange={setSecurityCode}
              errorMessage="Enter the CVV or security code on your card"
              iconInput
            />
            <LabelInput
              placeholder="Name on card"
              styles="col-span-full"
              label="Name on card"
              id="cardName"
              type="text"
              value={cardName}
              onChange={setCardName}
              errorMessage="Enter your name exactly as it’s written on your card"
            />
            {selectedDeliveryMethod === 'delivery' ? (
              <></>
            ) : (
              <Checkbox
                title="Use shipping address as billing address"
                isChecked={isShippingChecked}
                setIsChecked={setIsShippingChecked}
                styles="col-span-full"
              />
            )}
          </form>
          <AddressForm
            formTitle="Billing Address"
            formStyles={
              isShippingChecked
                ? 'h-0 overflow-hidden opacity-0 mt-0 m-0 transition-all duration-300'
                : 'h-full overflow-auto opacity-100 mt-4 transition-all duration-300'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
