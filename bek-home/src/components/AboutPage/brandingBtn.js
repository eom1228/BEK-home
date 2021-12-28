import React, { useState } from 'react';
import Branding from './branding';

const BrandingBtn = () => {
  const [isBranding, setIsBranding] = useState(false);

  const OpenBranding = () => {
    setIsBranding((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={OpenBranding}>Branding</button>
      <Branding isOpen={isBranding} />
    </>
  );
};

export default BrandingBtn;
