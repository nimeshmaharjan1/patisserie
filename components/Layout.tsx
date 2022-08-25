import React, { useState } from "react";
import Menu from "./Menu/Menu";
import Home from "../pages/index";
import { Col, Row } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  return (
    <>
      <nav className="container mt-1" style={{ paddingBottom: "0.5rem" }}>
        <Row justify="space-between" className="nav-links">
          <Col>
            <Link href="/" passHref>
              <h1>Pâtisserie</h1>
            </Link>
          </Col>
          <Col>
            <Row className="md-screen" justify="end" align="middle" gutter={34}>
              <Col>
                <Link href="/products" passHref>
                  <p>Products</p>
                </Link>
              </Col>
              <Col>
                <Link href="/about" passHref>
                  <p>About</p>
                </Link>
              </Col>
              <Col>
                <p>Contact</p>
              </Col>
              <Col>
                <Link href="/cart" passHref>
                  <p>Cart</p>
                </Link>
              </Col>
            </Row>
            <Row justify="end" className="sm-screen" align="middle">
              <MenuOutlined
                onClick={() => setIsMenuOpen(true)}
                style={{ fontSize: "1.5rem", paddingTop: "1.1rem" }}
              ></MenuOutlined>
            </Row>
          </Col>
        </Row>
        <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
      </nav>
      {children}
    </>
  );
};

export default Layout;
