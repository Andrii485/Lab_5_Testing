import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import './ProductPage.css';

interface Props {
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<Props> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const product = products.find(p => p.id === parseInt(id!));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Товар не знайдено</h2>
        <button onClick={() => navigate('/')}>← Назад до каталогу</button>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const formatPrice = (price: number) => price.toLocaleString('uk-UA') + ' ₴';

  return (
    <div className="product-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Повернутись</button>

      <div className="product-detail">
        <div className="product-image-side">
          <img src={product.image} alt={product.name} />
          {!product.inStock && <div className="out-badge">Немає в наявності</div>}
        </div>

        <div className="product-info-side">
          <div className="pd-brand">{product.brand}</div>
          <h1 className="pd-name">{product.name}</h1>

          <div className="pd-rating">
            <span className="pd-stars">{'★'.repeat(Math.floor(product.rating))}</span>
            <span>{product.rating}</span>
            <span className="pd-reviews">{product.reviews} відгуків</span>
          </div>

          <div className="pd-price">{formatPrice(product.price)}</div>

          <div className="pd-desc">
            <h3>Опис</h3>
            <p>{product.description}</p>
          </div>

          <div className="pd-tags">
            <span>🏷️ {product.category}</span>
            {product.inStock
              ? <span className="in-stock">✓ В наявності</span>
              : <span className="no-stock">✗ Немає в наявності</span>}
          </div>

          {product.inStock && (
            <div className="pd-actions">
              <div className="qty-control">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className={`add-to-cart-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
                {added ? '✓ Додано до кошика!' : `🛒 Додати до кошика`}
              </button>
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h2>Схожі товари</h2>
          <div className="related-grid">
            {related.map(p => (
              <div key={p.id} className="related-card" onClick={() => navigate(`/product/${p.id}`)}>
                <img src={p.image} alt={p.name} />
                <div>
                  <p className="r-brand">{p.brand}</p>
                  <p className="r-name">{p.name}</p>
                  <p className="r-price">{formatPrice(p.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
