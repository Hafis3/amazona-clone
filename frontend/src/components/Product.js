import React from "react";
import "./Product.css";
import Rating from "../components/Rating";
import data from "../data";
function Product() {
  return (
    <div className="product">
      {data.products.map((product) => (
        <div key={product._id} className="product__container">          
          <div className="product__image">
            <img src={product.image} alt="" />
          </div>
          <div className="product__info">
            <h4>{product.name}</h4>
            <Rating rating={product.rating} reviews={product.reivews} />
            <p>Reviews {product.reviews} </p>
            <strong>Rs. {product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
