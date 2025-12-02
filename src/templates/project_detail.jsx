import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Head from "../components/head";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

export const query = graphql`
  query($slug: String!) {
    contentfulMyProjects(slug: { eq: $slug }) {
      description
      projectTitle
      content {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            gatsbyImageData(quality: 100, resizingBehavior: SCALE) 
          }
        }
      }
    }
  }
`;
const Project = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return <GatsbyImage image={gatsbyImageData} alt="" />;
      },
    },
  };
  return (
    <Layout>
      <Head title={props.data.contentfulMyProjects.projectTitle} />
      <h1>{props.data.contentfulMyProjects.projectTitle}</h1>
      <p>{props.data.contentfulMyProjects.publishedDate}</p>
      {renderRichText(props.data.contentfulMyProjects.content, options)}
    </Layout>
  );
};

export default Project;
