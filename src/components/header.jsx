import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
/* import "./header.module.scss" */
import {
  AiTwotoneEdit,
  AiFillHome,
  AiFillContacts,
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineEdit,
} from "react-icons/ai";
import styles from "./header.module.scss"; //css modules
import { URL_CONSTANTS } from "../config/urlConstants";

const Header = ({ noShadow }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const { HOME, CONTACT, BLOG } = URL_CONSTANTS;
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
              to={HOME}
            >
              {url === HOME ? <AiFillHome /> : <AiOutlineHome />}
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to={CONTACT}
            >
              {url === CONTACT ? <AiFillContacts /> : <AiOutlineContacts />}
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to={BLOG}
            >
              {url === URL_CONSTANTS.BLOG ? (
                <AiTwotoneEdit />
              ) : (
                <AiOutlineEdit />
              )}
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
