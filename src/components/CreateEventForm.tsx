import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import FormSectionTitle from "./FormSectionTitle";
import FormSelection from "./FormSelection";
import moment from "moment";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    section: {
      paddingBottom: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(1),
    },
  })
);

export default function CreateEventForm() {
  const classes = useStyles();
  const [organizer, setOrganizer] = useState<number | string>("");
  const [locationType, setLocationType] = useState<string>("venue");
  const [startDate, setStartDate] = useState<MaterialUiPickersDate>(moment());
  const [endDate, setEndDate] = useState<MaterialUiPickersDate>(
    moment().add(3, "h")
  );
  const organizerOptions = [
    {
      label: "A",
      value: 1,
    },
    {
      label: "B",
      value: 2,
    },
    {
      label: "C",
      value: 3,
    },
  ];

  const [type, setType] = useState<number | string>("");
  const typeOptions = [
    {
      label: "A",
      value: 1,
    },
    {
      label: "B",
      value: 2,
    },
    {
      label: "C",
      value: 3,
    },
  ];

  const [category, setCategory] = useState<number | string>("");
  const categoryOptions = [
    {
      label: "A",
      value: 1,
    },
    {
      label: "B",
      value: 2,
    },
    {
      label: "C",
      value: 3,
    },
  ];

  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Event Info"
          description="Name and describe your event. Add necessary details to entice them to your event."
        />
        <TextField
          id="event-title"
          label="Event Title"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="event-summary"
          label="Event Summary"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
        />
        <FormSelection
          label="Organizer"
          options={organizerOptions}
          initValue={organizer}
          onChange={setOrganizer}
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormSelection
              label="Type"
              options={typeOptions}
              initValue={type}
              onChange={setType}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelection
              label="Category"
              options={categoryOptions}
              initValue={category}
              onChange={setCategory}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Location"
          description="Help people plan their trip in advance with more details around your location"
        />
        <FormControl component="fieldset" style={{ margin: 20 }}>
          <RadioGroup
            aria-label="location-type"
            name="location-type"
            value={locationType}
            style={{ flexDirection: "row" }}
            onChange={(event) => setLocationType(event.target.value)}
          >
            <FormControlLabel value="venue" control={<Radio />} label="VENUE" />
            <FormControlLabel
              value="online"
              control={<Radio />}
              label="ONLINE"
            />
          </RadioGroup>
        </FormControl>

        {locationType === "venue" && (
          <TextField
            id="event-location"
            label="Venue Location"
            variant="outlined"
            fullWidth
          />
        )}
      </Container>

      <Divider />

      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Date and Time"
          description="Help people plan their trip in advance with more details around your location"
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Event Starts"
              value={startDate}
              onChange={setStartDate}
              onError={console.log}
              disablePast
              format="DD/MM/yyyy HH:mm"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Event Ends"
              value={endDate}
              onChange={setEndDate}
              onError={console.log}
              disablePast
              format="DD/MM/yyyy HH:mm"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}
