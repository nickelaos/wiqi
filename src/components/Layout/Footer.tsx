import * as React from "react";
import * as styles from "../../styles/footer.module.scss";

const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className={styles.footer}>{`${year} © All Rights Reserved.`}</footer>;
};

export default Footer;
