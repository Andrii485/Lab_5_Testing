import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User } from '../types';
import './Navbar.css';

interface Props {
  user: User;
  cartCount: number;
  onLogout: () => void;
}

const Navbar: React.FC<Props> = ({ user, cartCount, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => navigate('/')}>
          <span>⚡</span>
          <strong>SportZone</strong>
        </div>

        <div className="nav-links">
          <button
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            🏠 Каталог
          </button>
        </div>

        <div className="nav-actions">
          <button
            className={`cart-btn ${location.pathname === '/cart' ? 'active' : ''}`}
            onClick={() => navigate('/cart')}
          >
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span>Кошик</span>
          </button>

          <div className="user-menu">
            <button className="user-btn" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="avatar">{user.avatar}</div>
              <span>{user.name.split(' ')[0]}</span>
              <span className="arrow">{showDropdown ? '▲' : '▼'}</span>
            </button>

            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-header">
                  <div className="avatar large">{user.avatar}</div>
                  <div>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                  </div>
                </div>
                <hr />
                <button onClick={() => { setShowDropdown(false); navigate('/cart'); }}>
                  🛒 Мій кошик {cartCount > 0 && `(${cartCount})`}
                </button>
                <button className="logout" onClick={onLogout}>
                  🚪 Вийти
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
