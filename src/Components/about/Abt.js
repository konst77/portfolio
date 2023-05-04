import Image from 'next/image'
import React from 'react';

function Abt({ src, text }) {
    const myText = text || 'default text';

    return (
      <div className='grids'>
        <Image id='abtimg' src={src} />
        <p id='abtp'>{myText}</p>
      </div>
    );
  }
  
  export default Abt;