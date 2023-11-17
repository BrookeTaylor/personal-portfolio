/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: PagerRotationDuties Component
 */

import React from 'react';
import pagerRotation from './../../devops-presentations/pagerRotationDuties.mp4';


function PagerRotationDuties() {
  return (
    <div className="PagerRotationDuties text-center">
      
      <video controls>
        <source src={pagerRotation} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default PagerRotationDuties;