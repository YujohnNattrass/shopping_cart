import * as types from "../constants/types";

export const addToCart = (item) => {
  return {
    type: types.ADD_TO_CART,
    payload: { item },
  };
};

export const checkout = () => {
  return {
    type: types.CHECKOUT,
  };
};

export const getAllCartItems = (items) => {
  return {
    type: types.FETCH_CART,
    payload: { items },
  };
};
