import React, { FC } from "react";
import { Job } from "../../model";

import styles from "./JobCard.module.scss";
import Tag from "../../../common/ui/components/tag";
import SupportiveText from "../../../common/ui/components/supportive-text";
import ImageWrapper from "../../../common/ui/components/image-wrapper";

interface Props {
  job: Job;
}

const JobCard: FC<Props> = (props: Props) => {
  const { job } = props;
  const { image, location, name, role, isFullTime, time } = job;

  return (
    <div className={styles.card}>
      <ImageWrapper url={image} />
      <div className={styles.info}>
        <h4>{name}</h4>
        <p className={styles.role}>{role}</p>
        <div className={styles.extend}>
          {isFullTime && <Tag title="Full time" />}
          <div className={styles.part}>
            <SupportiveText type="location" title={location} />
            <SupportiveText type="time" title={time} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
