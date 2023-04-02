import React from 'react';
import Star from '../img/products/star-icon.svg'

const Card = () => {
    return (
        <div className="products__card">
      <span className="products__card-suptitle">Sort</span>
      <div className="products__card-imgbox">
        <img src='' alt="product pic" />
      </div>
      <div className="products__info">
        <h4 className="products__card-title">Title</h4>
        <div className="line"></div>
        <div className="products__footer">
            <div className="products__prices">
                <span className="products__card-oldprice">Old price</span>
                <span className="products__card-newprice">New price</span>
            </div>
            <div className="products__rating">
                <img src={Star} alt="products card rating" />
                <img src={Star} alt="products card rating" />
                <img src={Star} alt="products card rating" />
                <img src={Star} alt="products card rating" />
                <img src={Star} alt="products card rating" />
            </div>
        </div>
      </div>
    </div>
    );
};

export default Card;