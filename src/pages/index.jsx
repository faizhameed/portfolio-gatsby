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
          <div className={styles.content}>
            <div className={styles.title}>Hello !</div>
            <h2 className={styles.title}>
              <span style={{ fontStyle: "italic", fontWeight: "lighter" }}>
                I'm{" "}
              </span>
              Faiz Hameed
            </h2>
            <p style={{ fontWeight: "bolder" }}>
              Professional web developer specialised in ReactJS, NodeJs,
              GatsbyJs, NextJs and Electron. I Have 4 years of experience in web
              development. I believe in creating value and success to my clients
              through my work.
            </p>
            <p>Now Let's give life to your Dream</p>
          </div>
          <img className={styles.coderImg} src={CoderImg} alt="coder" />
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default IndexPage;
