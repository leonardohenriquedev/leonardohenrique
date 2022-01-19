import React, { Component } from 'react';
import Footer from '../components/Footer';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import notFound from '../images/404.png';
import { ContactUs } from '../components/ContactUs.jsx';

export default class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <div className="hero_notFound">
          <img src={notFound} className="notFound_image" />

          <div class="welcome_project">
            <div class="presentation">
              <p>
                <b class="green">&lt;</b> Ainda estamos trabalhando
              </p>
              <h1>
                Nesta página. <b class="green"> /&gt;</b>
                <b class="green pisca">_</b>
              </h1>
            </div>

            <div class="social-links">
              <a
                href="https://github.com/leonardohenriquedev"
                class="link social-link"
                target="_blank"
              >
                <img src={github} alt="github-logo" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/leonardohenriquemachado/"
                class="link social-link"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin-logo" />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <Footer notFound="true" />
      </div>
    );
  }
}
