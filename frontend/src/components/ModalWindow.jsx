import "../styles/main.scss";
import React from 'react';
import '../styles/_modal.scss';
import PropTypes from 'prop-types';
import Star from '../img/products/star-icon.svg';


const ModalWindow = ({isOpen, onCancel}) => {
    if(!isOpen) {
        return null;
    }
  return (
    <>
        <div className="modal">
          <div className="modal__window">
           <span className="products__card-suptitle"> Sort</span>
            <div className="products__card-imgbox">
              <img src=""alt="products pic" />
            </div>
          <div className="products__info">
           <h4 className="products__card-title">Name</h4>
            <div className="line"></div>
            <div className="products__footer">
              <div className="products__prices">
                  <span className="products__card-oldprice">Old price</span>
                  <span className="products__card-newprice">New Price</span>                 
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
            <button onClick={onCancel}> Close </button>
          </div>
        </div>
      
    </>
  )
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func
}

ModalWindow.defaultProps = {
    isOpen: false,
    onCancel: () => {},
}


export default ModalWindow;
