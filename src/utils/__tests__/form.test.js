import {
  getCategoryOptions,
  getOrganizerOptions,
  getTypeOptions,
} from "../form";

describe("Form related module", () => {
  it("should return the organizer options", () => {
    const result = getOrganizerOptions();

    expect(result).toMatchSnapshot();
  });

  it("should return the type options", () => {
    const result = getTypeOptions();

    expect(result).toMatchSnapshot();
  });

  it("should return the category options", () => {
    const result = getCategoryOptions();

    expect(result).toMatchSnapshot();
  });
});
