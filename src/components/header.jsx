import React from "react";
import { Link } from "gatsby";
import cx from 'classnames'
/* import "./header.module.scss" */
import styles from "./header.module.scss"; //css modules

const Header = ({noShadow}) => {
  console.log("noShadow",noShadow)
  return (
    <header className={cx(styles.header,{
      [styles.shadow]:!noShadow
    })}>
      <div className={styles.contentWrapper}>
        <Link className={styles.title} to="/">
          <div className={styles.logoName}>FH</div>
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
              to="/blog"
            >
              Blog
            </Link>
          </li>
          {/* <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/book_review"
            >
              Book Review
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
