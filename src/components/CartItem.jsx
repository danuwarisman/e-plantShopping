import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';
import Navbar from './Navbar';
import './CartItem.css';
const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleUpdateQuantity = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout feature will be available shortly.');
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any plants to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />
      <h1 className="cart-title">Shopping Cart</h1>
      
      <div className="cart-items">
        {cart.items.map(item => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.image} 
              alt={item.name}
              className="cart-item-image"
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
            
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>
            
            <div className="cart-item-quantity">
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, 'decrement')}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, 'increment')}
              >
                +
              </button>
            </div>
            
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button 
              className="delete-btn"
              onClick={() => handleRemoveItem(item.id)}
              aria-label="Remove item"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h2 className="cart-total">
          Total: ${cart.totalAmount.toFixed(2)}
        </h2>
        <div className="cart-actions">
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          <Link 
            to="/products" 
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
