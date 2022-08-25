import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/cart/CartCard";
import Menu from "../../components/Menu/Menu";
import { useAppDispatch } from "../../lib/hooks";
import {
  CartItem,
  cartTotal,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSlice";
import styles from "../../styles/cart.module.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  //   useEffect(() => {
  //     dispatch(cartTotal());
  //   }, []);
  return (
    <>
      <section className={styles.cart}>
        <nav className="container" style={{ padding: "1rem 0.5rem" }}>
          <Row justify="space-between" className="nav-links">
            <Col>
              <Link href="/" passHref>
                <h1 style={{ fontSize: "1.8rem", opacity: "1" }}>Pâtisserie</h1>
              </Link>
            </Col>
            <Col>
              <Row
                className="md-screen"
                justify="end"
                align="middle"
                gutter={34}
              >
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
                  <p>Cart</p>
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
        </nav>
        <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
        <Row justify="center">
          <div className={styles.menu}>
            <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
              <MenuOutlined
                hidden={isMenuOpen}
                style={{ fontSize: "1.5rem", paddingTop: "1.4rem" }}
                onClick={() => openMenu(true)}
              ></MenuOutlined>
            </Col>
          </div>
        </Row>
        <div className="container">
          <h1>Shopping Cart</h1>
          <Row gutter={[24, 12]}>
            <Col xs={24} lg={16}>
              <Row gutter={[0, 12]}>
                {cartItems &&
                  cartItems.map((cartItem: CartItem) => (
                    <Col xs={24} key={cartItem.id}>
                      <CartCard cartItem={cartItem}></CartCard>
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col xs={24} lg={8}>
              <h1 style={{ fontSize: "2rem" }}>Order Summary</h1>
              <Row className={styles.prices} gutter={[0, 12]}>
                <Col xs={12}>
                  <p>Subtotal</p>
                </Col>
                <Col xs={12}>
                  <p>${total}</p>
                </Col>
                <Col xs={12}>
                  <p>Shipping Price</p>
                </Col>
                <Col xs={12}>
                  <p>$5</p>
                </Col>
                <Col xs={12}>
                  <p style={{ fontWeight: "bold" }}>Total</p>
                </Col>
                <Col xs={12}>
                  <p style={{ fontWeight: "bold" }}>${total + 5}</p>
                </Col>
              </Row>
              <Button type="primary" size="large" block>
                Checkout
              </Button>
            </Col>
          </Row>
        </div>
        <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
      </section>
    </>
  );
};

export default Cart;
