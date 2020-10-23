import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

interface FormSelectionOption {
  label: string;
  value: string | number;
}
interface FormSelectionProps {
  label: string;
  initValue: string | number;
  options: FormSelectionOption[];
  onChange?: (value: string | number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
  })
);

export default function FormSelection({
  label,
  initValue,
  options,
  onChange,
}: FormSelectionProps) {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" fullWidth className={classes.root}>
      <InputLabel id="organizer-select-label">{label}</InputLabel>
      <Select
        labelId="organizer-select-label"
        id="organizer-select-label"
        value={initValue}
        onChange={(event) => {
          onChange && onChange(event.target.value as number);
        }}
        label="Organizer"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, idx) => {
          return (
            <MenuItem value={option.value} key={idx}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
