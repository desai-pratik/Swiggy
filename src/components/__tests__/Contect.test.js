import { render, screen } from "@testing-library/react";
import ContectUs from "../ContectUs";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  // we can write both way (test , it)
  test("should load ContectUs page ", () => {
    render(<ContectUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside ContectUs page ", () => {
    render(<ContectUs />);

    const button = screen.getByText("Send");

    expect(button).toBeInTheDocument();
  });
});
