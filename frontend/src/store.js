import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as productReducers from "./reducers/productReducers";
import * as cartReducers from "./reducers/cartReducers";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const reducer = combineReducers({
  productList: productReducers.productListReducer,
  productDetails: productReducers.productDetailsReducer,
  cart: cartReducers.cartReducer,
});

const extentedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  extentedCompose(applyMiddleware(thunk))
);

export default store;
