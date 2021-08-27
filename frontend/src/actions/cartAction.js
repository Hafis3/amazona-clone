import Axios from "axios";
import * as cartAction from "../constants/cartConstant";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  Axios.get(`/api/product/${productId}`).then(({ data }) => {
    dispatch({
      type: cartAction.CART_ADD_ITEM,
      payload: {
        name: data.name,
        category: data.category,
        image: data.image,
        price: data.price,
        brand: data.brand,
        product: data._id,
        countInStock: data.countInStock,
        qty,
      },
    });
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (productId) => async (dispatch,getState) => {
  dispatch({
    type: cartAction.CART_REMOVE_ITEM,
    payload: {
      productId,
    },
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};
