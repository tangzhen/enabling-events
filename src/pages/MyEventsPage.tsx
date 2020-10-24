import React, { useEffect, useState } from "react";
import HomeEventList from "../components/HomeEventList";
import EnablingEvent from "../model/EnablingEvent";
import { HOST } from "../utils/config";
import axios from "axios";

export default function MyEventsPage() {
  const [events, setEvent] = useState<EnablingEvent[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `${HOST}/api/my-events?_sort=id&_order=desc&_limit=9`
      );

      setEvent(result.data);
    }

    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: 16 }}>
      <HomeEventList events={events} />
    </div>
  );
}
