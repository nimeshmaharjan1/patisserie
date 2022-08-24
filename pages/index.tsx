/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/Menu/Menu";

import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  return (
    <div>
      <Head>
        <title>Pâtisserie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="small-screen">
        <img src="/crossiant.jpeg" alt="Snow" style={{ width: "100%" }} />
        <Row justify="center" className="centered">
          <Col className="">
            <MenuOutlined
              hidden={isMenuOpen}
              style={{ fontSize: "1.5rem" }}
              onClick={() => openMenu(true)}
            ></MenuOutlined>
          </Col>
        </Row>
      </main>
      <main className="medium-screen">
        <img src="/homeBg.jpeg" alt="Snow" style={{ width: "100%" }} />
        <Row justify="center">
          <Col className="top-left ">
            <MenuOutlined
              hidden={isMenuOpen}
              style={{ fontSize: "2rem" }}
              onClick={() => openMenu(true)}
            ></MenuOutlined>
          </Col>
        </Row>
        <h1 className="hero-title">Pâtisserie</h1>
      </main>
      <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
    </div>
  );
};

export default Home;