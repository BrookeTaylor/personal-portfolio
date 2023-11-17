/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: TechValueStream Component
 */

import React from 'react';
import TechValue from './../../devops-presentations/tech-value.mp4';


function TechValueStream() {
  return (
    <div className="TechValueStream text-center">
      
      <video controls>
        <source src={TechValue} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default TechValueStream;