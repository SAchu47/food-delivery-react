import React, { FC, ReactElement, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AccountIcon, CartIcon, LikeIcon, SearchIcon } from '../../icons';
import './Navbar.css';

const Navbar: FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="nav_main">
      <Link to="/" className="title">
        <h3>Foodie</h3>
      </Link>
      <div className="nav_main_menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={menuOpen ? 'nav_main_links open' : 'nav_main_links close'}
      >
        <ul>
          <li>
            <NavLink
              className="links"
              to="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              to="/products"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              to="/categories"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              to="/#footer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/" className="links">
              <AccountIcon fill="#23A6F0" width={12} height={12} />
              Login/Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <SearchIcon fill="#23A6F0" width={16} height={16} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links">
              <CartIcon fill="#23A6F0" width={16} height={16} />1
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links">
              <LikeIcon fill="#23A6F0" width={16} height={16} />1
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
