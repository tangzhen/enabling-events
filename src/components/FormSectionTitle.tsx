import Typography from "@material-ui/core/Typography";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface FormSectionTitleProps {
  title: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
  })
);

export default function FormSectionTitle({
  title,
  description,
}: FormSectionTitleProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </div>
  );
}
