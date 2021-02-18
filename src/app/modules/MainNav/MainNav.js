import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <p className="nav-link">Showing 1-20 of 1000 products</p>
            </li>
            <li className="nav-item active">
              <p className="nav-link" href="link">
                Refine by |
              </p>
            </li>
            <Link className="nav-item dropdown" to="/">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Price
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="link">
                  Style
                </a>
                <a className="dropdown-item" href="link">
                  Brand
                </a>
              </div>
            </Link>
            <li className="nav-item active">
              <p className="nav-link" href="link">
                Sort by |
              </p>
            </li>
            <Link className="nav-item dropdown" to="/">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Best Seller
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="link">
                  Review
                </a>
              </div>
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default MainNav;
