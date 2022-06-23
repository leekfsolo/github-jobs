import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Tag from "../../common/ui/components/tag";
import MainLayout from "../../common/ui/layout/main-layout";
import { Job } from "../model";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./Posts.module.scss";
import SupText from "../../common/ui/components/supportive-text";
import ImageWrapper from "../../common/ui/components/image-wrapper";
import { INIT_JOB } from "../../common/utils/constants";
import parse from "html-react-parser";
import { doGetCompany, doGetJob } from "../api";
import { getDateHasPassed } from "../../common/utils/helpers/getDateHasPassed";

const Posts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [job, setJob] = useState<Job>(INIT_JOB);
  const { id = "1" } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await doGetJob(parseInt(id));
      const responseData = response.data;

      const {
        publication_date,
        name,
        contents,
        company,
        locations: dataLocations,
      } = responseData;
      const imageResponse = await doGetCompany(company.id);
      const imageResponseData = imageResponse.data;

      const image = imageResponseData.refs.logo_image;
      const locations = dataLocations.map((location: any) => location.name);
      const description = contents.replaceAll("<br>", "<br/>");
      const time = getDateHasPassed(publication_date);
      const jobData = {
        description,
        locations,
        role: name,
        name: company.name,
        time,
        image,
      };

      setJob(jobData);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <MainLayout isOpen={isLoading}>
      <div className={styles.posts}>
        <div className={styles.sidebar}>
          <Link className={styles.backToPage} to="/">
            <ArrowRightAltIcon className={styles.flip} /> Back to search
          </Link>
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
              <Tag title="Full time" />
            </div>
            <SupText type="time" title={`${job.time} days ago`} />
          </div>

          <div className={styles.company}>
            <div className={styles["company-desc"]}>
              <ImageWrapper url={job.image} />
              <div className={styles.info}>
                <h4>{job.name}</h4>
                {job.locations.length > 0 && (
                  <SupText type="location" title={job.locations[0]} />
                )}
              </div>
            </div>
            <div className={styles["job-desc"]}>{parse(job.description)}</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Posts;
