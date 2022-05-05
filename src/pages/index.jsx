import React,{useEffect, useState} from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import HomePage from "../components/homepage";
import useDimensions from '../hooks/useWindowDimensions'

const IndexPage = () => {
  const [noShadow,setNoShadow] = useState(true)
  const { height, width } = useDimensions();
useEffect(()=>{
  console.log(height,width)
},[height])
  
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
