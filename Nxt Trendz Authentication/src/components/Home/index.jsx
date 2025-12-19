import React from "react";
import "./index.css";
import Header from "../Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page-bg">
        <div>
          <div className="container">
            <div className="text-container">
              <h1 className="title">Clothes That Get You Noticed</h1>
              <p className="text-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi veritatis quae eius sequi suscipit veniam assumenda
                expedita vero perspiciatis. Qui enim unde dolore maxime. Dolores
                sapiente tenetur mollitia asperiores saepe?
              </p>
              <div className="button-container">
                <button className="shop-now-btn">Show Now</button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="home-page-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
