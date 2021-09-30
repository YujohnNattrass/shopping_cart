export const cart = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CART": {
      return action.payload.items;
    }
    case "ADD_TO_CART": {
      let same = true;
      let newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].productId === action.payload.item.productId) {
          newState[i].quantity++;
          same = false;
        }
      }
      if (same) {
        newState.push({ quantity: 1, ...action.payload.item });
      }
      return newState;
    }

    case "CHECKOUT": {
      return [];
    }
    default: {
      return state;
    }
  }
};
