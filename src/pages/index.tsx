import * as React from "react";
import Layout from "../components/Layout";
import AllCategories from "../components/AllCategories";
import { Head } from "../components/Head";

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <AllCategories />
    </Layout>
  );
};

export default IndexPage;
