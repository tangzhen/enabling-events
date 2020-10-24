import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import EnablingEvent from "../model/EnablingEvent";
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

interface HomeEventListProps {
  events: EnablingEvent[];
}

export default function HomeEventList({events}: HomeEventListProps) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {events.map((event, idx) => (
          <Grid item xs={4} key={idx}>
            <HomeEventItem event={event} />
          </Grid>
        ))}
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
