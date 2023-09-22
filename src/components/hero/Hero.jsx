import React, { Component } from "react";
import "./Hero.scss";
import Slider from "react-slick";
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
      <div className="com">
        <Slider {...settings}>
          <div className="hero1">
            <section className="Hero"></section>
          </div>
          <div>
            <section className="Hero"></section>
          </div>
          <div>
            <section className="Hero"></section>
          </div>
        </Slider>
        <div className="container">
          <div className="hero-content">
            <h4 className="h-p1">LEANGROUP - тубы и этикетки</h4>
            <h1 className="h-p2">Ламинатные тубы</h1>
            <p className="h-p3">
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button className="hero-btn">Каталог</button>
          </div>
        </div>
      </div>
    );
  }
}
