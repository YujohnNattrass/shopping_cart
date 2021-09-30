export const products = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return action.payload.products;
    }
    case "ADD_PRODUCT": {
      return state.concat(action.payload.product);
    }
    case "ADD_TO_CART": {
      return state.map((p) => {
        if (p._id === action.payload.item.productId) {
          p.quantity--;
        }
        return p;
      });
    }
    case "DELETE_PRODUCT": {
      return state.filter((product) => {
        return product._id !== action.payload.productID;
      });
    }
    case "EDIT_PRODUCT": {
      return state.map((p) => {
        if (p._id === action.payload.data._id) {
          return { id: action.payload.data._id, ...action.payload.data };
        }
        return p;
      });
    }
    default: {
      return state;
    }
  }
};
