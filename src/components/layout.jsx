import React from "react";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";
import "prism-theme-one-dark/prism-onedark.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.body}>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
