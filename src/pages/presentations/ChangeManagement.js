/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: ChangeManagement Component
 */

import React from 'react';
import changeManagement from './../../devops-presentations/changeManagement.mp4';

function ChangeManagement() {
  return (
    <div className="ChangeManagement text-center">
      
      <video controls>
        <source src={changeManagement} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default ChangeManagement;