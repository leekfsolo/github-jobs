import React, { useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import MainLayout from "../../common/ui/layout/main-layout";
import Hero from "./hero";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import styles from "./Home.module.scss";
import { Job } from "../model";
import { Link } from "react-router-dom";
import JobCard from "./job-card";

const Home = () => {
  const [jobList, setJobList] = useState<Array<Job>>([
    {
      name: "Kasisto",
      image:
        "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
      location: "New York",
      isFullTime: true,
      role: "Front-End Software Engineer",
      time: "5 days ago",
    },
    {
      name: "Kasisto",
      image:
        "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
      location: "New York",
      isFullTime: true,
      role: "Front-End Software Engineer",
      time: "5 days ago",
    },
    {
      name: "Kasisto",
      image:
        "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
      location: "New York",
      isFullTime: true,
      role: "Front-End Software Engineer",
      time: "5 days ago",
    },
    {
      name: "Kasisto",
      image:
        "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
      location: "New York",
      isFullTime: true,
      role: "Front-End Software Engineer",
      time: "5 days ago",
    },
    {
      name: "Kasisto",
      image:
        "https://assets.themuse.com/uploaded/companies/15000043/small_logo.png?v=f7c2c2028042c08d343ed8215aee7a026bdb8338b1079d1aff48dbb9b0478d33",
      location: "New York",
      isFullTime: true,
      role: "Front-End Software Engineer",
      time: "5 days ago",
    },
  ]);
  const locationOptions = ["London", "Amsterdam", "New York", "Berlin"];

  return (
    <MainLayout>
      <Hero />
      <div className={styles.content}>
        <div className={styles.sortings}>
          <FormControlLabel control={<Checkbox />} label="Full Time" />
          <div className={styles.location}>
            <p>Location</p>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="City, state, zip code or country"
              />
              <PublicOutlinedIcon />
            </div>

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={locationOptions[0]}
                name="radio-buttons-group"
              >
                {locationOptions.map((opt, idx) => (
                  <FormControlLabel
                    value={opt}
                    control={<Radio />}
                    label={opt}
                    key={idx}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className={styles.results}>
          <ul>
            {jobList.map((job, idx) => (
              <li>
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
              className={styles.pagination}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
