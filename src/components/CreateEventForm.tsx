import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import FormSectionTitle from "./FormSectionTitle";
import FormSelection from "./FormSelection";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { EnablingEvent } from "./HomeEventItem";
import useCreateEventForm from "./hooks/useCreateEventFrom";

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

interface CreateEventFormProps {
  event: EnablingEvent;
  onValueChange: (key: string, path: string) => void;
}

export default function CreateEventForm({
  event,
  onValueChange,
}: CreateEventFormProps) {
  const classes = useStyles();

  const {
    organizer,
    type,
    category,
    locationType,
    startDate,
    endDate,
    formOptions,
    setOrganizer,
    setCategory,
    setLocationType,
    setType,
    setStartDate,
    setEndDate,
  } = useCreateEventForm();

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
          value={event.title}
          onChange={(event) => onValueChange("title", event.target.value)}
        />
        <TextField
          id="event-summary"
          label="Event Summary"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={event.brief}
          onChange={(event) => onValueChange("brief", event.target.value)}
        />
        <FormSelection
          label="Organizer"
          options={formOptions.organizer}
          initValue={organizer}
          onChange={setOrganizer}
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormSelection
              label="Type"
              options={formOptions.type}
              initValue={type}
              onChange={setType}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelection
              label="Category"
              options={formOptions.category}
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
            value={event.location}
            onChange={(event) => onValueChange("location", event.target.value)}
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
