import React, { ChangeEvent, useEffect, useReducer, useState } from "react";

import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";
import styles from "./Home.module.scss";
import { Job } from "../model";
import Sortings from "./sortings";
import Results from "./results";
import { doGetCompany, doGetJobList } from "../api";
import { Pagination } from "@mui/material";
import { filteredReducer } from "./reducer";
import { INIT_FILTERED_VALUES } from "../../common/utils/constants";
import { getDateHasPassed } from "../../common/utils/helpers/getDateHasPassed";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobList, setJobList] = useState<Array<Job>>([]);
  const [page, setPage] = useState<number>(1);
  const [filteredValues, setFilteredValues] = useReducer(
    filteredReducer,
    INIT_FILTERED_VALUES
  );

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { category, level } = filteredValues;
      const params = {
        page,
      };
      category.length > 0 && Object.assign(params, { category });
      level.length > 0 && Object.assign(params, { level });

      const jobResponse = await doGetJobList(params);
      const jobResponseData = jobResponse.data.results;

      const jobData: Array<Job> = jobResponseData
        .slice(0, 5)
        .map((data: any) => {
          const time = getDateHasPassed(data.publication_date);
          const locations = data.locations.map(
            (location: any) => location.name
          );

          return {
            name: data.company.name,
            role: data.name,
            locations,
            time,
            id: data.id,
          };
        });

      const images: Array<{ id: number; image: string }> = [];

      for (const index in jobData) {
        const { id } = jobResponseData[index].company;
        if (images.some((image) => image.id === id)) {
          const image = images[images.length - 1];
          images.push(image);
          jobData[index].image = image.image;
        } else {
          const companyResponse = await doGetCompany(id);
          const companyResponseData = companyResponse.data;
          const image = companyResponseData.refs.logo_image;
          jobData[index].image = image;
          images.push({ id, image });
        }
      }

      setJobList(jobData);
      setIsLoading(false);
    };

    fetchData();
  }, [page, setIsLoading, filteredValues]);

  return (
    <MainLayout isOpen={isLoading}>
      <Hero setIsLoading={setIsLoading} />
      <div className={styles.content}>
        <Sortings setFilteredValues={setFilteredValues} />
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
