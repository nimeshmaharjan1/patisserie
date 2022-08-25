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
          <p>
            <span>Category: </span>Crossiant
          </p>
          <p>
            <span>Delivery Time: </span>2 days
          </p>
        </Col>
        <Col xs={24} lg={6} className={styles.quantity}>
          <p className="row center">
            <span>Quantity: </span>
            <span className={styles.control}>
              <span className={styles.plus}>+</span>
              <span className={styles.qty}>1</span>
              <span className={styles.minus}>-</span>
            </span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CartCard;
