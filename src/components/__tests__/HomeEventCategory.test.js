import React from "react";
import { render } from "../../../test/test-utils";
import HomeEventCategory from "../HomeEventCategory";

describe("HomeEventCategory", () => {
  it("should render component correct", () => {
    const { container } = render(<HomeEventCategory />);
    expect(container).toMatchSnapshot();
  });
});
