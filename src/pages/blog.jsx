import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import Head from "../components/head";
import { mediumPosts } from "../data/blogPosts";

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
            excerpt
            featuredImage {
              fixed(quality: 50) {
                src
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const allPosts = [...data.allContentfulBlogPost.edges, ...mediumPosts].sort(
    (a, b) => {
      var c = new Date(a.node.publishedDate);
      var d = new Date(b.node.publishedDate);
      return d - c;
    }
  );
  console.log("allPosts sorted", allPosts);
  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h2>Blog</h2>
        <ol className={blogStyles.posts}>
          {allPosts.map((post, i) => {
            if (post.node.url) {
              return (
                <li key={post.node.title} className={blogStyles.post}>
                  <a href={post.node.url} target="__blank">
                    <img src={post.node.Img} alt="" />
                    <h2>{post.node.title}</h2>
                    <p>{post.node.publishedDate}</p>
                    <p className={blogStyles.excerpt}>{post.node.excerpt}</p>
                  </a>
                </li>
              );
            }
            return (
              <li key={post.node.title} className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <img src={post.node.featuredImage.fixed.src} alt="" />
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                  <p className={blogStyles.excerpt}>{post.node.excerpt}</p>
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
