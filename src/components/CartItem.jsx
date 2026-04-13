import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity, clearCart } from '../store/CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleUpdateQuantity = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout feature will be available shortly.');
  };

  const handleClearCart = () => {
    if (window.confirm('Remove all items from your cart?')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="empty-cart">
          <div className="empty-cart-icon">ðŸŒ¿</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Browse Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear all
          </button>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
                onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
              />

              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-unit-price">${item.price} each</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => handleUpdateQuantity(item.id, 'decrement')}
                  aria-label="Decrease quantity"
                >
                  âˆ’
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleUpdateQuantity(item.id, 'increment')}
                  aria-label="Increase quantity"
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
                aria-label={`Remove ${item.name}`}
                title="Remove item"
              >
                âœ•
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-row">
            <span>Subtotal ({items.reduce((n, i) => n + i.quantity, 0)} items)</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row shipping">
            <span>Shipping</span>
            <span>{totalAmount >= 50 ? 'ðŸŽ‰ Free' : `$5.99`}</span>
          </div>
          {totalAmount < 50 && (
            <p className="free-shipping-note">
              Add ${(50 - totalAmount).toFixed(2)} more for free shipping!
            </p>
          )}
          <div className="cart-summary-row total">
            <span>Total</span>
            <span>${(totalAmount + (totalAmount >= 50 ? 0 : 5.99)).toFixed(2)}</span>
          </div>

          <div className="cart-actions">
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
