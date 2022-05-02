import React from "react";
import cx from "classnames";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";
import "prism-theme-one-dark/prism-onedark.css";

const Layout = ({ children,noShadow }) => {
  return (
    <div className={layoutStyles.body}>
      <Header noShadow ={noShadow} />
      <div className={cx(layoutStyles.container,{
        [layoutStyles.padding]:!noShadow
      })}>
        <div className={layoutStyles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
