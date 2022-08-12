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
import { URL_CONSTANTS } from "../config/urlConstants";
import MoonSvg from "../assets/moon.svg";
import SunSvg from "../assets/sun.svg";

import styles from "./header.module.scss"; //css modules

const Header = ({ noShadow, isDarkMode, setIsDarkMode }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrlPath();
  }, []);

  const setUrlPath = () => {
    setUrl(typeof window !== "undefined" ? window.location.pathname : "");
  };
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
              {url.startsWith(CONTACT) ? (
                <AiFillContacts />
              ) : (
                <AiOutlineContacts />
              )}
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
              {url.startsWith(BLOG) ? <AiTwotoneEdit /> : <AiOutlineEdit />}
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
        <div className={styles.mode}>
          {isDarkMode ? (
            <img
              src={MoonSvg}
              alt="dark mode"
              onClick={() => setIsDarkMode(false)}
            />
          ) : (
            <img
              src={SunSvg}
              alt="light mode"
              onClick={() => setIsDarkMode(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
