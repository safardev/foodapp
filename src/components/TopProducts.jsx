import React from "react";
import "../CSS/TopProducts.css";
import bottle from "../assets/bottle.jpg";
import food from "../assets/food.jpg";
import pop from "../assets/pop.jpg";
import ShopAllCard from "./ShopAllCard";

export default function TopProducts() {
  return (
    <div className="middle">
      <div className="tp">
        <div className="imageCont">
          <img src={bottle} alt="" />
          <div className="pick">
            <p>
              Pick <span>fast!</span>
            </p>
            <p>
              Plan <span>your next</span>
            </p>
            <p>
              Party <span>with us!</span>
            </p>
          </div>
        </div>
        <p>Top Products</p>
      </div>
      <div className="shopAll">
        <div className="products">
          <ShopAllCard
            img={food}
            tag="Pack of 3"
            title="Vegetables"
            offer="447"
            price="402.30"
          />
          <ShopAllCard
            img={pop}
            tag="150g Tin"
            title="4700 BC Hawaiian BBQ"
            offer="447"
            price="402.30"
          />
        </div>
        <p>
          Shop All{" "}
          <span style={{ marginLeft: "5px" }}>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </p>
      </div>
    </div>
  );
}
