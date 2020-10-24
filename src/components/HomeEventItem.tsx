import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ButtonBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import EnablingEvent from "../model/EnablingEvent";

interface HomeEventItemProp {
  event: EnablingEvent;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: "bold",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      marginLeft: "auto",
    },
    cardAction: {
      display: "block",
      textAlign: "initial",
    },
  })
);

export default function HomeEventItem({ event }: HomeEventItemProp) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" className={classes.title}>
            {event.title}
          </Typography>
        }
        subheader={event.startDate}
      />
      <ButtonBase
        component={Link}
        to={`/events/${event.id}`}
        className={classes.cardAction}
      >
        <CardMedia
          className={classes.media}
          image={event.bg}
          title={event.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.summary}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton className={classes.expand} aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
