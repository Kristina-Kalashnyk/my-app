import React from 'react';
import EcoImage from "../img/eco/eco-main-image.png"
import HeaderName from "./HeaderName";
import data from "../functional/EcoPics";
import CardEco from "./CardEco";

const Eco = () => {
  return (
    <section className="eco">
      <div className="eco__content">
        <div className="container">
          <div className="eco__main">
            <div className="eco__imgbox">
              <img src={EcoImage} alt="eco main img" />
            </div>
            <div className="eco__info">
              <div className="eco__info-main">
                <div className="eco__info-header">
                  <HeaderName
                    title={"Econis is a Friendly Organic Store"}
                    suptitle={"Eco Friendly"}
                  />
                </div>
                <div className="eco__items">
                  <div className="eco__item">
                    <h4>Start with Our Company First</h4>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat 
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>
                  <div className="eco__item">
                    <h4>Learn How to Grow Yourself</h4>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat 
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>
                  <div className="eco__item">
                    <h4>Farming Strategies of Today</h4>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat 
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eco__footer">
          <div className="container">

          <div className="eco__cards">
            {data.map((item) => {
              return <CardEco key={item.id} title={item.title} src={item.src} />;
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eco;
