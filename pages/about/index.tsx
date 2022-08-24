import { MenuOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";

import styles from "../../styles/about.module.scss";
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  return (
    <section className={styles.about}>
      <Row justify="center">
        <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
          <MenuOutlined
            hidden={isMenuOpen}
            style={{ fontSize: "1.5rem", paddingTop: "1.4rem" }}
            onClick={() => openMenu(true)}
          ></MenuOutlined>
        </Col>
      </Row>
      <main className={styles.main}>
        <h1>About Pâtisserie</h1>
      </main>
      <div className={styles.intro}>
        <div className={styles.card}>
          <p>
            Pâtisserie is unique; designed to inspire a commitment to precision
            in each exquisite detail, during every stage of the croissant-making
            process.
          </p>
          <br />
          <p>
            Pâtisserie is not a shop, nor is it a factory. It is a celebration
            of the creation, complexity and ultimate enjoyment of a croissant.
          </p>
        </div>
      </div>
      <div className={styles.ig}>
        <a
          target="_blank"
          href="https://www.instagram.com/nimeshmaharjan1"
          rel="noopener noreferrer"
        >
          <h1>FOLLOW ON INSTAGRAM</h1>
        </a>
      </div>
      <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
    </section>
  );
};

export default About;
