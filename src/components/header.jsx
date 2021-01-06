import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Logo from "../assets/logo.png";
/* import "./header.module.scss" */
import headerStyles from "./header.module.scss"; //css modules

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h4>
        <Link className={headerStyles["title"]} to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </h4>
      <ul className={headerStyles["navList"]}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact Page
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About Page
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            Blog Page
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
