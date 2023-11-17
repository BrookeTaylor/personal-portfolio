/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/11/2023
 *  Description: SecurityControlsInSharedSourcesCodeRepositories Component
 */

import React from 'react';
import security from './../../devops-presentations/securityControlsInSharedSourceCodeRepositories.mp4';

function SecurityControlsInSharedSourcesCodeRepositories() {
  return (
    <div className="function SecurityControlsInSharedSourcesCodeRepositories() {
      text-center">
      
      <video controls>
        <source src={security} type="video/mp4" />
          Your browser does not support the video tag.
      </video>

    </div>  )
}

export default SecurityControlsInSharedSourcesCodeRepositories;