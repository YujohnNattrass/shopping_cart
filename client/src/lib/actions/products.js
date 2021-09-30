export const getAllProducts = (products) => {
  return {
    type: "FETCH_PRODUCTS",
    payload: { products },
  };
};

export const addNewProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: { product },
  };
};

export const deleteProduct = (productID) => {
  return {
    type: "DELETE_PRODUCT",
    payload: { productID },
  };
};

export const editProduct = (id, data) => {
  return {
    type: "EDIT_PRODUCT",
    payload: { id, data },
  };
};
