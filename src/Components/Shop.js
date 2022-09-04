import React from 'react';
import products from '/home/jake/repos/cart/src/data.js';
import Card from './Card';
import '/home/jake/repos/cart/src/Components/card.css';

const Shop = ({ handleClick }) => {
  return (
    <div className="shopContainer">
      {products.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Shop;
