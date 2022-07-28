import React, { useEffect, useState } from "react";
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
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrlPath();
  }, []);

  const setUrlPath = () => {
    setUrl(typeof window !== "undefined" ? window.location.pathname : "");
  };
  console.log("url", url);
  const { HOME, CONTACT, BLOG } = URL_CONSTANTS;
  return (
    <header
      className={cx(styles.header, {
        [styles.shadow]: !noShadow,
      })}
    >
      <div className={styles.contentWrapper}>
        <Link className={styles.title} to="/" onClick={setUrlPath}>
          <div className={styles.logoName}>FH</div>
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to={HOME}
              onClick={setUrlPath}
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
              onClick={setUrlPath}
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
              onClick={setUrlPath}
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
