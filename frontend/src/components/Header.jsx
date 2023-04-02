import "../styles/main.scss";
import React from 'react';
import Logo from '../img/header/logo.svg';
import Search from '../img/header/search.svg';
import NavbarButtonIcon from '../img/header/shop-icon.svg';


const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="navbar__main">
            <a href="/" className="navbar__logo">
              <img src={Logo} alt="logo" />
            </a>
            <nav className='header__navigation'>
              <ul className="header__navigation-links">
                <li className="header__navigation-item">
                  <a href="#hero" className="header__navigation-link active--link">
                    Home
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#about" className="header__navigation-link">
                    About
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#pages" className="header__navigation-link">
                    Pages
                  </a>                
                </li>
                <li className="header__navigation-item">
                  <a href="#shop" className="header__navigation-link">
                    Shop
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#projects" className="header__navigation-link">
                    Projects
                  </a>
                </li>
                <li className="header__navigation-item">
                  <a href="#news" className="header__navigation-link">
                    News
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navbar__search-line">
          <button className="navbar__search-button">
          <div className="navbar__search">
              <img src={Search} alt="search..." />
            </div>
            </button>
          </div>
          
          <button className="navbar__button">
            <div className="navbar__button-icon">
              <img src={NavbarButtonIcon} alt="icon..." />
            </div>
            <div className="navbar__button-text">
              Cart <span>0</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
