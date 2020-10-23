import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailHeader from "../components/EventDetailHeader";
import { EnablingEvent } from "../components/HomeEventItem";
import { HOST } from "../utils/config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({})
);

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [event, setEvent] = useState<EnablingEvent>();

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${HOST}/api/events/${id}`);

      setEvent(result.data);
    }

    fetchData();
  }, [id]);

  return <>{event && <EventDetailHeader event={event} />}</>;
}
