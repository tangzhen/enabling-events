import React from "react";
import { render } from "../../../test/test-utils";
import HomeEventItem from "../HomeEventItem";

describe("HomeEventItem", () => {
  it("should render component correct", () => {
    const event = {
      id: 2,
      title: "Casual Run 2020",
      bg: "/files/2.jpg",
      brief:
        "A casual run organised by Standard Chartered to create awarenes arounfd inclusivity. Join us for specially crafted routes to ensure people of all ages and abilities can enjoy.",
      date: "20190228",
      location: "Entrance of National Gallery",
      description:
        "A casual run organised by Standard Chartered to create awarenes arounfd inclusivity. Join us for specially crafted routes to ensure people of all ages and abilities can enjoy.",
    };
    const { container } = render(<HomeEventItem event={event} />);
    expect(container).toMatchSnapshot();
  });
});
