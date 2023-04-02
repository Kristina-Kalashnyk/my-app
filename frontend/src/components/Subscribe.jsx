import React from 'react';
import MyButton from "./MyButton";
import SubscribeImage from "../img/subscribe/subscribe-bg-image.jpg";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          <h2 className="subscribe__text">Subscribe to our Newsletter</h2>
          <form className="subscribe__form">
            <input type="text" placeholder="Your Email Address" />
            <MyButton bgColor={"blue"} text={"Subscribe"}></MyButton>
          </form>
          <div className="subscribe__bg">
            <img src={SubscribeImage} alt="subscribe bg img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;