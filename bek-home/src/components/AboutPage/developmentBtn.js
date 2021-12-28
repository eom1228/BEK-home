import React, { useState } from 'react';
import Development from './development';

const DevelopmentBtn = () => {
  const [isDevelopment, setIsDevelopment] = useState(false);

  const OpenDevelopment = () => {
    setIsDevelopment((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={OpenDevelopment}>Development</button>
      <Development isOpen={isDevelopment} />
    </>
  );
};

export default DevelopmentBtn;
