/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: TechnologyVsBusiness Component
 */

import React from 'react';
import techVBiz from './../../devops-presentations/brooks-technologyVsBusiness.mp4';

function TechnologyVsBusiness() {
  return (
    <div className="TechnologyVsBusiness text-center">
      
      <video controls>
        <source src={techVBiz} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default TechnologyVsBusiness;