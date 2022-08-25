/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styles from "./Menu.module.css";
import { CloseOutlined } from "@ant-design/icons";

import type { NextPage } from "next";
import Link from "next/link";

interface Props {
  isMenuOpen: boolean;
  updateIsMenuOpen: (arg: boolean) => void;
}
const Menu: NextPage<Props> = ({ isMenuOpen, updateIsMenuOpen }) => {
  const menu = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    if (isMenuOpen) {
      menu.current.style.width = "100%";
    }
  }, [isMenuOpen]);
  const closeMenu = () => {
    menu.current.style.width = "0%";
    updateIsMenuOpen(false);
  };
  return (
    <div ref={menu} className={styles.overlay}>
      <CloseOutlined className={styles.closebtn} onClick={closeMenu} />
      <div className="menuImage">
        <img src="/menu.jpg" alt="menu" style={{ width: "100%" }} />
      </div>
      <div className={styles.overlayContent}>
        <Link href="/products" passHref>
          Products
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
        <Link href="/cart" passHref>
          Cart
        </Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
};

export default Menu;
