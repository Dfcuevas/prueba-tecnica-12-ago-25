import { SET_CART, SET_LOADING } from "./cartActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
