import React from 'react';

const Tooltip = ({ children, tooltipStyles = '', tooltipContent }) => {
  return (
    <div className="group relative cursor-pointer">
      <div>{children}</div>
      <div
        className={`absolute -left-2 bottom-[calc(100%+8px)] hidden min-w-max -translate-x-1/2 items-center justify-center rounded-md bg-gray-800 px-3 py-3 text-white group-hover:flex ${tooltipStyles}`}
      >
        {tooltipContent}
        <span className="absolute bottom-0 left-2/3 -z-10 h-6 w-6 -translate-x-1/2 rotate-45 bg-gray-800"></span>
      </div>
    </div>
  );
};

export default Tooltip;
