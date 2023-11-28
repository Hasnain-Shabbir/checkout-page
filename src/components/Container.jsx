import React from 'react';

const Container = ({ children, styles = '', paddingVertical }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1080px] ${
        paddingVertical ? paddingVertical : 'px-5'
      } md:max-w-[660px] lg:max-w-[1060px] ${styles}`}
    >
      {children}
    </div>
  );
};

export default Container;
