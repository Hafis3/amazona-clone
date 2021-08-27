import * as cartActions from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartActions.CART_ADD_ITEM:
      const cart = action.payload;
      const indexItemExist = state.cartItems.findIndex(
        (x) => x.product == cart.product
      );

      if (indexItemExist !== -1) {
        state.cartItems.splice(indexItemExist, 1, cart);
        console.log(state.cartItems);
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, cart],
        };
      }
    case cartActions.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.product !== action.payload;
        }),
      };
    default:
      return state;
  }
};
