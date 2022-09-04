import React from 'react';
import cigar from '../assets/cigar.png';
import cart from '../assets/cigars.png';
import '/home/jake/repos/cart/src/styles.css';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const NavBar = ({ inCart, handleShow }) => {
  // experimenting with different style methods for logo and cart image
  const logoSize = {
    height: '4rem',
    width: '3rem',
    alignItems: 'center',
  };
  const cartStyle = {
    cursor: 'pointer',
    height: '4rem',
    width: '4rem',
  };

  return (
    <nav className="nav">
      <div className="storeLogo">
        <Link to="/home">Good Sticks</Link>
        <img src={cigar} style={logoSize} alt="Cigar"></img>
      </div>
      <ul className="links">
        <CustomLink onClick={handleShow} to="home">
          Home
        </CustomLink>
        <CustomLink onClick={handleShow} to="shop">
          Shop
        </CustomLink>
      </ul>
      <div className="cart" onClick={handleShow}>
        <Link to="/cart">
          <img src={cart} style={cartStyle} alt="Cigar Box Shopping Cart"></img>
          <span className="inCart">{inCart}</span>
        </Link>
      </div>
    </nav>
  );
};
// applies "active" class to the link the user selects.
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
