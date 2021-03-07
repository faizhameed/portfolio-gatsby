import { Link } from "gatsby";
import React from "react";
import styles from "./index.module.scss";

const ProjectCard = ({ projectTitle, imgUrl, description, link }) => {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <div className={styles.prj_title}>{projectTitle}</div>
        <div>
          <img className={styles.image} src={imgUrl} alt="project" />
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
