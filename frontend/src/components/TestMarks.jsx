import React from "react";

const TestMarks = ({title,subtitle}) => {
  return (
    <div className="testimonial__item">
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </div>
  );
};

export default TestMarks;
