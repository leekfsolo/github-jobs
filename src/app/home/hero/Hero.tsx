import React, { FC, FormEvent, useRef } from "react";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import styles from "./Hero.module.scss";

interface Props {
  setCompany: (company: string) => void;
}

const Hero: FC<Props> = (props: Props) => {
  const { setCompany } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current && setCompany(inputRef.current.value);
  };
  const searchCompanyHandler = () => {
    inputRef.current && inputRef.current.value === "" && setCompany("");
  };

  return (
    <div className={styles.hero}>
      <form action="#" onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          ref={inputRef}
          onChange={searchCompanyHandler}
          required
        />
        <button>Search</button>
        <WorkOutlineOutlinedIcon />
      </form>
    </div>
  );
};

export default Hero;
