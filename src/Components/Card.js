import React from 'react';
import '/home/jake/repos/cart/src/Components/card.css';
const Card = ({ item, handleClick }) => {
  const { product, price, img } = item;

  return (
    <div className="productCard">
      <div className="image">
        {' '}
        <img src={img} alt={item.product}></img>{' '}
      </div>
      <div className="info">
        <p>{product}</p>
        <p>${price.toFixed(2)}</p>
        <button
          onClick={() => {
            handleClick(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
