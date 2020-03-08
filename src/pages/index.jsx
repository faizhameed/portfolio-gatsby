import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <React.Fragment>
        <div>
          <h1>Faiz Hameed</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default IndexPage;
