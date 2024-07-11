import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BookApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/manager" className="nav-link">Manager</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link" >Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
