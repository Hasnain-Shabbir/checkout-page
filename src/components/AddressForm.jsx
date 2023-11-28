import React, { useState } from 'react';
import { LabelInput } from '@/components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const AddressForm = ({ formTitle = '', formStyles = '' }) => {
  const [addApartmentInput, setAddApartmentInput] = useState(false);
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className={`${formStyles}`}>
      {formTitle.length > 0 && (
        <h2 className="mb-3 text-xl font-medium text-gray-900">{formTitle}</h2>
      )}
      <form action="" className="grid gap-4 md:grid-cols-2">
        <LabelInput
          styles="col-span-full"
          type="text"
          placeholder="Country"
          id="country"
          value={country}
          onChange={setCountry}
          label="Country"
        />
        <LabelInput
          type="text"
          id="firstName"
          value={firstName}
          onChange={setFirstName}
          placeholder="First Name"
          label="First Name"
          errorMessage="Enter first name"
        />
        <LabelInput
          type="text"
          id="lastName"
          placeholder="Last name"
          label="Last Name"
          value={lastName}
          onChange={setLastName}
          errorMessage="Enter last name"
        />
        <LabelInput
          id="address"
          styles="col-span-full"
          label="Address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={setAddress}
          errorMessage="Enter an address"
        />
        <div className="col-span-full">
          {addApartmentInput ? (
            <LabelInput
              id="apartment"
              label="Apartment"
              value={apartment}
              onChange={setApartment}
              placeholder="Apartment, suite, etc. (optional)"
              type="text"
            />
          ) : (
            <span
              className="cursor-pointer text-sm text-primary-300"
              onClick={() => setAddApartmentInput(true)}
            >
              + Add apartment, suite, etc.
            </span>
          )}
        </div>
        <div className="col-span-full">
          <div className="grid gap-4 md:grid-cols-3">
            <LabelInput
              type="text"
              placeholder="City"
              id="city"
              label="City"
              value={city}
              onChange={setCity}
              errorMessage="Enter a city"
            />
            <LabelInput
              type="text"
              placeholder="State"
              id="state"
              label="State"
              value={state}
              onChange={setState}
            />
            <LabelInput
              type="text"
              placeholder="Postal Code"
              id="postalCode"
              label="Postal Code"
              value={postalCode}
              onChange={setPostalCode}
              errorMessage="Enter a ZIP / postal code"
            />
          </div>
        </div>
        <LabelInput
          styles="col-span-full"
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={setPhone}
          label="Phone"
          iconInput
          icon={
            <BsFillQuestionCircleFill className="text-gray-400" size={18} />
          }
        />
      </form>
    </div>
  );
};

export default AddressForm;
