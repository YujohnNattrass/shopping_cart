import * as types from "../constants/types";
import apiClient from "../apiClient";

const addToCartSuccess = (item) => {
  return {
    type: types.ADD_TO_CART,
    payload: { item },
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    apiClient.addToCart(item, () => {
      dispatch(addToCartSuccess(item));
    })
  }
}

const checkoutSuccess = () => {
  return {
    type: types.CHECKOUT,
  };
};

export const checkout = () => {
  return (dispatch) => {
    apiClient.checkout(() => {
      dispatch(checkoutSuccess());
    })
  }
}

const getAllCartItemsSuccess = (items) => {
  return {
    type: types.FETCH_CART,
    payload: { items },
  };
};

export const getAllCartItems = () => {
  return (dispatch) => {
    apiClient.fetchCart(items => {
      dispatch(getAllCartItemsSuccess(items));
    })
  }
}