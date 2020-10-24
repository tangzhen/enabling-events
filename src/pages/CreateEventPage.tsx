import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";
import axios from "axios";
import React, { useState } from "react";
import CreateEventForm from "../components/CreateEventForm";
import PublishEventForm from "../components/PublishEventForm";
import TicketForm from "../components/TicketForm";
import { HOST } from "../utils/config";
import EnablingEvent from "../model/EnablingEvent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingTop: theme.spacing(4),
    },
    buttonGroup: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      paddingBottom: "30px",
    },
    button: {
      marginRight: theme.spacing(1),
      width: "150px",
    },
  })
);

function getSteps() {
  return ["Create Event Page", "Tickets", "Publish Event"];
}

const INIT_EVENT = {
  id: "",
  title: "",
  bg: "",
  summary: "",
  startDate: "",
  endDate: "",
  location: "",
  organizer: "",
  publishDate: "",
  privacy: "",
};

export default function CreateEventPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [event, setEvent] = useState<EnablingEvent>(INIT_EVENT);
  const steps = getSteps();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      axios.post(`${HOST}/api/events`, event).then(() => {
        console.log("submit", event);
      });
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleValueChange = (key: string, value: string) => {
    const newEvent = { ...event };
    _.set(newEvent, key, value);
    setEvent(newEvent);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <CreateEventForm event={event} onValueChange={handleValueChange} />
      )}
      {activeStep === 1 && (
        <TicketForm event={event} onValueChange={handleValueChange} />
      )}
      {activeStep === 2 && (
        <PublishEventForm event={event} onValueChange={handleValueChange} />
      )}
      <div className={classes.buttonGroup}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}
