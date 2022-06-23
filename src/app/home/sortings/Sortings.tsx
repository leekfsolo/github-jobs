import React, { Dispatch, FC } from "react";

import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ControlledOpenSelect from "../../../common/ui/components/select/ControlledOpenSelect";
import styles from "./Sortings.module.scss";
import { CATEGORIES, LEVEL } from "../../../common/utils/constants";
import { filteredAction } from "../reducer";
import { filteredActionType } from "../../enum";

interface Props {
  setFilteredValues: Dispatch<filteredAction>;
}

const Sortings: FC<Props> = (props: Props) => {
  const { setFilteredValues } = props;

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
        <ControlledOpenSelect
          items={CATEGORIES}
          label={filteredActionType.CATEGORY}
          setFilteredValues={setFilteredValues}
        />
        <ControlledOpenSelect
          items={LEVEL}
          label={filteredActionType.LEVEl}
          setFilteredValues={setFilteredValues}
        />
      </FormControl>
    </div>
  );
};

export default Sortings;
