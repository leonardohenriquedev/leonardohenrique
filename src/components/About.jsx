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
              Desde o momento em que escolhi me tornar um desenvolvedor, sou uma
              pessoa mais feliz, focada e dedicada à coisas que valem a pena!
              Sou grato a cada pessoa que fez e que faz parte do meu
              aprendizado. Trabalho e acredito em ações que possam gerar um
              impacto positivo na vida das pessoas. Pois acredito que no final,
              é somente isso que a gente leva.
              <b class="green"> As coisas boas que fizemos.</b>
            </p>

            <img src={leo} alt="" class="img-description" />
          </div>
        </div>
      </div>
    );
  }
}
