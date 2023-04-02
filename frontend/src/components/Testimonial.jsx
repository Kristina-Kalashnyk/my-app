import React from 'react';
import HeaderName from "../components/HeaderName";
import TestMarks from "../components/TestMarks";
import Face from '../img/testimonial/face.png';
import TestimonialImage from "../img/testimonial/testimonial-main-image.png";
import Star from "../img/products/star-icon.svg";

const Testimonial = () => {
  return (
    <section id="shop" className="testimonial">
      <div className="container">
        <div className="testimonial__content">
          <div className="testimonial__header">
            <HeaderName
              suptitle={"Testimonial"}
              title={"What Our Customer Saying?"}
            />
          </div>
          <div className="testimonial__main">
            <img
              className="testimonial__main-img"
              src={Face}
              alt="user"
            />
            <div className="testimonial__main-rating">
              <img src={Star} alt="Star icon" />
              <img src={Star} alt="Star icon" />
              <img src={Star} alt="Star icon" />
              <img src={Star} alt="Star icon" />
              <img src={Star} alt="Star icon" />
            </div>
            <p className="testimonial__main-description">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the 
            printing and typesetting industry. 
            Lorem Ipsum has been.
            </p>
            <h3 className="testimonial__main-title">Sara Taylor</h3>
            <span className="testimonial__main-subtitle">Consumer</span>
            <div className="line"></div>
          </div>
          <div className="testimonial__items">
            <TestMarks title={"100%"} subtitle={"Organic"} />
            <TestMarks title={"285"} subtitle={"Active Product"} />
            <TestMarks title={"350+"} subtitle={"Organic Orchads"} />
            <TestMarks title={"25+"} subtitle={"Years of Farming"} />
          </div>
        </div>
      </div>
      <div className="testimonial__bg">
        <img src={TestimonialImage} alt="backdround" />
      </div>
    </section>
  );
};

export default Testimonial;
