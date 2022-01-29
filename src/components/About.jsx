import React, { Component } from 'react';
import leo from '../images/leo.jpeg';

export default class About extends Component {
  render() {
    return (
      <div class="personal-info">
        <div class="personal-info-container">
          <h1>Sobre mim 😁️</h1>
          <div class="about-me">
            <p class="description">
              Sempre sonhei em contribuir para um mundo melhor, e poder impactar
              positivamente na vida das pessoas. E é isso que me motiva todos os
              dias a me tornar um dev melhor. Sempre buscando novas tecnologias
              e aprendendo ferramentas novas. Gosto de trabalhar com
              metodologias ágeis de desenvolvimento, como
              <b class="green"> Scrum </b> e <b class="green">Kanban.</b> Das
              minha qualidades, gosto de destacar a
              <b class="green"> colaboração</b> e o
              <b class="green"> comprometimento.</b> Atualmente procuro uma
              oportunidade como desenvolvedor Front-End, mas estou estudando
              para me tornar um desenvolvedor FullStack. As tecnologias que
              utilizo são: Html, CSS, JavaScript, React, Redux, ContextAPI,
              Hooks, Jest/RTL, Git/Github..
            </p>

            <img src={leo} alt="" class="img-description" />
          </div>
        </div>
      </div>
    );
  }
}
