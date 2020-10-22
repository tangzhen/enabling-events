import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeEventItem from "./HomeEventItem";

export default function HomeEventList() {
  return (
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
  );
}
