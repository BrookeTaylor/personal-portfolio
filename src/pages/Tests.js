/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/14/2023
 *  Description: Tests Component
 */

import teamsDeleteId from './../images/api/week-9/soap-DELETE-team.png';
import teamsPlayersId from './../images/api/week-9/soap-GET-players.png';
import teamsPlayerId from './../images/api/week-9/swagger-POST-player.png';
import teams from './../images/api/week-9/swagger-GET-teams.png';

import composerDeleteId from './../images/api/week-8/DELETE.png';
import composerUpdate from './../images/api/week-8/PUT.png';

import customerInvoices from './../images/api/week-7/GET-apiCustomers-usernameInvoices-SoapUi.png';
import customerPOSTInvoice from './../images/api/week-7/POST-apiCustomers-usernameInvoices-SoapUi.png';
import customerPOST from './../images/api/week-7/POST-apiCustomers-SwaggerUi.png';

import login from './../images/api/week-6/SoupUI-logIn.png';
import signin from './../images/api/week-6/SwaggerUI-signUp.png';

import signup from './../images/api/week-5/swagger-POST.png';
import persons from './../images/api/week-5/soapUi-GET.png';

import composer from './../images/api/week-4/post2.png';
import composers from './../images/api/week-4/findAll2.png';
import composerId from './../images/api/week-4/swagger2.png';



function Tests() {

  const cards = [
    {
      id: 1, 
      image: teamsDeleteId,
      title: 'WEB420 - Teams',
      url: 'http://localhost:3000/api/teams/{id}',
      test: 'soap',
      call: 'DELETE'
    },
    {
      id: 2, 
      image: teamsPlayersId,
      title: 'WEB420 - Teams',
      url: 'http://localhost:3000/api/teams/{id}/players',
      test: 'soap',
      call: 'GET'
    },
    {
      id: 3, 
      image: teamsPlayerId,
      title: 'WEB420 - Teams',
      url: 'http://localhost:3000/api/teams/{id}/player',
      test: 'swagger',
      call: 'POST'
    },
    {
      id: 4, 
      image: teams,
      title: 'WEB420 - Teams',
      url: 'http://localhost:3000/api/teams',
      test: 'swagger',
      call: 'GET'
    },
    {
      id: 5, 
      image: composerDeleteId,
      title: 'WEB420 - Composers',
      url: 'http://localhost:3000/api/composers/{id}',
      test: 'soap',
      call: 'DELETE'
    },
    {
      id: 6, 
      image: composerUpdate,
      title: 'WEB420 - Composers',
      url: 'http://localhost:3000/api/composers/{id}',
      test: 'swagger',
      call: 'PUT'
    },
    {
      id: 7, 
      image: customerInvoices,
      title: 'WEB420 - Customers',
      url: 'http://localhost:3000/api/customers/{username}/invoices',
      test: 'soap',
      call: 'GET'
    },
    {
      id: 8, 
      image: customerPOSTInvoice,
      title: 'WEB420 - Customers',
      url: 'http://localhost:3000/api/customers/{username}/invoices',
      test: 'soap',
      call: 'POST'
    },
    {
      id: 9, 
      image: customerPOST,
      title: 'WEB420 - Customers',
      url: 'http://localhost:3000/api/customers',
      test: 'swagger',
      call: 'POST'
    },
    {
      id: 10, 
      image: login,
      title: 'WEB420 - Login',
      url: 'http://localhost:3000/api/login',
      test: 'soap',
      call: 'POST'
    },
    {
      id: 11, 
      image: signin,
      title: 'WEB420 - Signin',
      url: 'http://localhost:3000/api/signin',
      test: 'swagger',
      call: 'POST'
    },
    {
      id: 12, 
      image: signup,
      title: 'WEB420 - Signup',
      url: 'http://localhost:3000/api/signup',
      test: 'swagger',
      call: 'POST'
    },
    {
      id: 13, 
      image: persons,
      title: 'WEB420 - Persons',
      url: 'http://localhost:3000/api/persons',
      test: 'soap',
      call: 'GET'
    },
    {
      id: 14, 
      image: composer,
      title: 'WEB420 - Composers',
      url: 'http://localhost:3000/api/composers',
      test: 'soap',
      call: 'POST'
    },
    {
      id: 15, 
      image: composers,
      title: 'WEB420 - Composers',
      url: 'http://localhost:3000/api/composers',
      test: 'soap',
      call: 'GET'
    },
    {
      id: 16, 
      image: composerId,
      title: 'WEB420 - Composers',
      url: 'http://localhost:3000/api/composers/{id}',
      test: 'swagger',
      call: 'GET'
    }
  ]


  function Card({ id, image, title, url, call }) {
    return (
      <div key={id} className={`card ${title}`}>

      <h2>{title}</h2>

        <a href={image} target="_blank" rel='noopener noreferrer'>
          <img src={image} alt={`Card ${id}`} />
        </a>

        <span style={{ fontWeight: 600 }}>{call}</span>

        <p>{url}</p>

      </div>
    )
  }


  return(
    <div className='Tests'>

      <div className="grid-container">
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>

    </div>
  )

}

export default Tests;