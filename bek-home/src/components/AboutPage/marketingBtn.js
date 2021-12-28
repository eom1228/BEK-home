import React, { useState } from 'react';
import Marketing from './marketing';

const MarketingBtn = () => {
  const [isMarketing, setIsMarketing] = useState(false);

  const OpenMarketing = () => {
    setIsMarketing((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={OpenMarketing}>Marketing</button>
      <Marketing isOpen={isMarketing} />
    </>
  );
};

export default MarketingBtn;
