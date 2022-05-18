import { SET_PRODUCTS_LIST, SET_DEFAULT_PRODUCTS_LIST } from "../Actions";

const productState = {
  products: [],
};

// reducer for products

export function productsReducer(state = productState, action) {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
      };
    case SET_DEFAULT_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
