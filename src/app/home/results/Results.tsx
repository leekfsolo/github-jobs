import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Job } from "../../model";
import JobCard from "../job-card";

import styles from "./Results.module.scss";

interface Props {
  jobList: Array<Job>;
}

const Results: FC<Props> = (props: Props) => {
  const { jobList } = props;

  return (
    <ul className={styles.results}>
      {jobList.map((job, idx) => (
        <li key={idx}>
          <Link to={`${job.id}`}>
            <JobCard job={job} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Results;
