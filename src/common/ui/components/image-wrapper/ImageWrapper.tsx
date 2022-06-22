import React, { FC } from "react";

import styles from "./ImageWrapper.module.scss";

interface Props {
  url: string;
  size?: "sm" | "md" | "lg";
}

const ImageWrapper: FC<Props> = (props: Props) => {
  const { url, size = "md" } = props;

  return (
    <div className={`${styles.image} ${styles[size]}`}>
      <img src={url} alt="" />
    </div>
  );
};

export default ImageWrapper;
