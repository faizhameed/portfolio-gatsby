import React, { useContext } from "react";
import cx from "classnames";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import ThemeContext from "../context/ThemeContext";
import throttle from "../utils/throttle";
import "../styles/index.scss";
import "prism-theme-one-dark/prism-onedark.css";

const Layout = ({ children, noShadow, setNoShadow }) => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const onScroll = throttle((e) => {
    const currentScrollY = e.target.scrollTop;
    if (noShadow) {
      if (window.innerHeight - 100 < currentScrollY) {
        setNoShadow(false);
      }
    } else {
      if (window.innerHeight - 100 > currentScrollY) {
        setNoShadow(true);
      }
    }
  }, 300);

  return (
    <div className={dark ? "dark" : "light"}>
      <div onScroll={onScroll} className={layoutStyles.body}>
        <Header
          noShadow={noShadow}
          isDarkMode={dark}
          setIsDarkMode={toggleDark}
        />
        <div className={cx(layoutStyles.container)}>
          <div className={layoutStyles.content}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  setNoShadow: () => {},
  noShadow: true,
};

export default Layout;
