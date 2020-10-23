import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import { EnablingEvent } from "../components/HomeEventItem";

interface EventDetailHeaderProps {
  event: EnablingEvent;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
    },
    bg: {
      height: "400px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    organization: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    title: {
      width: "100%",
    },
    followButton: {
      marginLeft: theme.spacing(3),
    },
    description: {
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: theme.palette.grey[50],
    },
    footer: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export default function EventDetailHeader({ event }: EventDetailHeaderProps) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.container}>
        <div>
          <Grid container>
            <Grid item xs={8}>
              <img src={event.bg} alt={event.title} className={classes.bg} />
            </Grid>
            <Grid item xs={4} className={classes.description}>
              <Typography>{event.date}</Typography>
              <div className={classes.organization}>
                <Typography variant="h6" className={classes.title}>
                  {event.title}
                </Typography>
                <Typography>by {event.org}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.followButton}
                >
                  FOLLOW
                </Button>
              </div>
              <Typography>FREE</Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.footer}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
      </Paper>
    </>
  );
}
