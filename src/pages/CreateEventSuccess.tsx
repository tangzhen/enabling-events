import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(10),
    },
    item: {
      padding: theme.spacing(3),
    },
  })
);

export default function CreateEventSuccessPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Congratulation!</Typography>
      <Typography className={classes.item}>Create Event success.</Typography>
      <Typography className={classes.item}>You can:</Typography>
      <Button
        variant="outlined"
        color="primary"
        component={RouterLink}
        to="/admin/create-event"
      >
        Create other event
      </Button>
      <Typography className={classes.item}>or</Typography>
      <Button
        variant="outlined"
        color="primary"
        component={RouterLink}
        to="/login"
      >
        Back to login page
      </Button>
    </div>
  );
}
