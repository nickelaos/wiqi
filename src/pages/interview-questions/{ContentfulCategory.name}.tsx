import * as React from "react";
import Layout from "../../components/Layout";

const CategoryPage = (props: any) => {
  console.log(props); //
  const { name } = props.pageContext;
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

export default CategoryPage;
