import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";

export const query = graphql`
  query($slug: String!) {
    contentfulMyProjects(slug: { eq: $slug }) {
      description
      projectTitle
      content {
        raw
      }
    }
  }
`;
const Project = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <Head title={props.data.contentfulMyProjects.projectTitle} />
      <h1>{props.data.contentfulMyProjects.projectTitle}</h1>
      <p>{props.data.contentfulMyProjects.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulMyProjects.content.raw,
        options
      )}
    </Layout>
  );
};

export default Project;
