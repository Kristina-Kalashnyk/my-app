import React from 'react';
import Banner from '../img/cart/Banner.png';
import Error from '../img/notfound/404.png';
import HeaderName from "../components/HeaderName";
import MyButton from './MyButton';


const Order = () => {
    return (
       <section className="order">
        <div className='order'>       
           <div className="order__bg">
             <img src={Banner} alt="background..." />
          </div>   
          <div className="order__area">
          </div>     
       </div>
     </section>
    );
};

export default Order;