/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: ContinuousIntegration Component
 */

import React from 'react';
import integration from './../../devops-presentations/brooks-continuousIntegration.mp4';


function ContinuousIntegration() {
  return (
    <div className="ContinuousIntegration text-center">
      
      <video controls>
        <source src={integration} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default ContinuousIntegration;