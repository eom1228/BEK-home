import React, { useState } from 'react';
import Media from './media';

const MediaBtn = () => {
  const [isMedia, setIsMedia] = useState(false);

  const OpenMedia = () => {
    setIsMedia((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={OpenMedia}>Media</button>
      <Media isOpen={isMedia} />
    </>
  );
};

export default MediaBtn;
