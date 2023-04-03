import React, { useRef } from 'react';
import Banner from '../img/cart/Banner.png';
import Error from '../img/notfound/404.png';
import HeaderName from "../components/HeaderName";
import MyButton from './MyButton';
import { useEffect } from "react";
import { useState } from "react";


const Order = () => {

      const name = useRef();
      const email = useRef();
      const address = useRef();
      const phone = useRef();
      const information = useRef();

      const handleClick = () => {
         localStorage.setItem("Name", name.current.value);
         localStorage.setItem("Email", email.current.value);
         localStorage.setItem("Address", address.current.value);
         localStorage.setItem("Phone", phone.current.value);
         localStorage.setItem("Information", information.current.value);
      }
   
    return (
       <section className="order">
        <div className='order'>       
           <div className="order__bg">
             <img src={Banner} alt="background..." />
          </div>   
          <div className="order__area">
          
                  </div> 
                  <div className="input-field">
            <input type="text" ref={name} placeholder="Your Full Name" />
            <input type="text"  ref={email} placeholder="Your Email Address" pattern="(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})" />
            <input type="text"  ref={address} placeholder="Your Company  Address" />
            <input type="text"  ref={phone} placeholder="Enter Your Phone" />
            <input type="text"  ref={information} placeholder="Some Extra Information" />
            <button onClick={handleClick}>Submit</button>
          </div>      
       </div>
     </section>
    );
};

export default Order;