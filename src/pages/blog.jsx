import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import Head from "../components/head";
import { otherBlogPosts } from "../data/blogPosts";

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM DD YYYY")
          }
        }
      }
    }
  `);
  console.log(data);
  const allPosts = [...data.allContentfulBlogPost.edges, ...otherBlogPosts];
  const sorted = allPosts.sort((a, b) => {
    var c = new Date(a.node.publishedDate);
    var d = new Date(b.node.publishedDate);
    return d - c;
  });
  console.log("allPosts sorted", allPosts, sorted);
  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((post, i) => {
            return (
              <li key={i} className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
