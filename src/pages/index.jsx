import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import HomePage from "../components/homepage";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </Layout>
  );
};

export default IndexPage;
