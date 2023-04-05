import React from 'react';

const Button = ({bgColor,text}) => {
  return (
    <button className={`button bg-${bgColor}-btn`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;