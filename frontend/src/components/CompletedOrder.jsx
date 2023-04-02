import React from 'react';
import BgImage from '../img/cart/bg-cart.jpg';
import HeaderName from "../components/HeaderName";


const CompletedOrder = () => {
    return (
      <section className="completed">
         <div className='completed__content'>       
          <div className="container">
          <div className="completed__texts">
              <HeaderName
                title={"Thank you for your order"}
             />
          </div>
           <div className="completed__bg">
             <img src={BgImage} alt="background..." />
           </div>
        </div>
       </div>
      </section>
    )
}

export default CompletedOrder;