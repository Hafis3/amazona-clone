import Axios from "axios";
import * as productAction from "../constants/productconstant";

export const productListAction = () => async (dispatch) => {
  dispatch({
    type: productAction.PRODUCT_LIST_REQUEST,
  });

  Axios.get("/api/products")
    .then(({ data }) => {
      dispatch({
        type: productAction.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: productAction.PRODUCT_LIST_FAIL,
        payload: err.message,
      });
    });
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({
    type: productAction.PRODUCT_DETAILS_REQUEST,    
  });
  Axios.get(`/api/product/${productId}`)
    .then(({data}) => {      
      dispatch({
        type: productAction.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: productAction.PRODUCT_DETAILS_FAIL,
        payload: err.message,
      });
    });
};
