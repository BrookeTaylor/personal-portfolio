/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/15/2023
 *  Description: Projects Component
 */

import web420 from './../images/dbd/web420Teams.png';
import whatabook from './../images/dbd/whatabook.png';
import nodebookco from './../images/dbd/nodeBookCo.png';
import nodeSecurity from './../images/dbd/nodeSecurity.png';
import nodeTech from './../images/dbd/nodeTech.png';
import nodeShopper from './../images/dbd/nodeShopper.png';



function Diagrams() {

  const cards = [
    {
      id: 1,
      images: web420,
      title: 'WEB420 Capstone',
      description: (
        <div>
          <ul>
            <li>
              1. a TEAM has one mascot 
            </li>
            <li>
              2. a TEAM has many PLAYERS
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      images: whatabook,
      title: 'What-A-Book',
      description: (
        <div>
          <ul>
            <li>
              1. a CUSTOMER(S) has one wishlist
            </li>
            <li>
              2. a wishlist has one or many BOOK(S)
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      images: nodebookco,
      title: 'Node Book Co',
      description: (
        <div>
          <ul>
            <li>
              1. a PUBLISHER(S) can have one or many BOOK(S)
            </li>
            <li>
              2. AUTHOR(S) can have one or many BOOK(S)
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      images: nodeSecurity,
      title: 'Node Security',
      description: (
        <div>
          <ul>
            <li>
              1. a USER can have one or more assigned ROLE(S) 
            </li>
            <li>
              2. a ROLE is associated with many PERMISSION(S)
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      images: nodeTech,
      title: 'Node Tech',
      description: (
        <div>
          <ul>
            <li>
              1. a STUDENT has many ENROLLMENT(s) 
            </li>
            <li>
              2. an ENROLLMENT has many COURSE(s) 
            </li>
            <li>
              3. a STUDENT ENROLL(s) in many COURSE(s)
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      images: nodeShopper,
      title: 'Node Shopper',
      description: (
        <div>
          <ul>
            <li>
              1. a CUSTOMER can have many INVOICE(s) 
            </li>
            <li>
              2. many INVOICE(s) are assigned to a CUSTOMER 
            </li>
            <li>
              3. an INVOICE can have many LINEITEM(s) 
            </li>
            <li>
              4. many LINEITEM(s) are added to an INVOICE
            </li>
          </ul>
        </div>
      )
    }
  ]




  function Card({ id, images, title, description }){
    return (
      <div key={id} className={`card ${title}`}>

        <h2>{title}</h2>

        <a href={images} target="_blank" rel='noopener noreferrer'>
          <img src={images} alt={`Card ${id}`} />
        </a>

        <div>{description}</div>

      </div>
    )
  }



  return(
    <div className='DatabaseDiagrams'>
      
      <div className="grid-container">
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>

    </div>
  )

}

export default Diagrams;