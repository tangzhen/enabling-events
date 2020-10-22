import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import HomeEventItem from "./HomeEventItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    more: {
      margin: theme.spacing(4),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    moreButton: {
      width: "300px",
    },
  })
);

export default function HomeEventList() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <HomeEventItem />
        </Grid>
        <Grid item xs={4}>
          <HomeEventItem />
        </Grid>
        <Grid item xs={4}>
          <HomeEventItem />
        </Grid>
      </Grid>
      <div className={classes.more}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.moreButton}
        >
          SEE MORE
        </Button>
      </div>
    </>
  );
}
