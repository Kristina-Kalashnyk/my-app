import React from 'react';
import Logo from '../img/header/logo.svg';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__boxs">
            <div className="footer__box">
              <h3 className="footer__box-title">Contact Us</h3>
              <div className="footer__addresses">
                <div className="footer__address">
                  <h5>Email</h5>
                  <span>needhelp@Organia.com</span>
                </div>
                <div className="footer__address">
                  <h5>Phone</h5>
                  <span>666 888 888</span>
                </div>
                <div className="footer__address">
                  <h5>Address</h5>
                  <span>88 road, Brooklyn Street, USA</span>
                </div>
              </div>
            </div>
            <div className="footer__box footer__box-large">
              <a className="footer__logo" href="/">
                <img src={Logo} alt="footer logo" />
              </a>
              <p className="footer__box-description">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing 
              </p>
              <div className="footer__social-icons">
                <a className="footer__social-icon" href="/">
                  <FaFacebook />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaTwitter />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaInstagram />
                </a>
                <a className="footer__social-icon" href="/">
                  <FaPinterest />
                </a>
              </div>
            </div>
            <div className="footer__box">
              <h3 className="footer__box-title">Utility Pages</h3>
              <div className="footer__box-texts">
                <span>Style Guide</span>
                <span>404 Not Found</span>
                <span>Password Protected</span>
                <span>Licenses</span>
                <span>Changelog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          Copyright © <a href="/">Organick</a> | Designed by <a href="/">VictorFlow</a> - Powered
          by <a href="/">Webflow</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
