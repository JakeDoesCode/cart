import React from 'react';
import products from '/src/data.js';
import Card from './Card';
import '/src/Components/card.css';

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
