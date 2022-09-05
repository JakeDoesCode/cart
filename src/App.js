import NavBar from './Components/NavBar';
import Home from './Components/Home';
import '/home/jake/repos/cart/src/styles.css';
import { Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (item) => {
    const alreadyInCart = cart.find((x) => x.id === item.id);
    if (alreadyInCart) {
      setQuantity(quantity + 1);
      const newCartItem = cart.map((x) =>
        x.id === item.id
          ? { ...alreadyInCart, quant: alreadyInCart.quant + 1 }
          : x
      );
      setCart(newCartItem);
    } else {
      setQuantity(quantity + 1);
      const newCartItem = [...cart, { ...item, quant: 1 }];
      setCart(newCartItem);
    }
  };

  const onRemove = (item) => {
    const alreadyInCart = cart.find((x) => x.id === item.id);
    if (alreadyInCart.quant === 1) {
      setQuantity(quantity - 1);
      const newCartItem = cart.filter((x) => x.id !== item.id);
      setCart(newCartItem);
    } else {
      setQuantity(quantity - 1);
      const newCartItem = cart.map((x) =>
        x.id === item.id
          ? { ...alreadyInCart, quant: alreadyInCart.quant - 1 }
          : x
      );
      setCart(newCartItem);
    }
  };

  console.log(cart);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <NavBar handleShow={handleShow} quantity={quantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop onAdd={onAdd} />} />
        <Route
          path="/cart"
          element={
            <Cart
              inCart={cart}
              setCart={setCart}
              show={show}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
