/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: TwoPizzaRule Component
 */

import React from 'react';
import twoPizza from './../../devops-presentations/two-pizza-rule.mp4';



function TwoPizzaRule() {
  return (
    <div className="TwoPizzaRule text-center">
      
      <video controls>
        <source src={twoPizza} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default TwoPizzaRule;