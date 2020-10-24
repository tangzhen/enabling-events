import useCreateEventForm from "../useCreateEventFrom";
import { renderHook } from "@testing-library/react-hooks";

describe("useCreateEventFrom", () => {
  it("should return the form options for UI usage", () => {
    const { result } = renderHook(() => useCreateEventForm());

    expect(result.current.formOptions).toHaveProperty("organizer");
    expect(result.current.formOptions).toHaveProperty("type");
    expect(result.current.formOptions).toHaveProperty("category");
  });
});
