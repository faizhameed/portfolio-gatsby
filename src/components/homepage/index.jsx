import React from "react";
import styles from "./index.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "../ProjectCard";
const HomePage = () => {
  const projectsList = useStaticQuery(graphql`
    query {
      allContentfulMyProjects {
        edges {
          node {
            createdAt
            projectTitle
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
          <div className={styles.title}>Hello !</div>
          <h2 className={styles.title}>
            <span>I'm </span>
            <span className={styles.name}>Faiz Hameed</span>
          </h2>
          <p>
            Professional developer specialised in ReactJS, NodeJs, GatsbyJs,
            NextJs and Electron
          </p>
          <div></div>
          <p>Now Let's give life to your Dream</p>
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
