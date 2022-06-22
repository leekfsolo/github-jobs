import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  items: Array<string>;
  label: string;
}

const ControlledOpenSelect: React.FC<Props> = (props: Props) => {
  const { items, label } = props;

  const [itemLabel, setItemLabel] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof itemLabel>) => {
    setItemLabel(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", my: 2 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={itemLabel}
          label={label}
          onChange={handleChange}
        >
          {items.map((item, idx) =>
            idx === 0 ? (
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            ) : (
              <MenuItem value={item}>{item}</MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default ControlledOpenSelect;
