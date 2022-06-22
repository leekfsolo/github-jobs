import React, { FC } from "react";

import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ControlledOpenSelect from "../../../common/ui/components/select/ControlledOpenSelect";
import styles from "./Sortings.module.scss";
import { CATEGORIES, LEVEL } from "../../../common/utils/constants";

interface Props {}

const Sortings: FC<Props> = (props: Props) => {
  return (
    <div className={styles.sortings}>
      <FormControl sx={{ width: "100%" }}>
        <FormControlLabel control={<Checkbox />} label="Full time" />
        <div className={styles.location}>
          <p>Location</p>
          <div className={styles.field}>
            <input type="text" placeholder="City, state, zip code or country" />
            <PublicOutlinedIcon />
          </div>
        </div>
        <ControlledOpenSelect items={CATEGORIES} label="Category" />
        <ControlledOpenSelect items={LEVEL} label="Level" />
      </FormControl>
    </div>
  );
};

export default Sortings;
