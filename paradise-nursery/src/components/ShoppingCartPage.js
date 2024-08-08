import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, incrementItem, decrementItem } from '../redux/actions';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart.cart); // Ensure accessing cart array correctly
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(incrementItem(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementItem(product));
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cart.map(product => (
          <div className="cart-item" key={product.id}>
            {product.image && <img src={require(`./images/${product.image}`)} alt={product.name} />}
            <div className="cart-item-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div>
                <button onClick={() => handleIncrement(product)}>+</button>
                <button onClick={() => handleDecrement(product)} disabled={product.quantity <= 1}>-</button>
                <button onClick={() => handleRemove(product)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
        <div className="total">Total: ${getTotal()}</div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;








