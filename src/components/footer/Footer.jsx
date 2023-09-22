import React, { Component } from "react";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container1">
          <img className="jjj" src="assets/logo.svg" alt="" />
          <img className="f-s" src="assets/social.png" alt="" />
          <hr />
          <div className="f-obj">
            <div className="f-left">
              <div className="f-cards">
                <p className="f-p1">Продукция</p>
                <p className="f-p2">Ламинатные тубы</p>
                <p className="f-p2">Экструзионные тубы</p>
                <p className="f-p2">Другая упаковка</p>
              </div>

              <div className="f-cards">
                <p className="f-p1">Продукция</p>
                <p className="f-p2">Ламинатные тубы</p>
                <p className="f-p2">Экструзионные тубы</p>
                <p className="f-p2">Другая упаковка</p>
              </div>

              <div className="f-cards">
                <p className="f-p1">Продукция</p>
                <p className="f-p2">Ламинатные тубы</p>
                <p className="f-p2">Экструзионные тубы</p>
                <p className="f-p2">Другая упаковка</p>
              </div>
            </div>
            <div className="f-right">
              <div className="f-cards2">
                <p className="f-p3">Беларусь</p>
                <p className="f-p4">+375 (17) 270 53 77</p>
                <p className="f-p4">+375 (17) 270 53 78</p>
                <p className="f-p3">Москва</p>
                <p className="f-p4">+7 (495) 280 73 44</p>
                <p className="f-p4">+7 (495) 280 73 44</p>
              </div>

              <div className="f-cards2">
                <p className="f-p3">Европа</p>
                <p className="f-p4">+48 73 1111 044</p>

                <p className="f-p3">Екатеринбург</p>
                <p className="f-p4">+7 (343) 346 82 06</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" id="backtop">
          &uarr;
        </a>
      </div>
    );
  }
}
