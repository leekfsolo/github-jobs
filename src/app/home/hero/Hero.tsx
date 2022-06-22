import React, { FC, FormEventHandler } from "react";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import styles from "./Hero.module.scss";

interface Props {
  setIsLoading: (isLoading: boolean) => void;
}

const Hero: FC<Props> = (props: Props) => {
  const { setIsLoading } = props;

  const searchJobHandler = () => {
    // setIsLoading(true);
  };

  return (
    <div className={styles.hero}>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          searchJobHandler();
        }}
      >
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          required
        />
        <button>Search</button>
        <WorkOutlineOutlinedIcon />
      </form>
    </div>
  );
};

export default Hero;
