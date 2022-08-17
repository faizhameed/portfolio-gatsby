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
import { BsMoonStarsFill } from "react-icons/bs";
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
              {url === HOME ? (
                <AiFillHome color={isDarkMode && "#fff"} />
              ) : (
                <AiOutlineHome color={isDarkMode && "#fff"} />
              )}
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
                <AiFillContacts color={isDarkMode && "#fff"} />
              ) : (
                <AiOutlineContacts color={isDarkMode && "#fff"} />
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
              {url.startsWith(BLOG) ? (
                <AiTwotoneEdit color={isDarkMode && "#fff"} />
              ) : (
                <AiOutlineEdit color={isDarkMode && "#fff"} />
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
        <div className={styles.mode}>
          {isDarkMode ? (
            <BsMoonStarsFill
              alt="dark mode"
              color="#fff"
              className={styles.moon}
              size={25}
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
