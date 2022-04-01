import React, { Component } from 'react';
import Slider from 'react-slick';

import html from '../images/tecnologies/html.svg';
import css from '../images/tecnologies/css.svg';
import js from '../images/tecnologies/js.svg';
import react from '../images/tecnologies/react.png';
import redux from '../images/tecnologies/redux.png';
import jest from '../images/tecnologies/jest.png';
import docker from '../images/tecnologies/docker.png';
import git from '../images/tecnologies/git.png';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      // accessibility: false,
      variableWidth: true,
      // dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      // cssEase: 'linear',
    };
    return (
      <div className="slsdsd">
        <Slider {...settings} className="slider">
          <div className="tecnologie">
            <img src={html} className="tecnologieLogo" />
            HTML
          </div>

          <div className="tecnologie">
            <img src={css} className="tecnologieLogo" />
            CSS
          </div>

          <div className="tecnologie">
            <img src={js} className="tecnologieLogo" />
            JavaScript
          </div>

          <div className="tecnologie">
            <img src={react} className="tecnologieLogo" />
            React
          </div>

          <div className="tecnologie">
            <img src={redux} className="tecnologieLogo redux" />
            Redux
          </div>

          <div className="tecnologie">
            <img src={jest} className="tecnologieLogo" />
            Jest
          </div>

          <div className="tecnologie">
            <img src={docker} className="tecnologieLogo dockerLogo" />
            Docker
          </div>

          <div className="tecnologie">
            <img src={git} className="tecnologieLogo" />
            GitHub
          </div>
        </Slider>
      </div>
    );
  }
}
