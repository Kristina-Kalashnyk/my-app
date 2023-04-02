import React from 'react';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';
import Offer from '../components/Offer';
import Eco from '../components/Eco';
import News from '../components/News';
import Subscribe from '../components/Subscribe';

const Main = () => {
    return (
     <main className='main'>
        <Introduction/>
        <About/>
        <Products/>
        <Testimonial/>
        <Offer/>
        <Eco/>
        <News/>
        <Subscribe/>
     </main>
    )
}

export default Main