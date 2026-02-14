import React from 'react'; 
import { useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';
import Navbar from './Navbar';
 
 const products = {
  'Air Purifying': [
    { id: 1, name: 'Snake Plant', price: 25, image: '/images/snake-plant.jpg', description: 'Excellent air purifier, low maintenance' },
    { id: 2, name: 'Peace Lily', price: 30, image: '/images/peace-lily.jpg', description: 'Beautiful white flowers, purifies air' },
    { id: 3, name: 'Spider Plant', price: 20, image: '/images/spider-plant.jpg', description: 'Great for beginners, removes toxins' },
    { id: 4, name: 'Boston Fern', price: 28, image: '/images/boston-fern.jpg', description: 'Natural humidifier, lush foliage' },
    { id: 5, name: 'Rubber Plant', price: 35, image: '/images/rubber-plant.jpg', description: 'Large leaves, excellent air cleaner' },
    { id: 6, name: 'Chinese Evergreen', price: 32, image: '/images/chinese-evergreen.jpg', description: 'Colorful leaves, low light tolerant' }
  ],
  'Succulents': [
    { id: 7, name: 'Echeveria', price: 15, image: '/images/echeveria.jpg', description: 'Rosette-shaped, drought tolerant' },
    { id: 8, name: 'Aloe Vera', price: 18, image: '/images/aloe-vera.jpg', description: 'Medicinal properties, easy care' },
    { id: 9, name: 'Jade Plant', price: 22, image: '/images/jade-plant.jpg', description: 'Symbol of good luck, tree-like' },
    { id: 10, name: 'Haworthia', price: 16, image: '/images/haworthia.jpg', description: 'Small, striped leaves, perfect desk plant' },
    { id: 11, name: 'Sedum', price: 14, image: '/images/sedum.jpg', description: 'Trailing succulent, great for hanging' },
    { id: 12, name: 'Kalanchoe', price: 20, image: '/images/kalanchoe.jpg', description: 'Colorful flowers, long blooming' }
  ],
  'Flowering Plants': [
    { id: 13, name: 'Orchid', price: 45, image: '/images/orchid.jpg', description: 'Elegant flowers, exotic beauty' },
    { id: 14, name: 'Anthurium', price: 38, image: '/images/anthurium.jpg', description: 'Heart-shaped flowers, long-lasting' },
    { id: 15, name: 'African Violet', price: 18, image: '/images/african-violet.jpg', description: 'Compact, blooms year-round' },
    { id: 16, name: 'Bromeliad', price: 32, image: '/images/bromeliad.jpg', description: 'Tropical, colorful bracts' },
    { id: 17, name: 'Jasmine', price: 28, image: '/images/jasmine.jpg', description: 'Fragrant flowers, climbing habit' },
    { id: 18, name: 'Hibiscus', price: 35, image: '/images/hibiscus.jpg', description: 'Large showy flowers, tropical feel' }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
   };

  return (
    <div className="product-listing">
      <Navbar />
      
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {items.map(product => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                  <button
                    className="btn-add-to-cart"
                    onClick={() => handleAddToCart(product)}
                   >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;