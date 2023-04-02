import React from "react";
import HeaderName from "./HeaderName";
import MyButton from "./MyButton";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news__content">
          <div className="news__header">
            <div className="news__header-texts">
              <HeaderName
                title={"Discover weekly content about organic food, & more"}
                suptitle={"News"}
              />
            </div>
            <MyButton bgColor={"white"} text={"More News"}></MyButton>
          </div>
          <div className="news__cards">
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;