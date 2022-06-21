import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form action="#">
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
        <button>Search</button>
        <WorkIcon />
      </form>
    </div>
  );
};

export default Hero;
