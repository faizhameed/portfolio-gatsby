import Layout from "../components/layout";
import React from "react";
import { Link } from "gatsby";
import Head from "../components/head";

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">go to home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
