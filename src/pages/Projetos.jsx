import React, { Component } from 'react';
import solarSystem from '../images/solar-system.png';
import shoppingCart from '../images/shoppingcart.png';
import trybeWarts from '../images/trybewarts.png';
import color from '../images/color.png';
import todoList from '../images/todolist.png';
import pixelArt from '../images/pixelArt.png';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import Footer from '../components/Footer';
import trybeWallet from '../images/trybewallet.png';
import trybeTunes from '../images/trybetunes.png';


export default class Projetos extends Component {
  render() {
    return (
      <div>
        <div class="welcome_projects">
          <div class="presentation">
            <p>
              <b class="green">&lt;</b> Estes são alguns dos projetos
            </p>
            <h1>
              Desenvolvidos até agora <b class="green"> /&gt;</b>
              <b class="green pisca">_</b>
            </h1>
          </div>

          <div class="project-container">
            <div class="project">
              <a href="https://trybewallet-cyan.vercel.app/">
                <p>TrybeWallet</p>
                <img src={trybeWallet} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://trybetunes-ten.vercel.app/">
                <p>TrybeTunes</p>
                <img src={trybeTunes} alt="" className="project_img" />
              </a>
            </div>
            
            <div class="project">
              <a href="https://leonardohenriquedev.github.io/solar-system/">
                <p>Solar System</p>
                <img src={solarSystem} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://leonardohenriquedev.github.io/shopping-cart/">
                <p>Shopping Cart</p>
                <img src={shoppingCart} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://leonardohenriquedev.github.io/trybewarts/">
                <p>TrybeWarts</p>
                <img src={trybeWarts} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://leonardohenriquedev.github.io/color-guess/">
                <p>Color Guess</p>
                <img src={color} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://leonardohenriquedev.github.io/todo-list/">
                <p>Lista de Tarefas</p>
                <img src={todoList} alt="" className="project_img" />
              </a>
            </div>

            <div class="project">
              <a href="https://leonardohenriquedev.github.io/pixels-art/">
                <p>Pixel Art</p>
                <img src={pixelArt} alt="" className="project_img" />
              </a>
            </div>
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
        <Footer notFound="true" />
      </div>
    );
  }
}
