import React, { Component } from "react";
import "./Team.scss";
export default class Team extends Component {
  render() {
    return (
      <div className="Team">
        <div className="container1">
          <p className="team-p1">Наша команда</p>
          <div className="team-obj1">
            <div className="team-cards">
              <img src="assets/p1.png" alt="" />
              <p className="team-p2">Войнич Дарья</p>
              <p className="team-p3">Заместитель директора по продажам</p>
              <p className="team-p4">++375 (17) 270-53-77 (317)</p>
            </div>
            <div className="team-cards">
              <img src="assets/p2.png" alt="" />
              <p className="team-p2">Мисько Екатерина</p>
              <p className="team-p3">Начальник отдела сопровождения</p>
              <p className="team-p4">+375 (17) 270-53-77 (115)</p>
              <p className="team-p5"> +375 29 112-73-48</p>
              <p className="team-p6"> k.melnichenko@leangroup.by</p>
            </div>
            <div className="team-cards">
              <img src="assets/p3.png" alt="" />
              <p className="team-p2">Дмитроченко Дмитрий</p>
              <p className="team-p3">Начальник отдела допечатной подготовки</p>
              <p className="team-p4">++375 (17) 270-53-77 (333)</p>
              <p className="team-p5"> +375 29 360-32-26</p>
              <p className="team-p6"> dmitrochenko@leangroup.by</p>
            </div>{" "}
            <div className="team-cards">
              <img src="assets/p4.png" alt="" />
              <p className="team-p2">Антух Евгений</p>
              <p className="team-p3">Начальник отдела снабжения</p>
              <p className="team-p4">+375 (17) 270-53-77 (148)</p>
              <p className="team-p5"> +375 29 112-73-48</p>
              <p className="team-p6"> j.antuh@leangroup.by</p>
            </div>{" "}
            <div className="team-cards">
              <img src="assets/p5.png" alt="" />
              <p className="team-p2">Мисник Елена</p>
              <p className="team-p3">Специалист по работе с клиентами</p>
              <p className="team-p4">+375 (17) 270-53-77 (322)</p>
              <p className="team-p5"> +375 29 329-34-03</p>
              <p className="team-p6"> e.misnik@leangroup.by</p>
            </div>
          </div>
          <button className="team-btn2">Наша команда</button>
        </div>
      </div>
    );
  }
}
