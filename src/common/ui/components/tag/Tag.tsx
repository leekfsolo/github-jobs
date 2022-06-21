import React, { FC } from "react";

import styles from "./Tag.module.scss";

interface Props {
  title: string;
}

const Tag: FC<Props> = (props: Props) => {
  const { title } = props;

  return <div className={styles.tag}>{title}</div>;
};

export default Tag;
