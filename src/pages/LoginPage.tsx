import Button from "@material-ui/core/Button";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Auth } from "../utils/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    button: {
      marginTop: theme.spacing(4),
    },
  })
);

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const loginAsPwDs = () => {
    Auth.authenticate("pwd", () => {
      history.replace({pathname: "/events"});
    });
  };
  const loginAsAdmin = () => {
    Auth.authenticate("admin", () => {
      history.replace({pathname: "/admin/create-event"});
    });
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={loginAsPwDs}
        className={classes.button}
      >
        Login as PwDs
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={loginAsAdmin}
        className={classes.button}
      >
        Login as Admin
      </Button>
    </div>
  );
}
