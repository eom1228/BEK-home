import React, { useState } from 'react';
import Photography from './photography';

const PhotographyBtn = () => {
  const [isPhotography, setIsPhotography] = useState(false);

  const OpenPhotography = () => {
    setIsPhotography((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={OpenPhotography}>Photography</button>
      <Photography isOpen={isPhotography} />
    </>
  );
};

export default PhotographyBtn;
