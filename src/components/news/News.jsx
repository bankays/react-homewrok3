import React, { Component } from "react";
import "./News.scss";
export default class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="container1">
          <p className="news-p1">Новости</p>
          <div className="news-obj1">
            <div className="news-cards1">
              <img className="news-img1" src="assets/news1.png" alt="" />

              <p className="news-p2">28.01.2022</p>
              <p className="news-p3">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>

            <div className="news-cards1">
              <img className="news-img2" src="assets/img22.png" alt="" />

              <p className="news-p2">28.01.2022</p>
              <p className="news-p3">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>

            <div className="news-cards1">
              <img className="news-img3" src="assets/news33.png" alt="" />

              <p className="news-p2">28.01.2022</p>
              <p className="news-p3">"Туба, как вид упаковки</p>
            </div>
          </div>
          <button className="n-b">Все новости</button>
        </div>
      </div>
    );
  }
}
