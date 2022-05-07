import React from "react";
import cx from "classnames";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";
import throttle from "../utils/throttle";
import "../styles/index.scss";
import "prism-theme-one-dark/prism-onedark.css";

const Layout = ({ children,noShadow,setNoShadow }) => {

  const onScroll = throttle((e) => {
    const currentScrollY = e.target.scrollTop;
    if(noShadow){
      if(window.innerHeight-100<currentScrollY){
        setNoShadow(false)
      }
    }else{
      if(window.innerHeight-100>currentScrollY){
        setNoShadow(true)
      }
    }
  },300)
  return (
    <div onScroll={onScroll}  className={layoutStyles.body}>
      <Header noShadow ={noShadow} />
      <div className={cx(layoutStyles.container)}>
        <div className={layoutStyles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  setNoShadow:()=>{},
  noShadow:true
}

export default Layout;
