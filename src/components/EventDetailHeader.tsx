import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import EnablingEvent from "../model/EnablingEvent";
import { HOST } from "../utils/config";

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
    ticket: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    buyButton: {
      width: "300px",
      marginLeft: theme.spacing(3),
    },
  })
);

export default function EventDetailHeader({ event }: EventDetailHeaderProps) {
  const classes = useStyles();
  const [showMessage, setShowMessage] = useState(false);

  const buyTicket = () => {
    const { id, ...eventData } = event;
    axios.post(`${HOST}/my-events`, eventData).then(() => {
      setShowMessage(true);
    });
  };

  return (
    <>
      <Paper className={classes.container}>
        <div>
          <Grid container>
            <Grid item xs={8}>
              <img src={event.bg} alt={event.title} className={classes.bg} />
            </Grid>
            <Grid item xs={4} className={classes.description}>
              <Typography>
                {moment(event.startDate).format("D MMM yyyy")}
              </Typography>
              <div className={classes.organization}>
                <Typography variant="h6" className={classes.title}>
                  {event.title}
                </Typography>
                <Typography>by {event.organizer}</Typography>
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

        <Grid container className={classes.footer}>
          <Grid item xs={6}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} className={classes.ticket}>
            <Typography>54 SLOTS LEFT</Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.buyButton}
              onClick={buyTicket}
            >
              BUY TICKET
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showMessage}
        onClose={() => setShowMessage(false)}
        message="Buy ticket success, view them in my events page."
        key={"buy-ticket"}
      />
    </>
  );
}
