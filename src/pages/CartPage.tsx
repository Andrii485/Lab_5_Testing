import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import './CartPage.css';

interface Props {
  cart: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<Props> = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  // ПОМИЛКА: reduce без початкового значення може впасти на порожньому масиві в деяких середовищах
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (p: number) => p.toLocaleString('uk-UA') + ' ₴';

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Кошик порожній</h2>
        <p>Додайте товари зі спортивного каталогу</p>
        <button onClick={() => navigate('/')}>Перейти до каталогу</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Кошик</h1>
        <span>{totalItems} товарів</span>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div className="item-info">
                <p className="item-brand">{item.product.brand}</p>
                <h3 onClick={() => navigate(`/product/${item.product.id}`)}>{item.product.name}</h3>
                <p className="item-category">{item.product.category}</p>
              </div>
              <div className="item-qty">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
              </div>
              <div className="item-price">{formatPrice(item.product.price * item.quantity)}</div>
              <button className="remove-btn" onClick={() => removeFromCart(item.product.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Підсумок</h2>
          <div className="summary-rows">
            <div className="summary-row">
              <span>Товарів</span>
              <span>{totalItems} шт</span>
            </div>
            <div className="summary-row">
              <span>Доставка</span>
              <span className="free">Безкоштовно</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Разом</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <button className="checkout-btn">
            💳 Оформити замовлення
          </button>

          <div className="payment-methods">
            <span>💳</span><span>🏦</span><span>📱</span>
            <p>Visa, Mastercard, LiqPay, ApplePay</p>
          </div>

          <div className="cart-guarantees">
            <div>🚚 Безкоштовна доставка від 1000₴</div>
            <div>↩️ Повернення протягом 14 днів</div>
            <div>🔒 Захищена оплата</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
