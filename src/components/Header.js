import React from "react";
import { NavLink } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome To Blog</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Blogs List
        </NavLink>

        <NavLink to="/add" className="link" activeClassName="active">
          Add Blog
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
