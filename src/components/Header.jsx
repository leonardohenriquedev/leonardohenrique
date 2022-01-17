import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Router } from 'react-router-dom';

import icon from '../images/icon.svg';
import './styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src={icon} alt="</>" className="icon" />
        </Link>

        <nav className="nav_links">
          <Link to="/projetos" className="header_link">
            Projetos
          </Link>
          <Link to="/contato" className="header_link">
            Contato
          </Link>
        </nav>
      </div>
    );
  }
}
