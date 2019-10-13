import React from "react";
import { Link } from "react-router-dom";


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (

  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/upload">upload</Link>
        </li>
        <li>
          <Link to="/list">list</Link>
        </li>
        <li>
          <Link to="/map">map</Link>
        </li>
      </ul>
    </nav>
  </header>

);

export default Header;