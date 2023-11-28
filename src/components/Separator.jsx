import React from 'react';

const Separator = ({ styles = '', title, type = '', width = '' }) => {
  return (
    <>
      {type === 'section' ? (
        <div
          className={`relative -left-5 mt-4 h-4 w-[calc(100%+40px)] rounded-none bg-c-gray-100 md:hidden ${styles}`}
        />
      ) : (
        <div
          className={`relative h-px  rounded-lg bg-gray-300 ${
            width === 'full' ? '-left-5 w-[calc(100%+40px)]' : ''
          } ${styles}`}
        >
          <h3 className="absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-500">
            {title ? title : ''}
          </h3>
        </div>
      )}
    </>
  );
};

export default Separator;
