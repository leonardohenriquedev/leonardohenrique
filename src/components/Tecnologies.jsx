import React, { Component } from 'react';
import html from '../images/tecnologies/html.svg';
import css from '../images/tecnologies/css.svg';
import js from '../images/tecnologies/js.svg';
import react from '../images/tecnologies/react.png';
import redux from '../images/tecnologies/redux.png';

import jest from '../images/tecnologies/jest.png';
import git from '../images/tecnologies/git.png';

export default class Tecnologies extends Component {
  render() {
    return (
      <div className="tecnologies">
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
          <img src={git} className="tecnologieLogo" />
          GitHub
        </div>
      </div>
    );
  }
}
