/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: Testing Component
 */

import React from 'react';
import test from './../../devops-presentations/testing.mp4';

function Testing() {
  return (

    <div className="Testing text-center">
      
    <video controls>
      <source src={test} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

  </div>

  )
}

export default Testing;