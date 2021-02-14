import React from "react";
import styles from "./index.module.scss";
import CoderImg from "../../assets/svg/coder.svg";
import { MyProjects } from "./enum";

const HomePage = () => {
  return (
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
          <p>
            Professional web developer specialised in ReactJS, NodeJs, GatsbyJs,
            NextJs and Electron. I Have 4 years of experience in web
            development. I believe in creating value and success to my clients
            through my work.
          </p>
          <p>Now Let's give life to your Dream</p>
        </div>
        <img className={styles.coderImg} src={CoderImg} alt="coder" />
      </div>
      <div>
        <h2 className={styles.prj_heading}>My Works</h2>
        <div>
          {MyProjects.map((item) => (
            <div>
              <div className={styles.prj_title}>{item.name}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
