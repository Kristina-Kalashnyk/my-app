import React from 'react';
import HeaderName from "../components/HeaderName";
import ProductCard from "./ProductCard";

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          <div className="offer__header">
            <div className="offer__header-texts">
              <HeaderName
                title={"We Offer Organic for You"}
                suptitle={"Offer"}
              />
            </div>
          </div>
          <div className="offer__cards">
            <ProductCard/>;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;