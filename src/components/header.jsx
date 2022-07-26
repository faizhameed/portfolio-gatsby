import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
/* import "./header.module.scss" */
import { AiTwotoneEdit, AiFillHome, AiFillContacts } from "react-icons/ai";
import styles from "./header.module.scss"; //css modules

const Header = ({ noShadow }) => {
  return (
    <header
      className={cx(styles.header, {
        [styles.shadow]: !noShadow,
      })}
    >
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
              <AiFillHome />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/contact"
            >
              <AiFillContacts />
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/blog"
            >
              <AiTwotoneEdit />
              <p>Blog</p>
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
