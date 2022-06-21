import React, { FC } from "react";
import { Job } from "../../model";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

import styles from "./JobCard.module.scss";

interface Props {
  job: Job;
}

const JobCard: FC<Props> = (props: Props) => {
  const { job } = props;
  const { image, location, name, role, isFullTime, time } = job;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p className={styles.role}>{role}</p>
        <div className={styles.extend}>
          {isFullTime && <p>Full time</p>}
          <div className={styles.part}>
            <span className={styles.location}>
              <PublicOutlinedIcon />
              {location}
            </span>
            <span className={styles.time}>
              <QueryBuilderOutlinedIcon />
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
