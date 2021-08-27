import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";
import { addToCart, removeItemFromCart } from "../actions/cartAction";
import "./CartScreen.css";

function CartScreen() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveClick = (productId) => {
    dispatch(removeItemFromCart(productId));
  };
  return (
    <div className="cartScreen">
      {cartItems.length === 0 ? (
        <div>
          <MessageBox message="Your cart is empty" />
          <Link to="/">Return to shopping..</Link>
        </div>
      ) : (
        <div className="cartScreen__container">
          <div className="cartScreen__container__left">
            <h3>Your cart items</h3>
            {cartItems.map((product) => (
              <div key={product.product} className="cartScreen__items">
                <div className="cartScreen__left__image">
                  <img src={product.image} alt="" />
                </div>
                <div className="cartScreen__left__item">
                  <p>{product.name}</p>
                </div>
                <div className="cartScreen__left__qty">
                  <select
                    value={product.qty}
                    name=""
                    id=""
                    onChange={(e) =>
                      dispatch(
                        addToCart(product.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(product.countInStock).keys()].map((qty) => {
                      let count = qty + 1;
                      return <option value={count}>{count}</option>;
                    })}
                  </select>
                </div>
                <div className="cartScreen__left__price">
                  Rs: {product.price}
                </div>
                <div className="cartScreen__left__button">
                  <button
                    onClick={() => handleRemoveClick(product.product)}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartScreen__container__right">
            <div className="cartScreen__right__action">
              <h4>Sub Total</h4>
              <p>
                Total Quantity :
                <span>
                  {cartItems.reduce((sum, item) => (sum = sum + item.qty), 0)}
                </span>
              </p>
              <p>
                Total Amount Rs :
                <span>
                  {cartItems.reduce(
                    (sum, item) => (sum += item.price * item.qty),
                    0
                  )}
                </span>
              </p>
              <button type="button">Place order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
