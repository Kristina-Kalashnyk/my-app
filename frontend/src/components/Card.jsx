import React from 'react';
import Star from '../img/products/star-icon.svg'
import axios  from "axios";
import Broc from "../img/products/broccoli.png";
import { useEffect } from "react";
import { useState } from "react";


const Card = () => {

const [products,setProduct]=useState([]);

useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res= await axios.get("http://localhost:5000/products");
              setProduct(res.data)
          }catch (err) {
              console.log(err)
          }

      };
      fetchAllProducts();
  },[]);

    return (
        <div className="products__card">
           {products.map(prod => (
         <div>
      <span className="products__card-suptitle">{prod.sort}</span>
      <div className="products__card-imgbox">
        <img src={Broc} alt="product pic" />
      </div>
      <div className="products__info">
        <h4 className="products__card-title">{prod.name}</h4>
        <div className="line"></div>
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
      </div>))}
    </div>
    );
};

export default Card;