import React, { useState } from 'react';
import { LocationRadio } from '.';

const PickupLocationSelector = ({ locations }) => {
  const [selectedOption, setSelectedOption] = useState(
    locations[0]?.id || null,
  );

  return (
    <div className="mt-8">
      <h3 className="mb-3 text-xl font-medium text-gray-800">
        Pickup locations
      </h3>
      <p className="mt-2 text-gray-500">
        There are {locations.length} stores with stock close to your location
      </p>
      <div className="mt-4 flex flex-col gap-4">
        {locations.map((location) => (
          <LocationRadio
            key={location.id}
            location={location}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};

export default PickupLocationSelector;
