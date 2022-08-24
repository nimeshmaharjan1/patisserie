import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Product } from "../../lib/interfaces";
import styles from "./ProductCard.module.scss";
interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const goToProduct = (e: any, id: string) => {
    e.preventDefault();
    router.push(`/products/${id}`);
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
      <div className={styles.cardAction}>Add To Cart</div>
    </div>
  );
};

export default ProductCard;
