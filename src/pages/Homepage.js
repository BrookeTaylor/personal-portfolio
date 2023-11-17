/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/09/2023
 *  Description: Homepage Component
 */


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import bt from './../images/brookeTaylor.png';

function Homepage() {
    return (
        <div className="homepage">

        <h1>Hello World</h1>
        
        <div className='row m-auto'>

            <div className='col'>
                <img src={bt} alt='Brooke Taylor' />
            </div>

            <div className='col'>
                <p>
                    Thanks for taking the time to explore my little space on the web! 
                    Chances are you're here because we're either related, you're a 
                    friend, or you might be looking to hire me; either way your 
                    visit means a lot!       
                </p>        

                 <p>
                    My journey into web development began in 2012 
                    with <a href="https://www.fontbonne.edu/" target="_blank" rel="noopener noreferrer">Fontbonne University</a> where 
                    I took a web design course which taught me HTML / CSS. However, it 
                    wasn't until years later, during COVID that I decided I wanted 
                    to learn web design in earnest. At first I studied on my own 
                    with <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">w3schools</a> and <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>. 
                    I continued my education 
                    with <a href="https://www.bellevue.edu/" target="_blank" rel="noopener noreferrer">Bellevue University</a> in 2023 and there we studied 
                    fullstack development with Mongo, Express, Angular, and Node. Also 
                    in our studies we learned Python, TypeScript, RESTful APIs, and DevOps 
                    principles. 
                </p>

                <p>
                    I'm currently studying React. <FontAwesomeIcon icon={faReact} className='spin' /> 
                </p>

            </div>
        </div>
    </div>
    )
}

export default Homepage;