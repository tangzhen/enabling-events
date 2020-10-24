import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EnablingEvent from "../model/EnablingEvent";
import { HOST } from "../utils/config";
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
  const [events, setEvent] = useState<EnablingEvent[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${HOST}/api/events`);

      setEvent(result.data);
    }

    fetchData();
  }, []);

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
