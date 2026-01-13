import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="Header__menu">
      <div className="header-title">
        <span className="header-title-logo">BYKETNAYA</span>
      </div>
      <div className="cart-container">
        <div className="cart-icon">Корзина</div>
        <div className="conteiner">
          <h2 className="Cart">Ваша корзина</h2>
          <ul id="cart-items">
            <li>Товары будут добавляться сюда</li>
          </ul>
          <div className="cart-total">
            Общая сумма: <span id="total-price">0</span> руб.
          </div>
          <button id="checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
