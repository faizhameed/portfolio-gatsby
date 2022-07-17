import React,{useEffect, useState} from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import HomePage from "../components/homepage";
import useWindowDimensions from '../hooks/useWindowDimensions'

const IndexPage = () => {
  const [noShadow,setNoShadow] = useState(true)
  const { height, width } = useWindowDimensions();
useEffect(()=>{
  console.log(height,width)
},[height])
  
  return (
    <Layout noShadow ={noShadow} setNoShadow={setNoShadow}>
      <Head title="Home" />
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
