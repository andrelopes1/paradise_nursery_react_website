// actions.js
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: { ...product, quantity: 1 }
});

export const removeFromCart = (product) => ({
  type: 'REMOVE_FROM_CART',
  payload: product
});

export const incrementItem = (product) => ({
  type: 'INCREMENT_ITEM',
  payload: product
});

export const decrementItem = (product) => ({
  type: 'DECREMENT_ITEM',
  payload: product
});



  