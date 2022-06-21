import React from "react";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
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
        <WorkOutlineOutlinedIcon />
      </form>
    </div>
  );
};

export default Hero;
