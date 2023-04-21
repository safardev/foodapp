import React from "react";
import "../CSS/CategoryCard.css"

export default function CategoriesCard(props) {
  return (
    <div className="cate">
      <img
        src={props.img}
        alt=""
      />
    </div>
  );
}
