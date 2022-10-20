import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import slugify from "slugify";
import { PATH_PREFIX } from "../variables";

const CategoryPage = (props: any) => {
  const { node } = props.pageContext;

  const categorySlug = slugify(node.name, {
    lower: true,
  });

  return (
    <Layout>
      <div>
        {node.article.map((item: any) => {
          const title = item.title.title;
          const itemSlug = slugify(title, {
            lower: true,
          });
          return (
            <Link
              to={`/${PATH_PREFIX}/${categorySlug}/${itemSlug}`}
              key={item.id}
              className="mb-2"
            >
              <h4>{title}</h4>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default CategoryPage;
