import React from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/quicksand";
import "@fontsource/lato";
import "@fontsource/kristi";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

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
