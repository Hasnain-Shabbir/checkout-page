import React from 'react';

const Checkbox = ({
  title = 'Your title',
  isChecked,
  setIsChecked,
  id,
  styles = '',
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex max-w-max cursor-pointer items-center gap-3 ${styles}`}
    >
      <input
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
        id={id}
        className="relative h-5 w-5 min-w-5 cursor-pointer appearance-none rounded-md border border-primary-300 bg-white transition-all checked:h-5 checked:w-5 checked:bg-primary-300 checked:after:absolute checked:after:left-1/2 checked:after:top-1 checked:after:h-[10px] checked:after:w-[5px] checked:after:-translate-x-1/2 checked:after:rotate-45 checked:after:border-b-2 checked:after:border-r-2 checked:after:border-white checked:after:transition-all"
      />
      <span className="text-sm">{title}</span>
    </label>
  );
};

export default Checkbox;
