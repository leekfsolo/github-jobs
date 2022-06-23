import React, { ChangeEvent, useEffect, useState } from "react";

import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";
import styles from "./Home.module.scss";
import { Job } from "../model";
import Sortings from "./sortings";
import Results from "./results";
import { doGetCompany, doGetJobList } from "../api";
import { Pagination } from "@mui/material";
import { getDateHasPassed } from "../../common/utils/helpers/getDateHasPassed";
import ImageWrapper from "../../common/ui/components/image-wrapper";
import NoData from "../../common/ui/assets/images/empty.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [company, setCompany] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [jobList, setJobList] = useState<Array<Job>>([]);
  const [page, setPage] = useState<number>(1);

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const params = {
        page,
      };
      location.length > 0 && Object.assign(params, { location });
      company.length > 0 && Object.assign(params, { company });

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
  }, [page, setIsLoading, location, company]);

  return (
    <MainLayout isOpen={isLoading}>
      <Hero setCompany={setCompany} />
      <div className={styles.content}>
        <Sortings setLocation={setLocation} location={location} />
        {jobList.length > 0 ? (
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
        ) : (
          <div className={styles.noData}>
            <ImageWrapper url={NoData} />
            <p>No data found</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
