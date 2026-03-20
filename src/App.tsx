import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import { CartItem, Product, User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  // ПОМИЛКА: використовується == замість ===
  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id == product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.product.id === productId ? { ...item, quantity: qty } : item
    ));
  };

  return (
    <Router>
      {user && <Navbar user={user} cartCount={cart.length} onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/" element={user ? <HomePage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={user ? <ProductPage addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
