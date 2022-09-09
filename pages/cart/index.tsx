import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const openCheckout = () => {
    setIsCheckoutMenuOpen(true);
  };
  const cartItems: CartItem[] = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useAppDispatch();
  const openMenu = (arg: boolean) => {
    setIsMenuOpen(arg);
  };
  const router = useRouter();
  const handleEmptyCart = () => {
    router.push("/products");
  };
  useEffect(() => {
    console.log("Cart total", cartItems);
    if (cartItems.length < 1) {
      setIsCartEmpty(true);
    }
  }, [cartItems.length, dispatch, cartItems]);
  const closeCheckout = () => {
    setIsCheckoutMenuOpen(false);
  };
  const submitCheckout = (values: any) => {
    console.log({ values });
    setIsCheckoutLoading(true);
    // setIsCheckoutMenuOpen(false);
  };
  return (
    <>
      <section className={styles.cart}>
        <Modal
          title="Cart Empty"
          visible={isCartEmpty}
          closable={false}
          onOk={handleEmptyCart}
        >
          <p style={{ color: "black" }}>
            Please add some items to the cart to proceed.
          </p>
        </Modal>
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
              <Button
                type="primary"
                size="large"
                block
                style={{ fontWeight: "bold" }}
                onClick={openCheckout}
              >
                CHECKOUT
              </Button>
            </Col>
          </Row>
        </div>
        <Menu isMenuOpen={isMenuOpen} updateIsMenuOpen={openMenu}></Menu>
        <Modal
          title="Checkout"
          visible={isCheckoutMenuOpen}
          onCancel={closeCheckout}
          onOk={submitCheckout}
          confirmLoading={isCheckoutLoading}
          footer={null}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={submitCheckout}
          >
            <Form.Item label="Name" name="fullName">
              <Input></Input>
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Input></Input>
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input></Input>
            </Form.Item>
            <Form.Item label="Phone" name="phoneNumber">
              <Input></Input>
            </Form.Item>
            <Form.Item label="E-mail" name="email">
              <Input></Input>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </section>
    </>
  );
};

export default Cart;
