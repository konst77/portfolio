import React from 'react'

function ScrollButton({ sectionId }) {
    function handleClick() {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  
    return (
      <button onClick={handleClick} className="herobutton">Ray's Projects ↓</button>
    );
  }
  
  export default ScrollButton
  
  
  
  
  