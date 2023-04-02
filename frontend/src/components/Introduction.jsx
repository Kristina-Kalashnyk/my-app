import React from 'react';
import MyButton from "./MyButton";
import BgImage from "../img/main/bg-image.png";
import FirstImage from '../img/main/main-image-1.jpg';
import SecondImage from '../img/main/main-image-2.jpg';

const Introduction = () => {
    return (  
      <section className="introduction">
        <div className="introduction__main">
        <div className="container">
          <div className="introduction__content">
            <div className="introduction__info">
              <h3 className="introduction__suptitle">100% Natural Food</h3>
              <h1 className="introduction__title">
                Choose the best healthier way of life
              </h1>
              <MyButton bgColor={"yellow"}
                text={"Explore Now"}>
                </MyButton>
            </div>
          </div>
        </div>
        <div className="introduction__bg">
          <img src={BgImage} alt="background..." />
        </div>
      </div>
      <div className="introduction__footer">
        <div className="container">
            <div className="introduction__cards">
                <div className="introduction__card">
                    <span className="section__header-suptitle title-1">Natural!!</span>
                    <h3 className="section__header-title title-2">Get Garden Fresh Fruits</h3>
                    <img className="introduction__card-bg" src={FirstImage} alt="card img" />
                </div>
                <div className="introduction__card">
                <span className="section__header-suptitle title-1">Offer!!</span>
                    <h3 className="section__header-title title-2">Get 10% off on Vegetables</h3>
                    <img className="introduction__card-bg" src={SecondImage} alt="card img" />
                </div>
            </div>
        </div>
      </div>
      </section>
    )
}

export default Introduction;