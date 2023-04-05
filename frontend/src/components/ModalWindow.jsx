import "../styles/main.scss";
import React from 'react';
import PropTypes from 'prop-types';
import Star from '../img/products/star-icon.svg';
import { useEffect } from "react";
import { useState } from "react";
import axios  from "axios";
import MyButton from './MyButton';
import Button from './Button';


const ModalWindow = ({isOpen, onCancel}) => {
 
 const [product,setProduct]=useState([]);
 
  useEffect(()=>{
      const fetchProduct = async(id)=>{
          try {
              
              const productInfo= await axios.get(`http://localhost:5000/products/${id}`);
              setProduct(productInfo.data)
          } catch (err) {
              console.log(err)
          }
      };
      fetchProduct(1);
  },[]);

  if(!isOpen) {
    return null;
 }

  return (
    <>
        <div className="modal">
        {(product).map(prod =>(
         <div className="modal__content">
          <div className="modal__window">
           <span className="modal__window-suptitle"> {prod.sort}</span>
              <div className="modal__window-card-imgbox">
              <img src={prod.picture_path} alt="products pic" />
            </div>
             <div className="modal__window-info">
              <h4 className="modal__window-card-title">{prod.name}</h4>
               <div className="line"></div>
                <div className="modal__window-footer">
                <div className="modal__window-rating-modal">
                  <img src={Star} alt="products card rating" />
                  <img src={Star} alt="products card rating" />
                  <img src={Star} alt="products card rating" />
                  <img src={Star} alt="products card rating" />
                  <img src={Star} alt="products card rating" />
              </div>
                 <div className="modal__window-prices">
                  <span className="modal__window-card-oldprice">{prod.old_price}</span>
                  <span className="modal__window-card-newprice">{prod.new_price}</span>                 
              </div>
              <div className="modal__window-text">
                 <p>{prod.content}</p>
              </div>
              <div className="modal-quantity">
              <label className="label"> Quantity: 
                 <input type="number" />
              </label>
              <MyButton bgColor={"blue"} text={"Add To Cart"}></MyButton>
              </div>
              <div className="modal__window-btns">
              <Button bgColor={"white"} text={"Product Description"}></Button>
              <Button bgColor={"blue"} text={"Additional Info"}></Button>
              </div>
              <div className="modal__window-text-descr">
                <p>{prod.description}</p>
              </div>
          </div>
        </div>
            <button onClick={onCancel} className="buttn-close"> Х </button>
          </div>
          </div>
          ))}
        </div>
      
    </>
  )
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
}

ModalWindow.defaultProps = {
    isOpen: false,
    onCancel: () => {},
}


export default ModalWindow;
