import React, { useEffect, useState } from "react";
import HomeCollections from "../components/HomeCollections";
import HomeEventCategory from "../components/HomeEventCategory";
import HomeEventList from "../components/HomeEventList";
import EnablingEvent from "../model/EnablingEvent";
import { HOST } from "../utils/config";
import axios from "axios";

export default function HomePage() {
  const [events, setEvent] = useState<EnablingEvent[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `${HOST}/api/events?_sort=id&_order=desc&_limit=9`
      );

      setEvent(result.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <HomeCollections />
      <HomeEventCategory />
      <HomeEventList events={events} />
    </>
  );
}
