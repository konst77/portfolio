import React from 'react'
import ScrollButton from '../Components/ScrollButton'

const Hero = () => {
    return (
      <div className="grids">
        <div className="hero">
          <h1 className="heroh1">
            Product Designer Ray crafts solutions for digital products.
          </h1>
          <p>
            With over 1 year of experience in understanding problems,
            obsessing over customers, designing solutions with efficiency.‍
          </p>
          <ScrollButton sectionId="projects" />
        </div>
      </div>
    );
  };
  
  export default Hero;
  