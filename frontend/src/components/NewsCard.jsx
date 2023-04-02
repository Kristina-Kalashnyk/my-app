import React from "react";
import FirstCard from '../img/news/card-1.jpg'
import SecondCard from '../img/news/card-2.jpg'
import UserIcon from "../img/news/user-icon.png";
import MyButton from "./MyButton";

const NewsCard = () => {
  return (
    <div className="news__block">
    <div className="news__card">
      <img className="news__card-bg" src={FirstCard} alt="news card pic" />
      <div className="news__card-main">
        <div className="news__card-user">
          <img src={UserIcon} alt="card user icon" />
          <span>By Rachi Card</span>
        </div>
        <h4 className="news__card-title">The Benefits of Vitamin D & How to Get It</h4>
        <p className="news__card-description">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
        <MyButton bgColor={'yellow'} text="Read More">Read More</MyButton>
      </div>
    </div>
    <div className="news__card">
      <img className="news__card-bg" src={SecondCard} alt="news card pic" />
      <div className="news__card-main">
        <div className="news__card-user">
          <img src={UserIcon} alt="card user icon" />
          <span>By Rachi Card</span>
        </div>
        <h4 className="news__card-title">Our Favourite Summertime Tommeto</h4>
        <p className="news__card-description">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
        <MyButton bgColor={'yellow'} text="Read More"></MyButton>
      </div>
    </div>
    </div>
  );
};

export default NewsCard;
