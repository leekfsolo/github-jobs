import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../common/ui/layout/main-layout";
import { Job } from "../model";

import styles from "./Posts.module.scss";

const Posts = () => {
  const [job, setJob] = useState<Job>({
    name: "Kasisto",
    image:
      "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
    location: "New York",
    isFullTime: true,
    role: "Front-End Software Engineer",
    time: "5 days ago",
  });
  const { id } = useParams();

  return (
    <MainLayout>
      <div className={styles.posts}>
        <div className={styles.sidebar}>
          <p>Back to search</p>
          <div className={styles.apply}>
            <h4>How to apply</h4>
            <p>
              Please email a copy of your resume and online portfolio to{" "}
              <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span>
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.job}>
            <div className={styles["job-name"]}>
              <h4>{job.role}</h4>
              {job.isFullTime && <span>Full time</span>}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Posts;
