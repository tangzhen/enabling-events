import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import clsx from "clsx";
import moment from "moment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import EnablingEvent from "../model/EnablingEvent";

interface EventDetailContentProps {
  event: EnablingEvent;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      padding: theme.spacing(4),
    },
    about: {
      marginBottom: theme.spacing(4),
    },
    extraInfo: {
      paddingTop: theme.spacing(4),
    },
    bold: {
      fontWeight: "bold",
    },
    sectionPadding: {
      paddingTop: theme.spacing(10),
    },
  })
);

export default function EventDetailContent({ event }: EventDetailContentProps) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={8} className={classes.description}>
        <Typography variant="h6" className={classes.about}>
          About this Event
        </Typography>
        <Typography>{event.summary}</Typography>

        <Typography className={clsx(classes.bold, classes.sectionPadding)}>
          Share with Friends
        </Typography>
        <FacebookIcon color="primary" style={{ fontSize: 30 }} />
        <TwitterIcon color="primary" style={{ fontSize: 30, paddingLeft: 5 }} />
        <EmailIcon color="primary" style={{ fontSize: 30, paddingLeft: 5 }} />
      </Grid>
      <Grid item xs={4} className={classes.extraInfo}>
        <Typography className={classes.bold}>Date and Time</Typography>
        <Typography>
          {moment(event.startDate).format("ddd, MMMM D, YYYY")}
        </Typography>
        <Typography>3.00 PM - 6.00 PM</Typography>
        <Button color="primary">Add to Calendar</Button>

        <Typography className={clsx(classes.bold, classes.sectionPadding)}>
          Location
        </Typography>
        <Typography>{event.location}</Typography>

        <Typography className={clsx(classes.bold, classes.sectionPadding)}>
          Refund Policy
        </Typography>
        <Typography>Contact the organizer to request a refund</Typography>
      </Grid>
    </Grid>
  );
}
