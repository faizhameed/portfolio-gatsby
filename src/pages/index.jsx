import React from "react";
import CoderImg from "../assets/svg/coder.svg";

import Layout from "../components/layout";
import Head from "../components/head";

import styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <React.Fragment>
        <div className={styles.container}>
          <div>
            <h1>Faiz Hameed</h1>
            <p>Full Stack Web Developer</p>
          </div>
          <img className={styles.coderImg} src={CoderImg} alt="coder" />
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default IndexPage;
