import { MenuOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/cart/CartCard";
import Menu from "../../components/Menu/Menu";
import { CartItem, selectCartItems } from "../../store/cart/cartSlice";
import styles from "../../styles/cart.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  console.log({ cartItems });
  return (
    <section className={styles.cart}>
      <Row justify="center">
        <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
          <MenuOutlined
            hidden={isMenuOpen}
            style={{ fontSize: "1.5rem", paddingTop: "1.4rem" }}
            onClick={() => openMenu(true)}
          ></MenuOutlined>
        </Col>
      </Row>
      <div className="container mt-1">
        <h1>CART</h1>
        <Row gutter={[24, 12]}>
          {cartItems &&
            cartItems.map((cartItem: CartItem) => (
              <Col xs={24} lg={16} key={cartItem.id}>
                <CartCard cartItem={cartItem}></CartCard>
              </Col>
            ))}
          <Col xs={24} lg={8}>
            Checkout
          </Col>
        </Row>
      </div>
      <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
    </section>
  );
};

export default Cart;
