import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ICategory } from "../types";
import styled from "styled-components";
import slugify from "slugify";
import { PATH_PREFIX } from "../variables";

export interface ICategoryCard extends ICategory {}

const Wrapper = styled.article`
  cursor: pointer;
  border: 2px dashed #444;
  padding: 10px;
  box-shadow: 5px 7px 9px rgb(0 0 0 / 20%);

  :hover {
    transform: rotateZ(-1.5deg) scale(1.1);
    transition: all ease-out 0.2s;
  }
`;

export const CategoryCard: React.FC<ICategoryCard> = ({
  id,
  name,
  thumbnail,
  tooltip,
}) => {
  const image = getImage(thumbnail);
  const slug = slugify(name, {
    lower: true,
  });
  return (
    <Wrapper>
      <Link to={`/${PATH_PREFIX}/${slug}`} key={id}>
        <GatsbyImage
          image={image as any}
          alt={name}
          key={id}
          className="category-card"
          title={tooltip}
        />
      </Link>
    </Wrapper>
  );
};
