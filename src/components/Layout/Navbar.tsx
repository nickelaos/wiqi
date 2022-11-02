import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
//import * as styles from "../../styles/navbar.module.scss";

const Navbar = () => {
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

  const { description, title } = data.site.siteMetadata;

  return (
    <div className="border-b border-primary ml-6 mr-6">
      <nav className="flex flex-col justify-center items-center pb-6">
        <Link to="/">
          <h1 className="text-primary">{title}</h1>
        </Link>
        <div className="links">
          <span>{description}</span>
          {/*<Link to="/">Home</Link>
                <Link to="/">Categories</Link>
                <Link to="/">Profile</Link>*/}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
