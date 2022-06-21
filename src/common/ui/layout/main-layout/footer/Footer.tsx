import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        created by <span>username</span> - devChallenges.io
      </p>
    </footer>
  );
};

export default Footer;
