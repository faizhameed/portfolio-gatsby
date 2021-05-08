import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Image from "gatsby-image";
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
            fixed(quality: 100, resizingBehavior: SCALE) {
              width
              height
              src
              srcSet
            }
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => <Image {...node.data.target} />,
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
