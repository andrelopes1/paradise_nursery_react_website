import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import './ProductListingPage.css';

const products = [
  { id: 1, name: 'Snake Plant', price: 15, image: 'snake-plant.jpg' },
  { id: 2, name: 'Spider Plant', price: 12, image: 'spider-plant.jpg' },
  { id: 3, name: 'Peace Lily', price: 18, image: 'Peace-Lily.jpg' },
  { id: 4, name: 'Boston Fern', price: 20, image: 'Boston-Fern.jpg' },
  { id: 5, name: 'Rosemary', price: 15, image: 'Rosemary.jpg' },
  { id: 6, name: 'Aloe Vera', price: 22, image: 'aloe-vera.webp' },
  { id: 7, name: 'Lavender', price: 25 },
  { id: 8, name: 'Jasmine', price: 30 },
  { id: 9, name: 'Mint', price: 10 },
  { id: 10, name: 'Basil', price: 10 },
  { id: 11, name: 'Thyme', price: 8 },
  { id: 12, name: 'Chives', price: 7 },
  { id: 13, name: 'Oregano', price: 9 },
  { id: 14, name: 'Parsley', price: 6 },
  { id: 15, name: 'Cilantro', price: 6 },
  { id: 16, name: 'Rose', price: 25 },
  { id: 17, name: 'Tulip', price: 20 },
  { id: 18, name: 'Daffodil', price: 15 },
  { id: 19, name: 'Sunflower', price: 12 },
  { id: 20, name: 'Marigold', price: 8 },
  { id: 21, name: 'Lemon Tree', price: 35 },
  { id: 22, name: 'Orange Tree', price: 40 },
  { id: 23, name: 'Apple Tree', price: 50 },
  { id: 24, name: 'Banana Tree', price: 55 },
  { id: 25, name: 'Pine Tree', price: 60 },
  { id: 26, name: 'Fiddle Leaf Fig', price: 45 },
  { id: 27, name: 'Rubber Plant', price: 30 },
  { id: 28, name: 'Money Tree', price: 35 },
  { id: 29, name: 'Dracaena', price: 25 },
  { id: 30, name: 'Philodendron', price: 28 },
  { id: 31, name: 'Pothos', price: 15 },
  { id: 32, name: 'ZZ Plant', price: 20 },
  { id: 33, name: 'Calathea', price: 22 },
  { id: 34, name: 'Croton', price: 18 },
  { id: 35, name: 'Begonia', price: 12 },
  { id: 36, name: 'Hibiscus', price: 25 },
  { id: 37, name: 'Bougainvillea', price: 28 },
  { id: 38, name: 'Succulent', price: 10 },
  { id: 39, name: 'Cactus', price: 15 },
  { id: 40, name: 'Bamboo', price: 20 }
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="products-page">
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            {product.image && <img src={require(`./images/${product.image}`)} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;



