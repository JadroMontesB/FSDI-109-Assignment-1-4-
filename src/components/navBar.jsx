import "./navBar.css";
import { Link  } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";
import Weather from "./weather";

const NavBar = () => {
  const {cart, user} = useContext(storeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          StarWarsFanSite 🚀⚔️
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <Weather />
          <form className="d-flex">
            <Link className="btn btn-outline-light" to="/cart">              
              <span className="badge bg-primary">{cart.length}</span>
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;