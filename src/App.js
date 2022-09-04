import NavBar from './Components/NavBar';
import Home from './Components/Home';
import 'src/styles.css';
import { Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleClick = (item) => {
    setQuantity(quantity + 1);
    if (!cart.includes(item)) {
      setCart([...cart, item]);
      item.quant++;
    } else if (cart.includes(item)) {
      item.quant++;
    }
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <NavBar handleShow={handleShow} inCart={quantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart inCart={cart} show={show} />} />
      </Routes>
    </div>
  );
}

export default App;
