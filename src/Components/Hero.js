import React from 'react'
import ScrollButton from '../Components/ScrollButton'

const Hero = () => {
    return (
      <div className="grids">
        <div className="hero">
          <h1 className="heroh1">
            Ray crafts smooth experiences for digital products.
          </h1>
          <p>
            With over 1 year of experience in understanding customer needs,
            turning that into product ideations, telling brand stories to reach
            the next level.‍
          </p>
          <ScrollButton sectionId="projects" />
        </div>
      </div>
    );
  };
  
  export default Hero;
  