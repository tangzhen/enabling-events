import React from "react";
import { render } from "../../../test/test-utils";
import EventDetailContent from "../EventDetailContent";

describe("EventDetailContent", () => {
  it("should render component correct", () => {
    const event = {
      id: 1,
      title: "Pancake With Sliced Strawberry",
      bg: "/files/1.jpg",
      startDate: "2020-10-24T08:52:10+08:00",
      endDate: "2020-10-24T08:52:10+08:00",
      organizer: "Standard Chartered",
      location: "Entrance of National Gallery",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum.",
    };
    const { container } = render(<EventDetailContent event={event} />);
    expect(container).toMatchSnapshot();
  });
});
