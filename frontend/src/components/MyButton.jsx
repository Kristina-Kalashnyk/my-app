import React from 'react';
import ArrowIcon from '../img/main/arrow-icon.svg';

const MyButton = ({bgColor,text}) => {
  return (
    <button className={`button bg-${bgColor}-btn`}>
      <span>{text}</span>
      <div className="button__imgbox">
        <img src={ArrowIcon} alt="icon" />
      </div>
    </button>
  );
};

export default MyButton;