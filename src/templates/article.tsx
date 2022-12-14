import * as React from "react";
import Layout from "../components/Layout";
import { Head } from "../components/Head";

const ArticlePage = (props: any) => {
  const { node } = props.pageContext;
  const content = JSON.parse(node.content.raw);

  const c = content.content[0].content[0].value; ///

  return (
    <Layout>
      <Head title={node.title.title} />
      <h1>{node.title.title}</h1>
      <div className="max-w-full">{c}</div>
    </Layout>
  );
};

export default ArticlePage;
