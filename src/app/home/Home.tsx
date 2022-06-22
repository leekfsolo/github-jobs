import React, { ChangeEvent, useEffect, useState } from "react";

import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";

import styles from "./Home.module.scss";
import { Job } from "../model";
import Sortings from "./sortings";
import Results from "./results";
import { doGetCompany, doGetJobList } from "../api";
import { Pagination } from "@mui/material";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobList, setJobList] = useState<Array<Job>>([]);
  const [page, setPage] = useState<number>(1);

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const jobResponse = await doGetJobList({ page });
      const jobResponseData = jobResponse.data.results;

      const jobData: Array<Job> = jobResponseData
        .slice(0, 5)
        .map((data: any) => {
          const public_date = new Date(data.publication_date);
          const now = new Date();
          const date_has_passed = Math.floor(
            (now.getTime() - public_date.getTime()) / 1000 / 3600 / 24
          );
          const locations = data.locations.map(
            (location: any) => location.name
          );

          return {
            name: data.company.name,
            role: data.name,
            locations,
            time: date_has_passed,
            description: data.contents,
          };
        });

      for (const index in jobData) {
        const companyResponse = await doGetCompany(
          jobResponseData[index].company.id
        );
        const companyResponseData = companyResponse.data;
        jobData[index].image = companyResponseData.refs.logo_image;
      }

      setJobList(jobData);
      setIsLoading(false);
    };

    fetchData();
  }, [page, setIsLoading]);

  return (
    <MainLayout isOpen={isLoading}>
      <Hero setIsLoading={setIsLoading} />
      <div className={styles.content}>
        <Sortings />
        <div className={styles["job-list"]}>
          <Results jobList={jobList} />
          <Pagination
            count={99}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={handleChangePage}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
