import React, { useState } from 'react';
import { User } from '../types';
import './LoginPage.css';

interface Props {
  onLogin: (user: User) => void;
}


const TEST_USERS = [
  { email: 'user@sport.ua', password: '123456', name: 'Олексій Коваль', id: 1, avatar: 'ОК' },
  { email: 'anna@sport.ua', password: 'qwerty', name: 'Анна Шевченко', id: 2, avatar: 'АШ' },
];

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Симуляція запиту до сервера
    setTimeout(() => {
      const found = TEST_USERS.find(
        u => u.email === email && u.password === password
      );

      if (found) {
        onLogin({
          id: found.id,
          name: found.name,
          email: found.email,
          avatar: found.avatar
        });
      } else {
        setError('Невірний email або пароль');
      }
      setLoading(false);
    }, 800);
  };

  const fillDemo = (userIdx: number) => {
    setEmail(TEST_USERS[userIdx].email);
    setPassword(TEST_USERS[userIdx].password);
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-bg-shape shape1"></div>
        <div className="login-bg-shape shape2"></div>
        <div className="login-bg-shape shape3"></div>
      </div>

      <div className="login-container">
        <div className="login-brand">
          <span className="brand-icon">⚡</span>
          <h1>SportZone</h1>
          <p>Найкращий спортивний магазин України</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Увійти до акаунту</h2>

          <div className="form-group">
            <label>Email адреса</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Введіть пароль"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && <div className="error-msg">⚠️ {error}</div>}

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Увійти'}
          </button>

          <div className="demo-section">
            <p>Тестові акаунти:</p>
            <div className="demo-buttons">
              <button type="button" onClick={() => fillDemo(0)} className="demo-btn">
                👤 Олексій
              </button>
              <button type="button" onClick={() => fillDemo(1)} className="demo-btn">
                👤 Анна
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
