import React, { Component } from "react";
import Slider from "react-slick";
import "./Product.scss";
export default class extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
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
            <Slider {...settings}>
              <div>
                <img className="a-i" src="assets/img.png" alt="" />
              </div>
              <div>
                <img className="a-i" src="assets/img.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
