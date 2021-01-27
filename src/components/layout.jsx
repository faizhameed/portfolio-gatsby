import React from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/potta-one";
import "@fontsource/lato";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
