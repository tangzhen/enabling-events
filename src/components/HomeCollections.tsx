import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      color: theme.palette.common.white,
      position: "relative",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: "url('http://localhost:3001/collection-1.jpg')",
    },
    content: {
      padding: theme.spacing(10),
    },
    mask: {
      background:
        "linear-gradient(90.17deg, rgba(0, 125, 129, 0.8) 10.73%, rgba(0, 117, 120, 0) 99.86%)",
    },
    sendButton: {
      marginTop: theme.spacing(4),
      color: theme.palette.primary.main,
      borderRadius: "20px",
    },
  })
);

export default function HomeCollections() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Grid container className={classes.mask}>
        <Grid item xs={12} sm={6}>
          <div className={classes.content}>
            <Typography variant="h3" gutterBottom>
              Enabling Events
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum.
            </Typography>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className={classes.sendButton}
            >
              BROWSE EVENTS
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
