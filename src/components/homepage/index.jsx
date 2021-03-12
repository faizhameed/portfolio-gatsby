import React from "react";
import styles from "./index.module.scss";
import CoderImg from "../../assets/svg/coder.svg";
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
            Professional web developer specialised in ReactJS, NodeJs, GatsbyJs,
            NextJs and Electron. I Have 4 years of experience in web
            development. I believe in creating value and success to my clients
            through my work.
          </p>
          <div>
            <p>
              Mechanical Engineer by degree. I worked for a company in Saudi
              Arabia. The work culture didnt fit me, I was missing something in
              life. It was then I started going deeper into doing things that
              gives me pleasure
            </p>
          </div>
          <p>Now Let's give life to your Dream</p>
        </div>
        <img className={styles.coderImg} src={CoderImg} alt="coder" />
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
