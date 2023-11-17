/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/09/2023
 *  Description: AboutMe Component
 */

// imports for carousel
import bt from './../images/about/bt.png';
import toy from './../images/about/family/toyia.png';
import riah from './../images/about/family/riah.png';
import otto from './../images/about/animals/otto.png';
import luna from './../images/about/animals/luna.png';
import ollie from './../images/about/animals/ollie.png';

// imports for cards
import trophy from './../images/about/sports/6.png';
import bz from './../images/about/sports/blindZebras.JPG';
import sk8_1 from './../images/about/sports/feeble.png';
import sk8_2 from './../images/about/sports/nosegrind.png';
import save from './../images/about/sports/save.png';



import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


class DemoCarousel extends Component {
  render() {

    return (
      <Carousel showArrows={true} showThumbs={true} className="custom-carousel">
        <div>
          <img src={bt} alt="Brooke" />
          <p className="legend">Brooke</p>
        </div>
        <div>
          <img src={toy} alt="Lovely Ms Toyia" />
          <p className="legend">Lovely Ms Toyia</p>
        </div>
        <div>
          <img src={riah} alt="Sariah" />
          <p className="legend">Sariah</p>
        </div>
        <div>
          <img src={otto} alt="Otto" />
          <p className="legend">Otto</p>
        </div>
        <div>
          <img src={luna} alt="Luna" />
          <p className="legend">Luna</p>
        </div>
        <div>
          <img src={ollie} alt="Ollie" />
          <p className="legend">Ollie</p>
        </div>
      </Carousel>
    );
  }
}

function AboutMe() {

  const cards = [
    {
      id: 1,
      title: 'The Stanely Beer Keg Trophy',
      image: trophy,
      description: `Posing w/ my team, the Deke's of Hazard`
    },
    {
      id: 2,
      title: 'The Blind Zebras',
      image: bz,
      description: 'Playing with my team, The Blind Zebras'
    },
    {
      id: 3,
      title: 'Feeble',
      image: sk8_1,
      description: 'Taken almost a lifetime ago, Feeble grind at the park.'
    },
    {
      id: 4,
      title: 'Nosegrind',
      image: sk8_2,
      description: 'Taken almost a lifetime ago, Nosegrind at the park'
    },
    {
      id: 5,
      title: `The Deke's of Hazard`,
      image: save,
      description: `Playing with my team, The Deke's of Hazard`
    }
  ]




  function Card({ id, title, image, description }) {
    return (
      <div key={id} className={`card ${title}`}>
        <h2>{title}</h2>

        <a href={image} target='_blank' rel='noopener noreferrer'>
          <img src={image} alt={title} />
        </a>

        <p>{description}</p>
      </div>
    )
  }





  return (
    <div className="about-me">
      <div className="card-title">A little bit about me...</div>
      <div className="row m-auto">
        <div className="col">

          <DemoCarousel />

        </div>
        <div className="col">

        <p>
          I enjoy adventures, learning, and trying new things.
        </p>

        <p>
          Some of my favorite adventures include road trips around the 
          country with my beautiful little family or going hiking in 
          the woods with my dogs. 
        </p>

        <p>
          When I'm not behind a computer screen studying or reading news, I'm 
          busy hanging out with the family or planning other fun things to do. 
        </p>

        <p>
          My hobbies include photography, skateboarding, snowboarding, ice hockey, 
          and about a dozen other things I don't always have enough time for. 
        </p>

        <p>
          A quote I like, 'fall down seven times, get up 
          eight.' I can confidently tell you that you're going to fail, or fall 
          down in life. Rather than being upset over this, be excited to get 
          back up and at it. 
        </p>

        </div>
      </div>





      <div className="grid-container">
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>







    </div>
  );
}

export default AboutMe;