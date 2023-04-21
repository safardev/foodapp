import React from "react";
import "../CSS/ShopAllCard.css";

export default function ShopAllCard(props) {
  return (
    <div className="sCard">
      <div className="box">
        <img src={props.img} alt="" />
        <div className="spanBox">
          <span>{props.tag}</span>
        </div>
      </div>
      <p>{props.title}</p>
      <p style={{ color: "#721BE3" }}>
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginRight: "4px",
          }}
        >
          ₹{props.offer}
        </span>
        ₹{props.price}
      </p>
      <button type="button">
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        Quick Add
      </button>
    </div>
  );
}
