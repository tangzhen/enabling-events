import React from "react";
import HomeCollections from "../components/HomeCollections";
import HomeEventCategory from "../components/HomeEventCategory";
import HomeEventList from "../components/HomeEventList";

export default function HomePage() {
  return (
    <>
      <HomeCollections />
      <HomeEventCategory />
      <HomeEventList />
    </>
  );
}
