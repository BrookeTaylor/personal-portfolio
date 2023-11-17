/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/09/2023
 *  Description: Header Component
 */


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './components.scss';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  const isExpanded = expanded;

  const links = [
    { to: '/', text: 'Home' },
    { to: '/about-me', text: 'About' },
    { to: '/resume', text: 'Resume' },
    { to: '/projects', text: 'Projects' },
    { to: '/diagrams', text: 'Database Diagrams' },
    { to: '/tests', text: 'API Unit Tests' },
  ];


  const presentations = [
   { to: '/tech-value-stream', text: 'The Technology Value Stream' },
   { to: '/two-pizza-rule', text: 'The Two Pizza Rule' },
   { to: '/testing', text: 'Testing' },
   { to: '/continuous-integration', text: 'Continuous Integration' },
   { to: '/pager-rotation-duties', text: 'Pager Rotation Duties' },
   { to: '/change-approval-processes', text: 'Dangers of Change Approval Processes' },
   { to: '/technology-vs-business', text: 'Technology Vs Business Driven Decisions' },
   { to: '/shared-source-repos', text: 'Security Controls In Shared Source Repositories' },
   { to: '/change-management', text: 'Change Management' },
  ]



  return (
    <header>
      <Navbar expand="lg" expanded={expanded} style={{ width: '100%' }}  className='nav'>
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to='/' onClick={handleNavItemClick}>
              Brooke Taylor
            </Link>
          </Navbar.Brand>


          <div 
            className={`hamburger-icon${isExpanded ? ' is-expanded' : ''}`}
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="hamburger-bar toggler-icon top-bar"></span>
            <span className="hamburger-bar toggler-icon middle-bar"></span>
            <span className="hamburger-bar toggler-icon bottom-bar"></span>
          </div>


          <Navbar.Collapse id="basic-navbar-nav">


            <Nav className="me-auto">


            {links.map((link, index) => (
                <Nav.Link as={Link} to={link.to} key={index} onClick={handleNavItemClick} className='nav-links'>
                  {link.text}
                </Nav.Link>
              ))}


              <NavDropdown title="DevOps Presentations" id="basic-nav-dropdown">

                {presentations.map((link, index) => (
                  <NavDropdown.Item as={Link} to={link.to} key={index} onClick={handleNavItemClick} className='dd-links'>
                    {link.text}
                  </NavDropdown.Item>
                ))}


              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
