import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../CSS/BannerSlider.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let imgArr = [p1, p2, p3, p4];
function imgUrl() {
  const id = rand(0, 3);
  console.log(id);
  return imgArr[id];
}

function createSlide() {
  return (
    <SwiperSlide className="slide">
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
}
