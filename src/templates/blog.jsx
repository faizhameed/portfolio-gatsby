import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Img from "gatsby-image";
import Head from "../components/head";

import styles from "./blog.module.scss";

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            fixed(quality: 100, resizingBehavior: NO_CHANGE) {
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
const Blog = (props) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((o) => o.type === "code")
        ) {
          return (
            <pre className={styles.rich_code}>
              <code>{node.content[0].value}</code>
            </pre>
          );
        }
        return <Text>{children}</Text>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => <Img {...node.data.target} />,
      [BLOCKS.EMBEDDED_ENTRY]: (text) => (
        <pre>
          <code>{text}</code>
        </pre>
      ),
    },
  };

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
