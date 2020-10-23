import React from "react";
import { render } from "../../../test/test-utils";
import HomeCollections from "../HomeCollections";

describe("HomeCollections", () => {
  it("should render component correct", () => {
    const { container } = render(<HomeCollections />);
    expect(container).toMatchSnapshot();
  });

  it("should render the browser events button in the collections view", () => {
    const { getByText } = render(<HomeCollections />);
    const browseEventsElement = getByText(/BROWSE EVENTS/i);
    expect(browseEventsElement).toBeInTheDocument();
  });
});
