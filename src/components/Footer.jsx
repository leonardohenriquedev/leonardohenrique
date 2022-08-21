import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../images/instagram.svg';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.notFound ? (
      <div className="footer footer_notFound">
        <a
          href="https://www.instagram.com/leozera7_/"
          target="_blank"
          className="footer_link" rel="noreferrer"
        >
          {/* <img src={instagram} className="footer_icon" /> */}
          Developed by Leonardo Henrique ®
        </a>
      </div>
    ) : (
      <div className="footer">
        <a
          href="https://www.instagram.com/leozera7_/"
          target="_blank"
          className="footer_link" rel="noreferrer"
        >
          {/* <img src={instagram} className="footer_icon" /> */}
          Developed by Leonardo Henrique ®
        </a>
      </div>
    );
  }
}
