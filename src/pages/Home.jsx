import React, { Component } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Tecnologies from '../components/Tecnologies';
import './styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Tecnologies />
        <About />
        <Footer />
      </div>
    );
  }
}
