import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

interface Props {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<Props> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Всі');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== 'Всі') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (search.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, search, sortBy]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      // ПОМИЛКА: фільтр не враховує що той самий id міг бути доданий кілька разів
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🏆 №1 в Україні</span>
          <h1>Твій шлях до<br /><span>спортивного успіху</span></h1>
          <p>Понад 500 товарів від провідних брендів світу. Швидка доставка по всій Україні.</p>
          <div className="hero-stats">
            <div className="stat"><strong>500+</strong><span>Товарів</span></div>
            <div className="stat"><strong>50k+</strong><span>Клієнтів</span></div>
            <div className="stat"><strong>4.9⭐</strong><span>Рейтинг</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-circle"></div>
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80" alt="Спорт" />
        </div>
      </section>

      {/* Controls */}
      <section className="shop-controls">
        <div className="search-bar">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Пошук товарів..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button onClick={() => setSearch('')}>✕</button>}
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
          <option value="default">За замовчуванням</option>
          <option value="price-asc">Ціна: від низької</option>
          <option value="price-desc">Ціна: від високої</option>
          <option value="rating">За рейтингом</option>
        </select>
      </section>

      {/* Categories */}
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="results-info">
        Знайдено: <strong>{filtered.length}</strong> товарів
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <span>🔍</span>
          <p>Нічого не знайдено. Спробуйте інший запит.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              isAdded={addedIds.includes(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
