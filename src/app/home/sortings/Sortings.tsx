import React, { FC } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import styles from "./Sortings.module.scss";

interface Props {}

const Sortings: FC<Props> = (props: Props) => {
  const locationOptions = ["London", "Amsterdam", "New York", "Berlin"];

  return (
    <div className={styles.sortings}>
      <FormControlLabel control={<Checkbox />} label="Full Time" />
      <div className={styles.location}>
        <p>Location</p>
        <div className={styles.field}>
          <input type="text" placeholder="City, state, zip code or country" />
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
  );
};

export default Sortings;
