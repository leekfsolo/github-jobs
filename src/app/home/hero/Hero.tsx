import React, { FC, FormEvent } from "react";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import styles from "./Hero.module.scss";

interface Props {
  setIsLoading: (isLoading: boolean) => void;
  setLocation: (location: string) => void;
}

const Hero: FC<Props> = (props: Props) => {
  const { setIsLoading, setLocation } = props;
  const searchJobHandler = (e: FormEvent<HTMLInputElement>) => {
    setLocation(e.currentTarget.value);
  };

  return (
    <div className={styles.hero}>
      <form action="#">
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          required
          onChange={searchJobHandler}
        />
        <button>Search</button>
        <WorkOutlineOutlinedIcon />
      </form>
    </div>
  );
};

export default Hero;
