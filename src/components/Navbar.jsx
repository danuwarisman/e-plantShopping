import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Plants</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon">
            🛒
            {/* Hanya tampilkan badge jika ada item */}
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;