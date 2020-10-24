import React from "react";
import { render } from "../../../test/test-utils";
import HomeEventItem from "../HomeEventItem";

describe("HomeEventItem", () => {
  it("should render component correct", () => {
    const event = {
      id: 1,
      title: "Pancake With Sliced Strawberry",
      bg: "/files/1.jpg",
      summary:
        "A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter.",
      startDate: "2020-10-24T08:52:10+08:00",
      organizer: "Standard Chartered",
      location: "Entrance of National Gallery",
    };
    const { container } = render(<HomeEventItem event={event} />);
    expect(container).toMatchSnapshot();
  });
});
