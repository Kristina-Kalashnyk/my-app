import React from 'react';
import ProductCard from './ProductCard';
import HeaderName from './HeaderName';

const Products = () => {
  return (
    <section className="products">
        <div className='container'>
            <div className='products__content'>
                <div className='products__header'>
                    <HeaderName suptitle={"Categories"} title={"Our Products"} />
                </div>
                <div className='products__cards'>
                     <ProductCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products