import React, { FC, ReactNode } from "react";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

import styles from "./SupText.module.scss";

interface Props {
  type?: string;
  title?: string;
}

const SupText: FC<Props> = (props: Props) => {
  const { type, title = "No text" } = props;
  let text: ReactNode = title;
  if (type) {
    if (type === "location")
      text = (
        <>
          <PublicOutlinedIcon />
          {title}
        </>
      );
    else if (type === "time")
      text = (
        <>
          <QueryBuilderOutlinedIcon />
          {title}
        </>
      );
  }

  return <span className={styles.supText}>{text}</span>;
};

export default SupText;
