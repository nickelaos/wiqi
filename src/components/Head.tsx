import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface IHead {
  title?: string;
  description?: string;
}

export const Head: React.FC<IHead> = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const {
    title: siteTitle,
    description: siteDescription,
  } = data.site.siteMetadata;

  return (
    <>
      <title>{`${siteTitle} | ${title || siteDescription}`}</title>
      <meta name="description" content={description || siteDescription} />
    </>
  );
};
