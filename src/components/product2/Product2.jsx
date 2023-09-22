import React, { Component } from "react";
import Slider from "react-slick";

import "./Product2.scss";
export default class extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="Product">
        <div className="container1">
          <p className="product-p1">Наша продукция</p>
          <div className="product-group-buttons">
            <button className="product-btn1">Ламинатные тубы</button>
            <button className="product-btn2">Экструзионные тубы</button>
            <button className="product-btn3">Другая упаковка</button>
          </div>
          <div>
            <img className="pr2-img" cl src="assets/cards.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
