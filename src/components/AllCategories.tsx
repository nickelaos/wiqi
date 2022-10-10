import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { CategoryCard } from "./CategoryCard";

const allCategoriesQuery = graphql`
  {
    allContentfulCategory(filter: { enabled: { eq: true } }) {
      nodes {
        name
        id
        tooltip
        thumbnail {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  margin-bottom: 20px;
`;

const AllCategories = () => {
  const data = useStaticQuery(allCategoriesQuery);
  const nodes = data.allContentfulCategory.nodes;
  return (
    <Wrapper>
      {nodes &&
        nodes.map((node: any) => {
          //const { id, name, thumbnail, tooltip } = node;
          return <CategoryCard {...node} />;
        })}
    </Wrapper>
  );
};

export default AllCategories;
