import * as types from "../constants/types";
import apiClient from "../apiClient";

const getAllProductsSuccess = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    payload: { products },
  };
};

export const getAllProducts = () => {
  return (dispatch) => {
    apiClient.fetchProducts((products) => {
      dispatch(getAllProductsSuccess(products));
    })
  }
}

const addNewProductSuccess = (product) => {
  return {
    type: types.ADD_PRODCUT,
    payload: { product },
  };
};

export const addNewProduct = (product, toggleForm) => {
  return (dispatch) => {
    apiClient.addProduct(product, (newProduct) => {
      dispatch(addNewProductSuccess(newProduct));
    })
    toggleForm();
  }
}


const deleteProductSuccess = (productID) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: { productID },
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    apiClient.deleteProduct(id, () => {
      dispatch(deleteProductSuccess(id))
    })
  }
}

const editProductSuccess = (id, data) => {
  return {
    type: types.EDIT_PRODUCT,
    payload: { id, data },
  };
};

export const editProduct = (id, item, onCancel) => {
  return (dispatch) => {
    apiClient.editProduct(id, item, (id, newItem) => {
      dispatch(editProductSuccess(id, newItem));
    })
    onCancel();
  }
}