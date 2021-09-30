import { combineReducers } from "redux";

import { cart } from "./cart";
import { products } from "./products";

export const rootReducer = combineReducers({ cart, products });
