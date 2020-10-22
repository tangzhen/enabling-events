import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  let { id } = useParams<{ id: string }>();

  return <div>EventDetailPage {id}</div>;
}
