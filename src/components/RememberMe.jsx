import React, { useState } from 'react';
import { Checkbox, LabelInput, Separator } from '.';
import { CiMobile2 } from 'react-icons/ci';

const RememberMe = () => {
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Remember me</h2>
      <div
        className={
          isRememberChecked
            ? 'rounded-t-md border border-gray-200 transition-all duration-300'
            : 'rounded-md border border-gray-200 transition-all duration-300'
        }
      >
        <Checkbox
          title="Save my information for a faster checkout"
          isChecked={isRememberChecked}
          setIsChecked={setIsRememberChecked}
          id="RememberMe"
          styles="w-full min-w-full p-5"
        />
      </div>
      <div
        className={
          isRememberChecked
            ? 'rounded-b-md border-2 border-t-0 border-gray-200 bg-c-gray-100 p-4 transition-all duration-300'
            : 'h-0 overflow-hidden px-4 opacity-0 transition-all duration-300'
        }
      >
        <LabelInput
          id="phone"
          label="Phone"
          styles="bg-white"
          placeholder="+1"
          iconInput
          iconPosition="right"
          onChange={setPhone}
          value={phone}
          icon={<CiMobile2 size={18} className="text-c-gray-400" />}
        />
        <div className="mt-3 pr-6">
          <p className="text-sm">
            Next time you check out here or on other stores powered by Shopify,
            you’ll receive a code by text message to securely purchase with Shop
            Pay.
          </p>
          <p className="mt-5 text-xs text-c-gray-400">
            By continuing, you agree to Shop Pay’s Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
      <Separator styles="mt-6" type="section" />
    </div>
  );
};

export default RememberMe;
