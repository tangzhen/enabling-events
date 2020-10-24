import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormSectionTitle from "./FormSectionTitle";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment from "moment";
import EnablingEvent from "../model/EnablingEvent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    section: {
      paddingBottom: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(1),
    },
  })
);

interface TicketFormProps {
  event: EnablingEvent;
  onValueChange: (key: string, path: string) => void;
}

export default function TicketForm({ event, onValueChange }: TicketFormProps) {
  const classes = useStyles();
  const [ticketType, setTicketType] = useState<string>("free");
  const [salesStartDate, setSalesStartDate] = useState<MaterialUiPickersDate>(
    moment()
  );
  const [salesEndDate, setSalesEndDate] = useState<MaterialUiPickersDate>(
    moment().add(3, "d")
  );

  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Ticket Info"
          description="Create this page to share more details on your tickets."
        />
        <FormControl component="fieldset" style={{ margin: 20 }}>
          <RadioGroup
            aria-label="ticket-type"
            name="ticket-type"
            value={ticketType}
            style={{ flexDirection: "row" }}
            onChange={(event) => setTicketType(event.target.value)}
          >
            <FormControlLabel value="free" control={<Radio />} label="FREE" />
            <FormControlLabel value="paid" control={<Radio />} label="PAID" />
          </RadioGroup>
        </FormControl>
        <TextField id="ticket-name" label="Name" variant="outlined" fullWidth />
        <TextField
          id="ticket-quantity"
          label="Quantity"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="ticket-price"
          label="Price"
          variant="outlined"
          fullWidth
          disabled={ticketType === "free"}
        />
      </Container>

      <Container maxWidth="md" className={classes.section}>
        <FormSectionTitle
          title="Ticket Sales Info"
          description="This section will allow you to determine start and end of sales for tickets"
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Sales Starts"
              value={salesStartDate}
              onChange={setSalesStartDate}
              onError={console.log}
              disablePast
              format="DD/MM/yyyy HH:mm"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={false}
              label="Sales Ends"
              value={salesEndDate}
              onChange={setSalesEndDate}
              onError={console.log}
              disablePast
              format="DD/MM/yyyy HH:mm"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </form>
  );
}
