import React from 'react';
import BgImage from '../img/notfound/bg-not-found.png';
import Error from '../img/notfound/404.png';
import HeaderName from "../components/HeaderName";
import MyButton from './MyButton';



const NotFound = () => {
    return (
        <section className="notfound">
        <div className='notfound__content'>       
         <div className="container">
         <div className="notfound__texts">
            <div className="notfound__texts-error">
            <img src={Error} alt="404..." />
             <HeaderName
               title={"Page not found"}
            />
            <p>The page you are looking for doesn't exist or has been moved</p>
         </div>
         </div>
          <div className="notfound__bg">
            <img src={BgImage} alt="background..." />
          </div>
          <div className='notfound-btn'>
          <MyButton bgColor={"blue"} text={"Go to Homepage"}></MyButton>
          </div>
          
       </div>
      </div>
     </section>
    )
}

export default NotFound;
