import React from "react";
import sale from "../assets/sale.png";
import del from "../assets/del.png";
import go from "../assets/go.png";
import chicken from "../assets/chicken.png";
import HeaderItem from "./HeaderItem";
import "../CSS/Header.css";
import cat from "../assets/cate.png";
import CategoriesCard from "./CategoriesCard";
import BannerSlider from "./BannerSlider";

export default function Header() {
  return (
    <div className="header">
      <section>
        <div className="udet">
          <span>
            <i className="fa-solid fa-house-chimney"></i>
          </span>
          <div className="det">
            Home{" "}
            <span>
              <i className="fa-solid fa-angle-down"></i>
            </span>
            <p>1208, U Block, Sector 45, Gurugram</p>
          </div>
        </div>
        <div className="profile">
          <i className="fa-solid fa-user"></i>
        </div>
      </section>
      <div className="searchBar">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="item">
        <HeaderItem Image={sale} name="Marketplace" />
        <HeaderItem Image={del} name="Quick Delivery" />
        <HeaderItem Image={go} name="Go Out!" />
        <HeaderItem Image={chicken} name="Chicken & More" />
      </div>
      <div className="banner">
        <BannerSlider/>
      </div>
      <div className="categories">
        <div className="head">
          Categories
          <span>Shop All</span>
        </div>
        <div className="items">
          <CategoriesCard img={cat} />
          <CategoriesCard img={cat} />
          <CategoriesCard img={cat} />
        </div>
      </div>
    </div>
  );
}
