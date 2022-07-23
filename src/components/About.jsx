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
              Das minha qualidades, gosto de destacar a colaboração e o
              comprometimento. Gosto de trabalhar com metodologias ágeis de
              desenvolvimento, como <b class="green"> Scrum </b> e{' '}
              <b class="green">Kanban. </b>
              Linguagens: C, C++, C#, Java, Python, Javascript, Typescript
              (SOLID e POO). Back-end: Node.js, Docker, SQL, Mongo, Nest,
              Sequelize, Prisma, Mongoose, Express, Typescript, API Rest e
              Restful, Autenticação.. Testes com Mocha, Chai e Sinon. Front-end:
              HTML, CSS, React, React Router, Redux, Context API, React Hooks,
              Bootstrap, MaterialUi.. Mobile: React-Native. Conhecimentos
              básicos em Arquitetura de Software e Deploy.
              Ferramentas/tecnologias: Unix & Bash, Git, GitHub, Bitbucket,
              MSQLWorkbench, Dbeaver, Jira, Trello, Slack, Discord, Zoom,
              GMeet..
            </p>

            <img src={leo} alt="" class="img-description" />
          </div>
        </div>
      </div>
    );
  }
}
