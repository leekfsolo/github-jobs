import { Pagination } from "@mui/material";
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
    <div className={styles.results}>
      <ul>
        {jobList.map((job, idx) => (
          <li key={idx}>
            <Link to={job.name}>
              <JobCard job={job} />
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
};

export default Results;
