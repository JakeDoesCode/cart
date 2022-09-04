import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/cartStyle.css';


const Cart = ({ inCart}) => {
  let total = [];
  const findTotal = () => {
    inCart.map((item) => {
      let cost = Number(item.price.toFixed(2)) * item.quant;
      return total.push(cost);
    });
    let price = total.reduce((a, b) => a + b, 0);
    return price.toFixed(2);
  };


const cartTotal = findTotal();

  return inCart.length > 0 ? (
    <div className="cartContainer">
      {inCart.map((item) => (
        <div key={item.id} className="cartCard" item={item}>
          <div>{item.product}</div>
          <div>${(item.price.toFixed(2) * item.quant).toFixed(2)}</div>
          <div className="quantityBox">
            <button className="add">+</button>
            {item.quant}
            <button className="sub">-</button>
          </div>
        </div>
      ))}
      <div className="checkoutBox">
        <div>Total: ${cartTotal}</div>
        <br />
      </div>
      <button className="checkoutButton">CHECKOUT AND ENJOY!</button>
    </div>
  ) : (
    <div className="emptyCart">
      'Your Cart Is Empty Homes!'
      <Link to="/shop">Click here to hit up our Shop!</Link>
    </div>
  );
};

export default Cart;
