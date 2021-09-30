export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: { item },
  };
};

export const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

export const getAllCartItems = (items) => {
  return {
    type: "FETCH_CART",
    payload: { items },
  };
};
