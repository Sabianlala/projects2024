import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Menu
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/dogs" className="dropdown-item">
                      Dogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/cats" className="dropdown-item">
                      Cats
                    </Link>
                  </li>
                  <li>
                    <Link to="/birds" className="dropdown-item">
                      Birds
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
