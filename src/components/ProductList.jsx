import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import Navbar from './Navbar';
import './ProductList.css';

const products = {
  'Air Purifying Plants': [
    { id: 1, name: 'Snake Plant', price: 25, image: '/images/snake-plant.jpg', description: 'Excellent air purifier, thrives with minimal care' },
    { id: 2, name: 'Peace Lily', price: 30, image: '/images/peace-lily.jpg', description: 'Beautiful white blooms that cleanse the air' },
    { id: 3, name: 'Spider Plant', price: 20, image: '/images/spider-plant.jpg', description: 'Perfect for beginners, naturally removes toxins' },
    { id: 4, name: 'Boston Fern', price: 28, image: '/images/boston-fern.jpg', description: 'Natural humidifier with lush, feathery foliage' },
    { id: 5, name: 'Rubber Plant', price: 35, image: '/images/rubber-plant.jpg', description: 'Bold large leaves, outstanding air cleaner' },
    { id: 6, name: 'Chinese Evergreen', price: 32, image: '/images/chinese-evergreen.jpg', description: 'Colorful foliage, tolerates low light beautifully' },
  ],
  Succulents: [
    { id: 7, name: 'Echeveria', price: 15, image: '/images/echeveria.jpg', description: 'Elegant rosette shape, drought tolerant' },
    { id: 8, name: 'Aloe Vera', price: 18, image: '/images/aloe-vera.jpg', description: 'Medicinal properties, incredibly easy to grow' },
    { id: 9, name: 'Jade Plant', price: 22, image: '/images/jade-plant.jpg', description: 'Symbol of good luck, grows into a small tree' },
    { id: 10, name: 'Haworthia', price: 16, image: '/images/haworthia.jpg', description: 'Compact striped leaves, ideal desk companion' },
    { id: 11, name: 'Sedum', price: 14, image: '/images/sedum.jpg', description: 'Trailing growth, gorgeous in hanging baskets' },
    { id: 12, name: 'Kalanchoe', price: 20, image: '/images/kalanchoe.jpg', description: 'Vibrant flowers with an exceptionally long bloom' },
  ],
  'Flowering Plants': [
    { id: 13, name: 'Orchid', price: 45, image: '/images/orchid.jpg', description: 'Timeless elegance, exotic and refined beauty' },
    { id: 14, name: 'Anthurium', price: 38, image: '/images/anthurium.jpg', description: 'Waxy heart-shaped flowers that last for months' },
    { id: 15, name: 'African Violet', price: 18, image: '/images/african-violet.jpg', description: 'Compact and cheerful, blooms year-round indoors' },
    { id: 16, name: 'Bromeliad', price: 32, image: '/images/bromeliad.jpg', description: 'Tropical flair with striking coloured bracts' },
    { id: 17, name: 'Jasmine', price: 28, image: '/images/jasmine.jpg', description: 'Intensely fragrant, climbing habit adds charm' },
    { id: 18, name: 'Hibiscus', price: 35, image: '/images/hibiscus.jpg', description: 'Dramatic showy blooms with a tropical feel' },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  // Redux is the single source of truth — no local addedItems state needed
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      dispatch(addItem(product));
    }
  };

  return (
    <div className="product-listing">
      <Navbar />

      <div className="product-listing-header">
        <h1>Our Plants</h1>
        <p>Hand-picked, healthy plants delivered to your door</p>
      </div>

      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {items.map((product) => {
              const inCart = isInCart(product.id);
              return (
                <div key={product.id} className={`product-card ${inCart ? 'in-cart' : ''}`}>
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                    />
                    {inCart && <div className="in-cart-badge">✓ In Cart</div>}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <button
                        className="btn-add-to-cart"
                        onClick={() => handleAddToCart(product)}
                        disabled={inCart}
                        aria-label={inCart ? `${product.name} already in cart` : `Add ${product.name} to cart`}
                      >
                        {inCart ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
