/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/08/2023
 *  Description: App Component
 */

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';



import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Diagrams from './pages/Diagrams';
import Tests from './pages/Tests';
import Projects from './pages/Projects';

import ChangeManagement from './pages/presentations/ChangeManagement';
import ContinuousIntegration from './pages/presentations/ContinuousIntegration';
import DangersOfChangeApprovalProcesses from './pages/presentations/DangersOfChangeApprovalProcesses';
import PagerRotationDuties from './pages/presentations/PagerRotationDuties';
import SecurityControlsInSharedSourceCodeRepositories from './pages/presentations/SecurityControlsInSharedSourceCodeRepositories';
import TechnologyVsBusiness from './pages/presentations/TechnologyVsBusiness';
import TechValueStream from './pages/presentations/TechValueStream';
import Testing from './pages/presentations/Testing';
import TwoPizzaRule from './pages/presentations/TwoPizzaRule';


function Toggle({ isDarkMode, toggleDarkMode}) {

  const handleToggleClick = () => {
    toggleDarkMode();
  };
  
  return (
    <div className='toggle-container'>

      <button onClick={handleToggleClick} id="toggleMode">
        {isDarkMode ? ( <FontAwesomeIcon icon={faToggleOn} /> ) : ( <FontAwesomeIcon icon={faToggleOff} /> )}
      </button>

      <div className='toggle-message' onClick={handleToggleClick} style={{ cursor: 'pointer' }}>
        { isDarkMode ? 'Dark Mode' : 'Light Mode' }
      </div>

    </div>
  )
}




function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  };


  return (
  <div className='App'>
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Router>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode' }>
    
          <Toggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />



          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/diagrams" element={<Diagrams />} />
            <Route path="/tests" element={<Tests />} />

            <Route path="/change-management" element={<ChangeManagement />} />
            <Route path="/continuous-integration" element={<ContinuousIntegration />} />
            <Route path="/change-approval-processes" element={<DangersOfChangeApprovalProcesses />} />
            <Route path="/pager-rotation-duties" element={<PagerRotationDuties />} />
            <Route path="/shared-source-repos" element={<SecurityControlsInSharedSourceCodeRepositories />} />
            <Route path="/technology-vs-business" element={<TechnologyVsBusiness />} />
            <Route path="/tech-value-stream" element={<TechValueStream />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/two-pizza-rule" element={<TwoPizzaRule />} />
          </Routes>

          <Footer />
        </div>

      </Router>
    </div>

  </div>
  );
}

export default App;
