/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/14/2023
 *  Description: Projects Component
 */

import bcrs from './../images/projects/bcrs.png';
import nodebucket from './../images/projects/nodebucket.png';
import loanApp from './../images/projects/loan-app.png';
import InNOutBooks from './../images/projects/In-N-Out-Books.png';
import GPACalculator from './../images/projects/gpa-calculator-app.png';
import asyncPipe from './../images/projects/web425-enterpriseComposerApp.png';
import RESTfulAPI from './../images/projects/web420-capstone.png';
import JSII from './../images/projects/javascriptII.png';
import JS from './../images/projects/javascriptI.png';

function Projects() {

  const cards = [
    {
      id: 1,
      title: "Bob's Computer Repair Shop",
      image: bcrs,
      link: 'https://group-2-bcrs.onrender.com',
      description: (
        <div>
          <p>WEB450-339A Group 2 - Brooke Taylor, Janis Gonzalez, & Brett Grashorn</p>

          <p>Feel free to create your own log in or use a pre-made one.</p>

          <ul>
            <li>
              Admin User: mozart@nodebuket.com / Password01
            </li>
            <li>
              Standard User: bach@nodebucket.com / Password01
            </li>
          </ul>
        </div>
      ),
        comments: `
          Title: Bob's Computer Repair Shop
          Author: WEB450-339A Group 2 - Brooke Taylor, Janis Gonzalez, & Brett Grashorn
          Date: 10/03/2023
          Modified By: WEB450-339A Group 2 - Brooke Taylor, Janis Gonzalez, & Brett Grashorn
          Description: Bob's Computer Repair Shop - Final Project for WEB450. 
        `
    },
    {
      id: 2,
      title: "Nodebucket",
      image: nodebucket,
      link: 'https://group-2-bcrs.onrender.com',
      description: "Employee Ids: 1007, 1008, 1009, 1010, 1011, 1012",
      comments: `
        Title: Nodebucket
        Author: Professor Krasso
        Date: 09/05/2023
        Modified By: Brooke Taylor
        Description: A MEAN Stack Task Management App
      `
    },
    {
      id: 3,
      title: "Loan App",
      image: loanApp,
      link: 'https://brooketaylor.github.io/loan-app/',
      description: "",
      comments: `
        Title: Loan App
        Author: Professor Krasso
        Date: 07/23/2023
        Modified By: Brooke Taylor
        Description: Loan App
      `
    },
    {
      id: 4,
      title: "In-N-Out-Books",
      image: InNOutBooks,
      link: 'https://brooketaylor.github.io/In-N-Out-Books/',
      description: "",
      comments: `
        Title: In-N-Out-Books
        Author: Professor Krasso
        Date: 07/11/2023
        Modified By: Brooke Taylor
        Description: In-N-Out-Books
      `
    },
    {
      id: 5,
      title: "GPA Calculator",
      image: GPACalculator,
      link: 'https://brooketaylor.github.io/gpa-calculator-app/',
      description: "StudentIds: 1007, 1008, 1009, 1010, 1011, 1012",
      comments: `
        Title: GPA Calculator App
        Author: Professor Krasso
        Date: 07/11/2023
        Modified By: Brooke Taylor
        Description: GPA Calculator App
      `
    },
    {
      id: 6,
      title: "Web 425",
      image: asyncPipe,
      link: 'https://brooketaylor.github.io/enterprise-composer-app/',
      description: "Async Pipe",
      comments: `
        Title: Composer App
        Author: Professor Krasso
        Date: 06/18/2023
        Modified By: Brooke Taylor
        Description: Enterprise Composer App, Assignment 4.4 - Async Pipe
      `
    },
    {
      id: 7,
      title: "WEB 420",
      image: RESTfulAPI,
      link: 'https://brooks-web420capstone.onrender.com/api-docs/',
      description: "RESTful APIs",
      comments: `
        Title: Web 420 Capstone Project
        Author: Professor Krasso
        Date: 05/12/2023
        Modified By: Brooke Taylor 
        Description: Web 420 Capstone
      `
    },
    {
      id: 8,
      title: "WEB 330",
      image: JSII,
      link: 'https://brooketaylor.github.io/web-330/index.html',
      description: "Enterprise JavaScript II",
      comments: `
        Title: Web 330
        Author: Professor Krasso
        Date: 05/09/2023
        Modified By: Brooke Taylor
        Description: Enterprise JavaScript II class 
      `
    },
    {
      id: 9,
      title: "WEB 231",
      image: JS,
      link: 'https://brooketaylor.github.io/web-231/index.html',
      description: "Enterprise JavaScript I",
      comments: `
        Title: Web 231
        Author: Professor Krasso
        Date: 05/09/2023
        Modified By: Brooke Taylor
        Description: Enterprise JavaScript I class 
      `
    }    
  ];




  function Card({ id, title, image, link, description }) {
    return (
      <div key={id} className={`card ${title}`}>
      <h2>{title}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`Card ${id}`} />

        <p>{link}</p>
      </a>
      
      <div>{description}</div>
    </div>
    )
  }





  return(
    <div className="Projects">

      <div className="grid-container">
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>

    </div>
  )

}

export default Projects;