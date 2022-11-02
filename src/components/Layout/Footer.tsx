import * as React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="flex justify-center items-center p-4"
    >{`${year} © All Rights Reserved.`}</footer>
  );
};

export default Footer;
