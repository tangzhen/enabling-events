import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment from "moment";
import React, { useState } from "react";
import FormSectionTitle from "./FormSectionTitle";
import { EnablingEvent } from "./HomeEventItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      paddingBottom: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(1),
    },
    bg: {
      height: "400px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  })
);

interface PublishEventFromProps {
  event: EnablingEvent;
}

export default function PublishEventForm({ event }: PublishEventFromProps) {
  const classes = useStyles();
  const [privacySetting, setPrivacySetting] = useState<string>("public");
  const [publishStartDate, setPublishStartDate] = useState<
    MaterialUiPickersDate
  >(moment());

  return (
    <form noValidate autoComplete="off">
      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Publish Event"
          description="View your page before publishing it."
        />
        <Grid container>
          <Grid item xs={8}>
            <img src={event.bg} alt={event.title} className={classes.bg} />
          </Grid>
          <Grid item xs={4}>
            <Typography>{event.date}</Typography>
            <div>
              <Typography variant="h6">
                {event.title}
              </Typography>
              <Typography>by {event.org}</Typography>
            </div>
            <Button color="primary">PREVIEW</Button>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Privacy Settings"
          description="Determine your privacy settings."
        />
        <FormControl component="fieldset" style={{ margin: 20 }}>
          <RadioGroup
            aria-label="privacy-setting"
            name="privacy-setting"
            value={privacySetting}
            style={{ flexDirection: "row" }}
            onChange={(event) => setPrivacySetting(event.target.value)}
          >
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="PUBLIC"
            />
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="PRIVATE"
            />
          </RadioGroup>
        </FormControl>
      </Container>

      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Publish Options"
          description="Decide when to publish your event."
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Publish Starts"
              value={publishStartDate}
              onChange={setPublishStartDate}
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
