import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { CartItem } from "../../store/cart/cartSlice";
import styles from "../../styles/cart.module.scss";
interface Props {
  cartItem: CartItem;
}

const CartCard: React.FC<Props> = ({ cartItem }) => {
  return (
    <div className={styles.card}>
      <Row align="middle" className={styles.cardRow} gutter={[0, 12]}>
        <Col xs={24} lg={6}>
          <Image
            src={cartItem.image}
            width={350}
            height={350}
            layout="responsive"
            alt="item"
          ></Image>
        </Col>
        <Col xs={24} lg={6} className={styles.details}>
          <h2>{cartItem.name.toLocaleLowerCase()}</h2>
          <p style={{ marginTop: "0.5rem" }}>
            <span>Category</span>
            <br />
            Crossiant
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <span>Delivery Time</span>
            <br />2 days
          </p>
        </Col>
        <Col xs={24} lg={6} className={styles.quantity}>
          <p>
            <span style={{ opacity: "0.5" }}>Quantity</span>
            <br />
            <span className={styles.control}>
              <span className={styles.plus}>+</span>
              <span className={styles.qty}>1</span>
              <span className={styles.minus}>-</span>
            </span>
          </p>
        </Col>
        <Col xs={24} lg={6} className={styles.total}>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span style={{ opacity: "0.5", marginRight: "0.5rem" }}>
              Total:
            </span>
            ${cartItem.price}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CartCard;
