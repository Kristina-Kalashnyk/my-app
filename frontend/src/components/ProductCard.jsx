import React from 'react';
import Star from '../img/products/star-icon.svg';
import { useEffect } from "react";
import { useState } from "react";
import axios  from "axios";
import ModalWindow from './ModalWindow';


const ProductsCard = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
      const fetchProducts = async(size)=>{
          try {
              const productsList = await axios.get(`http://localhost:5000/products?size=${size}`);
              setProducts(productsList.data)
          } catch (err) {
              console.log(err)
          }
      };

      fetchProducts(16);
  },[]);

const [showModal, setShowModal] = useState(false);

const closeModal = () => {
  setShowModal(false);
}

    return ( 
      <div className="products__card" >
         {products.map(prod => (
        <div onClick={() => {setShowModal(true);
        }} className="products__card-one" >
          <span className="products__card-suptitle"> {prod.sort}</span>
            <div className="products__card-imgbox">
              <img src={prod.picture_path} alt="products pic" />
            </div>
          <div className="products__info">
           <h4 className="products__card-title">{prod.name}</h4>
            <div className="products__line"></div>
            <div className="products__footer">
              <div className="products__prices">
                  <span className="products__card-oldprice">{prod.old_price}</span>
                  <span className="products__card-newprice">{prod.new_price}</span>                 
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
        </div> ))}
        <ModalWindow isOpen={showModal} onCancel={closeModal}>
        </ModalWindow>
        
      </div>
    );
  }; 
  
 export default ProductsCard;

