import React, { useState } from "react";
import { useDelayUnmount } from "../../hooks/useDelayUnmount";
import ProductCard from "../../components/products/ProductCard";
import { Col, Row } from "antd";
import Layout from "../../components/Layout";
// import { items } from "../../models/data";
import axios from "axios";
export default function Products({ products }) {
  return (
    <Layout>
      <section className="products | container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        {/* {items &&
          items.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))} */}
      </section>
    </Layout>
  );
}
export const getServerSideProps = async () => {
  const products = await axios.get(
    "https://patisserie-iota.vercel.app/api/products"
  );
  return {
    props: { products: products.data.products },
  };
};
