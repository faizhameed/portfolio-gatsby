import React from "react";
import { HOMEPAGE_DATA } from "../../config/static";
import ProjectCard from "../ProjectCard";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./index.module.scss";
const HomePage = () => {
  const projectsList = useStaticQuery(graphql`
    query {
      allContentfulMyProjects {
        edges {
          node {
            createdAt
            projectTitle
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            projectImage {
              file {
                url
              }
            }
            description
            id
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{HOMEPAGE_DATA.greet}</div>
          <h2 className={styles.title}>
            <span>I'm </span>
            <span className={styles.name}>{HOMEPAGE_DATA.name}</span>
          </h2>
          <p>
            {HOMEPAGE_DATA.tagline}
          </p>
        </div>
      </div>
      <div>
        <h2 className={styles.prj_heading}>My Works</h2>
        <div className={styles.project_container}>
          {projectsList.allContentfulMyProjects.edges.map((project, i) => (
            <ProjectCard
              projectTitle={project.node.projectTitle}
              imgUrl={project.node.projectImage.file.url}
              description={project.node.description}
              link={`/project_detail/${project.node.slug}`}
              key={project.node.id}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
