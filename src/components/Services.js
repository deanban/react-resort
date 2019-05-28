import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dolore.'
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dolore.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dolore.'
      },
      {
        icon: <FaBeer />,
        title: 'free beers',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dolore.'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return (
              <article key={i} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
