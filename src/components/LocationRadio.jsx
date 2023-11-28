import React from 'react';

const LocationRadio = ({ location, selectedOption, setSelectedOption }) => {
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <label
      key={location.id}
      htmlFor={location.id}
      className={
        selectedOption === location.id
          ? 'flex cursor-pointer rounded-md border border-primary-400 bg-primary-100 p-4'
          : 'flex cursor-pointer rounded-md border p-4 focus-within:border-2 focus-within:border-gray-700 focus-within:bg-gray-200'
      }
    >
      <input
        checked={
          selectedOption === location.id ||
          (selectedOption === null && location.id === locations[0]?.id)
        }
        onChange={handleRadioChange}
        type="radio"
        className="appearance-none"
        name="pickup"
        value={location.id}
        id={location.id}
      />
      <div className="flex w-full items-center justify-between">
        <div>
          <h4 className="mb-1 text-sm">{location.name}</h4>
          <p className="text-xs text-gray-500">{location.address}</p>
        </div>

        <div className="text-right">
          <span className="text-sm font-semibold">{location.price}</span>
          <p className="text-xs text-gray-500">{location.deliveryTime}</p>
        </div>
      </div>
    </label>
  );
};

export default LocationRadio;
