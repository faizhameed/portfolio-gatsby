import React,{useState} from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import HomePage from "../components/homepage";

const IndexPage = () => {
  const [noShadow,setNoShadow] = useState(true)
  return (
    <Layout noShadow ={noShadow}>
      <Head title="Home" />
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </Layout>
  );
};

export default IndexPage;
