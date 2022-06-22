import React, { useState } from "react";

import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";

import styles from "./Home.module.scss";
import { Job } from "../model";
import Loading from "../../common/ui/components/loading";
import Sortings from "./sortings";
import Results from "./results";

const Home = () => {
  const [jobList, setJobList] = useState<Array<Job>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <MainLayout>
      <Loading isOpen={isLoading} />
      <Hero setIsLoading={setIsLoading} />
      <div className={styles.content}>
        <Sortings />
        <Results jobList={jobList} />
      </div>
    </MainLayout>
  );
};

export default Home;
