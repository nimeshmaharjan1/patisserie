import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch } from "../../lib/hooks";
import { Product } from "../../lib/interfaces";
import { addToCart, CartItem, cartTotal } from "../../store/cart/cartSlice";
import styles from "./ProductCard.module.scss";
interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const goToProduct = (e: any, id: string) => {
    e.preventDefault();
    router.push(`/products/${id}`);
  };
  const handleAddToCart = (product: Product) => {
    const { _id, name, images, price } = product;
    const item = {
      id: _id,
      name,
      quantity: 1,
      image: images[0].src,
      price,
    } as CartItem;
    dispatch(addToCart(item));
    dispatch(cartTotal(item));
    message.success("Item has been added to the cart successfully");
  };
  return (
    <div className={styles.card}>
      <Image
        src={product.images[0].src}
        width={220}
        height={200}
        layout="responsive"
        alt="pastry"
        onClick={(e) => goToProduct(e, product._id)}
      ></Image>
      <div className={styles.cardTitle}>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.cardDesc}>
        <p>{product.description}</p>
      </div>
      <div className={styles.price}>
        <h1>${product.price}</h1>
      </div>
      <div
        className={styles.cardAction}
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </div>
    </div>
  );
};

export default ProductCard;
