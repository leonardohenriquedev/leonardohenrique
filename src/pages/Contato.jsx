import React, { Component } from 'react'
import { ContactUs } from '../components/ContactUs'
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Footer from '../components/Footer';



export default class Contato extends Component {
  render() {
    return (
    <div className='contactPage'>

      <div class="welcome_projects">
      <div class="presentation">
        <p>
          <b class="green">&lt;</b> Me envie uma mensagem
        </p>
        <h1>
          Vamos trocar uma ideia 💡️ <b class="green"> /&gt;</b>
          <b class="green pisca">_</b>
        </h1>
      </div>

      <div class="project-container">
       
      </div>
      <ContactUs />
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
      <Footer notFound="true" />
    </div>
    )
  }
}
