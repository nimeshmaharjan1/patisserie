import { Button, Col, message, Row } from "antd";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { useAppDispatch } from "../../lib/hooks";
import { Product } from "../../lib/interfaces";
import {
  addToCart,
  CartItem,
  cartTotal,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSlice";

interface Props {
  product: Product;
}

const Product: NextPage<Props> = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useAppDispatch();
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
    <Layout>
      <Row className="single-product">
        <Col className="left-side" lg={14} xs={24}>
          <Image
            src={product.images[0].src}
            layout="responsive"
            height={1200}
            width={1200}
            alt="pastry"
            objectFit="cover"
          ></Image>
        </Col>
        <Col className="right-side" lg={10} xs={24}>
          <div className="heading">
            <h2>{product.name}</h2>
            <p>with powered sugar and almonds</p>
          </div>
          <p className="desc" style={{ marginTop: "0.4rem" }}>
            {product.description.toLocaleLowerCase()}
          </p>
          <Row>
            <Col xs={12}>
              <div
                className="veg"
                style={product.veg === 1 ? { border: "1px solid white" } : {}}
              ></div>
              <div
                className="non-veg"
                style={product.veg === 0 ? { border: "1px solid white" } : {}}
              ></div>
            </Col>
            <Col xs={12}>
              <p className="price">${product.price}</p>
            </Col>
            <Col xs={24} style={{ marginTop: "0.6rem" }}>
              <Button
                type="primary"
                size="large"
                block
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </Button>
            </Col>
            <Col xs={24} className="ingredients">
              <p>Ingredients</p>
              <p>{product.ingredients}</p>
            </Col>
            <Col xs={24} className="ingredients">
              <p>Contains</p>
              <p>{product.contains}</p>
            </Col>
            <Col xs={24} style={{ marginTop: "0.5rem" }} className="nutrition">
              <p>Nutritional Values</p>
            </Col>
            <Col xs={12}>
              <p>Serving Size</p>
            </Col>
            <Col xs={12}>
              <p>{product.nutritionValues.servingSize}</p>
            </Col>
            <Col xs={24} style={{ marginTop: "0.1rem" }}>
              <p>Amount Per Servings</p>
            </Col>
            <Col xs={12}>
              <p>Calories</p>
              <p>Dietary Fiber</p>
              <p>Protein</p>
              <p>Saturated Fat</p>
              <p>Sodium</p>
              <p>Sugars</p>
              <p>Total Carbohydrate</p>
              <p>Total Fat</p>
              <p>Trans Fat</p>
            </Col>
            <Col xs={12}>
              <p>{product.nutritionValues.amountPerServing.calories}</p>
              <p>{product.nutritionValues.amountPerServing.dietaryFiber}</p>
              <p>{product.nutritionValues.amountPerServing.protein}</p>
              <p>{product.nutritionValues.amountPerServing.saturatedFat}</p>
              <p>{product.nutritionValues.amountPerServing.sodium}</p>
              <p>{product.nutritionValues.amountPerServing.sugars}</p>
              <p>
                {product.nutritionValues.amountPerServing.totalCarbohydrate}
              </p>
              <p>{product.nutritionValues.amountPerServing.totalFat}</p>
              <p>{product.nutritionValues.amountPerServing.transFat}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Product;
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await axios.get(
    `https://patisserie-iota.vercel.app/api/products/${context.params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
