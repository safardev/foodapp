import React from "react";
import "../CSS/HeaderItem.css";

export default function HeaderItem(props) {
  return (
    <div className="items">
      <img
        src={props.Image}
        alt=""
      />
      <p>{props.name}</p>
    </div>
  );
}
