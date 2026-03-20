import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import './ProductCard.css';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart, isAdded }) => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return price.toLocaleString('uk-UA') + ' ₴';
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {!product.inStock && <div className="out-of-stock-badge">Немає в наявності</div>}
        <div className="card-category">{product.category}</div>
      </div>

      <div className="card-body">
        <div className="card-brand">{product.brand}</div>
        <h3 className="card-name">{product.name}</h3>

        <div className="card-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews">({product.reviews})</span>
        </div>

        <div className="card-footer">
          <div className="card-price">{formatPrice(product.price)}</div>
          <button
            className={`add-btn ${isAdded ? 'added' : ''} ${!product.inStock ? 'disabled' : ''}`}
            onClick={e => {
              e.stopPropagation();
              if (product.inStock) onAddToCart(product);
            }}
            disabled={!product.inStock}
          >
            {isAdded ? '✓ Додано' : product.inStock ? '+ Кошик' : 'Немає'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
