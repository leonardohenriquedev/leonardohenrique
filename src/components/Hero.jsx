import React, { Component } from 'react';
import './styles/hero.css';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import hero from '../images/hero.svg';
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';

export default class Hero extends Component {
  render() {
    const stringSplitter = (string) => {
      const splitter = new GraphemeSplitter();
      return splitter.splitGraphemes(string);
    };

    return (
      <div class="hero">
        <script
          src="https://kit.fontawesome.com/931cfe5740.js"
          crossorigin="anonymous"
        ></script>
        <div class="welcome">
          <div class="presentation">
            <p>
              <b class="green">&lt;</b> Oi, eu sou o
            </p>
            <h1>
              Leonardo Henrique<b class="green"> /&gt;</b>
              <b class="green pisca">_</b>
            </h1>
          </div>

          <div class="course">
            <p>
              Full Stack Developer na
              <a
                href="https://fontespromotora.com.br/"
                class="green"
                target="_blank"
                rel="noreferrer"
              >
                Fontes Promotora!
              </a>
            </p>
          </div>

          <div class="infos">
            <p>🚀 Explorando oportunidades e projetos paralelos.</p>
            <div className="typingEffect">
              <p>🎓 Estudei na melhor escola de programação</p>
              <Typewriter
                options={{
                  strings: [' do mundo 🌍', ' das galáxias 🛸', ' de todas 🥳'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  pauseFor: 5000,
                  cursor: '',
                  stringSplitter,
                }}
              />
            </div>
          </div>

          <div class="social-links">
            <a
              href="https://github.com/leonardohenriquedev"
              class="link social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github-logo" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/leonardohenriquemachado/"
              class="link social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin-logo" />
              Linkedin
            </a>
          </div>
        </div>
        <img class="img-hero" src={hero} alt="" />
      </div>
    );
  }
}
