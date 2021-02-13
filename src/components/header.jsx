import React from "react";
import { Link } from "gatsby";
/* import "./header.module.scss" */
import styles from "./header.module.scss"; //css modules

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <Link className={styles.title} to="/">
          <div className={styles.logoName}>Faiz.H</div>
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
