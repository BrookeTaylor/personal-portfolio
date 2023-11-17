/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: DangersOfChangeApprovalProcesses Component
 */

import React from 'react';
import approvalProcesses from './../../devops-presentations/dangersOfChangeApprovalProcesses.mp4';


function DangersOfChangeApprovalProcesses() {
  return (
    <div className="DangersOfChangeApprovalProcesses text-center">
      
      <video controls>
        <source src={approvalProcesses} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default DangersOfChangeApprovalProcesses;