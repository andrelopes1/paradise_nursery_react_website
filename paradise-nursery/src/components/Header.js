// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from './images/logo.png';

const Header = () => {
  const totalItems = useSelector(state => state.cart.cart.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/products">
          <img src={logo} alt="Paradise Nursery Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




