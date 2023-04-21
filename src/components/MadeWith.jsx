import React from "react";
import "../CSS/MadeWith.css";
import madewith from "../assets/madewith.jpg";

export default function MadeWith() {
  return (
    <div className="madeWith">
      <div className="box">
        <img src={madewith} alt="" />
        <p>Made with <span>
          <i className="fa-solid fa-heart"></i>
        </span></p>
        <span>Teetotallers E-Retail Private Limited</span>
      </div>
    </div>
  );
}
