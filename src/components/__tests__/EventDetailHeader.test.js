import React from "react";
import { render } from "../../../test/test-utils";
import EventDetailHeader from "../EventDetailHeader";

describe("HomeEventCategory", () => {
  it("should render component correct", () => {
    const event = {
      id: 1,
      title: "Pancake With Sliced Strawberry",
      bg: "/files/1.jpg",
      brief:
        "A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter.",
      date: "20190228",
      org: "Standard Chartered",
      location: "Entrance of National Gallery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum.",
    };
    const { container } = render(<EventDetailHeader event={event} />);
    expect(container).toMatchSnapshot();
  });
});
