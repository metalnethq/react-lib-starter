import { render, screen } from "@testing-library/react";
import { Test } from "../src/lib/component";

describe("Button Component", () => {
  test("renders button", () => {
    render(<Test>Test</Test>);
    const button = screen.getByText(/Test/i);
    expect(button).toBeInTheDocument();
  });
});
