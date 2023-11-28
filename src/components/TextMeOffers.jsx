import React, { useState } from 'react';
import { Checkbox, LabelInput, Separator } from '.';
import { CiMobile2 } from 'react-icons/ci';

const TextMeOffers = ({ isChecked, setIsChecked }) => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <div className="mt-6">
        <div
          className={
            isChecked
              ? 'transition-all duration-300'
              : 'transition-all duration-300'
          }
        >
          <Checkbox
            title="Text me with news and offers"
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            id="TextMeOffers"
            styles="w-full min-w-full"
          />
        </div>
        <div
          className={
            isChecked
              ? 'rounded-b-md py-4 transition-all duration-300'
              : 'h-0 overflow-hidden opacity-0 transition-all duration-300'
          }
        >
          <LabelInput
            placeholder="+1"
            iconPosition="right"
            iconInput
            value={phone}
            onChange={setPhone}
            label="Phone number"
            id="phoneNumber"
            icon={<CiMobile2 size={20} className="text-c-gray-400" />}
          />
          <div className="mt-3">
            <p className="text-xs text-c-gray-400">
              By signing up via text, you agree to receive recurring automated
              marketing messages, including cart reminders, at the phone number
              provided. Consent is not a condition of purchase. Reply STOP to
              unsubscribe. Reply HELP for help. Message frequency varies. Msg &
              data rates may apply. View our Privacy Policy and Terms of
              Service.
            </p>
          </div>
        </div>
        <Separator styles="mt-6" type="section" />
      </div>
    </div>
  );
};

export default TextMeOffers;
