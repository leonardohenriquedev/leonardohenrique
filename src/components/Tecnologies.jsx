import React, { Component } from 'react';
import html from '../images/tecnologies/html.svg';
import css from '../images/tecnologies/css.svg';
import js from '../images/tecnologies/js.svg';
import react from '../images/tecnologies/react.png';
import redux from '../images/tecnologies/redux.png';
import jest from '../images/tecnologies/jest.png';
import docker from '../images/tecnologies/docker.png';
import git from '../images/tecnologies/git.png';
import node from '../images/tecnologies/node.png';
import sql from '../images/tecnologies/sql.png';
import rest from '../images/tecnologies/rest.png';
import mocha from '../images/tecnologies/mocha.png';






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
          <img src={docker} className="tecnologieLogo dockerLogo" />
          Docker
        </div>

        <div className="tecnologie">
          <img src={node} className="tecnologieLogo nodeLogo" />
          Node.js
        </div>

        <div className="tecnologie">
          <img src={sql} className="tecnologieLogo sqlLogo" />
          SQL
        </div>

        <div className="tecnologie">
          <img src={rest} className="tecnologieLogo restLogo" />
          Restful
        </div>

        <div className="tecnologie">
          <img src={mocha} className="tecnologieLogo mochaLogo" />
          Mocha+Chai+Sinon
        </div>

        <div className="tecnologie">
          <img src={git} className="tecnologieLogo" />
          GitHub
        </div>
      </div>
    );
  }
}
