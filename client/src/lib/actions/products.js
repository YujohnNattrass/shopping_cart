import * as types from "../constants/types";

export const getAllProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    payload: { products },
  };
};

export const addNewProduct = (product) => {
  return {
    type: types.ADD_PRODCUT,
    payload: { product },
  };
};

export const deleteProduct = (productID) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: { productID },
  };
};

export const editProduct = (id, data) => {
  return {
    type: types.EDIT_PRODUCT,
    payload: { id, data },
  };
};
