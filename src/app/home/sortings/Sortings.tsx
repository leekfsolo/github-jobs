import React, { FC, FormEvent, useEffect, useRef, useState } from "react";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import styles from "./Sortings.module.scss";
import { INIT_LOCATION_OPTIONS } from "../../../common/utils/constants";

interface Props {
  location: string;
  setLocation: (location: string) => void;
}

const Sortings: FC<Props> = (props: Props) => {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setLocation, location } = props;

  const searchLocationHandler = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (inputRef.current) inputRef.current.value = value;
    setSearchLocation(value);
  };

  const optionLocationHandler = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (inputRef.current) inputRef.current.value = value;
    setLocation(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLocation(searchLocation), 1000);

    return () => clearTimeout(timeout);
  }, [searchLocation, setLocation]);

  return (
    <div className={styles.sortings}>
      <FormControl sx={{ width: "100%" }}>
        <FormControlLabel control={<Checkbox />} label="Full time" />
        <div className={styles.location}>
          <p>Location</p>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="City, state, zip code or country"
              onChange={searchLocationHandler}
              ref={inputRef}
            />
            <PublicOutlinedIcon />
          </div>
        </div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={optionLocationHandler}
          value={location}
        >
          {INIT_LOCATION_OPTIONS.map((opt, idx) => (
            <FormControlLabel
              key={idx}
              value={opt}
              control={<Radio />}
              label={opt}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Sortings;
