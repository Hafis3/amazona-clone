import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import Rating from "../components/Rating";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { productListAction } from "../actions/productActions";

function Product() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(productListAction());
  }, []);
  return (
    <div className="product">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variants="danger" message={error} />
      ) : (
        products.map((product) => (
          <div key={product._id} className="product__container">
            <div className="product__image">
              <a href={`product/${product._id}`}>
                <img src={product.image} alt="" />
              </a>
            </div>
            <div className="product__info">
              <h4>{product.name}</h4>
              <Rating rating={product.rating} reviews={product.reivews} />
              <p>Reviews {product.reviews} </p>
              <strong>Rs. {product.price}</strong>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Product;
