import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(5),
    },
    title: {
      fontWeight: "bold",
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(9),
    },
  })
);

export default function HomeEventCategory() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="primary" className={classes.title}>
        Popular Events
      </Typography>
      <Tabs
        value={2}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="ALL" />
        <Tab label="FOR YOU" />
        <Tab label="TODAY" />
        <Tab label="THIS WEEKEND" />
        <Tab label="FREE" />
        <Tab label="FOOD & DRINK" />
        <Tab label="ENTERTAINMENT" />
      </Tabs>
    </div>
  );
}
