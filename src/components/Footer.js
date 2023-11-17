/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/09/2023
 *  Description: Footer Component
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './components.scss';

function Footer() {
    return (
    <div className="footer">

        <div className="row text-center">
            <div className="col-sm-4">
                <ul>
                    <li>
                        <span>Brooke Taylor</span>
                    </li>
                    <li>
                        <a href="https://github.com/BrookeTaylor" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    </li>
                    <li>
                        <a href="https://github.com/BrookeTaylor?tab=repositories" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodeBranch} /> GitHub Repositories</a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-4">
                <ul>
                    <li>
                        <span>Email me at:</span>
                    </li>
                    <li>
                        <a href="mailto: anonyoumiss@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> anonyoumiss@gmail.com</a>                   
                    </li>
                </ul>
            </div>

            <div className="col-sm-4">
                
                <div className='row'>
                    <div className='col'><span>Connect via Social Media</span></div>
                </div>

                <ul className='social'>

                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100026208545629" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/anonyoumiss/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/brooke-taylor-a98990273/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>

                </ul>

            </div>
        </div>

    </div>
   )}
   


export default Footer;
