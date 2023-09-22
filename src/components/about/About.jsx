import React, { Component } from "react";
import "./About.scss";
export default class About extends Component {
  render() {
    return (
      <div className="About1">
        <div className="container1">
          <p className="about-p1">О компании LEANGROUP</p>
          <div className="about-obj1">
            <div className="about-left">
              <img className="a-p" src="assets/video.png" alt="" />
            </div>
            <div className="about-right">
              <p className="about-p2">
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
                <br /> <br /> Имея две технологии – для производства ламинатных
                и экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. <br /> <br />С
                января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
