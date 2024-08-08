// cartReducer.js
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || []  // Load cart from local storage or initialize as empty array
};

const cartReducer = (state = initialState, action) => {
  let newCart;

  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // If it is, increment the quantity
        newCart = [...state.cart];
        newCart[existingItemIndex].quantity += 1;
      } else {
        // Otherwise, add the new item to the cart
        newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };

    case 'REMOVE_FROM_CART':
      newCart = state.cart.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };

    case 'INCREMENT_ITEM':
      newCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };

    case 'DECREMENT_ITEM':
      newCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };

    default:
      return state;
  }
};

export default cartReducer;








