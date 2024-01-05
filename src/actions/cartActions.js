export const UPDATE_CART = "UPDATE_CART";

export const updateCart = (cartItems) => {
  return {
    type: UPDATE_CART,
    payload: cartItems,
  };
};
