export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          {
            ...action.payload,
            qty: 1
          },
          ...state.cart
        ]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id)
      };
    case "CHNAGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((p) =>
          p.id === action.payload.id ? (p.qty = action.payload.qty) : p.qty
        )
      };
    default:
      return state;
  }
};
