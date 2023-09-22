import React, { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Header.scss";
export class Header extends Component {
  render() {
    return (
      <div className="Header" id="he">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img src="assets/logo.svg" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto " id="nav1">
                <NavDropdown title="Продукция" id="basic-nav-dropdown">
                  <NavDropdown.Item href="# ">Ламинатные тубы</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Экструзионные тубы
                  </NavDropdown.Item>

                  <NavDropdown.Item href="# ">Другая упаковка</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Сертификаты</Nav.Link>
                <Nav.Link href="#link">Наша команда</Nav.Link>{" "}
                <Nav.Link href="#link">О нас</Nav.Link>{" "}
                <Nav.Link href="#link">Новости</Nav.Link>{" "}
                <Nav.Link href="#link">Вакансии</Nav.Link>{" "}
                <Nav.Link href="#link">Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
